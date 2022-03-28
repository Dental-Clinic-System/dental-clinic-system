import { gql } from 'apollo-server'

export const permissionDef = gql`
  type Permission {
    _id: String
    title: String
    description: String
  }

  type Mutation {
    addPermission(title: String, description: String) : Permission
    deletePermission(_id: String): String
    updatePermission(_id: String, title: String, description: String): String
  }

  type Query {
    getPermissions(_id: String,
      title: String,
      description: String): [Permission]
  }
`