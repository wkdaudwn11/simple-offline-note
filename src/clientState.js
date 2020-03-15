import { VariablesAreInputTypes } from "graphql/validation/rules/VariablesAreInputTypes";

export const defaults = {
  notes: [
    {
      __typename: "Note",
      id: 1,
      title: "Title",
      content: "Content"
    }
  ]
};
export const typeDefs = [
  `
  extend schema {
      query: Query
      mutation: Mutation
  }
  extend type Query {
      notes: [Note]!
      note(id: Int!): Note
  }
  type Mutation{
      createNote(title: String!, content: String!): Note
      editNote(id: String!, title: String!, content:String!): Note
  }
  type Note{
      id: Int!
      title: String!
      content: String!
  }
  `
];
export const resolvers = {
  Query: {
    note: (_, variables, { getCacheKey }) => {
      // variables => 파라미터로 받은 변수들 모음
      const id = getCacheKey({ __typename: "Note", id: variables.id });
      console.log(id);
      return null;
    }
  }
};
