```javascript
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { verifyUser } = require('./authentication');

const app = express();

app.use(async (req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    try {
      const currentUser = await verifyUser(token);
      req.currentUser = currentUser;
    } catch (err) {
      console.error(err);
    }
  }
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      currentUser: req.currentUser,
    };
  },
});

server.applyMiddleware({ app });

module.exports = app;
```