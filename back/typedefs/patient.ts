import { gql } from 'apollo-server'

export const patientDef = gql`
  scalar object

  type patient_history_type {
    serviceId: String
    clinicId: String
    date: String
    payment: String
    detail: String
    _id: String
  } #object maygaar type zarlah uyd type gj tuhain object oo biceed davhar input bicne.

  input patient_history {
    serviceId: String
    clinicId: String
    date: String
    payment: String
    detail: String
    _id: String
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
    history: [patient_history_type] #end typetai hesgiin bicne
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
      history: [patient_history]): Patient
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
      history: [patient_history]): String #busad hesegt inputteigee bicne
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
    history: [patient_history]): [Patient]
  }
`