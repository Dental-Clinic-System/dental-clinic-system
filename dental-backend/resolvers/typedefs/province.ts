import { gql } from 'apollo-server'

export const provinceDef = gql`
  type Province {
    _id: String
    name: String
  }

  type Query {
    getProvinces(_id: String, name: String): [Province]
  }
`