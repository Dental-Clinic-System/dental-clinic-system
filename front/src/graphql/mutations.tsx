import { gql } from '@apollo/client';

export const ADD_PATIENTS = gql`
    mutation Mutation($lastname: String, $firstname: String, $birth: String, $age: String, $registrationNumber: String, $sex: String, $city: String, $district: String, $committee: String, $addressDescription: String, $phone: String, $homePhone: String, $role: String, $doctor: String, $email: String, $cardNumber: String, $sysdate: String) {
  addPatient(lastname: $lastname, firstname: $firstname, birth: $birth, age: $age, registration_number: $registrationNumber, sex: $sex, city: $city, district: $district, committee: $committee, address_description: $addressDescription, phone: $phone, home_phone: $homePhone, role: $role, doctor: $doctor, email: $email, card_number: $cardNumber, sysdate: $sysdate) {
    _id
    lastname
    firstname
    birth
    age
    registration_number
    sex
    city
    district
    committee
    address_description
    role
    phone
    home_phone
    email
    doctor
    sysdate
    card_number
  }
}
`

export const DELETE_PATIENT = gql`
    mutation Mutation($id: String) {
  deletePatient(_id: $id)
}
`

export const UPDATE_PATIENT = gql`
    mutation UpdatePatient($id: String, $lastname: String) {
  updatePatient(_id: $id, lastname: $lastname)
}
`
export const ADD_CLINIC = gql`
mutation Mutation($clinic_name: String, $contact_number: String, $email: String, $official_address: Official_address_type, $status: String) {
  addClinic(clinic_name: $clinic_name, contact_number: $contact_number, email: $email, official_address: $official_address, status: $status) {
    _id
    clinic_name
    contact_number
    email
    official_address {
      city
      district
      sub_district
      full_address
    }
    status
  }
}
`