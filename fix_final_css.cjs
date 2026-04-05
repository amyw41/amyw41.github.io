const fs = require('fs');

let css = fs.readFileSync('src/App.css', 'utf8');

// 1. .project-img borders
css = css.replace(
  `  border: 10px solid rgba(255, 255, 255, 0.2);\n  border-radius: 1.5rem;`,
  `  border: clamp(4px, 0.8vw, 10px) solid rgba(255, 255, 255, 0.2);\n  border-radius: clamp(0.75rem, 2vw, 1.5rem);`
);

// 2. .project-preview-square-third
css = css.replace(
  `.project-preview-square-third .project-side-img {\n  border-radius: 32px;\n}`,
  `.project-preview-square-third .project-side-img {\n  /* removed to keep border radius consistent */\n}`
);

// 3. .project-side-img borders
css = css.replace(
  `  border-radius: 24px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  border: 8px solid rgba(255, 255, 255, 0.3);`,
  `  border-radius: clamp(8px, 2vw, 24px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  border: clamp(3px, 0.6vw, 8px) solid rgba(255, 255, 255, 0.3);`
);

// 4. white-space nowrap to normal in @media (max-width: 750px)
css = css.replace(
  `@media (max-width: 750px) {\n  .desc-text {\n    display: inline;\n    white-space: nowrap;\n  }`,
  `@media (max-width: 750px) {\n  .desc-text {\n    display: inline;\n    white-space: normal;\n  }`
);

// 5. desc-group and desc-line in @media (max-width: 1024px)
css = css.replace(
  `  .desc-group {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    width: fit-content;\n    /* Allow container to shrink to text width so it can be centered */\n    max-width: 90vw;\n    margin-top: 1rem;\n  }\n\n  .desc-line {\n    font-size: clamp(1rem, 3.5vw, 1.5rem);\n    flex-wrap: nowrap;\n    /* Keep arrow with text */\n  }`,
  `  .desc-group {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: fit-content;\n    /* Allow container to shrink to text width so it can be centered */\n    max-width: 90vw;\n    margin-top: 1rem;\n    text-align: center;\n  }\n\n  .desc-line {\n    font-size: clamp(1rem, 3.5vw, 1.5rem);\n    flex-wrap: wrap;\n    justify-content: center;\n    text-align: center;\n    /* Keep arrow with text */\n  }`
);

fs.writeFileSync('src/App.css', css);
console.log('Fixed CSS cleanly!');
