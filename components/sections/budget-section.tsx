"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function BudgetSection() {
  const { data } = useTripStore();

  if (!data) return null;

  const BUDGET_CATS = [
    { emoji: "🏠", name: "Accommodation", perPerson: 80000, color: "bg-blue-50 text-blue-600" },
    { emoji: "🚄", name: "Transport", perPerson: 55000, color: "bg-red-50 text-red-600" },
    { emoji: "🍜", name: "Food & Drinks", perPerson: 56000, color: "bg-green-50 text-green-600" },
    { emoji: "🎫", name: "Activities", perPerson: 25000, color: "bg-purple-50 text-purple-600" },
    { emoji: "🛍️", name: "Shopping", perPerson: 30000, color: "bg-orange-50 text-orange-600" },
  ];

  const totalPerPerson = BUDGET_CATS.reduce((s, c) => s + c.perPerson, 0);
  const grandTotal = totalPerPerson * data.familySize;

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif font-black text-[#1a2a44]">Budget <span className="text-[#e63946]">Estimate</span></h2>
        <p className="text-slate-500 font-medium">Projected expenses for a family of {data.familySize}.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Main Budget Table */}
        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
          <CardContent className="p-0">
            <div className="p-8 bg-[#1a2a44] text-white flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1 text-red-200">Estimated Total</p>
                <h3 className="text-4xl font-serif font-black italic underline decoration-red-500 underline-offset-8">¥{grandTotal.toLocaleString()}</h3>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">Per Person</p>
                <p className="text-xl font-bold opacity-80">¥{totalPerPerson.toLocaleString()}</p>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {BUDGET_CATS.map((cat) => (
                <div key={cat.name} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={cn("h-10 w-10 rounded-2xl flex items-center justify-center text-lg shadow-sm border border-transparent group-hover:border-slate-100 transition-all", cat.color)}>
                      {cat.emoji}
                    </div>
                    <div>
                        <p className="text-sm font-black text-[#1a2a44]">{cat.name}</p>
                        <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">¥{cat.perPerson.toLocaleString()} / person</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-[#1a2a44]">¥{(cat.perPerson * data.familySize).toLocaleString()}</p>
                  </div>
                </div>
              ))}

              <div className="pt-6 border-t border-slate-50 flex items-center justify-between text-[#e63946]">
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Family Multiplier</p>
                <Badge className="bg-red-50 text-[#e63946] border-none font-black px-4 py-1 rounded-full">
                  x {data.familySize} Members
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Currency Note */}
        <div className="bg-yellow-50/50 border border-yellow-100 p-6 rounded-[2rem] flex items-start gap-4">
            <span className="text-xl">💡</span>
            <div className="space-y-1">
                <p className="text-xs font-black text-yellow-800 uppercase tracking-widest">Budgeting Tip</p>
                <p className="text-xs text-yellow-700/80 font-medium leading-relaxed italic">
                    All estimates are in Japanese Yen (JPY). We recommend carrying at least 30% of your budget in cash for local markets and smaller shrines.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}

import { cn } from "../../lib/utils";
