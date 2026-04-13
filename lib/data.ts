import { TripItem, ChecklistItem, Booking, FoodItem, Phrase, Stay } from "./types";

export const SEED_ITEMS: TripItem[] = [
  // DAY 1: ARRIVAL (MAY 25)
  { id: 'd1-1', city: 'tokyo', day: 1, date: '2025-05-25', time: 'morning', name: 'Narita/Haneda Arrival', cat: 'transport', desc: 'Activate JR Pass, pick up Suica IC cards, and get pocket Wi-Fi.', cost: 0, dur: 90, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd1-2', city: 'tokyo', day: 1, date: '2025-05-25', time: 'afternoon', name: 'Train to Shimokitazawa', cat: 'transport', desc: '~1 hr from Narita. Check in, unpack, and short neighbourhood walk.', cost: 0, dur: 90, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd1-3', city: 'tokyo', day: 1, date: '2025-05-25', time: 'evening', name: 'Dinner & Early Rest', cat: 'food', desc: 'Dinner from konbini or local tofu café. Reset the clock by 9 PM.', cost: 1500, dur: 60, url: '', offbeat: false, veg: true, booked: false },

  // DAY 2: OLD TOKYO (MAY 26)
  { id: 'd2-1', city: 'tokyo', day: 2, date: '2025-05-26', time: 'morning', name: 'Yanaka Neighbourhood', cat: 'offbeat', desc: 'Edo-era backstreets, 70+ temples, local cats. Japan before modernity.', cost: 0, dur: 120, url: '', offbeat: true, veg: false, booked: false },
  { id: 'd2-2', city: 'tokyo', day: 2, date: '2025-05-26', time: 'morning', name: 'Nezu Shrine', cat: 'activity', desc: 'Quiet torii tunnel through a hillside garden. Like a mini Fushimi Inari.', cost: 0, dur: 60, url: '', offbeat: true, veg: false, booked: false },
  { id: 'd2-3', city: 'tokyo', day: 2, date: '2025-05-26', time: 'afternoon', name: 'Nakameguro & Daikanyama', cat: 'activity', desc: 'Canal walk lined with boutiques. Visit Daikanyama T-Site (aesthetic multi-building bookshop).', cost: 0, dur: 180, url: '', offbeat: true, veg: false, booked: false },
  { id: 'd2-4', city: 'tokyo', day: 2, date: '2025-05-26', time: 'evening', name: 'Dinner: Taizen, Shimokitazawa', cat: 'food', desc: 'Vegetarian Japanese izakaya, set meals ¥1,500–2,500.', cost: 2500, dur: 90, url: '', offbeat: true, veg: true, booked: false },

  // DAY 3: TECH DAY (MAY 27)
  { id: 'd3-1', city: 'tokyo', day: 3, date: '2025-05-27', time: 'morning', name: 'Miraikan (Odaiba)', cat: 'activity', desc: 'Geo-Cosmos, Quantum Computer Disco, ISS replica. (Note: Closed Tuesdays, adjust if needed).', cost: 630, dur: 180, url: 'https://www.miraikan.jst.go.jp/en/', offbeat: false, veg: false, booked: false },
  { id: 'd3-2', city: 'tokyo', day: 3, date: '2025-05-27', time: 'afternoon', name: 'TeamLab Planets', cat: 'activity', desc: 'Immersive digital art. Infinity mirrors, floating flowers, koi pools. Book in advance!', cost: 3200, dur: 120, url: 'https://www.teamlab.art/e/planets/', offbeat: false, veg: false, booked: false },
  { id: 'd3-3', city: 'tokyo', day: 3, date: '2025-05-27', time: 'evening', name: 'Odaiba Waterfront Sunset', cat: 'activity', desc: 'Rainbow Bridge, Tokyo skyline reflection in the bay.', cost: 0, dur: 90, url: '', offbeat: false, veg: false, booked: false },

  // DAY 4: CARS DAY (MAY 28)
  { id: 'd4-1', city: 'yokohama', day: 4, date: '2025-05-28', time: 'morning', name: 'Yokohama Minato Mirai', cat: 'activity', desc: 'Cup Noodles Museum, Yokohama Air Cabin, and VS PARK variety show games.', cost: 2000, dur: 240, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd4-2', city: 'yokohama', day: 4, date: '2025-05-28', time: 'evening', name: 'Daikoku Parking Area', cat: 'offbeat', desc: 'World-famous JDM car meet. Nissan GT-Rs, Skylines, etc. Book a guided tour.', cost: 15000, dur: 240, url: '', offbeat: true, veg: false, booked: false },

  // DAY 5: STREET KART (MAY 29)
  { id: 'd5-1', city: 'tokyo', day: 5, date: '2025-05-29', time: 'afternoon', name: 'Street Go-Kart (JAPANKART)', cat: 'offbeat', desc: 'Drive through Shibuya & Harajuku. International Driving Permit required.', cost: 15000, dur: 120, url: '', offbeat: true, veg: false, booked: false },
  { id: 'd5-2', city: 'tokyo', day: 5, date: '2025-05-29', time: 'evening', name: 'Shibuya Crossing & Sky', cat: 'activity', desc: 'Shibuya Scramble and Shibuya Sky rooftop observation deck.', cost: 2000, dur: 120, url: 'https://www.shibuya-scramble-square.com/sky/', offbeat: false, veg: false, booked: false },
  { id: 'd5-3', city: 'tokyo', day: 5, date: '2025-05-29', time: 'evening', name: "Dinner: T's TANTAN, Shibuya", cat: 'food', desc: 'Fully vegetarian ramen, perfect late-night meal.', cost: 1200, dur: 60, url: '', offbeat: false, veg: true, booked: false },

  // DAY 6: FUJI TRAVEL (MAY 30)
  { id: 'd6-1', city: 'kawaguchiko', day: 6, date: '2025-05-30', time: 'morning', name: 'Travel to Fuji', cat: 'transport', desc: 'Fujikyu Express from Shinjuku to Kawaguchiko (40 min).', cost: 1750, dur: 40, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd6-2', city: 'kawaguchiko', day: 6, date: '2025-05-30', time: 'afternoon', name: 'Oshino Hakkai', cat: 'activity', desc: '8 crystal-clear ponds fed by Fuji snowmelt. Peaceful and local.', cost: 0, dur: 120, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd6-3', city: 'kawaguchiko', day: 6, date: '2025-05-30', time: 'afternoon', name: 'Chureito Pagoda Golden Hour', cat: 'activity', desc: '398 steps up for the iconic Fuji backdrop.', cost: 0, dur: 60, url: '', offbeat: false, veg: false, booked: false },

  // DAY 7: KYOTO TRAVEL (MAY 31)
  { id: 'd7-1', city: 'kawaguchiko', day: 7, date: '2025-05-31', time: 'morning', name: 'Fuji Dawn over Lake', cat: 'activity', desc: 'Lake Kawaguchi north shore walk for mirror reflections.', cost: 0, dur: 90, url: '', offbeat: true, veg: false, booked: false },
  { id: 'd7-2', city: 'kyoto', day: 7, date: '2025-05-31', time: 'afternoon', name: 'Shinkansen to Kyoto', cat: 'transport', desc: 'Mishima → Kyoto (1.5 hrs). Arrive mid-afternoon.', cost: 0, dur: 90, url: '', offbeat: false, veg: false, booked: false },

  // DAY 8: FOREST & RIVER (JUNE 1)
  { id: 'd8-1', city: 'kyoto', day: 8, date: '2025-06-01', time: 'morning', name: 'Fushimi Inari (5:30am)', cat: 'activity', desc: 'Beat the crowds. Zero people between 5 and 7 AM.', cost: 0, dur: 180, url: '', offbeat: true, veg: false, booked: false },
  { id: 'd8-2', city: 'kyoto', day: 8, date: '2025-06-01', time: 'afternoon', name: 'Otagi Nenbutsuji & Arashiyama', cat: 'activity', desc: '1,200 stone statues and a rowboat on the Oi River.', cost: 1500, dur: 240, url: '', offbeat: true, veg: false, booked: false },

  // DAY 9: NARA DAY TRIP (JUNE 2)
  { id: 'd9-1', city: 'nara', day: 9, date: '2025-06-02', time: 'morning', name: 'Nara Deer Park', cat: 'activity', desc: '1,200 wild sika deer and Yoshikien Garden.', cost: 200, dur: 180, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd9-2', city: 'nara', day: 9, date: '2025-06-02', time: 'afternoon', name: 'Kasugayama Primeval Forest', cat: 'offbeat', desc: 'Ancient UNESCO forest path behind the shrine.', cost: 0, dur: 120, url: '', offbeat: true, veg: false, booked: false },

  // DAY 10: HIROSHIMA TRAVEL (JUNE 3)
  { id: 'd10-1', city: 'kyoto', day: 10, date: '2025-06-03', time: 'morning', name: 'Shinkansen to Hiroshima', cat: 'transport', desc: 'Kyoto → Hiroshima (1h 45min).', cost: 0, dur: 105, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd10-2', city: 'hiroshima', day: 10, date: '2025-06-03', time: 'afternoon', name: 'Shukkeien Garden', cat: 'activity', desc: 'Miniature Japanese landscape garden.', cost: 260, dur: 90, url: '', offbeat: true, veg: false, booked: false },

  // DAY 11: HIROSHIMA CULTUTE (JUNE 4)
  { id: 'd11-1', city: 'hiroshima', day: 11, date: '2025-06-04', time: 'morning', name: 'Orizuru Tower', cat: 'activity', desc: 'Observation tower, fold paper cranes. Peace Park views.', cost: 1600, dur: 90, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd11-2', city: 'hiroshima', day: 11, date: '2025-06-04', time: 'afternoon', name: 'Mitaki Temple (Hidden Gem)', cat: 'offbeat', desc: 'Forest temple with lanterns and waterfalls. No tourists.', cost: 0, dur: 120, url: '', offbeat: true, veg: false, booked: false },

  // DAY 12: MIYAJIMA (JUNE 5)
  { id: 'd12-1', city: 'miyajima', day: 12, date: '2025-06-05', time: 'afternoon', name: 'Itsukushima Floating Shrine', cat: 'stay', desc: 'Check into Ryokan. High tide for the floating gate.', cost: 45000, dur: 180, url: '', offbeat: false, veg: false, booked: false },
  { id: 'd12-2', city: 'miyajima', day: 12, date: '2025-06-05', time: 'evening', name: 'Night Walk at Torii Gate', cat: 'offbeat', desc: 'Island is quiet after day-trippers leave. Pure magic.', cost: 0, dur: 60, url: '', offbeat: true, veg: false, booked: false },

  // DAY 13: OSAKA TRAVEL (JUNE 6)
  { id: 'd13-1', city: 'osaka', day: 13, date: '2025-06-06', time: 'afternoon', name: 'Shinsekai & Maishima', cat: 'offbeat', desc: 'Retro Osaka streets and the Hundertwasser-designed incinerator.', cost: 0, dur: 180, url: '', offbeat: true, veg: false, booked: false },

  // DAY 14: OSAKA EXPLORATION (JUNE 7)
  { id: 'd14-1', city: 'osaka', day: 14, date: '2025-06-07', time: 'morning', name: 'Nakazakicho Neighbourhood', cat: 'offbeat', desc: 'Wooden houses, galleries, and independent cafés. Zero tourists.', cost: 0, dur: 120, url: '', offbeat: true, veg: false, booked: false },
  { id: 'd14-2', city: 'osaka', day: 14, date: '2025-06-07', time: 'afternoon', name: 'Panasonic Museum', cat: 'activity', desc: "Traces the founder's journey to a global tech empire.", cost: 0, dur: 120, url: '', offbeat: true, veg: false, booked: false },

  // DAY 15: DEPARTURE (JUNE 8)
  { id: 'd15-1', city: 'osaka', day: 15, date: '2025-06-08', time: 'morning', name: 'Haruka Express to KIX', cat: 'transport', desc: 'Tennoji → Kansai Airport (50 min).', cost: 0, dur: 50, url: '', offbeat: false, veg: false, booked: false },
];

export const SEED_CHECKS: ChecklistItem[] = [
  { id: 'c1', cat: 'booking', title: 'Purchase JR Pass (14-day)', priority: 'high', due: '2025-03-25', done: false, notes: 'Buy before leaving India.' },
  { id: 'c2', cat: 'booking', title: 'Book TeamLab Planets', priority: 'high', due: '2025-04-25', done: false, notes: 'Sells out weeks in advance!' },
  { id: 'c3', cat: 'booking', title: 'Book JDM Daikoku Tour', priority: 'high', due: '2025-04-15', done: false, notes: 'Crucial for Day 4 night.' },
  { id: 'c4', cat: 'booking', title: 'International Driving Permit', priority: 'high', due: '2025-04-01', done: false, notes: 'Required for Street Kart and Hakone drive.' },
  { id: 'c13', cat: 'packing', title: 'Comfortable walking shoes', priority: 'high', due: '2025-05-20', done: false, notes: "15,000+ steps per day expected." },
];

export const SEED_BOOKINGS: Booking[] = [
  { id: 'b1', name: 'JR Pass (14-day)', type: 'transport', priority: 'high', date: '2025-05-25', cost: 80000, url: '', notes: 'Activate at Narita.', status: 'pending', conf: '' },
  { id: 'b2', name: 'TeamLab Planets', type: 'experience', priority: 'high', date: '2025-05-27', cost: 3200, url: '', notes: 'Book Afternoon slot.', status: 'pending', conf: '' },
  { id: 'b3', name: 'Street Go-Karting', type: 'experience', priority: 'medium', date: '2025-05-29', cost: 15000, url: '', notes: 'Requires IDP.', status: 'pending', conf: '' },
  { id: 'b4', name: 'JDM Daikoku PA Tour', type: 'experience', priority: 'high', date: '2025-05-28', cost: 15000, url: '', notes: 'Hotel pickup.', status: 'pending', conf: '' },
];

export const SEED_STAYS: Stay[] = [
  { id: 's1', city: 'Tokyo', prop: 'Airbnb — Shimokitazawa', checkin: '2025-05-25', checkout: '2025-05-30', conf: '', host: '', phone: '', rate: 20000, url: '', notes: 'Shimokitazawa base for first 5 days.' },
  { id: 's2', city: 'Kawaguchiko', prop: 'Lakeside Ryokan', checkin: '2025-05-30', checkout: '2025-05-31', conf: '', host: '', phone: '', rate: 45000, url: '', notes: 'Fuji view from window.' },
  { id: 's3', city: 'Kyoto', prop: 'Airbnb — Fushimi Sake District', checkin: '2025-05-31', checkout: '2025-06-03', conf: '', host: '', phone: '', rate: 18000, url: '', notes: 'Near Fushimi Inari.' },
  { id: 's4', city: 'Hiroshima', prop: 'City Hotel', checkin: '2025-06-03', checkout: '2025-06-05', conf: '', host: '', phone: '', rate: 15000, url: '', notes: 'Waterfront area.' },
  { id: 's5', city: 'Miyajima', prop: 'Iwaso Ryokan', checkin: '2025-06-05', checkout: '2025-06-06', conf: '', host: '', phone: '', rate: 45000, url: '', notes: 'Traditional tatami room, established 1854.' },
  { id: 's6', city: 'Osaka', prop: 'Airbnb — Tennoji', checkin: '2025-06-06', checkout: '2025-06-08', conf: '', host: '', phone: '', rate: 16000, url: '', notes: 'Tennoji base for final 2 days.' },
];

export const SEED_FOOD: Record<string, FoodItem[]> = {
  tokyo: [
    { name: 'Taizen, Shimokitazawa', dish: 'Veg Izakaya Set Meals', type: 'veg', price: '¥1,500–2,500', maps: '' },
    { name: "T's TANTAN, Shibuya", dish: 'Sesame Vegan Ramen', type: 'vegan', price: '¥1,200', maps: '' },
  ],
  kyoto: [
    { name: 'Mumokuteki Café', dish: 'Vegan Japanese Set', type: 'vegan', price: '¥1,800', maps: '' },
  ],
  hiroshima: [
    { name: 'Nagataya', dish: 'Hiroshima Okonomiyaki (Veg)', type: 'veg', price: '¥1,500', maps: '' },
    { name: 'Jirokichi', dish: 'Teppanyaki Izakaya', type: 'vegan', price: '¥2,000', maps: '' },
  ],
  osaka: [
    { name: 'Green Earth', dish: 'Heritage Vegan Set', type: 'vegan', price: '¥1,600', maps: '' },
  ]
};

export const SEED_PHRASES: Phrase[] = [
  { jp: 'ベジタリアンです', en: 'I am vegetarian', rom: 'Bejitarian desu' },
  { jp: '肉なしでお願いします', en: 'Without meat please', rom: 'Niku nashi de onegaishimasu' },
  { jp: 'ありがとうございます', en: 'Thank you very much', rom: 'Arigatō gozaimasu' },
];
