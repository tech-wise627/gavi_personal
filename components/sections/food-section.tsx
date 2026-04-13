"use client";

import { useState } from "react";
import { SEED_FOOD, SEED_PHRASES } from "../../lib/data";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

export function FoodSection() {
  const [activeCity, setActiveCity] = useState("tokyo");

  const cities = Object.keys(SEED_FOOD);

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif font-black text-[#1a2a44]">
          The Vegetarian <span className="text-green-600">Guide</span> 🍜
        </h2>
        <p className="text-slate-500 font-medium max-w-lg mx-auto leading-relaxed">
          Japan is a meat-heavy country, but we've curated the best spots where you don't have to compromise.
        </p>
      </div>

      {/* Phrases Section */}
      <div className="bg-[#f0f7f4] rounded-[2rem] p-8 space-y-6">
        <div className="flex items-center gap-2 text-green-700 font-black text-xs uppercase tracking-widest">
           <span>🗣️</span> Essential Phrases
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SEED_PHRASES.map((phrase, i) => (
            <div key={phrase.jp} className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl space-y-2 border border-green-100 group hover:border-green-300 transition-colors">
              <p className="text-sm font-black text-green-800">{phrase.jp}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{phrase.rom}</p>
              <p className="text-xs font-bold text-[#1a2a44] pt-2">"{phrase.en}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* City Tabs */}
      <div className="space-y-8">
        <div className="flex justify-center gap-2">
          {cities.map((city) => (
            <Button
              key={city}
              variant="ghost"
              onClick={() => setActiveCity(city)}
              className={cn(
                "rounded-full px-6 py-5 text-xs font-bold capitalize transition-all",
                activeCity === city 
                  ? "bg-[#1a2a44] text-white hover:bg-[#1a2a44] shadow-md" 
                  : "text-slate-400 hover:bg-slate-100"
              )}
            >
              {city}
            </Button>
          ))}
        </div>

        {/* Food grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SEED_FOOD[activeCity].map((food) => (
            <Card key={food.name} className="border-none shadow-sm rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-black text-[#1a2a44] group-hover:text-green-600 transition-colors uppercase tracking-tight">{food.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Must Try Dish</p>
                    </div>
                    <Badge className="bg-green-50 text-green-600 border-none px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                      {food.type === 'vegan' ? 'Vegan' : 'Veg'}
                    </Badge>
                  </div>

                  <p className="text-lg font-serif font-bold text-slate-600 leading-tight">
                    {food.dish}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                    <span className="text-sm font-black text-slate-300">{food.price}</span>
                    <a 
                      href={food.maps} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[10px] font-black text-[#1a2a44] hover:text-green-600 transition-colors"
                    >
                      📍 MAPS →
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

import { cn } from "../../lib/utils";
