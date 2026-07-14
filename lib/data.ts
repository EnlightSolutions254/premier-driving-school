export const courses = [
  {
    slug: "class-b",
    tag: "Class B",
    title: "Saloon car licence",
    description:
      "Personal and light saloon vehicles — the most popular starting course for new drivers.",
    duration: "4–6 weeks",
    requirements: ["18+ years old", "Valid national ID", "Learner's permit (we help you apply)"],
    price: "From KES 25,000",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "class-c",
    tag: "Class C",
    title: "Medium vehicle licence",
    description: "Pickups and light commercial trucks, built for logistics and delivery careers.",
    duration: "6–8 weeks",
    requirements: ["Existing Class B licence", "Valid national ID", "Medical certificate"],
    price: "From KES 32,000",
    image: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "class-ce",
    tag: "Class CE",
    title: "Heavy truck & trailer",
    description: "Articulated vehicles for long-haul and heavy commercial transport careers.",
    duration: "8–10 weeks",
    requirements: ["Existing Class C licence", "2+ years driving experience", "Medical certificate"],
    price: "From KES 45,000",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "psv",
    tag: "PSV",
    title: "Public service vehicle",
    description: "Matatu and bus certification, including passenger safety and defensive driving.",
    duration: "5–7 weeks",
    requirements: ["Existing Class B/C licence", "Certificate of good conduct", "Medical certificate"],
    price: "From KES 28,000",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "motorcycle",
    tag: "Motorcycle",
    title: "Motorcycle licence",
    description: "Boda boda and personal motorcycle riding, with dedicated off-road practice time.",
    duration: "2–3 weeks",
    requirements: ["16+ years old", "Valid national ID", "Own or rented motorcycle"],
    price: "From KES 12,000",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "refresher",
    tag: "Refresher",
    title: "Refresher course",
    description: "Already licensed but rusty? Rebuild confidence with a tailored refresher plan.",
    duration: "1–2 weeks",
    requirements: ["Existing driving licence", "Any class"],
    price: "From KES 8,000",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
  },
];

export const branches = [
  {
    slug: "nairobi",
    name: "Nairobi",
    route: "A104",
    address: "Kenyatta Avenue, Nairobi CBD",
    phone: "+254 700 111 222",
    hours: "Mon–Sat, 7:00am–6:00pm",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=800&auto=format&fit=crop",    
    lat: -1.286389,
    lng: 36.817223,
  },
  {
    slug: "nakuru",
    name: "Nakuru",
    route: "A104",
    address: "Kenyatta Avenue, Nakuru Town",
    phone: "+254 700 111 223",
    hours: "Mon–Sat, 7:00am–6:00pm",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",   
    lat: -0.303099,
    lng: 36.080025,
  },
  {
    slug: "mombasa",
    name: "Mombasa",
    route: "A109",
    address: "Nkrumah Road, Mombasa Island",
    phone: "+254 700 111 224",
    hours: "Mon–Sat, 7:00am–6:00pm",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800&auto=format&fit=crop",
    lat: -4.043477,
    lng: 39.668206,
  },
  {
    slug: "kisumu",
    name: "Kisumu",
    route: "B1",
    address: "Oginga Odinga Street, Kisumu",
    phone: "+254 700 111 225",
    hours: "Mon–Sat, 7:00am–6:00pm",
    image: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?q=80&w=800&auto=format&fit=crop",    
    lat: -0.091702,
    lng: 34.767956,
  },
  {
    slug: "eldoret",
    name: "Eldoret",
    route: "A104",
    address: "Uganda Road, Eldoret Town",
    phone: "+254 700 111 226",
    hours: "Mon–Sat, 7:00am–6:00pm",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop", 
    lat: 0.520360,
    lng: 35.269779,
  },
];

export const testimonials = [
  {
    name: "Wanjiru Kamau",
    role: "Class B graduate, Nairobi",
    quote:
      "I was terrified of roundabouts. My instructor was patient and honest, and I passed on my first try.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Otieno Odhiambo",
    role: "PSV licence, Kisumu",
    quote:
      "The PSV course covered things my old school never mentioned, like passenger safety and route planning.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Achieng Auma",
    role: "Class CE, Mombasa",
    quote: "Learning to reverse a full trailer felt impossible until week three. Now it's second nature.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Njoroge Mwangi",
    role: "Refresher course, Nakuru",
    quote: "Hadn't driven in six years. The refresher course rebuilt my confidence in under two weeks.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Chebet Kiplagat",
    role: "Motorcycle licence, Eldoret",
    quote: "Practical, patient, and genuinely focused on safety rather than just passing the test.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
  },
];

export const stats = [
  { value: 15000, suffix: "+", label: "Graduates on the road" },
  { value: 12, suffix: "", label: "Branches nationwide" },
  { value: 98, suffix: "%", label: "First-attempt pass rate" },
  { value: 20, suffix: "+", label: "Years on Kenyan roads" },
];

export const whyChooseUs = [
  {
    title: "Certified instructors",
    description: "Every instructor is NTSA-licensed and retrained yearly on the latest road-safety curriculum.",
  },
  {
    title: "Modern training vehicles",
    description: "Dual-control, well-serviced vehicles fitted with dash cams for honest, judgment-free feedback.",
  },
  {
    title: "Flexible schedules",
    description: "Morning, evening, and weekend lesson slots that work around your job or classes.",
  },
  {
    title: "National coverage",
    description: "12 branches from Nairobi to Eldoret, so you can start here and finish anywhere.",
  },
];
