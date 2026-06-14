use client";
import { motion } from "framer-motion";
const sections = [
 { tag: "Tailored Maison", h1: "Every business has a story.", h1i: "But not all have a voice.", p: "A vision inspired by the Author of life" },
 { tag: "The Maison", h1: "The Crown of Service", h1i: "", p: "To honor those who execute at the highest level in what the world calls mundane—that is excellence." },
 { tag: "2026", h1: "Light for Leaders", h1i: "", p: "Dedicated to bringing stories buried under corporate noise back to life. Invitation Only." }
];
export default function Home() {
 return (
  <div style={{ backgroundColor:'#050505', color:'#f5f5f0', fontFamily:'serif' }}>
   <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;1,300&family=JetBrains+Mono:wght@100&display=swap');
    .bg { position:fixed; inset:0; background:url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069') center/cover; filter:brightness(0.5); z-index:0; }
    section { position:relative; z-index:10; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:0 2rem; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05); }
    .mono { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:4px; text-transform:uppercase; opacity:0.5; margin-bottom:20px; }
    .serif { font-family:'Cormorant Garamond',serif; font-size:clamp(2rem,7vw,5rem); line-height:1.1; }
   `}</style>
   <div className="bg" /><div style={{position:'fixed',inset:0,background:'radial-gradient(circle,transparent,rgba(0,0,0,0.8))',zIndex:1}} />
   {sections.map((s, i) => (
    <section key={i}>
     <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:1}}>
      <p className="mono">{s.tag}</p>
      <h1 className="serif">{s.h1}<br/><span style={{fontStyle:'italic',opacity:0.7}}>{s.h1i}</span></h1>
      <p style={{opacity:0.5,marginTop:30,maxWidth:500,lineHeight:1.6}}>{s.p}</p>
     </motion.div>
    </section>
   ))}
  </div>
 );
              }
