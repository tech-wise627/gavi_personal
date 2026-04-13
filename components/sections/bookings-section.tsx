"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

const PRIORITY_LABELS = { high: "🔴 Book NOW", medium: "🟡 Book Soon", low: "🟢 Flexible" };
const STATUS_STYLE = { pending: "bg-[#F7B731]", booked: "bg-[#2D6A4F]", confirmed: "bg-[#1B2A4A]" };

export function BookingsSection() {
  const { data, updateData } = useTripStore();

  if (!data) return null;

  const totalCost = data.bookings.reduce((s, b) => s + b.cost, 0);
  const bookedCost = data.bookings.filter(b => b.status !== 'pending').reduce((s, b) => s + b.cost, 0);

  return (
    <div className="space-y-6">
      <Card className="border-none shadow-sm rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-2xl font-bold text-[#2D6A4F]">
              {data.bookings.filter(b => b.status !== 'pending').length} / {data.bookings.length}
            </div>
            <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">
              Booked/Confirmed
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#1B2A4A]">¥{bookedCost.toLocaleString()}</div>
            <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">
              Spent on bookings
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[#D62828]">¥{(totalCost - bookedCost).toLocaleString()}</div>
            <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mt-1">
              Still to pay
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-4">
        {data.bookings.map((b) => (
          <Card key={b.id} className={cn(
            "border-none border-t-4 shadow-sm rounded-xl transition-all",
            b.status === 'confirmed' ? "border-t-[#1B2A4A]" : b.status === 'booked' ? "border-t-[#2D6A4F]" : "border-t-[#F7B731]"
          )}>
            <CardContent className="p-5 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm">{b.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-[10px] bg-slate-100 font-bold uppercase">
                      {PRIORITY_LABELS[b.priority]}
                    </Badge>
                    <Badge variant="secondary" className="text-[10px] bg-slate-100 font-bold uppercase">
                      {b.type}
                    </Badge>
                  </div>
                </div>
                <Badge className={cn("text-[10px] font-bold uppercase text-white px-3 py-1", STATUS_STYLE[b.status])}>
                  {b.status}
                </Badge>
              </div>

              {(b.date || b.cost > 0 || b.notes) && (
                <div className="text-xs text-muted-foreground space-y-1">
                  {b.date && <div>📅 {getFormattedDate(b.date)}</div>}
                  {b.cost > 0 && <div>💰 ¥{b.cost.toLocaleString()}</div>}
                  {b.notes && <div className="italic">💬 {b.notes}</div>}
                </div>
              )}

              <div className="flex gap-2">
                <Input 
                  className="rounded-xl border-dashed h-9 text-xs" 
                  placeholder="📝 Enter confirmation code..." 
                  defaultValue={b.conf}
                />
                {b.url && (
                  <Button size="sm" variant="default" className="bg-[#1B2A4A] h-9 text-xs px-4 rounded-xl" asChild>
                    <a href={b.url} target="_blank">Book →</a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function getFormattedDate(d?: string) {
  if (!d) return "";
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}
