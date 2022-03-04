import { UserModel } from '../models'

const mutations = {
    async addHospital(_: any, params: any) {
        const user = new UserModel(params)

        try {
            await user.save();
            return user;
        } catch (error) {
            return error;
        }
    },

    async deleteHospital(_: any, params: any) {
        UserModel.deleteOne({ _id: params.hospitalId })
        .then(() => {
            console.log("Hospital deleted");
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export default mutations;