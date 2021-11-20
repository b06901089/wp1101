import express from 'express';
import {getNumber, genNumber} from '../core/getNumber.js';

const router = express.Router();

function roughScale(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 0; }
    return parsed;
}

router.post('/start', (_, res) => {
    genNumber();
    console.log(getNumber());
    res.json({ msg: 'The game has started.' });
})

router.get('/guess', (req, res) => {
    const number = getNumber();
    const guessed = roughScale(req.query.number, 10);
    // check if NOT a num or not in range [1,100]
    if (!guessed || guessed < 1 || guessed > 100) {
        res.status(406).send({ msg: 'Not a legal number.' });
    } else if (number === guessed) {
        res.json({ msg: 'Equal' });
    } else if (number > guessed) {
        res.json({ msg: 'Too small' });
    } else if (number < guessed) {
        res.json({ msg: 'Too Big' });
    }
})

router.post('/restart', (_, res) => { 
    genNumber();
    console.log(getNumber());
    res.json({ msg: 'The game has restarted.' });
})

export default router