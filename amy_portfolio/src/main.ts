import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

// Navigation state
let currentPage = 'home';

// Page content templates
const pages = {
  home: `
    <div class="hero">
      <div class="hero-content">
        <h1>Amy Wang</h1>
        <p>Product design where<br>aesthetic meets reality.</p>
      </div>
    </div>
  `,
  playground: `
    <section class="section full-page">
      <h2>Playground</h2>
      <div class="section-content">
        <p>Creative experiments and explorations...</p>
      </div>
    </section>
  `,
  about: `
    <section class="section full-page">
      <h2>About</h2>
      <div class="section-content">
        <p>Learn more about my design philosophy and approach...</p>
      </div>
    </section>
  `,
  contact: `
    <section class="section full-page">
      <h2>Contact</h2>
      <div class="section-content">
        <p>Let's connect and create something amazing together...</p>
      </div>
    </section>
  `
};

function renderPage(page: string) {
  currentPage = page;
  
  // Toggle body scroll based on page
  if (page === 'home') {
    document.body.classList.remove('page-mode');
  } else {
    document.body.classList.add('page-mode');
  }
  
  app.innerHTML = `
    ${pages[page as keyof typeof pages]}
    
    <nav class="top-nav">
      <a href="#" class="nav-home ${page === 'home' ? 'active' : ''}" data-page="home">Home</a>
      <div class="nav-center">
        <a href="#playground" class="${page === 'playground' ? 'active' : ''}" data-page="playground">Playground</a>
        <a href="#about" class="${page === 'about' ? 'active' : ''}" data-page="about">About</a>
      </div>
      <a href="#contact" class="nav-contact ${page === 'contact' ? 'active' : ''}" data-page="contact">Contact</a>
    </nav>
    
    <div class="cursor-outline"></div>
  `;
  
  // Scroll to top when changing pages
  window.scrollTo(0, 0);
  
  // Reattach cursor tracking
  const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;
  document.addEventListener('mousemove', (e) => {
    cursorOutline.style.left = e.clientX + 'px';
    cursorOutline.style.top = e.clientY + 'px';
  });
  
  // Attach navigation click handlers for pages
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = (e.currentTarget as HTMLElement).getAttribute('data-page');
      if (targetPage) {
        renderPage(targetPage);
      }
    });
  });
}

// Initial render
renderPage('home');
