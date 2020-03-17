import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/reslovers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

const opts = {
  port: 4000,
  cors: {
    credentials: true,
    origin: ["https://dunpa.herokuapp.com"] // your frontend url.
  }
};

server.start(opts, () => console.log("4000 포트에서 대기중"));
