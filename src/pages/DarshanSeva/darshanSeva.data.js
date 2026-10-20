export const darshanSevaData = {
  intro: "View the schedule for daily poojas, aartis, and niti offerings.",
  notice: "Darshan timings may change on festival days.",
  timings: [
    { id: "mangala-alati", name: "Mangala Alati (Awakening)", label: "04:30 AM - 05:00 AM", start: "04:30", end: "05:00", access: "public", action: "details", icon: "Sunrise", description: "[ADD FROM TEMPLE]" },
    { id: "dwarapuja", name: "Dwarapuja & Mahasnana", label: "05:00 AM - 06:00 AM", start: "05:00", end: "06:00", access: "public", action: "details", icon: "Droplets", description: "[ADD FROM TEMPLE]" },
    { id: "balabhoga", name: "Balabhoga & Morning Aarti", label: "08:30 AM - 09:15 AM", start: "08:30", end: "09:15", access: "public", action: "prasadam", icon: "Flame", description: "[ADD FROM TEMPLE]" },
    { id: "raja-bhoga", name: "Raja Bhoga (Mid-day Royal Feast)", label: "11:30 AM - 12:00 PM", start: "11:30", end: "12:00", access: "clergy", action: "internal", icon: "Utensils", description: "" },
    { id: "rudra-abhisheka", name: "Rudra Abhisheka (Mid-day)", label: "12:00 PM - 01:00 PM", start: "12:00", end: "13:00", access: "public", action: "book", icon: "Droplets", featured: true, description: "[ADD FROM TEMPLE]" },
    { id: "pahada", name: "Pahada (Temple Doors Closed)", label: "01:00 PM - 04:00 PM", start: "13:00", end: "16:00", access: "closed", action: "details", icon: "Lock", description: "[ADD FROM TEMPLE]" },
    { id: "sandhya-aarti", name: "Sandhya Aarti (Twilight)", label: "06:30 PM - 07:30 PM", start: "18:30", end: "19:30", access: "public", action: "book", icon: "Flame", featured: true, description: "[ADD FROM TEMPLE]" },
    { id: "shayan-aarti", name: "Shayan Aarti (Cosmic Rest)", label: "09:30 PM - 10:00 PM", start: "21:30", end: "22:00", access: "clergy", action: "internal", icon: "Moon", description: "" },
  ],
  sevas: [
    { slug: "rudra-abhisheka", name: "Rudra Abhisheka (Mid-day)", slot: "12:00 PM - 01:00 PM", price: "[ADD FROM TEMPLE]", category: "Daily", icon: "Droplets", description: "[ADD FROM TEMPLE]" },
    { slug: "sandhya-aarti", name: "Sandhya Aarti (Twilight)", slot: "06:30 PM - 07:30 PM", price: "[ADD FROM TEMPLE]", category: "Daily", icon: "Flame", description: "[ADD FROM TEMPLE]" },
    { slug: "balabhoga-prasadam", name: "Balabhoga Prasadam", slot: "08:30 AM - 09:15 AM", price: "[ADD FROM TEMPLE]", category: "Prasadam", icon: "Utensils", description: "[ADD FROM TEMPLE]" },
  ],
};

export const accessLabels = { public: "Public Allowed", clergy: "Clergy Only", closed: "Temple Closed" };
