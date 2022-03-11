import { gql } from 'apollo-server'

export const patientHistoryDef = gql`
  type PatientHistory {
    _id: String
    patientId: String
    serviceId: String
    clinicId: String
    date: String
  }

  type Mutation {
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
  }

  type Query {
    getPatientHistories(_id: String,
      patientId: String,
      serviceId: String,
      clinicId: String,
      date: String): [PatientHistory]
  }
`