import { ClinicModel, UserModel, PatientModel, ServiceModel, AppointmentModel, PatientHistoryModel, PermissionModel, RoleModel } from '../models/schemas'

const queries = {
    getUsers: async (_: any, params: any) => await UserModel.find(params),
    getClinics: async (_: any, params: any) => await ClinicModel.find(params),
    getPatients: async (_: any, params: any) => await PatientModel.find(params),
    getServices: async (_: any, params: any) => await ServiceModel.find(params),
    getAppointments: async (_: any, params: any) => await AppointmentModel.find(params),
    getPatientHistories: async (_: any, params: any) => await PatientHistoryModel.find(params),
    getPermissions: async (_: any, params: any) => await PermissionModel.find(params),
    getRoles: async (_: any, params: any) => await RoleModel.find(params),
}

export default queries;