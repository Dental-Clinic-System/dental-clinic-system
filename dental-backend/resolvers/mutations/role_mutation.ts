import { RoleModel } from '../../models/schemas/'

export const role_mutation = {
    async addRole(_: any, params: any) {
        const clinic = new RoleModel(params)

        try {
            await clinic.save();
            return clinic;
        } catch (error) {
            return error;
        }
    },

    async deleteRole(_: any, params: any) {
        RoleModel.findByIdAndDelete({ _id: params._id })
            .then(() => {
                console.log("role deleted");
            })
            .catch((error:any) => {
                console.log(error);
            });
    },

    async updateRole(_: any, { _id, ...params }: any) {
        RoleModel.findByIdAndUpdate(_id, params)
            .then(() => {
                console.log('role updated')
            })
            .catch((error:any) => {
                console.log(error);
            });
    }
}