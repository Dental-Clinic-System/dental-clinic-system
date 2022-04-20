import { PatientModel } from "./schemas";

export const queries = {
    getPatients: async (_: any, params: any) => await PatientModel.find(params),
}