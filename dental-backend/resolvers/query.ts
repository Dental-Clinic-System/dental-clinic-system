import { ClinicModel, UserModel, PatientModel, ServiceModel, AppointmentModel, PatientHistoryModel, PermissionModel, RoleModel, ProviceModel, DistrictModel, CommitteeModel } from '../models/schemas'

const queries = {
    getUsers: async (_: any, params: any) => await UserModel.find(params),
    getClinics: async (_: any, params: any) => await ClinicModel.find(params),
    getPatients: async (_: any, params: any) => await PatientModel.find(params),
    getServices: async (_: any, params: any) => await ServiceModel.find(params),
    getAppointments: async (_: any, params: any) => await AppointmentModel.find(params),
    getPatientHistories: async (_: any, params: any) => await PatientHistoryModel.find(params),
    getPermissions: async (_: any, params: any) => await PermissionModel.find(params),
    getRoles: async (_: any, params: any) => await RoleModel.find(params),
    getProvinces: async (_: any, params: any) => await ProviceModel.find(params),
    getDistricts: async (_: any, params: any) => await DistrictModel.find(params),
    getCommittees: async (_: any, params: any) => await CommitteeModel.find(params),
}

export default queries;