const { ApolloServer, gql } = require("apollo-server-express");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const resolvers = require("./resolvers");
const mongoose = require("mongoose");
const auth = require("./auth");
const express = require("express"); 
require("dotenv").config();

const uri = '';

mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const typeDefs = gql
;

const startApollo = async () => {
  const app = express();
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  const server = new ApolloServer({
    schema: schema,
  });

  await server.start();

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
  });
};

startApollo();