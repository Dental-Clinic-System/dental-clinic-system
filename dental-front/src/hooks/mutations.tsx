import { gql } from '@apollo/client';

export const ADDCLINIC = gql`
  mutation AddClinic(
    $clinicName: String
    $email: String
    $phone: String
  ) {
    addClinic(
      clinic_name: $clinicName
      email: $email
      phone: $phone
    ) {
      _id
      clinic_name
      email
      phone
    }
  }
`;

export const UPDATECLINIC = gql`
  mutation UpdateClinic(
    $clinicName: String
    $email: String
    $phone: String
  ) {
    updateClinic(
      clinic_name: $clinicName
      email: $email
      phone: $phone
    ) {
      _id
      clinic_name
      email
      phone
    }
  }
`;