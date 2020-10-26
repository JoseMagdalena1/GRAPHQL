const fetch = require("node-fetch");
const { ApolloServer, gql } = require("apollo-server");

const countries = [
  {
    name: "Spain",
  },
  {
    name: "Brasil",
  },
  {
    name: "Portugal",
  },
  {
    name: "China",
  },
  {
    name: "Canada",
  },
  {
    name: "Camerún",
  },
  {
    name: "Chile",
  },
];

const typeDefs = gql`
  type country {
    name: String
  }

  type Query {
    countries: [country]
  }
`;

const resolvers = {
  Query: {
    countries: () =>
      countries.filter((countries) => countries.name.startsWith("C")),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
