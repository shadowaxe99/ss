```javascript
const dialogflow = require('dialogflow');
const uuid = require('uuid');

class ContextTracking {
  constructor(sessionId = uuid.v4()) {
    this.sessionId = sessionId;
    this.sessionClient = new dialogflow.SessionsClient();
    this.sessionPath = this.sessionClient.sessionPath(process.env.DIALOGFLOW_PROJECT_ID, this.sessionId);
  }

  async trackContext(text, contexts = []) {
    const request = {
      session: this.sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: 'en-US',
        },
      },
      queryParams: {
        contexts: contexts.map(context => ({
          name: this.sessionClient.contextPath(process.env.DIALOGFLOW_PROJECT_ID, this.sessionId, context),
          lifespanCount: 5,
        })),
      },
    };

    const responses = await this.sessionClient.detectIntent(request);
    return responses[0];
  }
}

module.exports = ContextTracking;
```