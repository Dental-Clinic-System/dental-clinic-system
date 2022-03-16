import { gql } from 'apollo-server'

export const serviceDef = gql`
  type Service {
    _id: String
    classification: String
    service_name: String
    code: String
    short: String
    description: String
    price: String
  }

  type Mutation {
    addService(classification: String,
      service_name: String,
      code: String,
      short: String,
      description: String,
      price: String): Service
    deleteService(_serviceId: String): String
    updateService(_serviceId: String, 
      classification: String,
      service_name: String,
      code: String,
      short: String,
      description: String,
      price: String): String
  }

  type Query {
    getServices(_id: String,
      classification: String,
      service_name: String,
      code: String,
      short: String,
      description: String,
      price: String): [Service]
  }
`