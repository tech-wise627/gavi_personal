"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export function BookingsSection() {
  const { data } = useTripStore();

  if (!data) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif font-black text-[#1a2a44]">Reservation Tracker</h2>
        <p className="text-slate-500 font-medium">Keep track of all your high-priority bookings in one place.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
}

function BookingCard({ booking }: { booking: any }) {
  const isPending = booking.status === 'pending';
  
  return (
    <Card className="border-none shadow-sm rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white">
      <CardContent className="p-6 space-y-6">
        <div className="flex justify-between items-start">
          <Badge className={cn(
            "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-none",
            isPending ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"
          )}>
            {isPending ? "🔴 Book NOW" : "✅ RESERVED"}
          </Badge>
          <span className="text-2xl">{booking.type === 'transport' ? '🚄' : '🎟️'}</span>
        </div>

        <div>
          <h3 className="text-lg font-black text-[#1a2a44] leading-tight mb-2 group-hover:text-[#e63946] transition-colors">
            {booking.name}
          </h3>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            {booking.date ? new Date(booking.date).toLocaleDateString("en-IN", { day: 'numeric', month: 'short' }) : 'No Date Set'}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm font-bold">
            <span className="text-slate-400">Est. Cost</span>
            <span className={cn(isPending ? "text-[#e63946]" : "text-slate-400")}>
              ¥{booking.cost.toLocaleString()}
            </span>
          </div>
          {booking.notes && (
            <p className="text-[10px] text-slate-400 leading-relaxed italic">{booking.notes}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 pt-2">
          {isPending ? (
            <button className="w-full bg-[#1a2a44] hover:bg-[#1a2a44]/90 text-white font-bold py-3 px-4 rounded-2xl text-xs transition-all flex items-center justify-center gap-2 group/btn">
              Book Now <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
            </button>
          ) : (
            <button className="w-full bg-slate-50 text-slate-400 font-bold py-3 px-4 rounded-2xl text-xs cursor-default">
              Completed
            </button>
          )}
          <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-500 font-bold py-3 px-4 rounded-2xl text-xs transition-all">
            {isPending ? "Mark Booked" : "Edit Details"}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

import { cn } from "../../lib/utils";
