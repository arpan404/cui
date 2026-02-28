'use client';
import * as React from 'react';
import { cn } from '../../utils/cn';

export interface WavyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Wave colors (CSS color values) */
  colors?: string[];
  /** Background color */
  backgroundFill?: string;
  /** Wave amplitude (height of waves) */
  waveWidth?: number;
  /** Animation speed multiplier */
  speed?: 'slow' | 'normal' | 'fast';
  /** Number of wave layers */
  layers?: number;
  /** Wave opacity */
  waveOpacity?: number;
  /** Numeric speed factor, overrides speed enum for finer control */
  animationSpeed?: number;
}

export function WavyBackground({
  className,
  colors,
  backgroundFill,
  waveWidth = 50,
  speed = 'normal',
  layers = 5,
  waveOpacity = 0.5,
  animationSpeed,
  children,
  ...props
}: WavyBackgroundProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const animationRef = React.useRef<number>(0);

  const defaultColors = [
    'var(--primary)',
    'var(--chart-2)',
    'var(--chart-3)',
    'var(--chart-4)',
    'var(--chart-5)',
  ];
  const waveColors = colors || defaultColors;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width;
    let h = canvas.height;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      w = rect.width * dpr;
      h = rect.height * dpr;
      canvas.width = w;
      canvas.height = h;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const speedMap = { slow: 0.5, normal: 1, fast: 2 };
    const speedFactor = animationSpeed != null ? 1 : (speedMap[speed] || 1);
    const timeIncrement = animationSpeed != null ? animationSpeed : 0.015;

    // Resolve CSS custom property colors to actual colors
    const resolvedColors: string[] = [];
    const tempEl = document.createElement('div');
    document.body.appendChild(tempEl);
    for (let i = 0; i < layers; i++) {
      const color = waveColors[i % waveColors.length];
      if (color && color.startsWith('var(')) {
        tempEl.style.color = color;
        const computed = getComputedStyle(tempEl).color;
        resolvedColors.push(computed);
      } else {
        resolvedColors.push(color || 'rgba(99,102,241,0.5)');
      }
    }
    document.body.removeChild(tempEl);

    let time = 0;
    const drawWidth = canvas.getBoundingClientRect().width;
    const drawHeight = canvas.getBoundingClientRect().height;

    const drawWave = (offset: number, color: string, amplitude: number, frequency: number, phase: number) => {
      ctx.beginPath();
      ctx.moveTo(0, drawHeight);
      for (let x = 0; x <= drawWidth; x += 2) {
        const y =
          drawHeight * 0.65 +
          Math.sin(x * frequency + time * speedFactor + phase) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speedFactor * 0.7 + phase * 1.3) * amplitude * 0.5 +
          offset;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(drawWidth, drawHeight);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, drawWidth, drawHeight);

      for (let i = 0; i < layers; i++) {
        const color = resolvedColors[i] || 'rgba(99,102,241,0.5)';
        // Parse color and add opacity
        const alpha = waveOpacity * (1 - i * 0.1);
        let fillColor: string;
        if (color.startsWith('rgb(')) {
          fillColor = color.replace('rgb(', 'rgba(').replace(')', `, ${alpha})`);
        } else if (color.startsWith('rgba(')) {
          fillColor = color.replace(/,\s*[\d.]+\)$/, `, ${alpha})`);
        } else {
          fillColor = color;
        }

        drawWave(
          i * 15,
          fillColor,
          waveWidth - i * 5,
          0.003 + i * 0.001,
          i * 1.5,
        );
      }

      time += timeIncrement;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [layers, waveColors, speed, waveWidth, waveOpacity, animationSpeed]);

  return (
    <div className={cn('relative flex flex-col items-center justify-center overflow-hidden', className)} {...props}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: backgroundFill || 'var(--background)' }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
