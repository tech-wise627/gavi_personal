"use client";

import { useState } from "react";
import { useTripStore } from "../../hooks/use-trip-store";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { City, TripItem } from "../../lib/types";
import { cn } from "../../lib/utils";

const CITIES: (City | "all" | "offbeat" | "unbooked")[] = [
  "all", "tokyo", "kyoto", "hiroshima", "osaka", "offbeat", "unbooked"
];

export function ItinerarySection() {
  const { data, toggleItemBooked, deleteItem } = useTripStore();
  const [filter, setFilter] = useState<typeof CITIES[number]>("all");

  if (!data) return null;

  const filteredItems = data.items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "offbeat") return item.offbeat;
    if (filter === "unbooked") return !item.booked;
    return item.city === filter;
  });

  // Group by day
  const days = Array.from(new Set(filteredItems.map(i => i.day))).sort((a, b) => a - b);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 pb-2">
        {CITIES.map((c) => (
          <Button
            key={c}
            variant={filter === c ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(c)}
            className={cn(
              "rounded-full text-xs font-semibold capitalize transition-all",
              filter === c ? "bg-[#1B2A4A] text-white hover:bg-[#2d3f5f]" : ""
            )}
          >
            {c === "all" ? "🌏 All" : c === "offbeat" ? "🔮 Offbeat" : c === "unbooked" ? "⭕ Unbooked" : c}
          </Button>
        ))}
      </div>

      <div className="space-y-8">
        {days.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm italic text-muted-foreground">
            No items match this filter. 🎌
          </div>
        ) : (
          days.map((day) => (
            <div key={day} className="space-y-4">
              <div className="flex items-center justify-between border-b-2 border-slate-100 pb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                  Day {day} — {getFormattedDate(filteredItems.find(i => i.day === day)?.date)}
                </h3>
              </div>
              <div className="grid gap-3">
                {filteredItems
                  .filter(i => i.day === day)
                  .sort((a, b) => {
                    const times = { morning: 1, afternoon: 2, evening: 3 };
                    return times[a.time] - times[b.time];
                  })
                  .map((item) => (
                    <ItemCard 
                      key={item.id} 
                      item={item} 
                      onToggleBooked={() => toggleItemBooked(item.id)}
                      onDelete={() => deleteItem(item.id)}
                    />
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function ItemCard({ item, onToggleBooked, onDelete }: { 
  item: TripItem; 
  onToggleBooked: () => void;
  onDelete: () => void;
}) {
  const getBorderColor = () => {
    if (item.booked) return "border-l-[#2D6A4F]";
    if (item.offbeat) return "border-l-[#F7B731]";
    if (item.veg) return "border-l-[#4CAF50]";
    return "border-l-slate-200";
  };

  return (
    <Card className={cn(
      "border-none border-l-4 shadow-sm rounded-r-xl rounded-l-none transition-all hover:translate-y-[-1px] hover:shadow-md",
      getBorderColor(),
      item.booked && "bg-[#f0faf3]"
    )}>
      <CardContent className="p-4 flex gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm">{item.name}</h4>
            <div className="flex gap-1">
              <Button size="icon" variant="ghost" className="h-6 w-6" onClick={onToggleBooked}>
                {item.booked ? "✅" : "⭕"}
              </Button>
            </div>
          </div>
          
          {item.desc && <p className="text-xs text-muted-foreground line-clamp-2">{item.desc}</p>}
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-[10px] bg-slate-100 text-[#1B2A4A] font-bold">
              {item.time.toUpperCase()}
            </Badge>
            {item.cost > 0 && (
              <Badge variant="secondary" className="text-[10px] bg-slate-100 text-[#1B2A4A] font-bold">
                ¥{item.cost.toLocaleString()}
              </Badge>
            )}
            {item.offbeat && <Badge className="text-[10px] bg-[#F7B731] text-[#1B2A4A] font-bold">🔮 OFFBEAT</Badge>}
            {item.veg && <Badge className="text-[10px] bg-[#2D6A4F] text-white font-bold">🥬 VEG</Badge>}
            {item.booked && <Badge className="text-[10px] bg-[#2D6A4F] text-white font-bold">✅ BOOKED</Badge>}
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
