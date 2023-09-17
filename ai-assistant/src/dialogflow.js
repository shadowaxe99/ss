```javascript
const dialogflow = require('dialogflow');
const uuid = require('uuid');

class DialogflowService {
  constructor() {
    this.sessionClient = new dialogflow.SessionsClient();
    this.sessionId = uuid.v4();
  }

  async detectIntentAndRespond(query, languageCode = 'en-US') {
    const sessionPath = this.sessionClient.sessionPath('YOUR_PROJECT_ID', this.sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: languageCode,
        },
      },
    };

    const responses = await this.sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return result.fulfillmentText;
  }
}

module.exports = DialogflowService;
```