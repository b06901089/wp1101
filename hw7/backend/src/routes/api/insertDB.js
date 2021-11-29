import UserModel from '../../models/Scorecard.js';

const insertDB = async (name, subject, score) => {
    try {
        const existing = await UserModel.find({name: name, subject: subject});
        if (existing.length) {
            try {
                await UserModel.updateOne({name: name, subject: subject}, {$set: {score: score}});
                console.log("update success");
                return 1;
            } catch (e) { throw new Error("Database updating failed"); }
        } else {
            try {
                var new_instance = new UserModel({name: name, subject: subject, score: score});
                console.log('create new instance', new_instance);
                await new_instance.save();
                console.log("add new instance success");
                return 0;
            } catch (e) { throw new Error("Database adding failed"); }
        }
    } catch (e) { throw new Error("Database insertion failed"); }
}

export default insertDB