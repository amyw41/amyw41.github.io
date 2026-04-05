const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

// Update gap in desktop desc-group
css = css.replace(
  `\n.desc-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}`,
  `\n.desc-group {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}`
);

// Add line-height to desktop desc-line
css = css.replace(
  `\n.desc-line {\n  font-family: "Raleway", Arial, sans-serif;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: var(--text);\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}`,
  `\n.desc-line {\n  font-family: "Raleway", Arial, sans-serif;\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: var(--text);\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  line-height: 1.6;\n}`
);

// Update align-items and wrap on mobile
css = css.replace(
  `  .desc-group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: fit-content;\n    /* Allow container to shrink to text width so it can be centered */\n    max-width: 90vw;\n    margin-top: 1rem;\n  }\n\n  .desc-line {\n    font-size: clamp(1rem, 3.5vw, 1.5rem);\n    flex-wrap: nowrap;\n    /* Keep arrow with text */\n  }`,
  `  .desc-group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: fit-content;\n    /* Allow container to shrink to text width so it can be centered */\n    max-width: 90vw;\n    margin-top: 1rem;\n  }\n\n  .desc-line {\n    font-size: clamp(1rem, 3.5vw, 1.5rem);\n    flex-wrap: wrap;\n    /* Keep arrow with text */\n  }`
);

fs.writeFileSync('src/App.css', css);
console.log('Spacing updated cleanly!');
