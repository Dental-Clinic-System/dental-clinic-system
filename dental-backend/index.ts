import { ApolloServer } from "apollo-server"

// import mongoose from "mongoose"
import typeDefs from "./resolvers/typeDefs"
import mutations from "./resolvers/mutation"
import queries from "./resolvers/mutation"
import "dotenv/config" 
// const uri: any = "mongodb+srv://master:<qwerty123>@cluster0.uffxy.mongodb.net/Cluster0?retryWrites=true&w=majority";
// mongoose.connect("mongodb+srv://master:qwerty123@cluster0.uffxy.mongodb.net/Cluster0?retryWrites=true&w=majority");
// const connection = mongoose.connection;

// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

const resolvers = {
  Query: {
    queries
  },
  Mutation: {
    mutations
  }
}

const startApollo = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startApollo();