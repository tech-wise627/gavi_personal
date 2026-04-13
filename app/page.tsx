"use client";

import { useTripStore } from "../hooks/use-trip-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { OverviewSection } from "../components/sections/overview-section";
import { ItinerarySection } from "../components/sections/itinerary-section";
import { ChecklistSection } from "../components/sections/checklist-section";
import { BookingsSection } from "../components/sections/bookings-section";
import { BudgetSection } from "../components/sections/budget-section";
import { FoodSection } from "../components/sections/food-section";
import { StaysSection } from "../components/sections/stays-section";
import { SakuraBloom } from "../components/sakura-bloom";
import { Toaster } from "../components/ui/sonner";

export default function TripPlanner() {
  const { data } = useTripStore();

  if (!data) return (
    <div className="flex items-center justify-center min-h-screen bg-[#FAFAF7] text-[#1B2A4A] font-medium">
      🎌 Preparing your Japan trip...
    </div>
  );

  return (
    <main className="min-h-screen bg-[#FAFAF7] text-[#1B2A4A] relative pb-10">
      <SakuraBloom />
      
      <div className="sticky top-0 z-50 bg-[#1B2A4A] shadow-lg overflow-x-auto no-scrollbar">
        <Tabs defaultValue="overview" className="w-full">
          <div className="px-4">
            <TabsList className="bg-transparent border-none gap-2 h-auto py-3">
              <TabsTrigger value="overview" className="text-white/70 data-[state=active]:text-[#F7B731] data-[state=active]:border-b-2 data-[state=active]:border-[#F7B731] rounded-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                🗾 Overview
              </TabsTrigger>
              <TabsTrigger value="itinerary" className="text-white/70 data-[state=active]:text-[#F7B731] data-[state=active]:border-b-2 data-[state=active]:border-[#F7B731] rounded-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                🗓 Itinerary
              </TabsTrigger>
              <TabsTrigger value="checklist" className="text-white/70 data-[state=active]:text-[#F7B731] data-[state=active]:border-b-2 data-[state=active]:border-[#F7B731] rounded-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                📋 Checklist
              </TabsTrigger>
              <TabsTrigger value="bookings" className="text-white/70 data-[state=active]:text-[#F7B731] data-[state=active]:border-b-2 data-[state=active]:border-[#F7B731] rounded-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                🎫 Bookings
              </TabsTrigger>
              <TabsTrigger value="budget" className="text-white/70 data-[state=active]:text-[#F7B731] data-[state=active]:border-b-2 data-[state=active]:border-[#F7B731] rounded-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                💴 Budget
              </TabsTrigger>
              <TabsTrigger value="food" className="text-white/70 data-[state=active]:text-[#F7B731] data-[state=active]:border-b-2 data-[state=active]:border-[#F7B731] rounded-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                🥬 Food
              </TabsTrigger>
              <TabsTrigger value="stays" className="text-white/70 data-[state=active]:text-[#F7B731] data-[state=active]:border-b-2 data-[state=active]:border-[#F7B731] rounded-none px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                🏠 Stays
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="max-w-4xl mx-auto px-4 py-8 relative z-10 transition-all duration-300">
            <TabsContent value="overview" className="mt-0 focus-visible:outline-none">
              <OverviewSection />
            </TabsContent>
            
            <TabsContent value="itinerary" className="mt-0 focus-visible:outline-none">
              <ItinerarySection />
            </TabsContent>

            <TabsContent value="checklist" className="mt-0 focus-visible:outline-none">
              <ChecklistSection />
            </TabsContent>

            <TabsContent value="bookings" className="mt-0 focus-visible:outline-none">
              <BookingsSection />
            </TabsContent>

            <TabsContent value="budget" className="mt-0 focus-visible:outline-none">
              <BudgetSection />
            </TabsContent>

            <TabsContent value="food" className="mt-0 focus-visible:outline-none">
              <FoodSection />
            </TabsContent>

            <TabsContent value="stays" className="mt-0 focus-visible:outline-none">
              <StaysSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <Toaster position="bottom-right" richColors />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');
        
        body {
          background-color: #FAFAF7;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Tabs list horizontal scroll padding trick */
        [role="tablist"] {
          display: flex;
          padding-bottom: 2px;
          margin-bottom: -2px;
        }
      `}</style>
    </main>
  );
}
