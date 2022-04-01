import { gql } from 'apollo-server'

export const committeeDef = gql`
  type Committee {
    _id: String,
    code: String,
    name: String,
    grand_parent: String,
    parent: String,
    name_en: String
  }

  type Query {
    getCommittees(_id: String, code: String,
    name: String,
    grand_parent: String,
    parent: String,
    name_en: String): [Committee]
  }
`