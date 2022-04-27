import { addStaff, getStaff, loginStaff, getStaffs } from "./staffResolver";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient } from "./patientResolver";
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
  },
};
