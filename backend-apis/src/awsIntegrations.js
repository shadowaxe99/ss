```javascript
const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  region: 'us-west-2',
});

// Create AWS Service Objects
const lambda = new AWS.Lambda();
const s3 = new AWS.S3();
const ses = new AWS.SES();

// AWS Lambda Function
const invokeLambda = async (functionName, payload) => {
  const params = {
    FunctionName: functionName,
    Payload: JSON.stringify(payload),
  };

  const response = await lambda.invoke(params).promise();
  return response;
};

// AWS S3 Function
const uploadToS3 = async (bucketName, key, body) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Body: body,
  };

  const response = await s3.upload(params).promise();
  return response;
};

// AWS SES Function
const sendEmail = async (source, to, subject, body) => {
  const params = {
    Source: source,
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
      },
      Body: {
        Text: {
          Data: body,
        },
      },
    },
  };

  const response = await ses.sendEmail(params).promise();
  return response;
};

module.exports = {
  invokeLambda,
  uploadToS3,
  sendEmail,
};
```