"use client";

import { useEffect, useState } from "react";

export function SakuraBloom() {
  const [petals, setPetals] = useState<any[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 105 - 5 + "vw",
      size: Math.random() * 0.8 + 0.5 + "rem",
      duration: Math.random() * 10 + 10 + "s", // Slower, more elegant
      delay: Math.random() * 10 + "s",
      drift: Math.random() * 50 + 50 + "px",
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute top-[-20px] opacity-60 mix-blend-multiply"
          style={{
            left: p.left,
            fontSize: p.size,
            animation: `sakura-fall ${p.duration} linear ${p.delay} infinite`,
            color: "#ffdae0",
            filter: "drop-shadow(0 0 2px rgba(255,192,203,0.5))",
          }}
        >
          🌸
        </div>
      ))}
      <style jsx global>{`
        @keyframes sakura-fall {
          0% { transform: translateY(-10px) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(105vh) translateX(100px) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
