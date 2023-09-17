```javascript
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const { graphqlHTTP } = require('express-graphql');
const { ApolloServer } = require('./apolloServer');
const { authentication } = require('./authentication');
const { security } = require('./security');

const app = express();

// Enable CORS
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Authentication middleware
app.use(authentication);

// Security middleware
app.use(security);

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: ApolloServer,
  graphiql: true,
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```