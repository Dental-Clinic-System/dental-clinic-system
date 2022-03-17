import { ApolloServer } from "apollo-server"

import mongoose from "mongoose"
import "dotenv/config"
import { typeDefs } from './resolvers/typedefs'
import { appointment_mutation, clinic_mutation, patient_history_mutation, patient_mutation, permission_mutation, role_mutation, service_mutation, user_mutation } from "./resolvers/mutations"
import queries from "./resolvers/query"

const resolvers = {
  Query: queries,
  Mutation: { 
    ...appointment_mutation, 
    ...clinic_mutation, 
    ...patient_history_mutation, 
    ...patient_mutation, 
    ...permission_mutation, 
    ...role_mutation, 
    ...service_mutation, 
    ...user_mutation 
  }
}


const server = new ApolloServer({
  typeDefs,
  resolvers,
})
const uri: any = process.env.URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});