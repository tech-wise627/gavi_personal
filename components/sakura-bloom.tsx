"use client";

import { useEffect, useState } from "react";

export function SakuraBloom() {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 105 - 5 + "vw",
      size: Math.random() * 5 + 5 + "px",
      duration: Math.random() * 10 + 10 + "s",
      delay: Math.random() * 15 + "s",
      opacity: Math.random() * 0.4 + 0.3,
      blur: Math.random() * 2 + "px",
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 🌳 Standing Trees ( Framing from sides ) */}
      <div 
        className="absolute bottom-0 left-0 w-[50vw] h-[80vh] max-w-[600px] bg-contain bg-no-repeat bg-bottom opacity-40 mix-blend-multiply translate-x-[-15%] translate-y-[5%]"
        style={{ backgroundImage: "url('/standing-sakura.png')" }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[50vw] h-[80vh] max-w-[600px] bg-contain bg-no-repeat bg-bottom opacity-40 mix-blend-multiply scale-x-[-1] translate-x-[15%] translate-y-[5%]"
        style={{ backgroundImage: "url('/standing-sakura.png')" }}
      />

      {/* 🌸 Overhead Branches ( Canopy ) */}
      <div 
        className="absolute top-0 left-0 w-[40vw] h-[40vw] max-w-[450px] bg-contain bg-no-repeat opacity-30 mix-blend-multiply scale-x-[-1] translate-x-[-10%] translate-y-[-20%]"
        style={{ backgroundImage: "url('/sakura-branch.png')" }}
      />
      <div 
        className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[450px] bg-contain bg-no-repeat opacity-30 mix-blend-multiply translate-x-[10%] translate-y-[-20%]"
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
          0% { transform: translateY(-20px) translateX(0) scale(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; scale: 1; }
          50% { transform: translateY(50vh) translateX(40px) rotate(180deg); }
          100% { transform: translateY(110vh) translateX(80px) scale(0.5) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
