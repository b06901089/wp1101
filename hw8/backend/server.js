import { WebSocketServer } from 'ws'
// import WebSocket from 'ws';
import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import Message from './models/message.js';
import dotenv from 'dotenv-defaults';
import { sendData, sendStatus, initData } from './wssConnect.js';

dotenv.config({path:'/Users/tasiyuchien/Downloads/web programming/wp1101/hw8/backend' + '/.env'});
mongoose
    .connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((res) => console.log("mongo db connection created"));

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const db = mongoose.connection

const broadcastMessage = (data, status) => {
    wss.clients.forEach((client) => {
        sendData(data, client);
        sendStatus(status, client);
    })
}

db.once('open', () => {
    wss.on('connection', (ws) => {
        console.log('Client connected');
        console.log(`Currently ${wss.clients.size} client(s) connecting`);
        initData(ws);
        ws.onmessage = async (byteString) => {
            const { data } = byteString
            const [task, payload] = JSON.parse(data)
            // or
            // const [task, payload] = JSON.parse(byteString.data)
            switch(task) {
                case 'input': {
                    const { name, body } = payload
                    const message = new Message({ name, body })
                    try { 
                        await message.save();
                    } catch (e) {
                        throw new Error ("Message DB save error: " + e);
                    }
                    broadcastMessage(
                        ['output', [payload]], 
                        { type: 'success', msg: 'Message sent. '}
                    )
                    break;
                }
                case 'clear': {
                    Message.deleteMany({}, () => {
                        sendData(['clear'], ws)
                        sendStatus({
                            type: 'info',
                            msg: 'Message cache cleared.'
                        }, ws)
                    })
                    break;
                }
                default: break;
            }
        }
    })
    const port = process.env.PORT || 5000;
    server.listen(port, () => {
        console.log(`Server is up on port ${port}`)
    })
})
