const { gql } = require('apollo-server');

const typeDefs = gql`
  type patient {
    _id: String
    mimetype: String
    encoding: String
  }
  type Mutation {
    addBook(title: String):
  }
  type Query {
    hello: String
  }
`
export default typeDefs