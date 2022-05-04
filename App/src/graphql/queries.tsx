import { gql } from "@apollo/client";

export const FIND_PATIENT = gql`
query FindPatient($mobileNumber: String) {
  findPatient(mobileNumber: $mobileNumber) {
    _id
    lastName
  }
}
`;
