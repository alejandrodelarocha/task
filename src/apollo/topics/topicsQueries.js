import { gql } from '@apollo/client';

//I always use non-anonymous querys for GraphQL
export const GET_TOPICS = gql`
query GetTopics ($topicName :String!){
    topic(name: $topicName) {
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
      name
      stargazerCount
    }
  }
`;