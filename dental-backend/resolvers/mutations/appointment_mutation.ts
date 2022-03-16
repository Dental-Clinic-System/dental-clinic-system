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
        AppointmentModel.findByIdAndDelete({ _id: params._appointmentId })
            .then(() => {
                console.log("appointment deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updateAppointment(_: any, { _appointmentId, ...params }: any) {
        AppointmentModel.findByIdAndUpdate(_appointmentId, params)
            .then(() => {
                console.log('appointment updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },
}