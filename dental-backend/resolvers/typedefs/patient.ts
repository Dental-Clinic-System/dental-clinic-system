import { gql } from 'apollo-server'

export const patientDef = gql`
  scalar object

  type patient_history {
    serviceId: String
    clinicId: String
    date: String
    payment: String
    detail: String
  }

  input patient_history_type {
    serviceId: String
    clinicId: String
    date: String
    payment: String
    detail: String
  }

  type Patient {
    _id: String
    lastname: String
    firstname: String
    birth: String
    age: String
    registration_number: String
    sex: String
    city: String
    district: String
    committee: String
    address_description: String
    role: String
    phone: String
    home_phone: String
    email: String
    doctor: String
    card_number: String
    sysdate: String
    history: patient_history
  }

  type Mutation {
    addPatient(lastname: String,
      firstname: String,
      birth: String,
      age: String,
      registration_number: String,
      sex: String,
      city: String,
      district: String,
      committee: String,
      address_description: String,
      role: String,
      phone: String,
      home_phone: String,
      email: String,
      doctor: String,
      card_number: String,
      sysdate: String,
      history: patient_history_type): Patient
    deletePatient(_id: String): String
    updatePatient(_id: String, 
      lastname: String,
      firstname: String,
      birth: String,
      age: String,
      registration_number: String,
      sex: String,
      city: String,
      district: String,
      committee: String,
      address_description: String,
      role: String,
      phone: String,
      home_phone: String,
      email: String,
      doctor: String,
      card_number: String,
      sysdate: String,
      history: patient_history_type): String
  }

  type Query {
    getPatients(_id: String,
    lastname: String
    firstname: String
    birth: String
    age: String
    registration_number: String
    sex: String
    city: String
    district: String
    committee: String
    address_description: String
    role: String
    phone: String
    home_phone: String
    email: String
    doctor: String
    card_number: String
    sysdate: String
    history: patient_history_type): [Patient]
  }
`