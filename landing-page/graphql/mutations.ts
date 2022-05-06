import { gql } from '@apollo/client';

export const ADDCLINIC = gql`
  mutation AddClinic(
    $title: String
    $contact_number: String
    $email: String
    $district: String
    $khoroo: String
    $address: String
  ) {
    addClinic(
      title: $title
      contact_number: $contact_number
      email: $email
      district: $district 
      khoroo: $khoroo 
      address: $address 
    ) {
      _id
      title
      operation_name
      operation_date
      contact_number
      clinic_web
      email
      district
      khoroo
      address
      status
      clinic_admin {
        admin_number
        admin_email
        admin_name
        position
      }
      workhours
      contact_number
    }
  }
`;
