"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

export function OverviewSection() {
  const { data } = useTripStore();

  if (!data) return null;

  const bookedCount = data.items.filter(i => i.booked).length;
  const totalItems = data.items.length;
  const checksDone = data.checks.filter(c => c.done).length;
  const totalChecks = data.checks.length;
  const packingDone = data.checks.filter(c => c.cat === 'packing' && c.done).length;
  const totalPacking = data.checks.filter(c => c.cat === 'packing').length;

  const getPct = (done: number, total: number) => 
    total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* 🌸 Dashboard Stats (Flora-themed) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProgressRing pct={getPct(bookedCount, totalItems)} label="Activities Booked" color="#e63946" icon="🌸" />
        <ProgressRing pct={getPct(checksDone, totalChecks)} label="Checklist Done" color="#1a2a44" icon="🍃" />
        <ProgressRing pct={getPct(packingDone, totalPacking)} label="Packed" color="#f59e0b" icon="✨" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* 🎫 The Golden Ticket (Premium Aesthetic) */}
        <Card className="bg-[#1a2a44] text-white border-[3px] border-[#d4af37]/40 rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative h-full group">
          <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-10 transition-opacity rotate-12">
            <span className="text-[12rem]">🚄</span>
          </div>
          <div 
            className="absolute -bottom-10 -left-10 w-64 h-64 bg-contain bg-no-repeat opacity-[0.03] pointer-events-none select-none"
            style={{ backgroundImage: "url('/sakura-branch.png')" }}
          />
          <CardContent className="p-12 relative z-10">
            <div className="flex items-center gap-5 mb-10">
              <span className="text-4xl filter drop-shadow-md">🎫</span>
              <h3 className="text-[#d4af37] font-serif font-black text-3xl uppercase tracking-[0.2em] leading-none drop-shadow-sm">The Golden Ticket</h3>
            </div>
            
            <div className="space-y-10">
              <div className="flex justify-between items-end border-b border-white/10 pb-8">
                <div>
                  <p className="text-white/50 text-[10px] uppercase font-black tracking-[0.3em] mb-2">Pass Version</p>
                  <p className="text-3xl font-black italic tracking-tight">14-Day Japan Rail Pass</p>
                </div>
                <div className="text-right">
                  <p className="text-[#d4af37] text-4xl font-black italic">¥80,000</p>
                  <p className="text-white/30 text-[10px] uppercase font-black tracking-tighter">Per Member</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                <InclusionItem text="Unlimited Shinkansen Travel" />
                <InclusionItem text="Narita Express (N'EX) Included" />
                <InclusionItem text="Seat Reservations (Free)" />
              </div>

              <div className="pt-6">
                <button className="w-full bg-[#e63946] hover:bg-[#c92a35] text-white font-black py-6 px-10 rounded-[2rem] text-sm transition-all shadow-2xl hover:shadow-red-500/30 uppercase tracking-[0.2em] active:scale-95">
                  Secure Pass Now →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 📅 Quick Stats (Cute Aesthetic) */}
        <Card className="border-none shadow-[0_20px_60px_rgba(0,0,0,0.03)] rounded-[3rem] bg-white h-full relative overflow-hidden group">
          <div 
            className="absolute top-0 right-0 w-48 h-48 bg-contain bg-no-repeat opacity-[0.05] pointer-events-none translate-x-10 -translate-y-10"
            style={{ backgroundImage: "url('/standing-sakura.png')" }}
          />
          <CardContent className="p-12 space-y-10">
            <div className="flex items-center gap-5">
               <span className="text-4xl filter drop-shadow-sm">📅</span>
               <h3 className="font-serif font-black text-3xl text-[#1a2a44] tracking-tight">Quick Stats</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <StatItem num={new Set(data.items.map(i => i.city)).size.toString()} label="Destinations" color="text-red-400" />
              <StatItem num={Math.max(...data.items.map(i => i.day)).toString()} label="Days" color="text-navy-400" />
              <StatItem num={data.familySize.toString()} label="Family Size" color="text-amber-400" />
              <StatItem num={bookedCount.toString()} label="Booked" color="text-emerald-400" />
            </div>

            <div className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 italic text-slate-400 text-sm font-medium leading-relaxed">
              "No activities planned for current date — ready for the next adventure!"
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatItem({ num, label, color }: { num: string; label: string, color: string }) {
  return (
    <div className="p-8 bg-slate-50/30 rounded-[2.5rem] text-center border-2 border-transparent hover:border-slate-100 group transition-all hover:bg-white hover:shadow-xl hover:translate-y-[-5px]">
      <div className={cn("text-4xl font-serif font-black transition-transform group-hover:scale-110", color)}>{num}</div>
      <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-300 mt-3">{label}</div>
    </div>
  );
}

function ProgressRing({ pct, label, color, icon }: { pct: number; label: string; color: string; icon: string }) {
  const r = 35;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;

  return (
    <Card className="border-none shadow-[0_20px_50px_rgba(0,0,0,0.02)] text-center p-10 rounded-[3rem] flex flex-col items-center bg-white group hover:translate-y-[-8px] transition-all hover:shadow-[0_40px_80px_rgba(255,182,193,0.15)] relative overflow-hidden">
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 bg-contain bg-no-repeat opacity-[0.03] group-hover:opacity-10 transition-opacity translate-x-10 translate-y-10"
        style={{ backgroundImage: "url('/sakura-branch.png')" }}
      />
      <CardContent className="p-0 space-y-6 relative z-10">
        <div className="relative w-[120px] h-[120px] mx-auto">
          <svg width="120" height="120" className="rotate-[-90deg]">
            <circle cx="60" cy="60" r={r} fill="none" stroke="#f8fafc" strokeWidth="10" />
            <circle 
              cx="60" cy="60" r={r} 
              fill="none" stroke={color} strokeWidth="10" 
              strokeDasharray={c} strokeDashoffset={off} 
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
             <span className="text-[10px] opacity-40 mb-1">{icon}</span>
             <span className="font-serif font-black text-2xl text-[#1a2a44]">{pct}%</span>
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] font-black text-slate-400 group-hover:text-[#1a2a44] transition-colors leading-tight">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

function InclusionItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 text-sm group/item">
      <span className="text-[#d4af37] text-xl group-hover/item:scale-125 transition-transform">✓</span>
      <span className="text-white/80 font-medium tracking-wide group-hover/item:text-white transition-colors">{text}</span>
    </div>
  );
}
