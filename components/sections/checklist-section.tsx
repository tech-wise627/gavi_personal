"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Badge } from "../ui/badge";

export function ChecklistSection() {
  const { data, toggleCheck } = useTripStore();

  if (!data) return null;

  const categories = [
    { id: 'booking', label: 'Documents & Bookings', icon: '📄' },
    { id: 'packing', label: 'Essential Packing', icon: '🎒' },
    { id: 'document', label: 'Pre-Trip Checklist', icon: '✅' },
  ];

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif font-black text-[#1a2a44]">Packing & <span className="text-[#e63946]">Prep</span></h2>
        <p className="text-slate-500 font-medium">The small details that make a big difference.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {categories.map((cat) => (
          <div key={cat.id} className="space-y-6">
            <div className="flex items-center gap-3 border-b-2 border-slate-100 pb-4">
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#1a2a44]">
                {cat.label}
              </h3>
            </div>
            
            <div className="space-y-3">
              {data.checks
                .filter(item => item.cat === cat.id)
                .map(item => (
                  <button
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={cn(
                      "w-full text-left p-4 rounded-2xl transition-all flex items-start gap-4 group border-2",
                      item.done 
                        ? "bg-slate-50 border-transparent opacity-60" 
                        : "bg-white border-slate-100 hover:border-[#e63946]/30 shadow-sm"
                    )}
                  >
                    <div className={cn(
                      "h-5 w-5 rounded-lg border-2 mt-0.5 flex items-center justify-center transition-all",
                      item.done ? "bg-green-500 border-green-500" : "bg-white border-slate-200 group-hover:border-[#e63946]"
                    )}>
                      {item.done && <span className="text-white text-[10px]">✓</span>}
                    </div>
                    <div className="space-y-1">
                      <p className={cn(
                        "text-xs font-bold leading-tight",
                        item.done ? "line-through text-slate-400" : "text-[#1a2a44]"
                      )}>
                        {item.title}
                      </p>
                      {item.notes && !item.done && (
                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic line-clamp-2">
                          {item.notes}
                        </p>
                      )}
                      {item.priority === 'high' && !item.done && (
                        <Badge className="bg-red-50 text-red-600 border-none px-2 py-0 h-4 text-[7px] font-black uppercase shadow-none mt-2">
                          Priority
                        </Badge>
                      )}
                    </div>
                  </button>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { cn } from "../../lib/utils";
