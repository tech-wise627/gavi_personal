"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { City } from "../../lib/types";

export function ItinerarySection() {
  const { data } = useTripStore();

  if (!data) return null;

  const cities: { name: City; icon: string; nights: number }[] = [
    { name: "tokyo", icon: "🗼", nights: 4 },
    { name: "kyoto", icon: "⛩️", nights: 3 },
    { name: "hiroshima", icon: "☮️", nights: 2 },
    { name: "osaka", icon: "🏯", nights: 5 },
  ];

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {cities.map((city) => {
        const cityItems = data.items.filter(i => i.city === city.name);
        if (cityItems.length === 0) return null;

        return (
          <div key={city.name} className="space-y-8">
            {/* City Header */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-6xl">{city.icon}</span>
              <div className="text-center">
                <h2 className="text-4xl font-serif font-black capitalize text-[#1a2a44]">
                  {city.name}
                </h2>
                <div className="mt-2">
                  <Badge className="bg-[#fff8e1] text-[#e63946] border border-[#e63946]/20 py-1 px-4 rounded-full font-bold uppercase tracking-widest text-[9px]">
                    Stay Tracker: {city.nights} Nights
                  </Badge>
                </div>
              </div>
            </div>

            {/* City Days */}
            <div className="space-y-12">
              {Array.from(new Set(cityItems.map(i => i.day))).sort((a,b) => a-b).map(day => (
                <div key={day} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] flex-1 bg-slate-100" />
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                      Day {day} — {getFormattedDate(cityItems.find(i => i.day === day)?.date)}
                    </h3>
                    <div className="h-[2px] flex-1 bg-slate-100" />
                  </div>

                  {/* Time Blocks */}
                  <div className="grid gap-6">
                    {["morning", "afternoon", "evening"].map(time => {
                      const items = cityItems.filter(i => i.day === day && i.time === time);
                      if (items.length === 0) return null;

                      return (
                        <div key={time} className="space-y-3">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            {time === 'morning' ? '🌅' : time === 'afternoon' ? '☀️' : '🌙'} {time}
                          </label>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {items.map(item => (
                              <ActivityCard key={item.id} item={item} />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ActivityCard({ item }: { item: any }) {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow group overflow-hidden bg-white/50 backdrop-blur-sm rounded-2xl">
      <CardContent className="p-5 flex gap-4">
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <h4 className="font-bold text-sm text-[#1a2a44] group-hover:text-[#e63946] transition-colors">{item.name}</h4>
            <div className={cn(
              "h-2 w-2 rounded-full",
              item.booked ? "bg-green-500" : "bg-slate-200"
            )} title={item.booked ? "Booked" : "Pending"} />
          </div>
          
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-medium">
            {item.desc}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
              <span>⏱️</span> {item.dur}m
            </div>
            {item.cost > 0 && (
              <div className="flex items-center gap-1 text-[10px] font-bold text-[#e63946]">
                <span>💴</span> ¥{item.cost.toLocaleString()}
              </div>
            )}
            {item.offbeat && (
              <Badge className="bg-purple-50 text-purple-600 border-none px-2 py-0 h-4 text-[8px] font-black uppercase tracking-tighter shadow-none">
                Offbeat
              </Badge>
            )}
             {item.veg && (
              <Badge className="bg-green-50 text-green-600 border-none px-2 py-0 h-4 text-[8px] font-black uppercase tracking-tighter shadow-none">
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
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

import { cn } from "../../lib/utils";
