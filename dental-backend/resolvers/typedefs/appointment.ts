import { gql } from 'apollo-server'

export const appointmentDef = gql`
  scalar object

  type Appointment {
    _id: String
    doctorId: String
    patientId: String
    clinic: object
    status: String
    serviceId: String
    startDate: String
    endDate: String
    title: String
    notes: String
  }

  type Mutation {
    addAppointment(userId: String
      doctorId: String,
      patientId: String,
      clinic: String,
      status: String,
      serviceId: String,
      startDate: String,
      endDate: String,
      title: String,
      notes: String,) : Appointment
    deleteAppointment(_id: String): String
    updateAppointment(_id: String,
      doctorId: String,
      patientId: String,
      clinicId: String,
      status: String,
      serviceId: String,
      startDate: String,
      endDate: String,
      title: String,
      notes: String,): Appointment
  }

  type Query {
    getAppointments(_id: String,
      doctorId: String,
      patientId: String,
      clinic: String,
      status: String,
      serviceId: String,
      startDate: String,
      endDate: String,
      title: String,
      notes: String,): [Appointment]
  }
`