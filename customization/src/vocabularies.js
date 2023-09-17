```javascript
import { gql } from '@apollo/client';

// GraphQL queries for fetching and updating vocabularies
const GET_VOCABULARIES = gql`
  query GetVocabularies($userId: ID!) {
    user(id: $userId) {
      vocabularies {
        id
        words
      }
    }
  }
`;

const UPDATE_VOCABULARY = gql`
  mutation UpdateVocabulary($userId: ID!, $vocabularyId: ID!, $words: [String]!) {
    updateVocabulary(userId: $userId, vocabularyId: $vocabularyId, words: $words) {
      id
      words
    }
  }
`;

// Function to fetch vocabularies
export async function fetchVocabularies(apolloClient, userId) {
  const { data } = await apolloClient.query({
    query: GET_VOCABULARIES,
    variables: { userId },
  });
  return data.user.vocabularies;
}

// Function to update a vocabulary
export async function updateVocabulary(apolloClient, userId, vocabularyId, words) {
  const { data } = await apolloClient.mutate({
    mutation: UPDATE_VOCABULARY,
    variables: { userId, vocabularyId, words },
  });
  return data.updateVocabulary;
}
```