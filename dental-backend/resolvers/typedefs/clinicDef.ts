import { gql } from 'apollo-server'

export const clinicDef = gql`
scalar object

type Clinic_admin{
  admin_number:String
  admin_email:String
  admin_name:String
  position:String
}
input Clinic_admin_type{
  admin_number:String
  admin_email:String
  admin_name:String
  position:String
}

  type Clinic {
    _id: String
    clinic_name: String
    operation_name: String
    operation_date: String
    contact_number:String
    clinic_web: String
    email: String
    official_address: String
    status: String
    clinic_admin:Clinic_admin
    workhours: object
    phone: String
  }
  type Mutation {
      addClinic(
        _id: String
        clinic_name: String
        operation_name: String
        operation_date: String
        contact_number:String
        clinic_web: String
        email: String
        official_address: String
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
        official_address: String
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
      official_address: String
      status: String
      clinic_admin:Clinic_admin_type
      workhours: object
      phone: String
    ): [Clinic]
  }
`