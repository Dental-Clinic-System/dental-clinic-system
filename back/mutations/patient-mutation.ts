import { PatientModel } from '../schemas'

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
        PatientModel.findByIdAndDelete({ _id: params._id }, (err: any, model: any) => {
            if (err) {
                console.log(err)
                return err
            } else {
                console.log(model)
                return model
            }
        })
    },

    async updatePatient(_: any, { _id, ...params }: any) {
        PatientModel.findByIdAndUpdate(_id, params, (err: any, model: any) => {
            if (err) {
                console.log(err)
                return err
            } else {
                console.log(model)
                return model
            }
        })
    },
}