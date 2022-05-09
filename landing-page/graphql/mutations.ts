import { gql } from '@apollo/client';

export const ADD_CLINIC = gql`
  mutation AddClinic(
    $title: String
    $email: String
    $contact_number: String
    $district: String
    $khoroo: String
    $address: String
    $status: String
  ) {
    addClinic(
      title: $title
      email: $email
      contact_number: $contact_number
      district: $district
      khoroo: $khoroo
      address: $address
      status: $status
    ) {
      _id
      title
      email
      contact_number
      district
      khoroo
      address
      status
    }
  }
`;