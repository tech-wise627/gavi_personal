"use client";

import { useState } from "react";
import { SEED_FOOD, SEED_PHRASES } from "../../lib/data";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const FOOD_CITIES = ["tokyo", "kyoto", "hiroshima", "osaka", "phrases"] as const;

export function FoodSection() {
  const [tab, setTab] = useState<typeof FOOD_CITIES[number]>("tokyo");

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 pb-2">
        {FOOD_CITIES.map((c) => (
          <Button
            key={c}
            variant={tab === c ? "default" : "outline"}
            size="sm"
            onClick={() => setTab(c)}
            className={cn(
              "rounded-full text-xs font-semibold capitalize transition-all",
              tab === c ? "bg-[#2D6A4F] text-white hover:bg-[#1b5e20]" : "border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#f0faf3]"
            )}
          >
            {c}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tab === "phrases" ? (
          SEED_PHRASES.map((p, i) => (
            <Card key={i} className="border-none shadow-sm bg-[#FFF8E1] rounded-2xl p-5">
              <div className="text-xl font-bold text-[#1B2A4A]">{p.jp}</div>
              <div className="text-[10px] italic text-[#1B2A4A] mt-1">{p.rom}</div>
              <div className="text-xs text-muted-foreground mt-2">{p.en}</div>
            </Card>
          ))
        ) : (
          SEED_FOOD[tab]?.map((r, i) => (
            <Card key={i} className="border-none shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-5 space-y-3">
                <Badge className={cn(
                  "text-[10px] font-bold",
                  r.type === 'vegan' ? "bg-[#2D6A4F] text-white" : "bg-[#1B2A4A] text-white"
                )}>
                  {r.type === 'vegan' ? "🌱 VEGAN" : "🥬 VEGETARIAN"}
                </Badge>
                <div>
                  <h4 className="font-serif font-bold text-sm">{r.name}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-1">{r.dish}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-bold text-[#1B2A4A]">{r.price}</span>
                  <Button size="sm" variant="outline" className="h-8 text-[10px] rounded-xl px-4" asChild>
                    <a href={r.maps} target="_blank">📍 Maps</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
