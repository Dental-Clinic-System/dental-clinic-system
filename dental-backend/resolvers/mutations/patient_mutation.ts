import { PatientModel } from '../../models/schemas/'

export const patient_mutation = {
    async addPatient(_: any, params: any) {
        const patient = new PatientModel(params)

        try {
            await patient.save();
            return patient;
        } catch (error) {
            return error;
        }
    },

    async deletePatient(_: any, params: any) {
        PatientModel.findByIdAndDelete({ _id: params._id })
            .then(() => {
                console.log("patient deleted");
            })
            .catch((error:any) => {
                console.log(error);
            });
    },

    async updatePatient(_: any, { _id, ...params }: any) {
        PatientModel.findByIdAndUpdate(_id, params)
            .then(() => {
                console.log('patient updated')
            })
            .catch((error:any) => {
                console.log(error);
            });
    },
}