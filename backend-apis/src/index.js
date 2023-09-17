```javascript
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const jwt = require('jsonwebtoken');

const typeDefs = require('./apolloServer.js');
const resolvers = require('./resolvers.js');
const { verifyUser } = require('./authentication.js');
const { connectDB } = require('./mongodb.js');

const app = express();

// CORS configuration
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// JWT authentication middleware
app.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (token) {
    try {
      const user = verifyUser(token);
      req.user = user;
    } catch (err) {
      console.log('Invalid token');
    }
  }
  next();
});

// Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ user: req.user })
});

server.applyMiddleware({ app });

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
```