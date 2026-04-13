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
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!data) return (
    <div className="flex items-center justify-center min-h-screen bg-[#fffafb] text-[#1a2a44] font-medium">
      🎌 Preparing your Japan trip...
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fffafb] text-[#1a2a44] relative pb-20 selection:bg-red-100 selection:text-red-900">
      <SakuraBloom />
      
      {/* Sticky Premium Nav */}
      <div className="sticky top-0 z-50 bg-[#fffafb]/80 backdrop-blur-md border-b border-pink-100 shadow-sm overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-center gap-2 md:gap-8 min-w-max">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "nav-link text-[10px] md:text-sm whitespace-nowrap",
                activeTab === item.id && "active"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        <div className={cn("transition-all duration-500", activeTab === "overview" ? "block" : "hidden")}>
          <OverviewSection />
        </div>
        <div className={cn("transition-all duration-500", activeTab === "itinerary" ? "block" : "hidden")}>
          <ItinerarySection />
        </div>
        <div className={cn("transition-all duration-500", activeTab === "checklist" ? "block" : "hidden")}>
          <ChecklistSection />
        </div>
        <div className={cn("transition-all duration-500", activeTab === "bookings" ? "block" : "hidden")}>
          <BookingsSection />
        </div>
        <div className={cn("transition-all duration-500", activeTab === "budget" ? "block" : "hidden")}>
          <BudgetSection />
        </div>
        <div className={cn("transition-all duration-500", activeTab === "food" ? "block" : "hidden")}>
          <FoodSection />
        </div>
        <div className={cn("transition-all duration-500", activeTab === "stays" ? "block" : "hidden")}>
          <StaysSection />
        </div>
      </div>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          "fixed bottom-8 right-8 z-50 h-12 w-12 bg-[#e63946] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform",
          showBackToTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}
      >
        ↑
      </button>

      <Toaster position="bottom-right" richColors />
    </main>
  );
}
