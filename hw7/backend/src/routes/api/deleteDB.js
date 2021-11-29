import UserModel from '../../models/Scorecard.js';

const deleteDB = async () => {
    try {
      await UserModel.deleteMany({});
      console.log("Database deleted");
    } catch (e) { throw new Error("Database deletion failed"); }
};

export default deleteDB