import { PatientModel, AppointmentModel } from "./schemas";

export const queries = {
    getPatients: async (_: any, params: any) => await PatientModel.find(params),
    getAppointment: async (_: any, params: any) => await AppointmentModel.find(params)
}