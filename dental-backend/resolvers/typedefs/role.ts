import { gql } from 'apollo-server'

export const roleDef = gql`
  type Role {
    _id: String
    title: String
    permission: [String]
    clinicId: [String]
  }

  type Mutation {
    addRole(title: String, permission: [String], clinicId: String) : Role
    deleteRole(_id: String): String
    updateRole(_id: String, title: String, permission: [String], clinicId: String): String
  }

  type Query {
    getRoles(_id: String
      title: String
      permission: [String]
      clinicId: [String]): [Role]
  }
`