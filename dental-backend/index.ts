import { ApolloServer } from "apollo-server"

import mongoose from "mongoose"
import "dotenv/config"
import { appointmentDef, clinicDef, patientDef, patientHistoryDef, permissionDef, roleDef, serviceDef, userDef } from './resolvers/typedefs'
import { Mutation } from "./resolvers/mutations"
import queries from "./resolvers/query"

const resolvers = {
  Query: queries,
  Mutation: Mutation
}

const typeDefs = [
  appointmentDef,
  clinicDef,
  patientDef,
  patientHistoryDef,
  permissionDef,
  roleDef,
  serviceDef,
  userDef
]

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