import { gql } from "@apollo/client";

export const FIND_PATIENT = gql`
query FindPatient($mobileNumber: String) {
  findPatient(mobileNumber: $mobileNumber) {
    _id
    lastName
  }
}
`;


export const GET_CLINICS = gql`
query GetClinic {
  getClinics {
    title
    _id
    address
    district
    khoroo
    status
    email
    contact_number
  }
}`;