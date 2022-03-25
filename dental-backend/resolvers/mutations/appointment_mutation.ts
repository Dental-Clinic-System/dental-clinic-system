import { AppointmentModel } from '../../models/schemas/'

export const appointment_mutation = {
    async addAppointment(_: any, params: any) {
        const service = new AppointmentModel(params)

        try {
            await service.save();
            return service;
        } catch (error) {
            return error;
        }
    },

    async deleteAppointment(_: any, params: any) {
        AppointmentModel.findByIdAndDelete({ _id: params._id })
            .then(() => {
                console.log("appointment deleted");
            })
            .catch((error:any) => {
                console.log(error);
            });
    },

    async updateAppointment(_: any, { _Id, ...params }: any) {
        AppointmentModel.findByIdAndUpdate(_Id, params)
            .then(() => {
                console.log('appointment updated')
            })
            .catch((error:any) => {
                console.log(error);
            });
    },
}