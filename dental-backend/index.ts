import { ApolloServer } from "apollo-server"

import mongoose from "mongoose"
import "dotenv/config" 

import typeDefs from "./resolvers/typeDefs"
import mutations from "./resolvers/mutation"
import queries from "./resolvers/query"


const resolvers = {
  Query: queries,
  Mutation: mutations
}

const server = new ApolloServer({ typeDefs, resolvers });

const uri: any = process.env.URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});