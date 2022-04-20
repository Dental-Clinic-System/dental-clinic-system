import { gql } from 'apollo-server'

export const clinicDef = gql`
scalar object
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
    clinic_name: String,
    contact_number:String,
    email: String,
    official_address: Official_address
    status: String,
  }
  type Mutation {
      addClinic(
        clinic_name: String,
        contact_number:String,
        email: String,
        official_address: Official_address_type
        status: String,
      ): Clinic,
      deleteClinic(_id: String): String
      updateClinic(
        _id: String
        clinic_name: String,
        contact_number:String,
        email: String,
        official_address: Official_address_type
        status: String,
      ):Clinic
  }

  type Query {
    getClinics(
      _id: String
      clinic_name: String,
      contact_number:String,
      email: String,
      official_address: Official_address_type
      status: String,
    ): [Clinic]
  }
`