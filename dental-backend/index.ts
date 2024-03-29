import { ApolloServer } from "apollo-server"

import mongoose from "mongoose"
import "dotenv/config"
import { appointmentDef, clinicDef, patientDef, permissionDef, roleDef, serviceDef, userDef, provinceDef, districtDef, committeeDef } from './resolvers/typedefs'
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
  permissionDef,
  roleDef,
  serviceDef,
  userDef,
  provinceDef,
  districtDef,
  committeeDef
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