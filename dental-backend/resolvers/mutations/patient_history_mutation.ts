import { PatientHistoryModel } from '../../models/schemas/'

export const patient_history_mutation = {
    async addPatientHistory(_: any, params: any) {
        const service = new PatientHistoryModel(params)

        try {
            await service.save();
            return service;
        } catch (error) {
            return error;
        }
    },

    async deletePatientHistory(_: any, params: any) {
        PatientHistoryModel.findByIdAndDelete({ _id: params._id })
            .then(() => {
                console.log("patient history deleted");
            })
            .catch((error:any) => {
                console.log(error);
            });
    },

    async updatePatientHistory(_: any, { _id, ...params }: any) {
        PatientHistoryModel.findByIdAndUpdate(_id, params)
            .then(() => {
                console.log('patient history updated')
            })
            .catch((error:any) => {
                console.log(error);
            });
    },
}