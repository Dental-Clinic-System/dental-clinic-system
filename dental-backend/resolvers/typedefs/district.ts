import { gql } from 'apollo-server'

export const districtDef = gql`
  type Distric {
    _id: String,
    province: String,
    name: String
  }

  type Query {
    getDistricts(_id: String, province: String, name: String): [Distric]
  }
`