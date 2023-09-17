```javascript
const { Forge } = require('@electron-forge/core');
const path = require('path');

const main = async () => {
  const forge = new Forge({
    dir: path.resolve(__dirname, '..'),
    requireLogic: (filePath) => require(filePath),
  });

  await forge.init();
  await forge.package();
};

main().catch((error) => {
  console.error('Packaging failed', error);
  process.exit(1);
});
```