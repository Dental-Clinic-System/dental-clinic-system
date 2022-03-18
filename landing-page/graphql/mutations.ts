import { gql } from '@apollo/client';

export const ADDCLINIC = gql`
  mutation AddClinic(
    $clinicName: String
    $operationName: String
    $operationDate: String
    $contactNumber: String
    $clinicWeb: String
    $email: String
    $city: String
    $district: String
    $sub_district: String
    $full_address: String
    $status: String
    $admin_number: String
    $admin_email: String
    $admin_name: String
    $position: String
    $workhours: object
    $phone: String
  ) {
    addClinic(
      clinic_name: $clinicName
      operation_name: $operationName
      operation_date: $operationDate
      contact_number: $contactNumber
      clinic_web: $clinicWeb
      email: $email
      official_address: { city: $city, district: $district, sub_district: $sub_district, full_address: $full_address }
      status: $status
      clinic_admin: {
        admin_number: $admin_number
        admin_email: $admin_email
        admin_name: $admin_name
        position: $position
      }
      workhours: $workhours
      phone: $phone
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
