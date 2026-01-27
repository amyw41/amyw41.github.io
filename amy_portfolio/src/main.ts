import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="hero">
    <div class="hero-content">
      <h1>Amy Wang</h1>
      <p>Product design where<br>aesthetic meets reality.</p>
    </div>
  </div>
  
  <nav class="top-nav">
    <a href="#" class="nav-home">Home</a>
    <div class="nav-center">
      <a href="#work">Work</a>
      <a href="#playground">Playground</a>
      <a href="#about">About</a>
    </div>
    <a href="#contact" class="nav-contact">Contact</a>
  </nav>
  
  <section id="work" class="section">
    <h2>Work</h2>
    <div class="section-content">
      <p>Featured projects and case studies coming soon...</p>
    </div>
  </section>
  
  <section id="playground" class="section">
    <h2>Playground</h2>
    <div class="section-content">
      <p>Creative experiments and explorations...</p>
    </div>
  </section>
  
  <section id="about" class="section">
    <h2>About</h2>
    <div class="section-content">
      <p>Learn more about my design philosophy and approach...</p>
    </div>
  </section>
  
  <section id="contact" class="section">
    <h2>Contact</h2>
    <div class="section-content">
      <p>Let's connect and create something amazing together...</p>
    </div>
  </section>
  
  <div class="cursor-outline"></div>
`

// Custom cursor outline - instant follow
const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

document.addEventListener('mousemove', (e) => {
  cursorOutline.style.left = e.clientX + 'px';
  cursorOutline.style.top = e.clientY + 'px';
});

