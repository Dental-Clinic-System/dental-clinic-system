import { addStaff, getStaff, loginStaff } from "./staffResolver";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient } from "./patientResolver";
import { addService, getServices, getService, updateService, deleteService } from "./serviceResolver";
import { addPatientHistory, getPatientHistory, getPatientHistories, updatePatientHistory, deletePatientHistory } from "./patientHistoryResolver";

export default {
  Query: {
    getStaff,
    loginStaff,
    getPatient,
    getPatients,
    getService,
    getServices,
    getPatientHistory,
    getPatientHistories
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
    deletePatientHistory
  },
};
