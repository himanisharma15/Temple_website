import { siteData } from '../../data/site.data';

export const intro = 'The Dhabaleswar Temple located in Khordha, specifically in the Gurujanga area, is a highly revered Hindu shrine dedicated to Lord Shiva. It serves as an important spiritual and cultural hub for local devotees in the region.';
export const address = { lines: siteData.address, mapQuery: siteData.mapQuery, coordinates: { lat: '20.196391', lng: '85.627097' } }; // [VERIFY]
// LOCATION NOT CONFIRMED: Gurujanga, Khordha (original site) versus the island temple near Athagarh/Cuttack (travel sites). Keep every [VERIFY] until the temple trust confirms.
export const reach = [
  { mode: "road", title: "By road", nearest: "Cuttack", distance: "[ADD FROM TEMPLE]",
    tips: "Taxis run from Cuttack, and buses run via Choudwar, Nuapatna and Mancheshwar. [VERIFY]" },
  { mode: "train", title: "By train", nearest: "Cuttack Railway Station", distance: "[ADD FROM TEMPLE]",
    tips: "[ADD FROM TEMPLE] local transport from the station" },
  { mode: "air", title: "By air", nearest: "Biju Patnaik International Airport, Bhubaneswar", distance: "About 37 km [VERIFY]",
    tips: "[ADD FROM TEMPLE] local transport from the airport" },
];
export const access = { enabled: false, title: "Footbridge & boat",
  details: "A pedestrian suspension bridge and boats connect the island. [VERIFY]",
  note: "Please check current access before travelling." };
export const coordinates = { lat: 20.196391, lng: 85.627097 }; // [VERIFY] Gurujanga, Khordha listing
export const festivals = [
  { name: "Bada-osha", when: "Usually Oct–Nov (Kartika)", crowd: "Very busy", text: "A big fair is held on the shukla paksha chaturdashi of the month Kartika called Bada-osha." },
  { name: "Shivaratri", when: "Usually Feb–Mar", crowd: "Very busy", text: "One of the most important festivals, celebrated with great devotion and night-long rituals." },
  { name: "Sitalasasti", when: "Usually May–Jun", crowd: "[VERIFY]", text: "The divine marriage of Lord Shiva and Goddess Parvati, celebrated with grand processions." },
  { name: "Makar Sankranti", when: "Around 14 January", crowd: "[VERIFY]", text: "Celebrating the transition of the Sun with holy dips and special Makar Chaula offering." },
  { name: "Pausha Purnima", when: "Usually Dec–Jan", crowd: "[VERIFY]", text: "A significant lunar event in the month of Pausha with special abhishek and divine rituals." },
  { name: "Dola Purnima", when: "Usually March", crowd: "[VERIFY]", text: "The festival of colors celebrated with a divine procession and traditional fervor." },
  { name: "Kartika Purnima", when: "Usually Nov", crowd: "[VERIFY]", text: "Sacred Boita Bandana celebrating the maritime glory of ancient Odisha at the holy Mahanadi." },
  { name: "Naga Chaturthi", when: "[VERIFY]", crowd: "[VERIFY]", text: "A sacred serpent worship festival observed with prayers for protection and family welfare." },
];
export const festivalNote = "Exact dates change every year. Check Notices before you travel.";
export const rules = [
  { icon: "Shirt", title: "Dress code", text: "Modest, comfortable clothing is recommended. [VERIFY with the temple]" },
  { icon: "Footprints", title: "Footwear", text: "Footwear is usually left outside a Hindu temple. Please follow the temple staff's guidance. [VERIFY]" },
  { icon: "Camera", title: "Photography", text: "[ADD FROM TEMPLE]" },
  { icon: "Smartphone", title: "Mobile phones", text: "[ADD FROM TEMPLE]" },
  { icon: "Flower2", title: "Offerings & prasad", text: "Prasadam can be booked for the Balabhoga & Morning Aarti ritual on the Darshan & Seva page. Other offering rules: [ADD FROM TEMPLE]" },
];
export const plan = [
  { title: "Arrive", text: "Reach a little early, especially on festival days, and check today's status on the Darshan & Seva page before you set out." },
  { title: "Darshan & seva", text: "Follow the daily ritual schedule, or book a seva or prasadam in advance." },
  { title: "Explore nearby", text: "Take your time around the temple. Nearby places will be listed here soon." },
];
export const nearby = [];
export const facilities = ['Parking', 'Drinking water', 'Restrooms', 'Shoe stand', 'Cloakroom', 'Wheelchair access', 'First aid'].map((label) => ({ icon: 'Circle', label, available: null }));
export const stay = { text: '[ADD FROM TEMPLE]' };
export const safety = [
  { icon: "Waves", text: "Take care near the riverside and on any bridge or boat, especially in festival crowds. [VERIFY]" },
  { icon: "Users", text: "Keep children and belongings close on busy days." },
  { icon: "Phone", text: "Emergency and helpdesk contact: [ADD FROM TEMPLE]" },
];
export const accessibility = { text: "[ADD FROM TEMPLE] Step-free access, seating and help for elderly visitors." };
export const faqs = [
  { q: "Is photography allowed?", a: "[ADD FROM TEMPLE]" },
  { q: "Where do I leave my shoes?", a: "Footwear is usually left outside before entering. Please ask the temple staff where to leave yours. [VERIFY]" },
  { q: "Is there a dress code?", a: "Modest, comfortable clothing is recommended. [VERIFY with the temple]" },
  { q: "Can I visit during festivals?", a: "Yes. Festival days such as Maha Shivaratri, Kartika Purnima and Bada-osha are busier, so allow extra time and check Notices before you travel." },
  { q: "How do I reach the temple?", a: "See the Getting here section for road, train and air details, and use Get directions for live navigation." },
];
