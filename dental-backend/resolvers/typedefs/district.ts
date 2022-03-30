import { gql } from 'apollo-server'

export const districtDef = gql`
  type Distric {
    _id: String,
    code: String,
    name: String,
    parent: String,
    name_en: String
  }

  type Query {
    getDistricts(_id: String,
    code: String,
    name: String,
    parent: String,
    name_en: String): [Distric]
  }
`