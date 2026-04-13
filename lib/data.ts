import { TripItem, ChecklistItem, Booking, FoodItem, Phrase, Stay } from "./types";

export const SEED_ITEMS: TripItem[] = [
  { id: 't1', city: 'tokyo', day: 1, date: '2025-05-25', time: 'morning', name: 'Arrive Narita → Shibuya (Narita Express)', cat: 'transport', desc: "Take N'EX with JR Pass! Check into Airbnb and freshen up.", cost: 0, dur: 150, url: '', offbeat: false, veg: false, booked: false },
  { id: 't2', city: 'tokyo', day: 1, date: '2025-05-25', time: 'afternoon', name: 'Shimokitazawa Exploration', cat: 'offbeat', desc: "Tokyo's bohemian neighbourhood — vintage shops, indie cafes, street art. Perfect jet-lag stroll.", cost: 0, dur: 180, url: '', offbeat: true, veg: false, booked: false },
  { id: 't3', city: 'tokyo', day: 1, date: '2025-05-25', time: 'afternoon', name: 'Bear Pond Espresso', cat: 'food', desc: 'Famous coffee spot with vegetarian pastries.', cost: 1500, dur: 60, url: '', offbeat: false, veg: true, booked: false },
  { id: 't4', city: 'tokyo', day: 1, date: '2025-05-25', time: 'evening', name: 'Afuri Ramen Ebisu', cat: 'food', desc: 'Yuzu shio ramen with vegan/vegetarian options. Light and citrusy.', cost: 1200, dur: 60, url: 'https://afuri.com', offbeat: false, veg: true, booked: false },
  { id: 't5', city: 'tokyo', day: 2, date: '2025-05-26', time: 'morning', name: 'Yanaka Ginza Shopping Street', cat: 'offbeat', desc: 'Old-school Tokyo neighbourhood — traditional shops, cat statues, zero tourists.', cost: 0, dur: 120, url: '', offbeat: true, veg: false, booked: false },
  { id: 't6', city: 'tokyo', day: 2, date: '2025-05-26', time: 'afternoon', name: 'Nezu Shrine', cat: 'activity', desc: "One of Tokyo's oldest shrines with azalea garden & mini torii gates (like a mini Fushimi Inari!).", cost: 200, dur: 90, url: '', offbeat: true, veg: false, booked: false },
  { id: 't7', city: 'tokyo', day: 2, date: '2025-05-26', time: 'afternoon', name: 'Kayaba Coffee', cat: 'food', desc: '100-year-old coffee house in a preserved wooden building. Egg sandwiches & fluffy pancakes.', cost: 1000, dur: 60, url: '', offbeat: true, veg: true, booked: false },
  { id: 't8', city: 'tokyo', day: 2, date: '2025-05-26', time: 'evening', name: 'Ueno Park Sunset Stroll', cat: 'activity', desc: 'Beautiful park walk, street performers, temple hopping at sunset.', cost: 0, dur: 120, url: '', offbeat: false, veg: false, booked: false },
  { id: 't9', city: 'tokyo', day: 3, date: '2025-05-27', time: 'morning', name: 'Meiji Shrine', cat: 'activity', desc: 'Peaceful forest shrine in the heart of Shibuya. Write wishes on wooden ema plaques.', cost: 0, dur: 90, url: '', offbeat: false, veg: false, booked: false },
  { id: 't10', city: 'tokyo', day: 3, date: '2025-05-27', time: 'afternoon', name: 'Street Go-Kart (JAPANKART)', cat: 'offbeat', desc: 'Drive real go-karts through Tokyo streets in costume! International license required. Book ahead!', cost: 10000, dur: 150, url: 'https://www.japan-kart.com/', offbeat: true, veg: false, booked: false },
  { id: 't11', city: 'tokyo', day: 3, date: '2025-05-27', time: 'evening', name: 'Shibuya Sky Observation Deck', cat: 'activity', desc: '360° rooftop views of Tokyo at sunset. Book the sunset slot!', cost: 2200, dur: 90, url: 'https://www.shibuya-scramble-square.com/sky/', offbeat: false, veg: false, booked: false },
  { id: 't12', city: 'tokyo', day: 3, date: '2025-05-27', time: 'evening', name: 'Ain Soph Journey (Vegan dinner)', cat: 'food', desc: 'Vegan burgers & pancakes. Fully plant-based, delicious.', cost: 3000, dur: 90, url: '', offbeat: false, veg: true, booked: false },
  { id: 't13', city: 'tokyo', day: 4, date: '2025-05-28', time: 'morning', name: 'TeamLab Planets', cat: 'activity', desc: 'Immersive digital art — wade through water, infinity rooms. Book 9am slot to avoid crowds!', cost: 3800, dur: 180, url: 'https://www.teamlab.art/e/planets/', offbeat: false, veg: false, booked: false },
  { id: 't14', city: 'tokyo', day: 4, date: '2025-05-28', time: 'afternoon', name: 'Odaiba Island', cat: 'activity', desc: 'Futuristic island — Rainbow Bridge views, giant Gundam statue, beach vibes.', cost: 0, dur: 240, url: '', offbeat: false, veg: false, booked: false },
  { id: 't15', city: 'tokyo', day: 4, date: '2025-05-28', time: 'afternoon', name: 'DiverCity Food Court', cat: 'food', desc: 'Curry, udon, and veggie options in this Odaiba mall.', cost: 1500, dur: 60, url: '', offbeat: false, veg: true, booked: false },
  { id: 't16', city: 'tokyo', day: 4, date: '2025-05-28', time: 'evening', name: 'Pack & Prep for Kyoto', cat: 'todo', desc: 'Early Shinkansen tomorrow! Pack bags, organize JR Pass.', cost: 0, dur: 60, url: '', offbeat: false, veg: false, booked: false },

  { id: 'k1', city: 'kyoto', day: 5, date: '2025-05-29', time: 'morning', name: 'Fushimi Inari at 5:30am ✨', cat: 'offbeat', desc: 'Beat ALL crowds. Magic empty torii gates at sunrise. Worth every second of the early wake!', cost: 0, dur: 180, url: '', offbeat: true, veg: false, booked: false },
  { id: 'k2', city: 'kyoto', day: 5, date: '2025-05-29', time: 'morning', name: 'Vermillion Cafe Breakfast', cat: 'food', desc: 'Right at Fushimi Inari base. Great coffee & vegetarian breakfast with shrine views.', cost: 1200, dur: 60, url: '', offbeat: false, veg: true, booked: false },
  { id: 'k3', city: 'kyoto', day: 5, date: '2025-05-29', time: 'afternoon', name: 'Gion District Walk', cat: 'activity', desc: 'Geisha district stroll. Spot maiko (apprentice geisha) on their way to appointments.', cost: 0, dur: 120, url: '', offbeat: false, veg: false, booked: false },
  { id: 'k4', city: 'kyoto', day: 5, date: '2025-05-29', time: 'evening', name: 'Okutan Nanzenji (Tofu dinner)', cat: 'food', desc: '400-year-old tofu restaurant in temple grounds. Yudofu hot-pot course. BOOK AHEAD!', cost: 3500, dur: 90, url: 'http://www.okutan.co.jp/', offbeat: false, veg: true, booked: false },
  { id: 'k5', city: 'kyoto', day: 6, date: '2025-05-30', time: 'morning', name: 'Arashiyama Bamboo Grove (7am!)', cat: 'activity', desc: 'Arrive early for the grove without crowds. Magical morning light.', cost: 0, dur: 60, url: '', offbeat: false, veg: false, booked: false },
  { id: 'k6', city: 'kyoto', day: 6, date: '2025-05-30', time: 'morning', name: 'Gio-ji Temple (Hidden Gem)', cat: 'offbeat', desc: 'Moss temple most tourists miss. Incredibly peaceful thatched-roof temple covered in lush moss.', cost: 300, dur: 45, url: '', offbeat: true, veg: false, booked: false },
  { id: 'k7', city: 'kyoto', day: 6, date: '2025-05-30', time: 'afternoon', name: 'Hozugawa River Boat Ride', cat: 'offbeat', desc: 'Traditional wooden boat down the river. Boatmen use poles. Stunning gorge scenery.', cost: 4100, dur: 120, url: '', offbeat: true, veg: false, booked: false },
  { id: 'k8', city: 'kyoto', day: 6, date: '2025-05-30', time: 'afternoon', name: 'Arashiyama Yoshimura', cat: 'food', desc: 'Soba noodle restaurant with river views. Ask for vegetarian tempura soba.', cost: 1500, dur: 60, url: '', offbeat: false, veg: true, booked: false },
  { id: 'k9', city: 'kyoto', day: 6, date: '2025-05-30', time: 'evening', name: 'Monkey Park Iwatayama', cat: 'activity', desc: 'Hilltop park with 120 wild monkeys + panoramic Kyoto views. Fun for kids!', cost: 550, dur: 90, url: '', offbeat: false, veg: false, booked: false },
  { id: 'k10', city: 'kyoto', day: 7, date: '2025-05-31', time: 'morning', name: 'JR Train to Nara (45 min)', cat: 'transport', desc: 'Free with JR Pass!', cost: 0, dur: 45, url: '', offbeat: false, veg: false, booked: false },
  { id: 'k11', city: 'kyoto', day: 7, date: '2025-05-31', time: 'morning', name: 'Nara Park + Deer 🦌', cat: 'activity', desc: 'Meet the famous bowing deer! Buy shika senbei (deer crackers) and make friends.', cost: 200, dur: 120, url: '', offbeat: false, veg: false, booked: false },
  { id: 'k12', city: 'kyoto', day: 7, date: '2025-05-31', time: 'afternoon', name: 'Todai-ji Temple', cat: 'activity', desc: "World's largest wooden building with giant bronze Buddha. Mind-blowing scale.", cost: 600, dur: 90, url: '', offbeat: false, veg: false, booked: false },
  { id: 'k13', city: 'kyoto', day: 7, date: '2025-05-31', time: 'afternoon', name: 'Naramachi Walking', cat: 'offbeat', desc: 'Traditional merchant district with Edo-period houses, craft shops, and hidden cafes.', cost: 0, dur: 120, url: '', offbeat: true, veg: false, booked: false },

  { id: 'h1', city: 'hiroshima', day: 8, date: '2025-06-01', time: 'morning', name: 'Shinkansen Kyoto → Hiroshima', cat: 'transport', desc: '1.5 hour bullet train. Grab ekiben (train bento) for the journey!', cost: 0, dur: 90, url: '', offbeat: false, veg: false, booked: false },
  { id: 'h2', city: 'hiroshima', day: 8, date: '2025-06-01', time: 'morning', name: 'Peace Memorial Park & Museum', cat: 'activity', desc: 'Atomic Bomb Dome, Peace Museum, Children\'s Peace Monument. Heavy but essential.', cost: 200, dur: 180, url: '', offbeat: false, veg: false, booked: false },
  { id: 'h3', city: 'hiroshima', day: 8, date: '2025-06-01', time: 'afternoon', name: 'Shukkeien Garden', cat: 'offbeat', desc: 'Beautiful Edo-period garden that survived the bombing. Peaceful contrast to the morning.', cost: 260, dur: 60, url: '', offbeat: true, veg: false, booked: false },
  { id: 'h4', city: 'hiroshima', day: 8, date: '2025-06-01', time: 'afternoon', name: 'Nagata-ya (Vegan Okonomiyaki)', cat: 'food', desc: 'Hiroshima-style layered okonomiyaki with vegan options available. Local institution!', cost: 1200, dur: 60, url: '', offbeat: false, veg: true, booked: false },
  { id: 'h5', city: 'hiroshima', day: 8, date: '2025-06-01', time: 'evening', name: 'Hiroshima Night Walk', cat: 'activity', desc: 'Stroll along the river, see Peace Dome lit up at night. Reflect on the day.', cost: 0, dur: 90, url: '', offbeat: false, veg: false, booked: false },
  { id: 'h6', city: 'hiroshima', day: 9, date: '2025-06-02', time: 'morning', name: 'JR Ferry to Miyajima Island', cat: 'transport', desc: 'Free with JR Pass! 10-minute scenic ferry ride.', cost: 0, dur: 30, url: '', offbeat: false, veg: false, booked: false },
  { id: 'h7', city: 'hiroshima', day: 9, date: '2025-06-02', time: 'morning', name: 'Floating Torii Gate', cat: 'activity', desc: 'Iconic vermillion gate in the water. Check tide times — low tide lets you walk to it!', cost: 0, dur: 60, url: '', offbeat: false, veg: false, booked: false },
  { id: 'h8', city: 'hiroshima', day: 9, date: '2025-06-02', time: 'afternoon', name: 'Mt. Misen Hike / Ropeway', cat: 'offbeat', desc: 'Sacred mountain with wild deer & monkeys. Take ropeway up, hike down for best views.', cost: 1840, dur: 240, url: '', offbeat: true, veg: false, booked: false },
  { id: 'h9', city: 'hiroshima', day: 9, date: '2025-06-02', time: 'evening', name: 'Iwaso Ryokan Check-in', cat: 'stay', desc: '150-year-old inn. Includes kaiseki dinner (request vegetarian), onsen bath, futon.', cost: 35000, dur: 60, url: 'https://www.iwaso.com/en/', offbeat: false, veg: false, booked: false },
  { id: 'h10', city: 'hiroshima', day: 9, date: '2025-06-02', time: 'evening', name: 'Night Torii Gate (after day-trippers leave)', cat: 'offbeat', desc: 'Walk to lit-up torii gate when almost no one is around. Pure magic.', cost: 0, dur: 30, url: '', offbeat: true, veg: false, booked: false },

  { id: 'o1', city: 'osaka', day: 11, date: '2025-06-03', time: 'morning', name: 'Osaka Castle', cat: 'activity', desc: 'Iconic castle with beautiful park. Museum inside shows Osaka history.', cost: 600, dur: 180, url: '', offbeat: false, veg: false, booked: false },
  { id: 'o2', city: 'osaka', day: 11, date: '2025-06-03', time: 'afternoon', name: 'Shinsekai District', cat: 'offbeat', desc: 'Retro neon district with Tsutenkaku Tower. Feels like 1960s Japan — kitschy and fun.', cost: 0, dur: 180, url: '', offbeat: true, veg: false, booked: false },
  { id: 'o3', city: 'osaka', day: 11, date: '2025-06-03', time: 'afternoon', name: 'Kushikatsu Veggie Skewers', cat: 'food', desc: 'Shinsekai specialty. Some places have vegetable-only deep-fried skewers.', cost: 1500, dur: 60, url: '', offbeat: false, veg: true, booked: false },
  { id: 'o4', city: 'osaka', day: 11, date: '2025-06-03', time: 'evening', name: 'Spa World', cat: 'activity', desc: 'Giant onsen theme park with baths from around the world. Great for families.', cost: 1500, dur: 180, url: '', offbeat: false, veg: false, booked: false },
];

export const SEED_CHECKS: ChecklistItem[] = [
  { id: 'c1', cat: 'booking', title: 'Purchase JR Pass (14-day) online', priority: 'high', due: '2025-03-25', done: false, notes: 'Buy before leaving India. Get voucher shipped or collect at airport.' },
  { id: 'c2', cat: 'booking', title: 'Book TeamLab Planets tickets', priority: 'high', due: '2025-04-25', done: false, notes: 'Book 9am slot. Sells out weeks in advance!' },
  { id: 'c7', cat: 'booking', title: 'Book all 4 Airbnbs', priority: 'high', due: '2025-03-25', done: false, notes: 'Tokyo (Shibuya/Shinjuku), Kyoto (Gion), Hiroshima, Osaka (Namba)' },
  { id: 'c8', cat: 'document', title: 'Check passport validity', priority: 'high', due: '2025-04-01', done: false, notes: 'All family members!' },
  { id: 'c13', cat: 'packing', title: 'Comfortable walking shoes', priority: 'high', due: '2025-05-20', done: false, notes: "You'll walk 15,000+ steps/day" },
];

export const SEED_BOOKINGS: Booking[] = [
  { id: 'b1', name: 'JR Pass (14-day)', type: 'transport', priority: 'high', date: '2025-05-25', cost: 50000, url: 'https://www.jrpass.com/', notes: 'Activate Day 1 at any major JR station.', status: 'pending', conf: '' },
  { id: 'b2', name: 'TeamLab Planets', type: 'experience', priority: 'high', date: '2025-05-28', cost: 3800, url: 'https://www.teamlab.art/e/planets/', notes: 'Book 9am slot.', status: 'pending', conf: '' },
];

export const SEED_STAYS: Stay[] = [
  { id: 's1', city: 'Tokyo', prop: 'Airbnb — Shibuya/Shinjuku area', checkin: '2025-05-25', checkout: '2025-05-29', conf: '', host: '', phone: '', rate: 20000, url: 'https://www.airbnb.com', notes: '4 nights. Central location, metro access, family-friendly.' },
];

export const SEED_FOOD: Record<string, FoodItem[]> = {
  tokyo: [
    { name: 'Afuri Ramen Ebisu', dish: 'Yuzu Shio Vegan Ramen', type: 'vegan', price: '¥1,200', maps: 'https://maps.google.com/?q=Afuri+Ramen+Ebisu' },
    { name: 'Ain Soph Journey', dish: 'Vegan Burgers & Pancakes', type: 'vegan', price: '¥1,500–2,500', maps: 'https://maps.google.com/?q=Ain+Soph+Journey+Shinjuku' },
  ],
  kyoto: [
    { name: 'Okutan Nanzenji', dish: 'Yudofu Hot Pot Tofu', type: 'veg', price: '¥3,500', maps: 'https://maps.google.com/?q=Okutan+Nanzenji' },
  ]
};

export const SEED_PHRASES: Phrase[] = [
  { jp: 'ベジタリアンです', en: 'I am vegetarian', rom: 'Bejitarian desu' },
  { jp: '肉なしでお願いします', en: 'Without meat please', rom: 'Niku nashi de onegaishimasu' },
  { jp: 'ありがとうございます', en: 'Thank you very much', rom: 'Arigatō gozaimasu' },
];
