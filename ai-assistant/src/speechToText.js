```javascript
const speech = require('@google-cloud/speech');

const client = new speech.SpeechClient();

async function transcribeAudioStream(audioStream) {
  const request = {
    audio: {
      content: audioStream,
    },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: 'en-US',
    },
  };

  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  
  return transcription;
}

module.exports = {
  transcribeAudioStream,
};
```