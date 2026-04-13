"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export function StaysSection() {
  const { data } = useTripStore();

  if (!data) return null;

  let totalCost = 0;

  return (
    <div className="space-y-6">
      {data.stays.map((s) => {
        const checkin = new Date(s.checkin);
        const checkout = new Date(s.checkout);
        const nights = s.checkin && s.checkout ? Math.round((checkout.getTime() - checkin.getTime()) / 86400000) : 0;
        const total = s.rate * nights;
        totalCost += total || 0;

        return (
          <Card key={s.id} className="border-none shadow-sm rounded-2xl overflow-hidden">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <Badge className="bg-[#D62828] text-white text-[10px] uppercase font-bold px-3">
                    {s.city}
                  </Badge>
                  <h3 className="font-serif font-bold text-lg">{s.prop}</h3>
                  {s.checkin && (
                    <p className="text-xs text-muted-foreground">
                      📅 {getFormattedDate(s.checkin)} → {getFormattedDate(s.checkout)} ({nights} nights)
                    </p>
                  )}
                </div>
                <div className="text-right">
                  {s.rate > 0 && <div className="font-bold text-[#1B2A4A] text-sm">¥{s.rate.toLocaleString()}/night</div>}
                  {total > 0 && <div className="text-[10px] text-muted-foreground font-bold">Total: ¥{total.toLocaleString()}</div>}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {s.conf ? (
                  <Badge variant="secondary" className="bg-slate-100 text-[#1B2A4A] text-[10px] font-bold">
                    🔑 {s.conf}
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-slate-50 text-slate-300 text-[10px] font-bold">
                    No confirmation
                  </Badge>
                )}
                {s.host && (
                  <Badge variant="secondary" className="bg-slate-100 text-[#1B2A4A] text-[10px] font-bold">
                    👤 {s.host}
                  </Badge>
                )}
                {s.phone && (
                  <Badge variant="secondary" className="bg-slate-100 text-[#2D6A4F] text-[10px] font-bold">
                    📞 {s.phone}
                  </Badge>
                )}
              </div>

              {s.notes && (
                <p className="text-xs text-muted-foreground italic bg-slate-50 p-3 rounded-xl">
                  💬 {s.notes}
                </p>
              )}

              <div className="flex gap-2 pt-2">
                {s.url && (
                  <Button size="sm" className="bg-[#1B2A4A] text-white rounded-xl text-[10px] font-bold px-5" asChild>
                    <a href={s.url} target="_blank">View Listing →</a>
                  </Button>
                )}
                <Button size="sm" variant="outline" className="rounded-xl text-[10px] font-bold px-4 border-slate-200">
                  ✏️ Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {totalCost > 0 && (
        <Card className="bg-[#1B2A4A] text-white border-none shadow-md rounded-2xl p-6">
          <div className="flex justify-between items-center font-bold">
            <span className="text-sm uppercase tracking-widest opacity-80">Total Accommodation</span>
            <span className="text-xl">¥{totalCost.toLocaleString()}</span>
          </div>
        </Card>
      )}
    </div>
  );
}

function getFormattedDate(d?: string) {
  if (!d) return "";
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}
