import { gql } from "@apollo/client";

export const GET_PATIENTS = gql`
  query GetPatients {
    getPatients {
      _id
      lastname
      firstname
      age
      birth
      registration_number
      city
      sex
      district
      address_description
      committee
      role
      phone
      home_phone
      email
      doctor
      card_number
      sysdate
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
  query GetPatients($id: String) {
    getPatients(_id: $id) {
      history {
        serviceId
        clinicId
        date
        payment
        detail
      }
    }
  }
`;

export const GET_PATIENTS_BRIEFLY = gql`
  query GetPatients {
    getPatients {
      _id
      lastname
      firstname
      registration_number
      card_number
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
