"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";

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
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProgressRing pct={getPct(bookedCount, totalItems)} label="Activities Booked" color="#e63946" />
        <ProgressRing pct={getPct(checksDone, totalChecks)} label="Checklist Done" color="#1a2a44" />
        <ProgressRing pct={getPct(packingDone, totalPacking)} label="Packed" color="#f59e0b" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* JR Pass Premium Card */}
        <Card className="bg-[#1a2a44] text-white border-[3px] border-[#d4af37]/30 rounded-[2.5rem] overflow-hidden shadow-2xl relative h-full">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="text-9xl">🚄</span>
          </div>
          <CardContent className="p-10 relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl">🎫</span>
              <h3 className="text-[#d4af37] font-serif font-black text-2xl uppercase tracking-widest leading-none">The Golden Ticket</h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex justify-between items-end border-b border-white/10 pb-6">
                <div>
                  <p className="text-white/60 text-[10px] uppercase font-black tracking-widest mb-1">Pass Version</p>
                  <p className="text-2xl font-black italic">14-Day Japan Rail Pass</p>
                </div>
                <div className="text-right">
                  <p className="text-[#d4af37] text-3xl font-black italic">¥80,000</p>
                  <p className="text-white/40 text-[10px] uppercase font-black tracking-tighter">Per Member</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <InclusionItem text="Unlimited Shinkansen Travel" />
                <InclusionItem text="Narita Express (N'EX) Included" />
                <InclusionItem text="Seat Reservations (Free)" />
              </div>

              <div className="pt-4">
                <button className="w-full bg-[#e63946] hover:bg-[#c92a35] text-white font-black py-5 px-8 rounded-2xl text-sm transition-all shadow-xl hover:shadow-red-500/20 uppercase tracking-widest">
                  Secure Pass Now →
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Context Card */}
        <Card className="border-none shadow-[0_10px_50px_rgba(0,0,0,0.04)] rounded-[2.5rem] bg-white h-full">
          <CardContent className="p-10 space-y-8">
            <div className="flex items-center gap-4">
               <span className="text-3xl">📅</span>
               <h3 className="font-serif font-black text-2xl text-[#1a2a44]">Quick Stats</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <StatItem num={new Set(data.items.map(i => i.city)).size.toString()} label="Destinations" />
              <StatItem num={Math.max(...data.items.map(i => i.day)).toString()} label="Days" />
              <StatItem num={data.familySize.toString()} label="Family Size" />
              <StatItem num={bookedCount.toString()} label="Booked" />
            </div>

            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 italic text-slate-400 text-sm font-medium">
              "No activities planned for current date — ready for the next adventure!"
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatItem({ num, label }: { num: string; label: string }) {
  return (
    <div className="p-6 bg-slate-50 rounded-[2rem] text-center border border-white group hover:border-[#e63946]/20 transition-colors">
      <div className="text-3xl font-serif font-black text-[#e63946] group-hover:scale-110 transition-transform">{num}</div>
      <div className="text-[10px] uppercase tracking-widest font-black text-slate-400 mt-2">{label}</div>
    </div>
  );
}

function ProgressRing({ pct, label, color }: { pct: number; label: string; color: string }) {
  const r = 35;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;

  return (
    <Card className="border-none shadow-[0_10px_50px_rgba(0,0,0,0.03)] text-center p-8 rounded-[2.5rem] flex flex-col items-center bg-white group hover:translate-y-[-4px] transition-all">
      <CardContent className="p-0 space-y-4">
        <div className="relative w-[100px] h-[100px]">
          <svg width="100" height="100" className="rotate-[-90deg]">
            <circle cx="50" cy="50" r={r} fill="none" stroke="#f8fafc" strokeWidth="8" />
            <circle 
              cx="50" cy="50" r={r} 
              fill="none" stroke={color} strokeWidth="8" 
              strokeDasharray={c} strokeDashoffset={off} 
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-[#1a2a44]">
            {pct}%
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

function InclusionItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-[#d4af37] text-lg">✓</span>
      <span className="text-white/80 font-medium tracking-wide">{text}</span>
    </div>
  );
}
