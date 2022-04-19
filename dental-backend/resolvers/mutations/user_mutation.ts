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

    async login(_: any, { email, password }: any) {
        const user = await UserModel.findOne({ email })

        if(user.password == password) {
            return user;
        } return null
    },

    async deleteUser(_: any, params: any) {
        UserModel.findByIdAndDelete({ _id: params._id })
            .then(() => {
                console.log("user deleted");
            })
            .catch((error:any) => {
                console.log(error);
            });
    },

    async updateUser(_: any, { _id, ...params }: any) {
        UserModel.findByIdAndUpdate(_id, params)
            .then(() => {
                console.log('user updated')
            })
            .catch((error:any) => {
                console.log(error);
            });
    },
}