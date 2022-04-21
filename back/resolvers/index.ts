import { addStaff, getStaff, loginStaff } from "./staffResolver";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient } from "./patientResolver";

export default {
  Query: {
    getStaff,
    loginStaff,
    getPatient,
    getPatients
  },
  Mutation: {
    addStaff,
    addPatient,
    updatePatient,
    deletePatient
  },
};
