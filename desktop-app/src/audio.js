```javascript
const { webkitSpeechRecognition } = window;

class AudioService {
  constructor() {
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';
    this.isListening = false;
  }

  startListening() {
    this.isListening = true;
    this.recognition.start();
  }

  stopListening() {
    this.isListening = false;
    this.recognition.stop();
  }

  onResult(callback) {
    this.recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      callback(interimTranscript, finalTranscript);
    };
  }

  onError(callback) {
    this.recognition.onerror = (event) => {
      callback(event.error);
    };
  }
}

export default new AudioService();
```