const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Sting
    SavedBooks: [Book]!
  }

  input Book {
    bookId: ID
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Book {
    bookId: ID
    authors: String
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: Book!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;