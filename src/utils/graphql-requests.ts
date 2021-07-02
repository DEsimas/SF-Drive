import { gql } from "@apollo/react-hooks";

export const GET_CARS_BY_NAME = gql`
mutation getFilterByName($name: String!){
    getFilterByName(name: $name){
      name
      mark
      model
      year
      image
      avatar
      name
      _id
      price
    }
  }
`;