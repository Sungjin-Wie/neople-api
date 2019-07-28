import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/reslovers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

server.start(() => console.log("4000 포트에서 대기중"));
