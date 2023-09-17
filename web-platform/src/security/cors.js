```javascript
import cors from 'cors';

const corsOptions = {
  origin: function (origin, callback) {
    const whiteList = process.env.CORS_WHITELIST.split(',');
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
};

export default cors(corsOptions);
```