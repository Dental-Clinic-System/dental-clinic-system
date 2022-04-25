import { gql } from "@apollo/client";

export const ADD_PATIENT = gql`
  mutation AddPatient($clinicId: String, $firstName: String, $stateRegNumber: String, $lastName: String, $mobileNumber: String, $email: String, $gender: String, $age: String, $birthdate: String, $cardNumber: String) {
  addPatient(clinicId: $clinicId, firstName: $firstName, stateRegNumber: $stateRegNumber, lastName: $lastName, mobileNumber: $mobileNumber, email: $email, gender: $gender, age: $age, birthdate: $birthdate, cardNumber: $cardNumber) {
    _id
    clinicId {
      title
    }
    firstName
    lastName
    stateRegNumber
    mobileNumber
    email
    gender
    age
    birthdate
    cardNumber
  }
}
`;

export const DELETE_PATIENT = gql`
  mutation Mutation($id: String) {
  deletePatient(_id: $id) {
    _id
  }
}
`;

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient($id: String, $lastname: String) {
    updatePatient(_id: $id, lastname: $lastname)
  }
`;
export const ADD_CLINIC = gql`
  mutation Mutation(
    $clinic_name: String
    $contact_number: String
    $email: String
    $official_address: Official_address_type
    $status: String
  ) {
    addClinic(
      clinic_name: $clinic_name
      contact_number: $contact_number
      email: $email
      official_address: $official_address
      status: $status
    ) {
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
`;
export const DELETE_CLINIC = gql`
  mutation DeleteClinic($id: String) {
    deleteClinic(_id: $id)
  }
`;

export const ADD_SERVICE = gql`
  mutation AddService(
    $clinicId: String
    $serviceName: String
    $serviceCode: String
    $price: String
    $description: String
  ) {
    addService(
      clinicId: $clinicId
      serviceName: $serviceName
      serviceCode: $serviceCode
      price: $price
      description: $description
    ) {
      clinicId
      serviceName
      _id
      serviceCode
      price
      description
    }
  }
`;
export const UPDATE_SERVICE = gql`
  mutation UpdateService(
    $_id: String
    $serviceName: String
    $serviceCode: String
    $price: String
    $description: String
  ) {
    updateService(
      _id: $_id
      serviceName: $serviceName
      serviceCode: $serviceCode
      price: $price
      description: $description
    ) {
      clinicId
      serviceName
      _id
      price
      serviceCode
      description
    }
  }
`;
export const DELETE_SERVICE = gql`
  mutation DeleteService($_id: String) {
    deleteService(_id: $_id) {
      clinicId
      _id
    }
  }
`;
export const ADD_STAFF = gql`
  mutation Mutation($clinicId: String, $username: String, $lastName: String, $firstName: String, $phone: String, $email: String, $password: String) {
    addStaff(clinicId: $clinicId, username: $username, last_name: $lastName, first_name: $firstName, phone: $phone, email: $email, password: $password) {
      clinicId
      type
      last_name
      first_name
      phone
      username
      email
      timestamp
      availability
    }
  }
`;