"use client";

import { useEffect, useState } from "react";

const DEPARTURE_DATE = "2025-05-25T00:00:00";

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const target = new Date(DEPARTURE_DATE).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("✈️ Trip is happening NOW!");
        clearInterval(timer);
        return;
      }

      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);

      setTimeLeft(`🗓 Departure in ${d}d ${h}h ${m}m`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F7B731] text-[#1B2A4A] inline-block px-4 py-1.5 rounded-full font-bold text-sm mt-3 shadow-sm">
      {timeLeft || "Loading..."}
    </div>
  );
}
