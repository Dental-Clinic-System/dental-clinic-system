import { gql } from '@apollo/client';

export const ADDCLINIC = gql`
  mutation AddClinic(
    $clinicName: String
    $phone: String
    $email: String
    $city: String
    $district: String
    $sub_district: String
    $full_address: String
  ) {
    addClinic(
      clinic_name: $clinicName
      phone: $phone
      email: $email
      official_address: { city: $city, district: $district, sub_district: $sub_district, full_address: $full_address }
    ) {
      _id
      clinic_name
      operation_name
      operation_date
      contact_number
      clinic_web
      email
      official_address {
        city
        district
        sub_district
        full_address
      }
      status
      clinic_admin {
        admin_number
        admin_email
        admin_name
        position
      }
      workhours
      phone
    }
  }
`;
