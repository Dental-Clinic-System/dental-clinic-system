import { gql } from 'apollo-server'

export const committeeDef = gql`
  type Committee {
    _id: String,
    district: String,
    name: String
  }

  type Query {
    getCommittees(_id: String, district: String, name: String): [Committee]
  }
`