const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'src', 'App.css');
const content = fs.readFileSync(p, 'utf8');
const lines = content.split('\n');
const blocks = [];
let currentBlock = null;

lines.forEach((l, i) => {
  if (l.includes('@media')) {
    currentBlock = { start: i + 1, query: l.trim(), end: null, openBraces: 0 };
  }
  if (currentBlock) {
    for (let char of l) {
      if (char === '{') currentBlock.openBraces++;
      if (char === '}') currentBlock.openBraces--;
    }
    if (currentBlock.openBraces === 0 && l.includes('}')) {
      currentBlock.end = i + 1;
      blocks.push(currentBlock);
      currentBlock = null;
    }
  }
});
console.log(JSON.stringify(blocks, null, 2));
