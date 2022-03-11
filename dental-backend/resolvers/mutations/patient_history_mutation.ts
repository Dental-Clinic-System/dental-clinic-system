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
        PatientHistoryModel.findByIdAndDelete({ _id: params._patientHistoryId })
            .then(() => {
                console.log("patient history deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updatePatientHistory(_: any, { _patientHistoryId, ...params }: any) {
        PatientHistoryModel.findByIdAndUpdate(_patientHistoryId, params)
            .then(() => {
                console.log('patient history updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },
}