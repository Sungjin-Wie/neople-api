import { getCharacters, getInfo } from "./data";

const resolvers = {
  Query: {
    rows: (_, { characterName }) => getCharacters(characterName),
    status: (_, { characterId }) => getInfo(characterId),
  }
};

export default resolvers;
