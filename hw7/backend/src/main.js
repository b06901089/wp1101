import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/index.js';

require('dotenv').config({path:'/Users/tasiyuchien/Downloads/web programming/wp1101/hw7/backend' + '/.env'});

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use('/api/', router);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

console.log(process.env.MONGO_URL);

mongoose
    .connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => console.log("mongo db connection created"));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));