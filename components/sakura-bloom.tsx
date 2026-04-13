"use client";

import { useEffect, useState } from "react";

export function SakuraBloom() {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Generate petals only on client-side
    const newPetals = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 105 - 5 + "vw",
      size: Math.random() * 4 + 6 + "px",
      duration: Math.random() * 8 + 8 + "s",
      delay: Math.random() * 12 + "s",
      opacity: Math.random() * 0.4 + 0.3,
      blur: Math.random() * 2 + "px",
      swing: Math.random() * 50 + 50 + "px", // Horizontal drift distance
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 🌸 Side Branches (Framing) */}
      <div 
        className="absolute top-0 left-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-contain bg-no-repeat opacity-60 mix-blend-multiply scale-x-[-1] translate-x-[-20%] translate-y-[-10%]"
        style={{ backgroundImage: "url('/sakura-branch.png')" }}
      />
      <div 
        className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-contain bg-no-repeat opacity-60 mix-blend-multiply translate-x-[20%] translate-y-[-10%]"
        style={{ backgroundImage: "url('/sakura-branch.png')" }}
      />

      {/* 🌸 Falling Petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-pink-300 transform-gpu"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: `blur(${p.blur})`,
            animation: `sakura-fall ${p.duration} linear ${p.delay} infinite`,
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes sakura-fall {
          0% { 
            transform: translateY(-20px) translateX(0) scale(0) rotate(0deg); 
            opacity: 0; 
          }
          10% { 
            opacity: 0.6; 
            scale: 1; 
          }
          50% {
            transform: translateY(50vh) translateX(50px) rotate(180deg);
          }
          90% { 
            opacity: 0.6; 
            scale: 1; 
          }
          100% { 
            transform: translateY(110vh) translateX(100px) scale(0.5) rotate(360deg); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  );
}
