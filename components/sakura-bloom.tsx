"use client";

import { useEffect, useState } from "react";

export function SakuraBloom() {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      fontSize: Math.random() * 10 + 10 + "px",
      duration: Math.random() * 8 + 7 + "s",
      delay: Math.random() * 10 + "s",
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-[-20px] animate-fall opacity-60"
          style={{
            left: p.left,
            fontSize: p.fontSize,
            animationDuration: p.duration,
            animationDelay: p.delay,
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
          }}
        >
          🌸
        </div>
      ))}
      <style jsx global>{`
        @keyframes fall {
          0% { transform: translateY(-10px) rotate(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation-name: fall;
        }
      `}</style>
    </div>
  );
}
