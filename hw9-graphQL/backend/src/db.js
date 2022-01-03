import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChatBoxSchema = new Schema({
    name: { type: String, required: true },
    messages: [{ type: mongoose.Types.ObjectId, ref: "Message" }],
});

const MessageSchema = new Schema({
    sender: { type: mongoose.Types.ObjectId, ref: "User" },
    body: { type: String, required: true },
});

const UserSchema = new Schema({
    name: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);
const ChatBoxModel = mongoose.model("ChatBox", ChatBoxSchema);
const MessageModel = mongoose.model("Message", MessageSchema);

export { UserModel, ChatBoxModel, MessageModel };

// const users = [
//     {
//         id: '1',
//         name: 'Andrew',
//         email: 'andrew@example.com',
//         age: 27,
//     },
//     {
//         id: '2',
//         name: 'Sarah',
//         email: 'sarah@example.com',
//     },
//     {
//         id: '3',
//         name: 'Mike',
//         email: 'mike@example.com',
//     },
// ];

// const posts = [
//     {
//         id: '10',
//         title: 'GraphQL 101',
//         body: 'This is how to use GraphQL...',
//         published: true,
//         author: '1',
//     },
//     {
//         id: '11',
//         title: 'GraphQL 201',
//         body: 'This is an advanced GraphQL post...',
//         published: false,
//         author: '1',
//     },
//     {
//         id: '12',
//         title: 'Programming Music',
//         body: '',
//         published: true,
//         author: '2',
//     },
// ];

// const comments = [
//     {
//         id: '102',
//         text: 'This worked well for me. Thanks!',
//         author: '3',
//         post: '10',
//     },
//     {
//         id: '103',
//         text: 'Glad you enjoyed it.',
//         author: '1',
//         post: '10',
//     },
//     {
//         id: '104',
//         text: 'This did no work.',
//         author: '2',
//         post: '11',
//     },
//     {
//         id: '105',
//         text: 'Nevermind. I got it to work.',
//         author: '1',
//         post: '12',
//     },
// ];

// const db = {
//     users,
//     posts,
//     comments,
// };

// export { db as default };
