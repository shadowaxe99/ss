```javascript
class Personality {
  constructor(name, accent) {
    this.name = name;
    this.accent = accent;
  }

  getName() {
    return this.name;
  }

  getAccent() {
    return this.accent;
  }

  setName(name) {
    this.name = name;
  }

  setAccent(accent) {
    this.accent = accent;
  }
}

module.exports = Personality;
```