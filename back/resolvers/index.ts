import { addStaff, getStaff, loginStaff, getStaffs } from "./staffResolver";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient } from "./patientResolver";
import { addService, getServices, getService, updateService, deleteService } from "./serviceResolver";
<<<<<<< HEAD
import { addPatientHistory, getPatientHistory, getPatientHistories, updatePatientHistory, deletePatientHistory } from "./patientHistoryResolver";
=======
import { addAppointment, getAppointment, getAppointments, updateAppointment, deleteAppointment } from "./appointmentResolver";
>>>>>>> connected backend to appointment page(only Read)

export default {
  Query: {
    getStaff,
    loginStaff,
    getPatient,
    getPatients,
    getStaffs,
    getService,
    getServices,
<<<<<<< HEAD
    getPatientHistory,
    getPatientHistories
=======
    getAppointments,
    getAppointment,
>>>>>>> connected backend to appointment page(only Read)
  },
  Mutation: {
    addStaff,
    addPatient,
    updatePatient,
    deletePatient,
    addService,
    updateService,
    deleteService,
<<<<<<< HEAD
    addPatientHistory,
    updatePatientHistory,
    deletePatientHistory
=======
    addAppointment,
    updateAppointment,
    deleteAppointment,
>>>>>>> connected backend to appointment page(only Read)
  },
};
