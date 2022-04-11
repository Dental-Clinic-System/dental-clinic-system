import { gql } from "apollo-server";

export const serviceDef = gql`
  type Service {
    clinic_id: String
    _id: String
    service_name: String
    code: String
    short: String
    description: String
    price: String
  }

  type Mutation {
    addService(
      clinic_id: String
      service_name: String
      code: String
      short: String
      description: String
      price: String
    ): Service
    deleteService(_id: String): String
    updateService(
      _id: String
      clinic_id: String
      service_name: String
      code: String
      short: String
      description: String
      price: String
    ): String
  }

  type Query {
    getServices(
      clinic_id: String
      _id: String
      service_name: String
      code: String
      short: String
      description: String
      price: String
    ): [Service]
  }
`;
