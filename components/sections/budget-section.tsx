"use client";

import { useState } from "react";
import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "../ui/table";
import { cn } from "../../lib/utils";

const RATES = { JPY: 1, INR: 0.56, USD: 0.0067 };
const SYMBOLS = { JPY: "¥", INR: "₹", USD: "$" };

const BUDGET_CATS = [
  { emoji: "🏠", name: "Accommodation", perPerson: 80000 },
  { emoji: "🚄", name: "JR Pass + Local Transport", perPerson: 55000 },
  { emoji: "🍜", name: "Food (¥4,000/day avg)", perPerson: 56000 },
  { emoji: "🎫", name: "Activities & Entry Fees", perPerson: 25000 },
  { emoji: "🛍️", name: "Shopping & Souvenirs", perPerson: 30000 },
  { emoji: "📱", name: "SIM / Misc", perPerson: 10000 },
];

export function BudgetSection() {
  const { data, updateData, addExpense, deleteExpense } = useTripStore();
  const [newExp, setNewExp] = useState({ desc: "", amt: "" });

  if (!data) return null;

  const fmt = (jpy: number) => {
    const r = RATES[data.currency];
    const s = SYMBOLS[data.currency];
    return s + (jpy * r).toLocaleString(undefined, { maximumFractionDigits: 0 });
  };

  const handleAddExpense = () => {
    if (!newExp.desc || !newExp.amt) return;
    addExpense({
      cat: "General",
      city: "Tokyo",
      desc: newExp.desc,
      amt: parseFloat(newExp.amt),
    });
    setNewExp({ desc: "", amt: "" });
  };

  const grandTotalJPY = BUDGET_CATS.reduce((s, c) => s + c.perPerson * data.familySize, 0);
  const actualSpentINR = data.expenses.reduce((s, e) => s + e.amt, 0);
  const actualSpentJPY = actualSpentINR / RATES.INR;

  return (
    <div className="space-y-8">
      <Card className="border-none shadow-sm rounded-2xl overflow-hidden p-6 space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <span className="text-sm font-bold whitespace-nowrap">👨‍👩‍👧‍👦 Family:</span>
            <Slider
              value={[data.familySize]}
              onValueChange={([val]) => updateData({ familySize: val })}
              max={6}
              min={1}
              step={1}
              className="flex-1"
            />
            <span className="font-bold text-[#1B2A4A] w-4">{data.familySize}</span>
          </div>
        </div>

        <div className="flex gap-2">
          {(["JPY", "INR", "USD"] as const).map((c) => (
            <Button
              key={c}
              variant={data.currency === c ? "default" : "outline"}
              size="sm"
              onClick={() => updateData({ currency: c })}
              className={cn(
                "rounded-full px-4 text-xs font-bold",
                data.currency === c ? "bg-[#1B2A4A] text-white" : ""
              )}
            >
              {SYMBOLS[c]} {c}
            </Button>
          ))}
        </div>

        <Table>
          <TableBody>
            {BUDGET_CATS.map((c) => (
              <TableRow key={c.name} className="hover:bg-transparent border-slate-100">
                <TableCell className="px-0 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{c.emoji}</span>
                    <span className="text-sm font-medium">{c.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-bold text-sm px-0">
                  {fmt(c.perPerson * data.familySize)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-slate-50 hover:bg-slate-50 border-none font-bold">
              <TableCell className="rounded-l-xl py-4">TOTAL ({data.familySize} people)</TableCell>
              <TableCell className="text-right text-[#D62828] text-lg rounded-r-xl py-4">
                {fmt(grandTotalJPY)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <div className="space-y-4">
        <h3 className="font-serif font-bold text-lg">+ Add Actual Expense</h3>
        <Card className="border-none shadow-sm rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              placeholder="What was it?" 
              value={newExp.desc}
              onChange={(e) => setNewExp({ ...newExp, desc: e.target.value })}
              className="rounded-xl border-2"
            />
            <div className="flex gap-2">
              <Input 
                type="number" 
                placeholder="Amount (₹)" 
                value={newExp.amt}
                onChange={(e) => setNewExp({ ...newExp, amt: e.target.value })}
                className="rounded-xl border-2"
              />
              <Button onClick={handleAddExpense} className="bg-[#D62828] hover:bg-[#b71c1c] rounded-xl px-6">
                Add
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {data.expenses.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-lg">Actual Expenses</h3>
          <div className="grid gap-2">
            {data.expenses.map((e) => (
              <Card key={e.id} className="border-none shadow-sm rounded-xl">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">{e.desc}</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mt-1">
                      {e.cat} · {e.city}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-[#1B2A4A]">₹{e.amt.toLocaleString()}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => deleteExpense(e.id)}>
                      🗑
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-[#1B2A4A] text-white border-none shadow-md rounded-xl p-5">
              <div className="flex justify-between items-center font-bold">
                <span className="text-sm uppercase tracking-widest">Total Spent</span>
                <span className="text-xl">₹{actualSpentINR.toLocaleString()}</span>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
