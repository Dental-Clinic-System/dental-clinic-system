import { addStaff, getStaff, loginStaff, getStaffs } from "./staffResolver";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient } from "./patientResolver";

export default {
  Query: {
    getStaff,
    loginStaff,
    getPatient,
    getPatients,
    getStaffs
  },
  Mutation: {
    addStaff,
    addPatient,
    updatePatient,
    deletePatient
  },
};
