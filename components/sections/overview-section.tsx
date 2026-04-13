"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Countdown } from "../countdown";
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
    <div className="space-y-6">
      <div className="relative bg-gradient-to-br from-[#1B2A4A] to-[#2d3f5f] text-white rounded-2xl p-8 shadow-lg overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Family Chali Japan 🇯🇵
          </h1>
          <p className="text-white/80 text-sm">
            May 25 – June 8, 2025 · 14 Days · Family · Vegetarian
          </p>
          <Countdown />
        </div>
        <div className="absolute -right-4 -bottom-8 text-9xl opacity-10 select-none">
          🗾
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard num="4" label="Cities" />
        <StatCard num="14" label="Days" />
        <StatCard num="¥1M+" label="Est. Budget" />
        <StatCard 
          num={`${data.bookings.filter(b => b.status === 'booked').length}/${data.bookings.length}`} 
          label="Booked" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProgressRing pct={getPct(bookedCount, totalItems)} label="Activities Booked" color="#2D6A4F" />
        <ProgressRing pct={getPct(checksDone, totalChecks)} label="Checklist Done" color="#1B2A4A" />
        <ProgressRing pct={getPct(packingDone, totalPacking)} label="Packed" color="#F7B731" />
      </div>

      <Card className="border-none shadow-sm rounded-xl overflow-hidden">
        <CardContent className="p-6">
          <h3 className="font-serif font-bold text-lg mb-4 flex items-center gap-2">
            📅 Today's Plan
          </h3>
          <div className="text-sm text-muted-foreground italic">
            No activities planned for today — enjoy the planning phase! 🎉
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ num, label }: { num: string; label: string }) {
  return (
    <Card className="border-none shadow-sm text-center py-6 rounded-xl">
      <CardContent className="p-0">
        <div className="text-2xl font-serif font-bold text-[#D62828]">{num}</div>
        <div className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mt-1">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}

function ProgressRing({ pct, label, color }: { pct: number; label: string; color: string }) {
  const r = 28;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;

  return (
    <Card className="border-none shadow-sm text-center py-6 rounded-xl flex flex-col items-center">
      <CardContent className="p-0 space-y-3">
        <div className="relative w-[70px] height-[70px]">
          <svg width="70" height="70" className="rotate-[-90deg]">
            <circle cx="35" cy="35" r={r} fill="none" stroke="#f3f4f6" strokeWidth="6" />
            <circle 
              cx="35" cy="35" r={r} 
              fill="none" stroke={color} strokeWidth="6" 
              strokeDasharray={c} strokeDashoffset={off} 
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">
            {pct}%
          </div>
        </div>
        <div className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}
