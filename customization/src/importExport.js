```javascript
import { ApolloClient, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

export const importSettings = async (settings) => {
  const IMPORT_SETTINGS = gql`
    mutation ImportSettings($settings: String!) {
      importSettings(settings: $settings)
    }
  `;

  const { data } = await client.mutate({
    mutation: IMPORT_SETTINGS,
    variables: { settings: JSON.stringify(settings) },
  });

  return data.importSettings;
};

export const exportSettings = async () => {
  const EXPORT_SETTINGS = gql`
    query ExportSettings {
      exportSettings
    }
  `;

  const { data } = await client.query({
    query: EXPORT_SETTINGS,
  });

  return JSON.parse(data.exportSettings);
};
```