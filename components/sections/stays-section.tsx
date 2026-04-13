"use client";

import { useState } from "react";
import { useTripStore } from "../../hooks/use-trip-store";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogClose
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Trash2 } from "lucide-react";

export function StaysSection() {
  const { data, addStay, deleteStay } = useTripStore();
  const [newStay, setNewStay] = useState({
    city: "",
    prop: "",
    checkin: "",
    checkout: "",
    conf: "",
    rate: 0,
    url: "",
    notes: "",
    host: "",
    phone: ""
  });

  if (!data) return null;

  const handleAddStay = () => {
    addStay(newStay);
    setNewStay({
      city: "",
      prop: "",
      checkin: "",
      checkout: "",
      conf: "",
      rate: 0,
      url: "",
      notes: "",
      host: "",
      phone: ""
    });
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-4xl font-serif font-black text-[#1a2a44]">Our <span className="text-[#e63946]">Homes</span> in Japan</h2>
          <p className="text-slate-500 font-medium">From traditional ryokans to modern city apartments.</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#e63946] hover:bg-[#c92a35] text-white font-black py-6 px-10 rounded-[2rem] shadow-2xl hover:shadow-red-500/20 uppercase tracking-[0.2em] transition-all">
              ➕ Add New Stay
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] border-none rounded-[3rem] p-10 bg-white">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-3xl font-serif font-black text-[#1a2a44]">Add <span className="text-[#e63946]">Stay</span></DialogTitle>
            </DialogHeader>
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Property Name</Label>
                  <Input 
                    placeholder="e.g. Park Hyatt" 
                    className="rounded-2xl border-slate-100" 
                    value={newStay.prop}
                    onChange={e => setNewStay({...newStay, prop: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">City/Location</Label>
                  <Input 
                    placeholder="e.g. Shinjuku, Tokyo" 
                    className="rounded-2xl border-slate-100" 
                    value={newStay.city}
                    onChange={e => setNewStay({...newStay, city: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Check In</Label>
                  <Input 
                    type="date" 
                    className="rounded-2xl border-slate-100" 
                    value={newStay.checkin}
                    onChange={e => setNewStay({...newStay, checkin: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Check Out</Label>
                  <Input 
                    type="date" 
                    className="rounded-2xl border-slate-100" 
                    value={newStay.checkout}
                    onChange={e => setNewStay({...newStay, checkout: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Nightly Rate (¥)</Label>
                  <Input 
                    type="number" 
                    className="rounded-2xl border-slate-100" 
                    value={newStay.rate}
                    onChange={e => setNewStay({...newStay, rate: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Conf Number</Label>
                  <Input 
                    placeholder="Optional" 
                    className="rounded-2xl border-slate-100" 
                    value={newStay.conf}
                    onChange={e => setNewStay({...newStay, conf: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] uppercase font-black tracking-widest text-slate-400">Notes / Details</Label>
                <Textarea 
                  placeholder="Host info, check-in instructions..." 
                  className="rounded-3xl border-slate-100 min-h-[100px]" 
                  value={newStay.notes}
                  onChange={e => setNewStay({...newStay, notes: e.target.value})}
                />
              </div>
            </div>
            <DialogFooter className="mt-8">
              <DialogClose asChild>
                <Button onClick={handleAddStay} className="w-full bg-[#1a2a44] hover:bg-black text-white font-black py-6 rounded-[2rem] uppercase tracking-widest">
                  Save Journey Home
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-6">
        {data.stays.map((s) => {
          const checkin = new Date(s.checkin);
          const checkout = new Date(s.checkout);
          const nights = s.checkin && s.checkout ? Math.round((checkout.getTime() - checkin.getTime()) / 86400000) : 0;
          
          return (
            <Card key={s.id} className="border-none shadow-[0_10px_50px_rgba(0,0,0,0.02)] rounded-[3rem] overflow-hidden bg-white group hover:shadow-2xl transition-all duration-700 relative">
               <button 
                  onClick={() => deleteStay(s.id)}
                  className="absolute top-6 right-6 p-2 text-slate-200 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all active:scale-90"
                  title="Delete Stay"
                >
                  <Trash2 size={20} />
                </button>

              <CardContent className="p-10">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-red-50 text-[#e63946] border-none px-6 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full">
                        {s.city}
                      </Badge>
                      {s.conf && (
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">CONF: {s.conf}</span>
                      )}
                    </div>
                    
                    <h3 className="text-4xl font-serif font-black text-[#1a2a44] group-hover:text-[#e63946] transition-colors leading-tight tracking-tight">
                      {s.prop}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-8 pt-4">
                       <div className="space-y-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none underline decoration-slate-100 underline-offset-8">Check In</p>
                        <p className="text-lg font-bold text-[#1a2a44]">{getFormattedDate(s.checkin)}</p>
                      </div>
                      <div className="text-slate-100 text-2xl font-light">→</div>
                      <div className="space-y-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none underline decoration-slate-100 underline-offset-8">Check Out</p>
                        <p className="text-lg font-bold text-[#1a2a44]">{getFormattedDate(s.checkout)}</p>
                      </div>
                      <div className="h-12 w-[1px] bg-slate-100 hidden md:block mx-2" />
                      <div className="space-y-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none underline decoration-[#e63946]/20 underline-offset-8">Duration</p>
                        <p className="text-lg font-bold text-[#e63946]">{nights} Nights</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-start md:items-end gap-8 text-left md:text-right border-t md:border-t-0 md:border-l border-slate-50 pt-8 md:pt-0 md:pl-10">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Total Bill / Rate</p>
                      <p className="text-4xl font-serif font-black text-[#1a2a44]">¥{s.rate.toLocaleString()}</p>
                    </div>

                    <div className="flex gap-4">
                      {s.url && (
                        <Button className="bg-[#1a2a44] hover:bg-black text-white rounded-[1.5rem] px-8 font-black text-xs h-14 transition-all uppercase tracking-widest shadow-xl" asChild>
                          <a href={s.url} target="_blank">View Guide →</a>
                        </Button>
                      )}
                      <Button variant="outline" className="rounded-[1.5rem] px-8 font-black text-xs h-14 border-slate-100 hover:bg-slate-50 uppercase tracking-widest">
                        Details
                      </Button>
                    </div>
                  </div>
                </div>

                {s.notes && (
                  <div className="mt-10 p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100/50 relative overflow-hidden group/note">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover/note:opacity-10 transition-opacity">
                      <span className="text-4xl">📝</span>
                    </div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <span className="h-1 w-4 bg-[#e63946] rounded-full" />
                      Trip Notes
                    </p>
                    <p className="text-sm text-slate-500 italic font-medium leading-relaxed max-w-2xl">
                      "{s.notes}"
                    </p>
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
