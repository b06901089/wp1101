import { useState } from "react";

const client = new WebSocket('ws://localhost:5000');

const sendData = (data) => {
    client.send(JSON.stringify(data));
};

client.onopen = () => {
    console.log('open connection');
}

client.onclose = () => {
    console.log('close connection');
}

const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [status, setStatus] = useState({});
    const sendMessage = (playload) => { 
        sendData(["input", playload]);
        console.log(playload); 
    }
    const clearMessages = () => {
        sendData(["clear"]);
    } 
    client.onmessage = (byteString) => {
        const { data } = byteString;
        const [task, payload] = JSON.parse(data);
        switch(task) {
            case 'output': {
                setMessages(() => [...messages, ...payload]); //why set to arrow function ???
                break;
            }
            case 'status': {
                setStatus(payload);
                break;
            }
            case 'init': {
                setMessages(() => payload);
                break;
            }
            case 'clear': {
                setMessages([]);
                break;
            }
            default: break;
        }
    }
    return {
        status,
        messages,
        sendMessage,
        clearMessages
    }; 
};

export default useChat;