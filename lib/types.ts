export type City = 'tokyo' | 'kyoto' | 'hiroshima' | 'osaka' | 'yokohama' | 'kawaguchiko' | 'miyajima' | 'nara' | 'general';
export type Category = 'activity' | 'food' | 'transport' | 'offbeat' | 'stay' | 'todo';
export type TimeOfDay = 'morning' | 'afternoon' | 'evening';
export type BookingStatus = 'pending' | 'booked' | 'confirmed';
export type Priority = 'high' | 'medium' | 'low';

export interface TripItem {
  id: string;
  city: City;
  day: number;
  date: string;
  time: TimeOfDay;
  name: string;
  cat: Category;
  desc: string;
  cost: number;
  dur: number;
  url: string;
  offbeat: boolean;
  veg: boolean;
  booked: boolean;
  notes?: string;
}

export interface ChecklistItem {
  id: string;
  cat: 'booking' | 'document' | 'packing' | 'todo';
  title: string;
  priority: Priority;
  due: string;
  done: boolean;
  notes: string;
}

export interface Booking {
  id: string;
  name: string;
  type: string;
  priority: Priority;
  date: string;
  cost: number;
  url: string;
  notes: string;
  status: BookingStatus;
  conf: string;
}

export interface Stay {
  id: string;
  city: string;
  prop: string;
  checkin: string;
  checkout: string;
  conf: string;
  rate: number;
  host: string;
  phone: string;
  url: string;
  notes: string;
}

export interface Expense {
  id: string;
  cat: string;
  city: string;
  desc: string;
  amt: number;
  date: string;
}

export interface FoodItem {
  name: string;
  dish: string;
  type: 'vegan' | 'veg';
  price: string;
  maps: string;
}

export interface Phrase {
  jp: string;
  en: string;
  rom: string;
}
