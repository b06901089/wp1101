import express from 'express';
import deleteDB from './api/deleteDB.js';
import insertDB from './api/insertDB.js';
import queryDB from './api/queryDB.js';
import bodyParser from 'body-parser';

const router = express.Router();

const jsonParser = bodyParser.json();

const roughScale = (x, base) => {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed * 1;
}

router.delete('/clear-db', async (req, res) => {
    await deleteDB();
    res.send({ message: 'Database cleared'});
})

router.post('/create-card', jsonParser, async (req, res) => {
    const name = req.body.name;
    const subject = req.body.subject;
    const score = req.body.score;

    var existing = await insertDB(name, subject, score);
    if (existing) res.send({ message: `Updating (${name}, ${subject}, ${score})`, card: 'Updating' });
    else res.send({ message: `Adding (${name}, ${subject}, ${score})`, card: 'Adding' });
})

router.get('/query-cards', async (req, res) => {
    const queryType = req.query.type;
    const queryString = req.query.queryString;
    const messages = [];
    var result = await queryDB(queryType, queryString);
    if (!result.length) res.send({ messages: null, message: `${queryType} (${queryString}) not found!`})
    else {
        for(let i=0; i<result.length; i++) {
            messages.push(`(${result[i].name}, ${result[i].subject}, ${result[i].score})`);
        }
        res.send({ messages: messages, message: `${result.length} instance found`});
    }
})

export default router;