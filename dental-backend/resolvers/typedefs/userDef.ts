import { gql } from 'apollo-server'

export const userDef = gql`
  type User {
    _id: String
    username: String
    address: String
    firstname: String
    lastname: String
    email: String
    phone: String
    birth: String
    password: String
    timestamp: String
    role: String
    clinicId: String
    serviceId: String
  }

  type Mutation {
    addUser(firstname: String,
      address: String,
      lastname: String,
      birth: String,
      email: String, 
      phone: String, 
      password: String, 
      username: String,
      timestamp: String, 
      role: String, 
      clinicId: String, 
      serviceId: String): User
    deleteUser(_userId: String): String
    updateUser(_userId: String, 
      address: String,
      firstname: String,
      lastname: String,
      birth: String, 
      email: String, 
      phone: String, 
      username: String,
      password: String, 
      timestamp: String, 
      role: String, 
      clinicId: String, 
      serviceId: String): String
  }

  type Query {
    getUsers(_id: String,
      address: String,
      firstname: String,
      lastname: String,
      birth: String, 
      email: String, 
      phone: String, 
      username: String,
      password: String, 
      timestamp: String, 
      role: String, 
      clinicId: String, 
      serviceId: String): [User]
  }
`