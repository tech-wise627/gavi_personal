"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function OverviewSection() {
  const { data } = useTripStore();

  if (!data) return null;

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-serif font-black tracking-tight text-[#1a2a44]">
          Family Chali <span className="text-[#e63946]">Japan</span> 🇯🇵
        </h1>
        <p className="text-slate-500 font-medium tracking-wide">
          May 25 – June 8, 2025 • 14 Days of Adventure
        </p>

        {/* City Timeline Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-8">
          <CityPill icon="🗼" name="Tokyo" nights="4 nights" />
          <span className="text-red-300">→</span>
          <CityPill icon="⛩️" name="Kyoto" nights="3 nights" />
          <span className="text-red-300">→</span>
          <CityPill icon="☮️" name="Hiroshima" nights="2 nights" />
          <span className="text-red-300">→</span>
          <CityPill icon="🏯" name="Osaka" nights="5 nights" />
        </div>

        {/* Meta Status Pills */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <Badge className="bg-[#fff8e1] text-[#795548] border-none px-4 py-1.5 rounded-full font-bold shadow-sm">
            👨‍👩‍👧‍👦 Family Trip
          </Badge>
          <Badge className="bg-[#e8f5e9] text-[#2e7d32] border-none px-4 py-1.5 rounded-full font-bold shadow-sm">
            🥬 Vegetarian (eggs ok)
          </Badge>
          <Badge className="bg-[#f3f4f6] text-[#4b5563] border-none px-4 py-1.5 rounded-full font-bold shadow-sm">
            💵 Mid-Range Budget
          </Badge>
        </div>
      </div>

      {/* JR Pass Premium Card */}
      <div className="max-w-2xl mx-auto pt-8">
        <Card className="bg-[#1a2a44] text-white border-[3px] border-[#d4af37]/30 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="text-8xl">🚄</span>
          </div>
          <CardContent className="p-8 relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🎫</span>
              <h3 className="text-[#d4af37] font-serif font-bold text-xl uppercase tracking-widest">The Golden Ticket</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div>
                  <p className="text-white/60 text-xs uppercase font-bold tracking-widest mb-1">Pass Version</p>
                  <p className="text-xl font-bold">14-Day Whole Japan Rail Pass</p>
                </div>
                <div className="text-right">
                  <p className="text-[#d4af37] text-2xl font-black italic">¥80,000</p>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">Per Adult</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InclusionItem text="Unlimited Shinkansen Travel" />
                <InclusionItem text="Narita Express (N'EX) Included" />
                <InclusionItem text="Local JR Lines & Miyajima Ferry" />
                <InclusionItem text="Seat Reservations (Free)" />
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <div className="p-3 bg-white/5 rounded-2xl flex-1">
                  <p className="text-[10px] text-white/50 uppercase font-bold mb-1">Status</p>
                  <p className="text-sm font-bold flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    Pending Purchase
                  </p>
                </div>
                <button className="bg-[#e63946] hover:bg-[#c92a35] text-white font-bold py-4 px-8 rounded-2xl text-sm transition-all shadow-lg hover:shadow-red-500/20 underline-offset-4 hover:underline">
                  Book Now →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function CityPill({ icon, name, nights }: { icon: string; name: string; nights: string }) {
  return (
    <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100 flex items-center gap-2 transition-transform hover:scale-105 cursor-default">
      <span className="text-lg">{icon}</span>
      <div className="text-left leading-tight">
        <p className="text-xs font-black text-[#1a2a44]">{name}</p>
        <p className="text-[8px] uppercase font-bold text-slate-400 tracking-tighter">{nights}</p>
      </div>
    </div>
  );
}

function InclusionItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-[#d4af37]">✓</span>
      <span className="text-white/80">{text}</span>
    </div>
  );
}
