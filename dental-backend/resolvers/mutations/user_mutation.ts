import { UserModel } from '../../models/schemas/'

export const user_mutation = {
    async addUser(_: any, params: any) {
        const user = new UserModel(params)

        try {
            await user.save();
            return user;
        } catch (error) {
            return error;
        }
    },

    async deleteUser(_: any, params: any) {
        UserModel.findByIdAndDelete({ _id: params._userId })
            .then(() => {
                console.log("user deleted");
            })
            .catch((error:any) => {
                console.log(error);
            });
    },

    async updateUser(_: any, { _userId, ...params }: any) {
        UserModel.findByIdAndUpdate(_userId, params)
            .then(() => {
                console.log('user updated')
            })
            .catch((error:any) => {
                console.log(error);
            });
    },
}