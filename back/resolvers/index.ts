import { addStaff, getStaff, loginStaff } from "./staffResolver";
import { addPatient, getPatients, getPatient, updatePatient, deletePatient } from "./patientResolver";
import { addService, getServices, getService, updateService, deleteService } from "./serviceResolver";
import { addAppointment, getAppointment, getAppointments, updateAppointment, deleteAppointment } from "./appointmentResolver";

export default {
  Query: {
    getStaff,
    loginStaff,
    getPatient,
    getPatients,
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
