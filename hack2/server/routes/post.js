import express from 'express'
import Post from '../models/post'
import moment from 'moment'
import bodyParser from 'body-parser';

const router = express.Router()

// TODO 2-(1): create the 1st API (/api/allPosts)

router.get('/allPosts', (req, res) => {
    console.log('handling get ...');
    Post.find().sort({ timestamp: 1 }).exec((err, result) => {
        if (err) {
            console.log('find error');
            throw err;
        }
        else if (!result.length) {
            console.log('find 0');
            res.status(403).send({
                "message": "error",
                "data": null
            })
        }
        else {
            console.log('find success');
            res.status(200).send({
                "message": "success",
                "data": result
            })
        }
    });
})

// TODO 3-(1): create the 2nd API (/api/postDetail)

router.get('/postDetail', async (req, res) => {
    const pid = req.query.pid;
    try {
        var result = await Post.find({ postId: pid });
    } catch (e) { throw new Error("Database query posts failed"); }

    if (!result.length) {
        res.status(403).send({
            "message": "error",
            "post": null
        })
    }
    else {
        res.status(200).send({
            "message": "success",
            "post": result
        })
    }
})

// TODO 4-(1): create the 3rd API (/api/newPost)

const jsonParser = bodyParser.json();

router.post('/newPost', jsonParser, async (req, res) => {
    const postId = req.body.postId;
    const title = req.body.title;
    const content = req.body.content;
    const timestamp = req.body.timestamp;

    try {
        var new_instance = new Post({postId: postId, title: title, content: content, timestamp: timestamp});
        // console.log('create new instance', new_instance);
        await new_instance.save();
        // console.log("add new instance success");
        res.status(200).send({
            "message": "success",
        })
    } catch (e) {
        res.status(403).send({
            "message": "error",
            "post": null
        })
        throw new Error("Database adding failed"); 
    }
})

// TODO 5-(1): create the 4th API (/api/post)

router.delete('/post', async (req, res) => {
    const pid = req.query.pid;
    try {
        await Post.deleteOne({ postId: pid });
        res.status(200).send({
            "message": "success",
        })
    } catch (e) { 
        res.status(403).send({
            "message": "error",
            "post": null
        })
        throw new Error("Database delete posts failed"); 
    }
})

export default router