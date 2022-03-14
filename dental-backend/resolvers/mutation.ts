import { ClinicModel, UserModel, PatientModel, ServiceModel, AppointmentModel, PatientHistoryModel, PermissionModel, RoleModel } from '../models/schemas/index'

const mutations = {
    async addRole(_: any, params: any) {
        const clinic = new RoleModel(params)

        try {
            await clinic.save();
            return clinic;
        } catch (error) {
            return error;
        }
    },

    async deleteRole(_: any, params: any) {
        RoleModel.findByIdAndDelete({ _id: params._roleId })
            .then(() => {
                console.log("role deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updateRole(_: any, { _roleId, ...params }: any) {
        RoleModel.findByIdAndUpdate(_roleId, params)
            .then(() => {
                console.log('role updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async addPermission(_: any, params: any) {
        const clinic = new PermissionModel(params)

        try {
            await clinic.save();
            return clinic;
        } catch (error) {
            return error;
        }
    },

    async deletePermission(_: any, params: any) {
        PermissionModel.findByIdAndDelete({ _id: params._permissionId })
            .then(() => {
                console.log("permission deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updatePermission(_: any, { _permissionId, ...params }: any) {
        PermissionModel.findByIdAndUpdate(_permissionId, params)
            .then(() => {
                console.log('permission updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async addClinic(_: any, params: any) {
        const clinic = new ClinicModel(params)

        try {
            await clinic.save();
            return clinic;
        } catch (error) {
            return error;
        }
    },

    async deleteClinic(_: any, params: any) {
        ClinicModel.findByIdAndDelete({ _id: params._clinicId })
            .then(() => {
                console.log("clinic deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updateClinic(_: any, { _clinicId, ...params }: any) {
        ClinicModel.findByIdAndUpdate(_clinicId, params)
            .then(() => {
                console.log('clinic updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async addUser(_: any, params: any) {
        const user = new UserModel(params)

        try {
            await user.save();
            return user;
        } catch (error) {
            return error;
        }
    },

    async deleteUser(_: any, params: any) {
        UserModel.findByIdAndDelete({ _id: params._userId })
            .then(() => {
                console.log("user deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updateUser(_: any, { _userId, ...params }: any) {
        UserModel.findByIdAndUpdate(_userId, params)
            .then(() => {
                console.log('user updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },

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
        PatientModel.findByIdAndDelete({ _id: params._patientId })
            .then(() => {
                console.log("patient deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updatePatient(_: any, { _patientId, ...params }: any) {
        PatientModel.findByIdAndUpdate(_patientId, params)
            .then(() => {
                console.log('patient updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async addService(_: any, params: any) {
        const service = new ServiceModel(params)

        try {
            await service.save();
            return service;
        } catch (error) {
            return error;
        }
    },

    async deleteService(_: any, params: any) {
        ServiceModel.findByIdAndDelete({ _id: params._serviceId })
            .then(() => {
                console.log("service deleted");
            })
            .catch((error) => {
                console.log(error);
            });
    },

    async updateService(_: any, { _serviceId, ...params }: any) {
        ServiceModel.findByIdAndUpdate(_serviceId, params)
            .then(() => {
                console.log('service updated')
            })
            .catch((error) => {
                console.log(error);
            });
    },

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

export default mutations;