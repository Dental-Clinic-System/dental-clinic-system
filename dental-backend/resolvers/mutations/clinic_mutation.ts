import { ClinicModel } from '../../models/schemas/'

export const clinic_mutation = {
    async addClinic(_: any, params: any) {
        const clinic = new ClinicModel(params)

        try {
            await clinic.save();
            return clinic;
        } catch (error) {
            return error;
        }
    },

    async deleteClinic(_: any, params: any) {
        ClinicModel.findByIdAndDelete({ _id: params._id })
            .then(() => {
                console.log("clinic deleted");
            })
            .catch((error:any) => {
                console.log(error);
            });
    },

    async updateClinic(_: any, { _id, ...params }: any) {
        ClinicModel.findByIdAndUpdate(_id, params)
            .then(() => {
                console.log('clinic updated')
            })
            .catch((error:any) => {
                console.log(error);
            });
    },
}