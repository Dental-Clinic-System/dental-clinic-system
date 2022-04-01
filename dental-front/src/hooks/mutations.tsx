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
    $id: String
    $clinicName: String
    $email: String
    $phone: String
  ) {
    updateClinic(
      _id: $id
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

export const DELETECLINIC = gql`
  mutation DeleteClinic(
    $id: String
  ) {
    deleteClinic(
      _id: $id
    ) {
      _id
    }
  }
`;