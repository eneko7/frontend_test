import { gql } from 'apollo-boost';

export const addStarQuery = gql`
  mutation AddStar($repoid:ID!){
    addStar(input:{starrableId:$repoid}){
      starrable{
        stargazers{
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;

export const removeStarQuery = gql`
  mutation RemoveStar($repoid:ID!){
    removeStar(input:{starrableId:$repoid}){
      starrable{
        stargazers{
          totalCount
        }
        viewerHasStarred
      }
    }
  }
`;
