"use client";

import { useEffect, useState } from "react";
import { useTripStore } from "../hooks/use-trip-store";
import { OverviewSection } from "../components/sections/overview-section";
import { ItinerarySection } from "../components/sections/itinerary-section";
import { ChecklistSection } from "../components/sections/checklist-section";
import { BookingsSection } from "../components/sections/bookings-section";
import { BudgetSection } from "../components/sections/budget-section";
import { FoodSection } from "../components/sections/food-section";
import { StaysSection } from "../components/sections/stays-section";
import { SakuraBloom } from "../components/sakura-bloom";
import { Toaster } from "../components/ui/sonner";
import { Badge } from "../components/ui/badge";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { id: "overview", label: "🗾 Overview" },
  { id: "itinerary", label: "🗓 Itinerary" },
  { id: "checklist", label: "📋 Packing" },
  { id: "bookings", label: "🎫 Book It" },
  { id: "budget", label: "💴 Budget" },
  { id: "food", label: "🥬 Food" },
  { id: "stays", label: "🏠 Stays" },
];

export default function TripPlanner() {
  const { data } = useTripStore();
  const [activeTab, setActiveTab] = useState("overview");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) return (
    <div className="flex items-center justify-center min-h-screen bg-[#fffafb] text-[#1a2a44] font-medium font-serif italic text-2xl animate-pulse">
      🎌 Preparing your Japan adventure...
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fffafb] text-[#1a2a44] relative selection:bg-red-100 selection:text-red-900 scroll-smooth">
      <SakuraBloom />
      
      {/* 1. FULL SCREEN LANDING HERO */}
      <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 overflow-hidden">
        {/* Subtle Torii Gate Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none -z-10 select-none scale-150 transform">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="currentColor">
            <path d="M10 20 L90 20 L90 25 L80 25 L80 80 L70 80 L70 25 L30 25 L30 80 L20 80 L20 25 L10 25 Z" />
            <path d="M5 10 Q50 15 95 10 L95 15 Q50 20 5 15 Z" />
            <path d="M5 25 Q50 28 95 25 L95 30 Q50 33 5 30 Z" />
          </svg>
        </div>

        <div className="text-center space-y-12 max-w-5xl animate-in fade-in zoom-in duration-1000 pt-32 md:pt-48">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-9xl font-serif font-black tracking-tighter text-[#1a2a44] flex items-center justify-center gap-4 flex-wrap leading-tight">
              Family Chali <span className="text-[#e63946]">Japan</span> 
              <span className="text-5xl md:text-8xl">🇯🇵</span>
            </h1>
            <p className="text-slate-400 font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase">
              MAY 25 — JUNE 8, 2025 • 15 DAYS OF ADVENTURE
            </p>
          </div>

          {/* City Timeline Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            <CityPill icon="🗼" name="Tokyo" nights="5 nights" />
            <span className="text-red-300 text-xl">→</span>
            <CityPill icon="🗻" name="Fuji" nights="1 night" />
            <span className="text-red-300 text-xl">→</span>
            <CityPill icon="⛩️" name="Kyoto" nights="3 nights" />
            <span className="text-red-300 text-xl">→</span>
            <CityPill icon="☮️" name="Hiroshima" nights="2 nights" />
            <span className="text-red-300 text-xl">→</span>
            <CityPill icon="🦌" name="Miyajima" nights="1 night" />
            <span className="text-red-300 text-xl">→</span>
            <CityPill icon="🏯" name="Osaka" nights="2 nights" />
          </div>

          {/* Meta Status Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Badge className="bg-[#fefce8] text-[#1a2a44] border-none px-8 py-4 rounded-2xl font-black shadow-sm text-xs transition-transform hover:scale-105">
              👨‍👩‍👧‍👦 Family Trip (4 Members)
            </Badge>
            <Badge className="bg-[#fefce8] text-[#1a2a44] border-none px-8 py-4 rounded-2xl font-black shadow-sm text-xs transition-transform hover:scale-105">
              🥬 Vegetarian (eggs ok)
            </Badge>
            <Badge className="bg-[#fefce8] text-[#1a2a44] border-none px-8 py-4 rounded-2xl font-black shadow-sm text-xs transition-transform hover:scale-105">
              💵 Mid-Range Budget
            </Badge>
          </div>

          <div className="pt-12 animate-bounce">
            <p className="text-[10px] font-black text-slate-300 tracking-[0.3em] uppercase underline underline-offset-8 decoration-red-400">Scroll to Explore</p>
            <div className="text-slate-300 mt-2">↓</div>
          </div>
        </div>
      </section>

      {/* 2. DASHBOARD NAVIGATION */}
      <div className="sticky top-0 z-50 bg-[#fffafb]/90 backdrop-blur-md border-b border-pink-50 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center gap-4 md:gap-10 min-w-max">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "nav-link text-[10px] md:text-xs whitespace-nowrap uppercase tracking-widest font-black",
                activeTab === item.id && "active"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. SECTION CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10 transition-all">
        <div className={cn("animate-in fade-in slide-in-from-bottom-8 duration-500", activeTab === "overview" ? "block" : "hidden")}>
          <OverviewSection />
        </div>
        <div className={cn("animate-in fade-in slide-in-from-bottom-8 duration-500", activeTab === "itinerary" ? "block" : "hidden")}>
          <ItinerarySection />
        </div>
        <div className={cn("animate-in fade-in slide-in-from-bottom-8 duration-500", activeTab === "checklist" ? "block" : "hidden")}>
          <ChecklistSection />
        </div>
        <div className={cn("animate-in fade-in slide-in-from-bottom-8 duration-500", activeTab === "bookings" ? "block" : "hidden")}>
          <BookingsSection />
        </div>
        <div className={cn("animate-in fade-in slide-in-from-bottom-8 duration-500", activeTab === "budget" ? "block" : "hidden")}>
          <BudgetSection />
        </div>
        <div className={cn("animate-in fade-in slide-in-from-bottom-8 duration-500", activeTab === "food" ? "block" : "hidden")}>
          <FoodSection />
        </div>
        <div className={cn("animate-in fade-in slide-in-from-bottom-8 duration-500", activeTab === "stays" ? "block" : "hidden")}>
          <StaysSection />
        </div>
      </div>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          "fixed bottom-8 right-8 z-50 h-14 w-14 bg-[#e63946] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 transform font-bold active:scale-90",
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}
      >
        ↑
      </button>

      <Toaster position="bottom-right" richColors />
    </main>
  );
}

function CityPill({ icon, name, nights }: { icon: string; name: string; nights: string }) {
  return (
    <div className="bg-white px-8 py-4 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 flex items-center gap-4 transition-all hover:scale-105 hover:shadow-xl cursor-default group">
      <span className="text-3xl group-hover:rotate-12 transition-transform">{icon}</span>
      <div className="text-left leading-tight">
        <p className="text-lg font-black text-[#1a2a44]">{name}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{nights}</p>
      </div>
    </div>
  );
}
