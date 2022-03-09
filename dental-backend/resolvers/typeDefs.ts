import { gql } from 'apollo-server'

const typeDefs = gql`
  type patient {
    _id: String
    mimetype: String
    encoding: String
  }
  type Hospital {
    name: String
    email: String
  }
  type Mutation {
    addHospital(name: String, email: String): Hospital

    deleteHospital(hospitalId: String): String
  }
  type Query {
    hello: String
    getHospitals: [Hospital]
  }
`
export default typeDefs