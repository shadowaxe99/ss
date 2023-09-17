```javascript
import { DialogTree } from 'dialogflow';

class DialogTrees {
  constructor() {
    this.dialogTrees = {};
  }

  createDialogTree(userId, treeName, treeData) {
    if (!this.dialogTrees[userId]) {
      this.dialogTrees[userId] = {};
    }
    this.dialogTrees[userId][treeName] = new DialogTree(treeData);
  }

  getDialogTree(userId, treeName) {
    if (this.dialogTrees[userId] && this.dialogTrees[userId][treeName]) {
      return this.dialogTrees[userId][treeName];
    }
    return null;
  }

  updateDialogTree(userId, treeName, treeData) {
    if (this.dialogTrees[userId] && this.dialogTrees[userId][treeName]) {
      this.dialogTrees[userId][treeName].updateTree(treeData);
    }
  }

  deleteDialogTree(userId, treeName) {
    if (this.dialogTrees[userId] && this.dialogTrees[userId][treeName]) {
      delete this.dialogTrees[userId][treeName];
    }
  }
}

export default new DialogTrees();
```