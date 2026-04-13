"use client";

import { useTripStore } from "../../hooks/use-trip-store";
import { ChecklistItem, Priority } from "../../lib/types";
import { Progress } from "../ui/progress";
import { Checkbox } from "../ui/checkbox";
import { Card, CardContent } from "../ui/card";
import { cn } from "../../lib/utils";

const CAT_META = {
  booking: { label: "🔴 Must Book", color: "bg-[#D62828]" },
  document: { label: "📄 Documents", color: "bg-[#1B2A4A]" },
  packing: { label: "🧳 Packing", color: "bg-[#F7B731]" },
  todo: { label: "✅ To-Do", color: "bg-[#2D6A4F]" },
};

export function ChecklistSection() {
  const { data, toggleCheck } = useTripStore();

  if (!data) return null;

  const categories = Object.keys(CAT_META) as (keyof typeof CAT_META)[];

  return (
    <div className="space-y-8">
      {categories.map((cat) => {
        const items = data.checks.filter((c) => c.cat === cat);
        const doneCount = items.filter((c) => c.done).length;
        const progress = items.length > 0 ? (doneCount / items.length) * 100 : 0;
        const meta = CAT_META[cat];

        return (
          <div key={cat} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm" style={{ color: "var(--navy)" }}>
                {meta.label}
              </h3>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                {doneCount} / {items.length}
              </span>
            </div>
            
            <Progress value={progress} className="h-2 bg-slate-100" />

            <div className="grid gap-2">
              {items.map((item) => (
                <CheckItem 
                  key={item.id} 
                  item={item} 
                  onToggle={() => toggleCheck(item.id)} 
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CheckItem({ item, onToggle }: { item: ChecklistItem; onToggle: () => void }) {
  const priorityColors: Record<Priority, string> = {
    high: "bg-[#D62828]",
    medium: "bg-[#F7B731]",
    low: "bg-[#2D6A4F]",
  };

  return (
    <Card className={cn(
      "border-none shadow-sm rounded-xl transition-all",
      item.done && "opacity-60"
    )}>
      <CardContent className="p-4 flex items-center gap-3">
        <Checkbox 
          checked={item.done} 
          onCheckedChange={onToggle}
          className="w-5 h-5 rounded-md border-2"
        />
        <div className={cn("inline-block w-2 h-2 rounded-full flex-shrink-0", priorityColors[item.priority])} />
        <div className="flex-1 min-w-0">
          <p className={cn(
            "text-sm font-semibold truncate",
            item.done && "line-through text-muted-foreground"
          )}>
            {item.title}
          </p>
          {item.notes && (
            <p className="text-[10px] text-muted-foreground italic truncate">
              {item.notes}
            </p>
          )}
        </div>
        {item.due && (
          <div className="text-[9px] font-bold uppercase text-slate-400 whitespace-nowrap">
            {getFormattedDate(item.due)}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function getFormattedDate(d?: string) {
  if (!d) return "";
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}
