import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";

import mongoose from "mongoose";
import "dotenv/config";
import { typeDefs } from "./types";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
// const server = new ApolloServer({
//   typeDefs: [appointment],
//   resolvers: {
//     Query: { getAppointment },
//   },
// });
const uri: any = process.env.URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
