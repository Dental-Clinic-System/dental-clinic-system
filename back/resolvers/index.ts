import {
  addStaff,
  getStaff,
  loginStaff,
  getStaffs,
  updateStaff,
} from "./staffResolver";
import {
  addPatient,
  getPatients,
  getPatient,
  updatePatient,
  deletePatient,
  findPatient,
} from "./patientResolver";
import {
  addService,
  getServices,
  getService,
  updateService,
  deleteService,
} from "./serviceResolver";
import {
  addPatientHistory,
  getPatientHistory,
  getPatientHistories,
  updatePatientHistory,
  deletePatientHistory,
} from "./patientHistoryResolver";
import {
  addAppointment,
  getAppointment,
  getAppointments,
  updateAppointment,
  deleteAppointment,
} from "./appointmentResolver";
import {
  addClinic,
  getClinic,
  getClinicByClinicName,
  updateClinic,
  getClinics,
  deleteClinic,
  updateClinicStatus,
} from "./clinicResolver";
export default {
  Query: {
    getStaff,
    loginStaff,
    getPatient,
    getPatients,
    getStaffs,
    getService,
    getServices,
    getPatientHistory,
    getPatientHistories,
    getAppointments,
    getAppointment,
    findPatient,
    getClinics,
    getClinic,
    getClinicByClinicName,
  },
  Mutation: {
    addStaff,
    addPatient,
    updatePatient,
    deletePatient,
    addService,
    updateService,
    deleteService,
    addPatientHistory,
    updatePatientHistory,
    deletePatientHistory,
    addAppointment,
    updateAppointment,
    deleteAppointment,
    updateStaff,
    addClinic,
    updateClinic,
    deleteClinic,
    updateClinicStatus,
  },
};
