// Mist particle system for atmospheric background
interface MistParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  color: { r: number; g: number; b: number };
  noiseOffset: number;
}

export class MistBackground {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private particles: MistParticle[] = [];
  private mouse = { x: 0, y: 0, smoothX: 0, smoothY: 0 };
  private width = 0;
  private height = 0;
  private time = 0;
  private animationId: number | null = null;

  // Soft pastel color palette
  private colors = [
    { r: 255, g: 240, b: 245 }, // soft pink
    { r: 255, g: 250, b: 240 }, // cream
    { r: 255, g: 245, b: 250 }, // lavender cream
    { r: 255, g: 235, b: 238 }, // warm white pink
    { r: 250, g: 245, b: 255 }, // cool white
  ];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw new Error('Could not get canvas context');
    this.ctx = ctx;

    this.resize();
    this.initParticles();
    this.setupMouseTracking();
    this.animate();

    window.addEventListener('resize', () => this.resize());
  }

  private resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  private initParticles() {
    const particleCount = Math.floor((this.width * this.height) / 8000);
    this.particles = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      
      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseX: x,
        baseY: y,
        size: 80 + Math.random() * 200,
        opacity: 0.15 + Math.random() * 0.25,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        noiseOffset: Math.random() * 1000,
      });
    }
  }

  private setupMouseTracking() {
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  private noise(x: number, y: number, t: number): number {
    // Simple Perlin-like noise using sine waves
    const freq1 = 0.003;
    const freq2 = 0.007;
    return (
      Math.sin(x * freq1 + t) * 
      Math.cos(y * freq1 - t) * 0.5 +
      Math.sin(x * freq2 - t * 0.5) * 
      Math.cos(y * freq2 + t * 0.5) * 0.5
    );
  }

  private animate = () => {
    this.time += 0.003;

    // Smooth mouse following with easing
    this.mouse.smoothX += (this.mouse.x - this.mouse.smoothX) * 0.05;
    this.mouse.smoothY += (this.mouse.y - this.mouse.smoothY) * 0.05;

    // Create gradient background
    const gradient = this.ctx.createRadialGradient(
      this.width / 2, this.height / 2, 0,
      this.width / 2, this.height / 2, this.width * 0.7
    );
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.3, '#fffcf8');
    gradient.addColorStop(0.6, '#fff8f2');
    gradient.addColorStop(1, '#ffd7e6');
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);

    // Update and draw particles
    this.ctx.globalCompositeOperation = 'source-over';
    
    this.particles.forEach((particle) => {
      // Apply noise-based drift
      const noiseValue = this.noise(
        particle.baseX + particle.noiseOffset,
        particle.baseY + particle.noiseOffset,
        this.time
      );
      
      const driftX = Math.cos(this.time + particle.noiseOffset) * 0.5;
      const driftY = Math.sin(this.time * 0.7 + particle.noiseOffset) * 0.5;

      particle.vx += driftX * 0.01;
      particle.vy += driftY * 0.01;

      // Mouse interaction - fluid displacement
      const dx = particle.x - this.mouse.smoothX;
      const dy = particle.y - this.mouse.smoothY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 250;

      if (dist < maxDist && dist > 0) {
        const force = ((maxDist - dist) / maxDist) * 0.8;
        const angle = Math.atan2(dy, dx);
        particle.vx += Math.cos(angle) * force;
        particle.vy += Math.sin(angle) * force;
      }

      // Return to base position with spring-like physics
      const returnForceX = (particle.baseX - particle.x) * 0.002;
      const returnForceY = (particle.baseY - particle.y) * 0.002;
      particle.vx += returnForceX;
      particle.vy += returnForceY;

      // Apply drag
      particle.vx *= 0.95;
      particle.vy *= 0.95;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < -particle.size) particle.x = this.width + particle.size;
      if (particle.x > this.width + particle.size) particle.x = -particle.size;
      if (particle.y < -particle.size) particle.y = this.height + particle.size;
      if (particle.y > this.height + particle.size) particle.y = -particle.size;

      // Draw particle with radial gradient (mist effect)
      const gradient = this.ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size
      );
      
      const { r, g, b } = particle.color;
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${particle.opacity})`);
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.4})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

      this.ctx.fillStyle = gradient;
      this.ctx.filter = 'blur(40px)';
      this.ctx.fillRect(
        particle.x - particle.size,
        particle.y - particle.size,
        particle.size * 2,
        particle.size * 2
      );
      this.ctx.filter = 'none';
    });

    this.animationId = requestAnimationFrame(this.animate);
  };

  public destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    window.removeEventListener('resize', () => this.resize());
  }
}
