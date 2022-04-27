import { gql } from "@apollo/client";

export const GET_PATIENTS = gql`
  query GetPatients {
  getPatients {
    _id
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

export const GET_SERVICES = gql`
  query GetServices($clinicId: String) {
    getServices(clinicId: $clinicId) {
      _id
      clinicId
      serviceName
      serviceCode
      description
      price
    }
  }
`;

export const GET_SERVICE = gql`
  query GetService($clinicId: String, $id: String) {
    getService(clinicId: $clinicId, _id: $id) {
      _id
      clinicId
      serviceName
      price
      serviceCode
      description
    }
  }
`;

export const GetClinics = gql`
  query Query {
    getClinics {
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

export const GET_PATIENT_HISTORY = gql`
query Query($clinicId: String, $patientId: String) {
  getPatientHistories(clinicId: $clinicId, patientId: $patientId) {
    _id
    clinicId {
      title
    }
    serviceId {
      serviceName
      _id
    }
    note
    toReport
    patientId {
      _id
      age
    }
    appointmentId {
      title
    }
  }
}
`;

export const GET_PATIENTS_BRIEFLY = gql`
  query GetPatients($clinicId: String) {
  getPatients(clinicId: $clinicId) {
    _id
    firstName
    lastName
    cardNumber
  }
}
`;

export const LOGIN = gql`
  query LoginStaff($clinicId: String, $email: String, $password: String) {
    loginStaff(clinicId: $clinicId, email: $email, password: $password) {
      clinicId
      username
      clinic {
        title
      }
    }
  }
`;

export const GET_STAFFS = gql`
  query GetStaffs($type: String, $clinicId: String) {
    getStaffs(type: $type, clinicId: $clinicId) {
      _id
      username
      first_name
      last_name
      email
      phone
      availability
      type
    }
  }
`;
export const GetAppointments = gql`
  query GetAppointments($clinicId: String) {
  getAppointments(clinicId: $clinicId) {
    _id
    patientId
    serviceId
    startDate
    title
    endDate
    notes
    status
    staffId
    clinicId
  }
}
`
