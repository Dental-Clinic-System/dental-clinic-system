import { addStaff, getStaff, loginStaff, getStaffs } from "./staffResolver";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient } from "./patientResolver";
import { addService, getServices, getService, updateService, deleteService } from "./serviceResolver";
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
    addAppointment,
    updateAppointment,
    deleteAppointment,
  },
};
