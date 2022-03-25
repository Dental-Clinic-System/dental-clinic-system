import { PermissionModel } from '../../models/schemas/'

export const permission_mutation = {
    async addPermission(_: any, params: any) {
        const clinic = new PermissionModel(params)

        try {
            await clinic.save();
            return clinic;
        } catch (error) {
            return error;
        }
    },

    async deletePermission(_: any, params: any) {
        PermissionModel.findByIdAndDelete({ _id: params._permissionId })
            .then(() => {
                console.log("permission deleted");
            })
            .catch((error :any) => {
                console.log(error);
            });
    },

    async updatePermission(_: any, { _permissionId, ...params }: any) {
        PermissionModel.findByIdAndUpdate(_permissionId, params)
            .then(() => {
                console.log('permission updated')
            })
            .catch((error:any) => {
                console.log(error);
            });
    },
}