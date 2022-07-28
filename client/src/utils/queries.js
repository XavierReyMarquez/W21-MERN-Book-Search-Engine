import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      book {
        _id
        authors
        description
        title
        image
      }
    }
  }
`;
