const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, 'src', 'App.css');
const content = fs.readFileSync(p, 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('@media')) {
    console.log(`${i + 1}: ${l}`);
  }
});
