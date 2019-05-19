import { gql } from 'apollo-boost';

const repositoriesQuery = gql`
  query Myrepositories($first: Int!, $login: String!) {
    user(login: $login) {
      id,
      repositories(first: $first, privacy:PUBLIC, isLocked: false, orderBy: {field: CREATED_AT, direction: ASC}) {
        edges {
          node {
            id,
            name,
            createdAt,
            description,
            primaryLanguage {
              id,
              name,
              color,
            },
            viewerHasStarred,
          },
        },
        totalCount
      },
      avatarUrl,
      name,
      login,
      url,
    }
  }
`;

export default repositoriesQuery;
