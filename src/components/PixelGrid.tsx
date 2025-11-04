import { useEffect, useRef } from 'react';

interface Pixel {
  x: number;
  y: number;
  color: string;
  timestamp: number;
}

export const PixelGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);

  const colors = [
    '#3b82f6', // blue
    '#8b5cf6', // purple
    '#06b6d4', // cyan
    '#10b981', // green
    '#f59e0b', // yellow
    '#ef4444', // red
    '#ec4899', // pink
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const pixelSize = 12;
    const gap = 2;
    const totalSize = pixelSize + gap;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = 200;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const cols = Math.floor(canvas.width / totalSize);
    const rows = Math.floor(canvas.height / totalSize);

    const draw = () => {
      ctx.fillStyle = 'transparent';
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.fillRect(i * totalSize, j * totalSize, pixelSize, pixelSize);
        }
      }

      // Draw colored pixels
      const now = Date.now();
      pixelsRef.current = pixelsRef.current.filter(p => now - p.timestamp < 3000);

      pixelsRef.current.forEach((pixel) => {
        const age = now - pixel.timestamp;
        const opacity = Math.max(0, 1 - age / 3000);
        ctx.fillStyle = pixel.color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
        ctx.fillRect(pixel.x * totalSize, pixel.y * totalSize, pixelSize, pixelSize);
      });

      requestAnimationFrame(draw);
    };

    const addRandomPixel = () => {
      const x = Math.floor(Math.random() * cols);
      const y = Math.floor(Math.random() * rows);
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      pixelsRef.current.push({ x, y, color, timestamp: Date.now() });
    };

    // Add random pixels periodically
    const interval = setInterval(addRandomPixel, 200);
    draw();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-[200px] mb-8 rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
};
