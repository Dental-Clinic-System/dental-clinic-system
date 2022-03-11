import { gql } from 'apollo-server'

export const appointmentDef = gql`
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

  type Mutation {
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
  }

  type Query {
    getAppointments(_id: String,
      userId: String,
      patientId: String,
      clinicId: String,
      status: String,
      serviceId: String,
      date: String,
      hour: String): [Appointment]
  }
`