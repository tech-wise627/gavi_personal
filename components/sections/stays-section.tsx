"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function StaysSection() {
  const { data } = useTripStore();

  if (!data) return null;

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif font-black text-[#1a2a44]">Our <span className="text-[#e63946]">Homes</span> in Japan</h2>
        <p className="text-slate-500 font-medium">From traditional ryokans to modern city apartments.</p>
      </div>

      <div className="space-y-6">
        {data.stays.map((s) => {
          const checkin = new Date(s.checkin);
          const checkout = new Date(s.checkout);
          const nights = s.checkin && s.checkout ? Math.round((checkout.getTime() - checkin.getTime()) / 86400000) : 0;
          
          return (
            <Card key={s.id} className="border-none shadow-sm rounded-[2.5rem] overflow-hidden bg-white group hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-red-50 text-[#e63946] border-none px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                        {s.city}
                      </Badge>
                      {s.conf && (
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">CONF: {s.conf}</span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-serif font-black text-[#1a2a44] group-hover:text-[#e63946] transition-colors leading-tight">
                      {s.prop}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-6 pt-2">
                       <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Check In</p>
                        <p className="text-sm font-bold text-[#1a2a44]">{getFormattedDate(s.checkin)}</p>
                      </div>
                      <div className="text-slate-200">→</div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Check Out</p>
                        <p className="text-sm font-bold text-[#1a2a44]">{getFormattedDate(s.checkout)}</p>
                      </div>
                      <div className="h-8 w-[2px] bg-slate-50 hidden md:block" />
                      <div className="space-y-1">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Duration</p>
                        <p className="text-sm font-bold text-[#e63946]">{nights} Nights</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-start md:items-end gap-6 text-left md:text-right">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none underline decoration-[#e63946]/30 underline-offset-4">Nightly Rate</p>
                      <p className="text-2xl font-serif font-black text-[#1a2a44]">¥{s.rate.toLocaleString()}</p>
                    </div>

                    <div className="flex gap-3">
                      {s.url && (
                        <Button className="bg-[#1a2a44] hover:bg-[#1a2a44]/90 text-white rounded-2xl px-6 font-bold text-xs h-11 transition-all" asChild>
                          <a href={s.url} target="_blank">View Guide →</a>
                        </Button>
                      )}
                      <Button variant="outline" className="rounded-2xl px-6 font-bold text-xs h-11 border-slate-100 hover:bg-slate-50">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>

                {s.notes && (
                  <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Host Notes</p>
                    <p className="text-xs text-slate-500 italic font-medium">"{s.notes}"</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function getFormattedDate(d?: string) {
  if (!d) return "";
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short", weekday: 'short' });
}
