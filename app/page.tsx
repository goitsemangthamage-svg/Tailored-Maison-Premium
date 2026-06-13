";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2067"
];

export default function MaisonFinal() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="maison-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=Inter:wght@100;200&family=JetBrains+Mono:wght@100&display=swap');

        :root {
          --gold: #d4c098;
          --obsidian: #050505;
          --parchment: #f5f5f0;
          --accent-light: rgba(212, 192, 152, 0.15);
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
          /* Lighting Lifted: Changed brightness from 0.25 to 0.4 */
          filter: brightness(0.4) saturate(0.6) contrast(1.1);
        }

        /* The "Light for Leaders" Glow */
        .ambient-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 40%, var(--accent-light) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        .overlay-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
          z-index: 2;
        }

        .grain {
          position: fixed;
          inset: 0;
          background: url('https://grainy-gradients.vercel.app/noise.svg');
          opacity: 0.04;
          pointer-events: none;
          z-index: 50;
        }

        .content-frame {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 4rem 2rem;
          box-sizing: border-box;
          max-width: 1200px;
          margin: 0 auto;
        }

        .mono-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          opacity: 0.6;
        }

        .serif-hero {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(2.2rem, 7vw, 4.5rem);
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 2rem;
        }

        .vision-manifesto {
          max-width: 550px;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          line-height: 1.7;
          opacity: 0.8;
          font-weight: 300;
          margin-top: 3rem;
        }

        .author-line {
          font-style: italic;
          font-size: 0.9rem;
          opacity: 0.5;
          margin-bottom: 1.5rem;
          display: block;
        }

        .divider {
          width: 40px;
          height: 1px;
          background: var(--gold);
          margin: 2rem 0;
          opacity: 0.5;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          width: 100%;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; }
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
        <div className="ambient-glow" />
        <div className="overlay-vignette" />
      </div>

      <main className="content-frame">
        {/* TOP: Brand Signature */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}
        >
          <p className="mono-text">Tailored Maison</p>
          <span className="author-line">A vision inspired by the Author of life</span>
        </motion.div>

        {/* MIDDLE: The Core Story */}
        <div style={{ margin: '4rem 0' }}>
          <motion.h1 
            className="serif-hero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Every business has a story. <br /> 
            <span style={{ fontStyle: 'italic', opacity: 0.7 }}>But not all have a voice.</span>
          </motion.h1>

          <motion.div 
            className="divider"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 1 }}
          />

          <motion.div 
            className="vision-manifesto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          >
            Dedicated to bringing stories buried under corporate noise back to life. 
            <br /><br />
            The Maison stands for those who wake up every day and choose to wear the Crown of what it means to Serve others. 
            To honor those who execute at the highest level in what the world calls mundane—that is excellence.
          </motion.div>
        </div>

        {/* BOTTOM: Light & Status */}
        <div className="footer-grid">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <p className="mono-text" style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>Light for Leaders</p>
            <p style={{ fontSize: '0.9rem', maxWidth: '350px', fontWeight: 200, opacity: 0.7, lineHeight: 1.5 }}>
              A reminder that you do not have to stand alone. Your story matters.
            </p>
          </motion.div>

          <motion.p 
            className="mono-text"
            initial=
