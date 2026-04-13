"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { City } from "../../lib/types";
import { cn } from "../../lib/utils";
import { MapPin, Home } from "lucide-react";

export function ItinerarySection() {
  const { data } = useTripStore();

  if (!data) return null;

  // Dynamically group cities by items
  const cityNames = Array.from(new Set(data.items.map(i => i.city)));
  
  // Get city metadata (icons/nights)
  const getCityIcon = (city: string) => {
    const icons: Record<string, string> = {
      tokyo: "🗼",
      fuji: "🗻",
      kyoto: "⛩️",
      hiroshima: "☮️",
      miyajima: "🦌",
      osaka: "🏯",
      yokohama: "🎡",
      nara: "🦌",
      kawaguchiko: "🗻"
    };
    return icons[city.toLowerCase()] || "📍";
  };

  return (
    <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {cityNames.map((city) => {
        const cityItems = data.items.filter(i => i.city === city);
        const nights = data.stays.filter(s => s.city.toLowerCase().includes(city.toLowerCase())).reduce((acc, s) => {
           const cin = new Date(s.checkin);
           const cout = new Date(s.checkout);
           return acc + Math.round((cout.getTime() - cin.getTime()) / 86400000);
        }, 0);

        return (
          <div key={city} className="space-y-12">
            {/* City Header */}
            <div className="flex flex-col items-center gap-6 group">
              <span className="text-7xl group-hover:scale-110 transition-transform duration-500">{getCityIcon(city)}</span>
              <div className="text-center space-y-3">
                <h2 className="text-5xl font-serif font-black capitalize text-[#1a2a44] tracking-tight">
                  {city}
                </h2>
                <div className="flex items-center justify-center gap-4">
                  <Badge className="bg-red-50 text-[#e63946] border border-red-100 py-1.5 px-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px]">
                    Stay Tracker: {nights} Nights
                  </Badge>
                </div>
              </div>
            </div>

            {/* City Days */}
            <div className="space-y-16">
              {Array.from(new Set(cityItems.map(i => i.day))).sort((a,b) => a-b).map(day => {
                const dayDate = cityItems.find(i => i.day === day)?.date;
                const dailyStay = data.stays.find(s => {
                  if (!dayDate) return false;
                  return dayDate >= s.checkin && dayDate < s.checkout;
                });

                return (
                  <div key={day} className="space-y-10 group/day">
                    <div className="flex items-center gap-6">
                      <div className="h-[1px] flex-1 bg-slate-100 group-hover/day:bg-[#e63946]/20 transition-colors" />
                      <div className="text-center">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 group-hover/day:text-[#1a2a44] transition-colors">
                          Day {day} — {getFormattedDate(dayDate)}
                        </h3>
                      </div>
                      <div className="h-[1px] flex-1 bg-slate-100 group-hover/day:bg-[#e63946]/20 transition-colors" />
                    </div>

                    {/* Stay Preview for the Day */}
                    {dailyStay && (
                      <div className="flex justify-center -mt-4">
                        <Badge className="bg-[#1a2a44] text-[#d4af37] border-none px-6 py-2 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl flex items-center gap-3 animate-in zoom-in duration-500">
                          <Home size={12} />
                          Staying at: {dailyStay.prop}
                        </Badge>
                      </div>
                    )}

                    {/* Time Blocks */}
                    <div className="grid gap-10">
                      {["morning", "afternoon", "evening"].map(time => {
                        const items = cityItems.filter(i => i.day === day && i.time === time);
                        if (items.length === 0) return null;

                        return (
                          <div key={time} className="space-y-5">
                            <label className="text-[10px] font-black text-slate-400 border-l-4 border-slate-100 pl-4 uppercase tracking-[0.2em] flex items-center gap-3">
                              <span className="text-lg">
                                {time === 'morning' ? '🌅' : time === 'afternoon' ? '☀️' : '🌙'}
                              </span>
                              {time}
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-4">
                              {items.map(item => (
                                <ActivityCard key={item.id} item={item} />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ActivityCard({ item }: { item: any }) {
  const { toggleItemBooked } = useTripStore();
  
  return (
    <Card className="border-none shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group overflow-hidden bg-white rounded-[2rem] relative">
      <CardContent className="p-8 flex gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h4 className="font-serif font-black text-xl text-[#1a2a44] group-hover:text-[#e63946] transition-colors leading-tight">
                {item.name}
              </h4>
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                <MapPin size={10} />
                {item.city}
              </div>
            </div>
            <button 
              onClick={() => toggleItemBooked(item.id)}
              className={cn(
                "h-6 w-6 rounded-full border-4 transition-all flex items-center justify-center text-white",
                item.booked ? "bg-[#10b981] border-[#10b981]/20 scale-110" : "bg-white border-slate-100 hover:border-[#e63946]/30"
              )} 
            >
              {item.booked && <span className="text-[10px]">✓</span>}
            </button>
          </div>
          
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            {item.desc}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-wider">
              <span>⏱️</span> {item.dur}m
            </div>
            {item.cost > 0 && (
              <div className="bg-red-50 px-4 py-2 rounded-xl flex items-center gap-2 text-[10px] font-black text-[#e63946] uppercase tracking-wider">
                <span>💴</span> ¥{item.cost.toLocaleString()}
              </div>
            )}
            {item.offbeat && (
              <Badge className="bg-purple-50 text-purple-600 border-none px-4 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest shadow-none">
                Offbeat
              </Badge>
            )}
             {item.veg && (
              <Badge className="bg-green-50 text-green-600 border-none px-4 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest shadow-none">
                Veg Friendly
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function getFormattedDate(d?: string) {
  if (!d) return "";
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", weekday: 'short' });
}
