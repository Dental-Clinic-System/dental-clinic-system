import { addStaff, getStaff, loginStaff, getStaffs, updateStaff } from "./staffResolver";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient, findPatient } from "./patientResolver";
import { addService, getServices, getService, updateService, deleteService } from "./serviceResolver";
import { addPatientHistory, getPatientHistory, getPatientHistories, updatePatientHistory, deletePatientHistory } from "./patientHistoryResolver";
import { addAppointment, getAppointment, getAppointments, updateAppointment, deleteAppointment } from "./appointmentResolver";

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
    findPatient
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
    updateStaff
  },
};
