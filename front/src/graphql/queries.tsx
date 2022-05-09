import { gql } from "@apollo/client";

export const GET_PATIENTS = gql`
  query GetPatients {
  getPatients {
    _id
    firstName
    lastName
    registrationNumber
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
  query GetService($serviceCode: String, $id: String, $clinicId: String) {
    getService(serviceCode: $serviceCode, _id: $id, clinicId: $clinicId) {
      _id
      clinicId
      serviceName
      price
      serviceCode
      description
    }
  }
`;

export const GET_CLINICS = gql`
  query Query {
    getClinics {
      _id
      title
      email
      contact_number
      address
      district
      khoroo
      status
    }
  }
`;

export const GET_PATIENT_HISTORY = gql`
query GetPatientHistories($patientId: String, $clinicId: String) {
  getPatientHistories(patientId: $patientId, clinicId: $clinicId) {
    _id
    clinicId {
      title
    }
    patientId {
      _id
      cardNumber
    }
    serviceId {
      serviceName
      _id
    }
    toothId
    toothSides
    note
    toReport
    appointmentId {
      _id
      title
      endDate
      notes
      status
      startDate
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

export const GET_PATIENT = gql`
query GetPatient($id: String) {
  getPatient(_id: $id) {
    _id
    clinicId {
      title
    }
    firstName
    lastName
    mobileNumber
    registrationNumber
    email
    gender
    age
    birthdate
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
query GetAppointments($clinicId: String, $patientId: String) {
  getAppointments(clinicId: $clinicId, patientId: $patientId) {
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
export const GET_PATIENT_HISTORIES = gql`
  query Query($clinicId: String) {
    getPatientHistories(clinicId: $clinicId) {
      note
      serviceId {
        serviceCode
        serviceName
      }
      patientId {
        firstName
        mobileNumber
      }
      appointmentId {
        startDate
        endDate
      }
    }
  }
`