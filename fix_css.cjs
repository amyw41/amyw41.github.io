const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'src', 'App.css');
const content = fs.readFileSync(p, 'utf8');

const lines = content.split('\n');
const blocks = [];
let currentBlock = null;

// Find media queries
for (let i = 0; i < lines.length; i++) {
  const l = lines[i];
  if (l.trim().startsWith('@media') && !currentBlock) {
    currentBlock = { start: i, lines: [], openBraces: 0 };
  }
  
  if (currentBlock) {
    currentBlock.lines.push(l);
    for (const char of l) {
      if (char === '{') currentBlock.openBraces++;
      if (char === '}') currentBlock.openBraces--;
    }
    
    if (currentBlock.openBraces === 0 && l.includes('}')) {
      currentBlock.end = i;
      blocks.push(currentBlock);
      currentBlock = null;
    }
  }
}

// Remove blocks from bottom to top so line numbers don't shift during removal
const newLines = [...lines];
for (let i = blocks.length - 1; i >= 0; i--) {
  const block = blocks[i];
  newLines.splice(block.start, block.end - block.start + 1);
}

// Append blocks at the end
newLines.push('');
newLines.push('/* ===== MEDIA QUERIES MOVED TO End ===== */');
blocks.forEach(block => {
  newLines.push('');
  newLines.push(...block.lines);
});

fs.writeFileSync(p, newLines.join('\n'));
console.log('Successfully moved ' + blocks.length + ' media queries to the end of the file.');
