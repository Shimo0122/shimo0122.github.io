import React, { useEffect, useRef } from 'react';

const SciFiBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      type: 'cross' | 'square' | 'rhombus';
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slow drift
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 3 + 2;
        
        const types: ('cross' | 'square' | 'rhombus')[] = ['cross', 'square', 'rhombus'];
        this.type = types[Math.floor(Math.random() * types.length)];
        
        // Cyan or White, low opacity for "holographic" feel
        const isCyan = Math.random() > 0.7;
        this.color = isCyan
            ? `rgba(0, 240, 255, ${Math.random() * 0.4 + 0.1})` 
            : `rgba(200, 200, 200, ${Math.random() * 0.2 + 0.1})`;
      }

      update(mouseX: number, mouseY: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Subtle Mouse Repulsion
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulsionRadius = 150;
        
        if (dist < repulsionRadius) {
            const forceDirectionX = dx / dist;
            const forceDirectionY = dy / dist;
            const force = (repulsionRadius - dist) / repulsionRadius;
            const repulsionStrength = 0.05;
            
            // Push away
            this.vx -= forceDirectionX * force * repulsionStrength;
            this.vy -= forceDirectionY * force * repulsionStrength;
        }

        // Screen Wrap
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;

        if (this.type === 'square') {
            ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        } else if (this.type === 'cross') {
            ctx.beginPath();
            const s = this.size;
            ctx.moveTo(this.x - s, this.y);
            ctx.lineTo(this.x + s, this.y);
            ctx.moveTo(this.x, this.y - s);
            ctx.lineTo(this.x, this.y + s);
            ctx.stroke();
        } else if (this.type === 'rhombus') {
            ctx.beginPath();
            const s = this.size;
            ctx.moveTo(this.x, this.y - s);
            ctx.lineTo(this.x + s, this.y);
            ctx.lineTo(this.x, this.y + s);
            ctx.lineTo(this.x - s, this.y);
            ctx.closePath();
            ctx.fill();
        }
      }
    }

    // Initialize Particles
    const particles: Particle[] = [];
    // Adjust density based on screen area
    const particleCount = Math.min(Math.floor((width * height) / 10000), 150);
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
        // Correct mouse position relative to canvas (though full screen usually 0,0)
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
        ctx.clearRect(0, 0, width, height);

        // 1. Draw Connections (Lines)
        ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)'; // Very faint cyan
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i++) {
            const p1 = particles[i];
            
            // Check neighbors for connections
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Connect if close enough
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }

        // 2. Update & Draw Particles
        particles.forEach(p => {
            p.update(mouseX, mouseY);
            p.draw(ctx);
        });

        requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 bg-[#0a0a0a] z-0 overflow-hidden">
        {/* Canvas Layer */}
        <canvas ref={canvasRef} className="absolute inset-0 block" />
        
        {/* Technical Grid Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-10" 
          style={{ 
             backgroundImage: `
                linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px), 
                linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
             `,
             backgroundSize: '40px 40px'
          }}
        />

        {/* Heavy Vignette for focus */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#000000_100%)] opacity-70"></div>
    </div>
  );
};

export default SciFiBackground;