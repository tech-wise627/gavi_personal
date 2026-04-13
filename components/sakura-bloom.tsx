"use client";

import { useEffect, useState } from "react";

export function SakuraBloom() {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    // Generate petals only on client-side
    const newPetals = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 105 - 5 + "vw",
      size: Math.random() * 4 + 6 + "px", // Varying small sizes
      duration: Math.random() * 8 + 8 + "s",
      delay: Math.random() * 10 + "s",
      opacity: Math.random() * 0.4 + 0.3,
      blur: Math.random() * 2 + "px",
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
          0% { transform: translateY(-10px) translateX(0) scale(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; scale: 1; }
          90% { opacity: 0.6; scale: 1; }
          100% { transform: translateY(105vh) translateX(100px) scale(0.5) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
