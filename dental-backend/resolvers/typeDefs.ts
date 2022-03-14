import { gql } from 'apollo-server'

const typeDefs = gql`
  type Clinic {
    _id: String
    name: String
    email: String
    status: String
    workhours: String
    phone: String
  }

  type User {
    _id: String
    name: String
    email: String
    phone: String
    password: String
    timestamp: String
    status: String
    role: String
    clinicId: String
    serviceId: String
  }

  type Patient {
    _id: String
    patient: String
    email: String
    firstname: String
    lastname: String
    clinicId: String
    password: String
  }

  type Service {
    _id: String
    clinicId: String
    title: String
    description: String
  }

  type Appointment {
    _id: String
    userId: String
    patientId: String
    clinicId: String
    status: String
    serviceId: String
    date: String
    hour: String
  }

  type PatientHistory {
    _id: String
    patientId: String
    serviceId: String
    clinicId: String
    date: String
  }

  type Permission {
    _id: String
    title: String
    description: String
  }

  type Role {
    _id: String
    title: String
    permission: [String]
    clinicId: [String]
  }

  type Mutation {
    addClinic(name: String, 
      email: String, 
      workhours: String, 
      phone: String): Clinic
    deleteClinic(_clinicId: String): String
    updateClinic(_clinicId: String, 
      status: String, 
      workhours: String, 
      phone: String, 
      name: String): String

    addUser(name: String, 
      email: String, 
      phone: String, 
      password: String, 
      timestamp: String, 
      role: String, 
      clinicId: String, 
      serviceId: String): User
    deleteUser(_userId: String): String
    updateUser(_userId: String, 
      name: String, 
      email: String, 
      phone: String, 
      password: String, 
      timestamp: String, 
      role: String, 
      clinicId: String, 
      serviceId: String): String

    addPatient(firstname: String, 
      lastname: String, 
      email: String, 
      phone: String, 
      password: String, 
      clinicId: String): Patient
    deletePatient(_patientId: String): String
    updatePatient(_patientId: String, 
      firstname: String, 
      lastname: String, 
      email: String, 
      phone: String, 
      password: String, 
      clinicId: String): String

    addService(clinicId: String, 
      title: String, 
      description: String): Service
    deleteService(_serviceId: String): String
    updateService(_serviceId: String, 
      clinicId: String, 
      title: String, 
      description: String): String

    addAppointment(userId: String
      patientId: String,
      clinicId: String,
      status: String,
      serviceId: String,
      date: String,
      hour: String) : Appointment
    deleteAppointment(_appointmentId: String): String
    updateAppointment(_appointmentId: String,
      userId: String
      patientId: String,
      clinicId: String,
      status: String,
      serviceId: String,
      date: String,
      hour: String): String

    addPatientHistory(patientId: String,
      serviceId: String,
      clinicId: String,
      date: String) : PatientHistory
    deletePatientHistory(_patientHistoryId: String): String
    updatePatientHistory(_patientHistoryId: String,
      patientId: String,
      serviceId: String,
      clinicId: String,
      date: String): String

    addPermission(title: String, description: String) : Permission
    deletePermission(_permissionId: String): String
    updatePermission(_permissionId: String, title: String, description: String): String

    addRole(title: String, permission: [String], clinicId: String) : Role
    deleteRole(_roleId: String): String
    updateRole(_roleId: String, title: String, permission: [String], clinicId: String): String
  }

  type Query {
    getClinics(_id: String,
      name: String,
      email: String,
      status: String,
      workhours: String,
      phone: String): [Clinic]
    getUsers(_id: String,
      name: String,
      email: String,
      status: String,
      workhours: String,
      phone: String): [User]
    getPatients(_id: String,
      name: String,
      email: String,
      phone: String,
      password: String,
      timestamp: String,
      status: String,
      role: String,
      clinicId: String,
      serviceId: String): [Patient]
    getServices(_id: String,
      clinicId: String,
      title: String,
      description: String): [Service]
    getAppointments(_id: String,
      userId: String,
      patientId: String,
      clinicId: String,
      status: String,
      serviceId: String,
      date: String,
      hour: String): [Appointment]
    getPatientHistories(_id: String,
      patientId: String,
      serviceId: String,
      clinicId: String,
      date: String): [PatientHistory]
    getPermissions(_id: String,
      title: String,
      description: String): [Permission]
    getRoles(_id: String
      title: String
      permission: [String]
      clinicId: [String]): [Role]
  }
`
export default typeDefs