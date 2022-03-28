import { gql } from 'apollo-server'

export const patientDef = gql`
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
      sysdate: String): Patient
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
      sysdate: String): String
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
    sysdate: String): [Patient]
  }
`