"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "../../lib/utils";

export function BudgetSection() {
  const { data } = useTripStore();

  if (!data) return null;

  // Calculate dynamic costs
  const actualAccommodationTotal = data.stays.reduce((acc, s) => acc + s.rate, 0);
  const actualActivitiesTotal = data.items.reduce((acc, i) => acc + i.cost, 0);

  const BUDGET_CATS = [
    { emoji: "🏠", name: "Accommodation", total: actualAccommodationTotal, color: "bg-blue-50 text-blue-600" },
    { emoji: "🚄", name: "Transport", total: 150000, color: "bg-red-50 text-red-600" }, // Est
    { emoji: "🍜", name: "Food & Drinks", total: 180000, color: "bg-green-50 text-green-600" }, // Est
    { emoji: "🎫", name: "Activities", total: actualActivitiesTotal, color: "bg-purple-50 text-purple-600" },
    { emoji: "🛍️", name: "Shopping", total: 80000, color: "bg-orange-50 text-orange-600" }, // Est
  ];

  const grandTotal = BUDGET_CATS.reduce((s, c) => s + c.total, 0);
  const totalPerPerson = Math.round(grandTotal / data.familySize);

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif font-black text-[#1a2a44]">Budget <span className="text-[#e63946]">Estimate</span></h2>
        <p className="text-slate-500 font-medium">Projected expenses for a family of {data.familySize}.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Main Budget Table */}
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white group">
          <CardContent className="p-0">
            <div className="p-10 bg-[#1a2a44] text-white flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 transition-transform group-hover:scale-110">
                    <span className="text-9xl">💴</span>
                </div>
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2 text-red-200">Trip Total Estimate</p>
                <h3 className="text-5xl font-serif font-black italic underline decoration-[#e63946] decoration-4 underline-offset-8">¥{grandTotal.toLocaleString()}</h3>
              </div>
              <div className="text-right relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Per Person</p>
                <p className="text-2xl font-bold opacity-90 tracking-tight">¥{totalPerPerson.toLocaleString()}</p>
              </div>
            </div>

            <div className="p-10 space-y-8">
              {BUDGET_CATS.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between group/row">
                  <div className="flex items-center gap-5">
                    <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center text-xl shadow-sm border border-transparent group-hover/row:border-slate-100 group-hover/row:scale-110 transition-all", cat.color)}>
                      {cat.emoji}
                    </div>
                    <div>
                        <p className="text-sm font-black text-[#1a2a44]">{cat.name}</p>
                        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{cat.total === 0 ? "No data added" : "Category Total"}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-black text-[#1a2a44] group-hover/row:text-[#e63946] transition-colors">¥{cat.total.toLocaleString()}</p>
                    <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">¥{Math.round(cat.total / data.familySize).toLocaleString()} / person</p>
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e63946]">Family Multiplier</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Calculating for {data.familySize} travelers</p>
                </div>
                <Badge className="bg-red-50 text-[#e63946] border-none font-black px-6 py-2 rounded-full shadow-sm">
                  x {data.familySize} Members
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Currency Note */}
        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex items-start gap-5 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <span className="text-8xl">💡</span>
            </div>
            <span className="text-2xl filter drop-shadow-sm">💡</span>
            <div className="space-y-2">
                <p className="text-[10px] font-black text-[#1a2a44] uppercase tracking-widest">Budgeting Insights</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed italic max-w-2xl">
                    Accommodation and Activity costs are calculated dynamically from your added items. All estimates are in Japanese Yen (JPY). We recommend carrying at least 30% of your budget in cash for local markets and smaller shrines.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
