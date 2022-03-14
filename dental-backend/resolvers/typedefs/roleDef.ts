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
    deleteRole(_roleId: String): String
    updateRole(_roleId: String, title: String, permission: [String], clinicId: String): String
  }

  type Query {
    getRoles(_id: String
      title: String
      permission: [String]
      clinicId: [String]): [Role]
  }
`