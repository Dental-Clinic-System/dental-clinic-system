import { ApolloServer } from "apollo-server"
import { typeDefs } from './typedefs'
import { queries } from "./queries"
import { mutations } from './mutations' 

import mongoose from "mongoose"
import "dotenv/config"

const resolvers = { 
  Query: queries,
  Mutation: mutations
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