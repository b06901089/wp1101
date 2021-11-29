import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserModelSchema = new Schema({
    name: String,
    subject: String,
    score: Number
});

const UserModel = mongoose.model('UserModel', UserModelSchema);

export default UserModel;