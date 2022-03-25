import { gql } from 'apollo-server'

export const clinicDef = gql`
scalar object

type Clinic_admin {
  admin_number: String
  admin_email: String
  admin_name: String
  position: String
}
input Clinic_admin_type {
  admin_number: String
  admin_email: String
  admin_name: String
  position: String
}
type Official_address {
  city: String
  district: String
  sub_district: String
  full_address:String
}
input Official_address_type {
  city: String
  district: String
  sub_district: String
  full_address:String
}
  type Clinic {
    _id: String
    clinic_name: String
    operation_name: String
    operation_date: String
    contact_number:String
    clinic_web: String
    email: String
    official_address: Official_address
    status: String
    clinic_admin:Clinic_admin
    workhours: object
    phone: String
  }
  type Mutation {
      addClinic(
        clinic_name: String
        operation_name: String
        operation_date: String
        contact_number:String
        clinic_web: String
        email: String
        official_address: Official_address_type
        status: String
        clinic_admin:Clinic_admin_type
        workhours: object
        phone: String
      ): Clinic,
      deleteClinic(_userId: String): String
      updateClinic(
        _id: String
        clinic_name: String
        operation_name: String
        operation_date: String
        contact_number:String
        clinic_web: String
        email: String
        official_address: Official_address_type
        status: String
        clinic_admin:Clinic_admin_type
        workhours: object
        phone: String
      ):Clinic
  }

  type Query {
    getClinics(
      _id: String
      clinic_name: String
      operation_name: String
      operation_date: String
      contact_number:String
      clinic_web: String
      email: String
      official_address: Official_address_type
      status: String
      clinic_admin:Clinic_admin_type
      workhours: object
      phone: String
    ): [Clinic]
  }
`