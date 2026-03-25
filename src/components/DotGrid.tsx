"use client";

import { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio, 2);
    let width = 0;
    let height = 0;
    let isVisible = true;
    let animationId: number;

    // Mouse interaction
    let mouseX = -9999;
    let mouseY = -9999;
    const MOUSE_RADIUS = 200;

    // Color
    const accentR = 17;
    const accentG = 76;
    const accentB = 90;

    // Network nodes
    const nodes: Node[] = [];
    const CONNECTION_DIST = 160;
    const NODE_COUNT_BASE = 65;
    const DRIFT_RANGE = 25;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      nodes.length = 0;
      const area = width * height;
      const count = Math.round(NODE_COUNT_BASE * (area / (1400 * 800)));

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: 0,
          baseY: 0,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 1 + 1.5,
          connections: [],
        });
        nodes[i].baseX = nodes[i].x;
        nodes[i].baseY = nodes[i].y;
      }

      // Pre-compute connections
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].connections = [];
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].baseX - nodes[j].baseX;
          const dy = nodes[i].baseY - nodes[j].baseY;
          if (dx * dx + dy * dy < CONNECTION_DIST * CONNECTION_DIST) {
            nodes[i].connections.push(j);
          }
        }
      }
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, width, height);

      // Update positions - gentle drift + mouse repulsion
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        let tx = n.baseX + Math.sin(time * 0.001 * n.vx * 10 + i) * DRIFT_RANGE;
        let ty = n.baseY + Math.cos(time * 0.001 * n.vy * 10 + i * 0.7) * DRIFT_RANGE;

        // Mouse interaction - push nodes away, brighten nearby
        const mdx = tx - mouseX;
        const mdy = ty - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < MOUSE_RADIUS && mDist > 0) {
          const force = (1 - mDist / MOUSE_RADIUS) * 40;
          tx += (mdx / mDist) * force;
          ty += (mdy / mDist) * force;
        }

        n.x = tx;
        n.y = ty;
      }

      // Draw connections
      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        for (const j of n.connections) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let opacity = Math.max(0, 1 - dist / (CONNECTION_DIST + 60)) * 0.1;

          // Brighten connections near mouse
          const midX = (n.x + m.x) / 2;
          const midY = (n.y + m.y) / 2;
          const mDistMid = Math.sqrt(
            (midX - mouseX) ** 2 + (midY - mouseY) ** 2
          );
          if (mDistMid < MOUSE_RADIUS) {
            opacity += (1 - mDistMid / MOUSE_RADIUS) * 0.18;
          }

          ctx!.beginPath();
          ctx!.moveTo(n.x, n.y);
          ctx!.lineTo(m.x, m.y);
          ctx!.strokeStyle = `rgba(${accentR},${accentG},${accentB},${opacity})`;
          ctx!.stroke();
        }
      }

      // Draw mouse-to-nearby-node connections
      if (mouseX > 0 && mouseY > 0) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const dx = n.x - mouseX;
          const dy = n.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS * 0.8) {
            const opacity = (1 - dist / (MOUSE_RADIUS * 0.8)) * 0.12;
            ctx!.beginPath();
            ctx!.moveTo(mouseX, mouseY);
            ctx!.lineTo(n.x, n.y);
            ctx!.strokeStyle = `rgba(${accentR},${accentG},${accentB},${opacity})`;
            ctx!.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Fade edges
        const edgeFade = Math.min(
          n.x / 120,
          (width - n.x) / 120,
          n.y / 120,
          (height - n.y) / 120,
          1
        );

        // Mouse proximity boost
        const mDist = Math.sqrt((n.x - mouseX) ** 2 + (n.y - mouseY) ** 2);
        const mouseBoost = mDist < MOUSE_RADIUS
          ? (1 - mDist / MOUSE_RADIUS) * 0.5
          : 0;

        const alpha = (0.3 + mouseBoost) * edgeFade;
        const r = n.radius + mouseBoost * 1.5;

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${accentR},${accentG},${accentB},${alpha})`;
        ctx!.fill();
      }

      // Data pulses - multiple at once
      for (let p = 0; p < 4; p++) {
        const offset = (nodes.length / 4) * p;
        const pulsePhase = ((time * 0.0008) + offset) % nodes.length;
        const pulseIdx = Math.floor(pulsePhase);
        const pulseFrac = pulsePhase - pulseIdx;
        if (pulseIdx < nodes.length && nodes[pulseIdx].connections.length > 0) {
          const src = nodes[pulseIdx];
          const connIdx = p % src.connections.length;
          const tgt = nodes[src.connections[connIdx]];
          const px = src.x + (tgt.x - src.x) * pulseFrac;
          const py = src.y + (tgt.y - src.y) * pulseFrac;

          ctx!.beginPath();
          ctx!.arc(px, py, 2.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${accentR},${accentG},${accentB},0.45)`;
          ctx!.fill();
        }
      }
    }

    function animate(time: number) {
      animationId = requestAnimationFrame(animate);
      if (!isVisible) return;
      draw(time);
    }

    // Mouse tracking - uses parent element for hit area
    const parent = canvas.parentElement!;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    resize();
    seed();
    animationId = requestAnimationFrame(animate);

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleResize = () => {
      resize();
      seed();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
    />
  );
}
