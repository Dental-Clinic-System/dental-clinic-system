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
  query GetServices {
    getServices {
      _id
      classification
      service_name
      code
      short
      description
      price
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

