"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070", // Architectural glass
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069", // Minimalist office
  "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067"  // Atmospheric lighting
];

export default function MaisonAtelier() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000); // Slower transitions for more "weight"
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="maison-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=Inter:wght@100;200&family=JetBrains+Mono:wght@100&display=swap');

        :root {
          --gold: #d4c098;
          --obsidian: #050505;
          --parchment: #f5f5f0;
        }

        body { 
          background: var(--obsidian); 
          color: var(--parchment);
          margin: 0;
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .canvas {
          position: fixed;
          inset: 0;
          overflow: hidden;
          z-index: 0;
        }

        .bg-zoom {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.25) saturate(0.5);
        }

        .overlay-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, transparent 20%, rgba(0,0,0,0.8) 100%);
          z-index: 1;
        }

        .grain {
          position: fixed;
          inset: 0;
          background: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.03;
          pointer-events: none;
          z-index: 50;
        }

        .content-frame {
          position: relative;
          z-index: 10;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 5rem 2rem;
          box-sizing: border-box;
          max-width: 1400px;
          margin: 0 auto;
        }

        .mono-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.5em;
          text-transform: uppercase;
          opacity: 0.5;
        }

        .serif-hero {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.5rem, 8vw, 5rem);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .divider-line {
          width: 60px;
          height: 1px;
          background: var(--gold);
          margin: 2rem 0;
          opacity: 0.4;
        }

        .vision-block {
          max-width: 500px;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.2rem;
          line-height: 1.6;
          opacity: 0.7;
        }

        .status-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          width: 100%;
        }
      `}</style>

      <div className="grain" />
      
      <div className="canvas">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="bg-zoom"
            style={{ backgroundImage: `url(${images[current]})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="overlay-vignette" />
      </div>

      <main className="content-frame">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <p className="mono-text">Tailored Maison</p>
        </motion.div>

        {/* Hero */}
        <div>
          <motion.h1 
            className="serif-hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            Every business <br /> 
            <span style={{ paddingLeft: '2rem' }}>has a story.</span>
          </motion.h1>
          
          <motion.div 
            className="divider-line"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 2, delay: 1 }}
          />

          <motion.p 
            className="vision-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            Dedicated to bringing stories buried under <br /> 
            corporate noise back to life.
          </motion.p>
        </div>

        {/* Footer Info */}
        <div className="status-footer">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 2 }}
          >
            <p className="mono-text" style={{ marginBottom: '0.5rem' }}>The Vision</p>
            <p style={{ fontSize: '0.8rem', maxWidth: '300px', fontWeight: 200, opacity: 0.8 }}>
              Light for Leaders. You do not have to stand alone.
            </p>
          </motion.div>

          <motion.p 
            className="mono-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 2.5 }}
          >
            Est. 2026 — Invitation Only
          </motion.p>
        </div>
      </main>
    </div>
  );
}
