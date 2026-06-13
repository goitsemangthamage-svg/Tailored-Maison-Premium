"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// These are high-end architectural images from Unsplash to ensure the site looks premium immediately
const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
];

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, ease: "easeInOut" } },
  exit: { opacity: 0, transition: { duration: 2, ease: "easeInOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function ComingSoon() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Ensures the page shows up after loading
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) return <div style={{backgroundColor: '#0a0a0a', minHeight: '100vh'}} />;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Cormorant+Garamond:wght@300;400&family=JetBrains+Mono:wght@300;400&display=swap');

        :root {
          --obsidian: #0a0a0a;
          --parchment: #f0ebe0;
          --parchment-dim: rgba(240, 235, 224, 0.72);
          --parchment-faint: rgba(240, 235, 224, 0.38);
          --gold-whisper: rgba(212, 192, 152, 0.55);
          --glass-bg: rgba(10, 10, 10, 0.6);
          --glass-border: rgba(240, 235, 224, 0.15);
        }

        body { 
          background: var(--obsidian); 
          margin: 0; 
          overflow-x: hidden;
        }

        .bg-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
        }

        .bg-image {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: blur(15px) brightness(0.3); /* Slightly reduced blur so we can see movement */
          transform: scale(1.1);
        }

        .page-wrapper {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 4rem 1.5rem;
          color: var(--parchment);
        }

        .hero-glass {
          max-width: 800px;
          padding: 3rem;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          text-align: center;
        }

        .hero-headline {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-subtext {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          opacity: 0.7;
          letter-spacing: 0.05em;
        }

        .logo {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          opacity: 0.8;
        }

        .vision-text {
          max-width: 600px;
          font-family: 'Cormorant Garamond', serif;
          line-height: 1.8;
          text-align: center;
          opacity: 0.6;
          margin-top: 2rem;
        }

        .status-marker {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          opacity: 0.3;
          text-transform: uppercase;
          margin-top: 4rem;
        }
      `}</style>

      {/* Background layer */}
      <div className="bg-layer">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="bg-image"
            style={{ backgroundImage: `url(${images[current]})` }}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </AnimatePresence>
      </div>

      {/* Main Content */}
      <main className="page-wrapper">
        <motion.p custom={0} variants={contentVariants} initial="hidden" animate="visible" className="logo">
          Tailored Maison
        </motion.p>

        <motion.div custom={0.4} variants={contentVariants} initial="hidden" animate="visible" className="hero-glass">
          <h1 className="hero-headline">
            Every business has a story <br />
            <span style={{fontStyle: 'italic', opacity: 0.8}}>but not all have a voice</span>
          </h1>
          <p className="hero-subtext">Bringing stories buried under corporate noise back to life.</p>
        </motion.div>

        <motion.div custom={0.8} variants={contentVariants} initial="hidden" animate="visible">
           <p className="vision-text">
            Stands for those who choose to wear the Crown of Service. <br />
            We honor excellence in the mundane.
          </p>
          <p style={{textAlign: 'center', marginTop: '20px', fontFamily: 'DM Serif Display', opacity: 0.8}}>Light for Leaders</p>
        </motion.div>

        <motion.p custom={1.2} variants={contentVariants} initial="hidden" animate="visible" className="status-marker">
          Refining Foundations — By Invitation Only
        </motion.p>
      </main>
    </>
  );
}
