import UserModel from "../../models/Scorecard";

const queryDB = async (type, queryString) => {
    try {
        if(type === 'name') {
            var result = await UserModel.find({name: queryString});
            return result;
        } else {
            var result = await UserModel.find({subject: queryString});
            return result;
        }
    } catch (e) { throw new Error("Database query failed"); }
}

export default queryDB