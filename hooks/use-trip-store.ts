"use client";

import { useState, useEffect } from "react";
import { 
  TripItem, 
  ChecklistItem, 
  Booking, 
  Stay, 
  Expense 
} from "../lib/types";
import { 
  SEED_ITEMS, 
  SEED_CHECKS, 
  SEED_BOOKINGS, 
  SEED_STAYS 
} from "../lib/data";

const STORAGE_KEY = "fcj_data";

interface TripData {
  items: TripItem[];
  checks: ChecklistItem[];
  bookings: Booking[];
  stays: Stay[];
  expenses: Expense[];
  familySize: number;
  currency: "JPY" | "INR" | "USD";
}

export function useTripStore() {
  const [data, setData] = useState<TripData | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setData(JSON.parse(saved));
    } else {
      const initial: TripData = {
        items: SEED_ITEMS,
        checks: SEED_CHECKS,
        bookings: SEED_BOOKINGS,
        stays: SEED_STAYS,
        expenses: [],
        familySize: 4,
        currency: "JPY",
      };
      setData(initial);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    }
  }, []);

  const updateData = (newData: Partial<TripData>) => {
    if (!data) return;
    const updated = { ...data, ...newData };
    setData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  // CRUD for Itinerary Items
  const toggleItemBooked = (id: string) => {
    if (!data) return;
    const items = data.items.map((it) =>
      it.id === id ? { ...it, booked: !it.booked } : it
    );
    updateData({ items });
  };

  const deleteItem = (id: string) => {
    if (!data) return;
    updateData({ items: data.items.filter((it) => it.id !== id) });
  };

  // CRUD for Checklist
  const toggleCheck = (id: string) => {
    if (!data) return;
    const checks = data.checks.map((c) =>
      c.id === id ? { ...c, done: !c.done } : c
    );
    updateData({ checks });
  };

  // CRUD for Expenses
  const addExpense = (expense: Omit<Expense, "id" | "date">) => {
    if (!data) return;
    const newExpense: Expense = {
      ...expense,
      id: "e" + Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    updateData({ expenses: [newExpense, ...data.expenses] });
  };

  const deleteExpense = (id: string) => {
    if (!data) return;
    updateData({ expenses: data.expenses.filter((e) => e.id !== id) });
  };

  // CRUD for Stays
  const addStay = (stay: Omit<Stay, "id">) => {
    if (!data) return;
    const newStay: Stay = {
      ...stay,
      id: "s" + Date.now(),
    };
    updateData({ stays: [...data.stays, newStay].sort((a, b) => a.checkin.localeCompare(b.checkin)) });
  };

  const deleteStay = (id: string) => {
    if (!data) return;
    updateData({ stays: data.stays.filter((s) => s.id !== id) });
  };

  return {
    data,
    updateData,
    toggleItemBooked,
    deleteItem,
    toggleCheck,
    addExpense,
    deleteExpense,
    addStay,
    deleteStay,
  };
}
