import { gql } from 'apollo-server'

export const provinceDef = gql`
  type Province {
    code: String
    name: String
    name_en: String
  }

  type Query {
    getProvinces(_id: String, code: String, name: String, name_en: String): [Province]
  }
`