import { Landmark, DialectPhrase, SavedSession, ItineraryStop } from '../types';

export const INITIAL_ITINERARY_STOPS: ItineraryStop[] = [
  {
    id: 1,
    timeSlot: "08:30 AM – 10:45 AM",
    badge: "Ideal Morning Light",
    badgeType: "default",
    title: "Sheikh Zayed Grand Mosque",
    description: "Experience tranquil serenity before peak visitor rush. Admire Syrian floral marble mosaics, reflective pools, and hand-knotted artisanal carpets.",
    tags: ["Modest dress code / Abaya provided", "Prayer window respected"],
    transfer: "Transfer: Express Electric Route A1 to Cultural Quarter",
    image: "https://images.unsplash.com/photo-1512632570417-a60965d1d644?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    timeSlot: "11:30 AM – 01:15 PM",
    badge: "Mid-Day Heat Shield",
    badgeType: "heat-shield",
    title: "Qasr Al Watan & Presidential Great Hall",
    description: "Full climate-controlled journey inside the Presidential Palace. Explore the Arabian Hall of Knowledge and rare historic manuscripts.",
    tags: ["Interior geothermal cooling", "Culinary: Local Gahwa Tasting"],
    transfer: "Transfer: Autonomous Shuttle to Saadiyat Cultural District",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    timeSlot: "02:00 PM – 04:30 PM",
    badge: "Jean Nouvel Architecture",
    badgeType: "architecture",
    title: "Louvre Abu Dhabi (Rain of Light Dome)",
    description: "Stroll through the shaded sea-water medina beneath 7,850 geometric stars. Natural cooling wind-tunnels keep ambient temperature comfortable.",
    tags: ["Optional Zero-Emission Kayak"],
    transfer: "Transfer: Solar Island Transit (14 mins)",
    image: "https://images.unsplash.com/photo-1578895101407-74229b015112?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    timeSlot: "05:30 PM – 07:00 PM",
    badge: "Eco Sunset Golden Hour",
    badgeType: "eco",
    title: "Al Jubail Mangrove Park Sanctuary",
    description: "Protected boardwalk eco-walk surrounded by native marine wildlife, grey flamingos, and tidal channels as temperatures fall pleasantly.",
    tags: ["Biodiversity Heritage Zone"],
    transfer: "Sustainable return route scheduled",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=800&q=80"
  }
];

export const SAVED_SESSIONS: SavedSession[] = [
  {
    id: "abu-dhabi-eco",
    title: "Abu Dhabi Eco-Tour",
    subtitle: "24-Hour Sustainable Day",
    icon: "chat_bubble",
    active: true,
    messages: [
      {
        id: "msg-1",
        sender: "user",
        text: "I'm visiting Abu Dhabi for 24 hours. I want to see cultural landmarks, avoid mid-day heat, and use sustainable transport. Can you plan my day?",
        timestamp: "10:42 AM"
      },
      {
        id: "msg-2",
        sender: "gemini",
        groundingTag: "Synthesized via Gemini Multimodal Travel Graph & RTA / DoT Real-time Sustainable APIs",
        text: "Ahlan wa sahlan! Here is your bespoke 24-hour itinerary engineered for maximum cultural immersion, thermal comfort during peak noon hours, and minimal environmental impact using Abu Dhabi's zero-emission electric buses and island autonomous pods.",
        timestamp: "Just now",
        itineraryStops: INITIAL_ITINERARY_STOPS,
        sustainabilityNote: "By adhering to the Abu Dhabi Smart Bus network and Island Autonomous shuttles, your travel reduces your daily carbon footprint by 64% compared to traditional car hire, supporting UAE Net Zero 2050 initiatives.",
        reductionPercentage: 64,
        audioText: "Ahlan wa sahlan! Welcome to Abu Dhabi. We have engineered a climate-conscious 24 hour journey starting at Sheikh Zayed Grand Mosque, leading to Qasr Al Watan, the Louvre dome, and sunset at Jubail Mangroves."
      }
    ]
  },
  {
    id: "dubai-hidden-gems",
    title: "Dubai Hidden Gems",
    subtitle: "Al Fahidi & Coffee Rituals",
    icon: "explore",
    messages: [
      {
        id: "dhg-1",
        sender: "user",
        text: "What are the most authentic historical spots in old Dubai where I can experience Emirati heritage away from skyscrapers?",
        timestamp: "Yesterday"
      },
      {
        id: "dhg-2",
        sender: "gemini",
        groundingTag: "Synthesized with Dubai Culture & Arts Authority Open Archives",
        text: "Marhaba! Old Dubai harbors centuries of maritime trade and bedouin hospitality. Here is your cultural trail through Al Fahidi and Dubai Creek:",
        timestamp: "Yesterday",
        itineraryStops: [
          {
            id: 1,
            timeSlot: "09:00 AM – 10:30 AM",
            badge: "Historic Architecture",
            badgeType: "architecture",
            title: "Al Fahidi Wind-Tower Quarter",
            description: "Wander labyrinthine alleys between 19th-century gypsum and coral houses with traditional Barajeel wind towers.",
            tags: ["Courtyard art galleries", "Architectural heritage"],
            transfer: "Dubai Metro Green Line to Sharaf DG Station"
          },
          {
            id: 2,
            timeSlot: "11:00 AM – 12:30 PM",
            badge: "Intangible Cultural Heritage",
            badgeType: "default",
            title: "Dubai Coffee Museum & Gahwa Workshop",
            description: "Explore antique roast pans and participate in a ceremonial Gahwa preparation infused with cardamom, cloves, and saffron.",
            tags: ["Tasting ceremony", "Dates pairing etiquette"],
            transfer: "Shaded 3-minute heritage stroll"
          },
          {
            id: 3,
            timeSlot: "04:30 PM – 06:30 PM",
            badge: "Electric Waterway",
            badgeType: "eco",
            title: "Traditional Electric Abra & Spice Souq",
            description: "Cross the saltwater creek on a retrofitted solar-electric abra for AED 2 to browse frankincense, dried limes, and saffron in Deira.",
            tags: ["Zero-emission water transit", "Sensory souq tour"],
            transfer: "RTA Marine Transport Station Bur Dubai"
          }
        ],
        sustainabilityNote: "Using public electric abras and the driverless Dubai Metro cuts urban congestion by 78% along the historic creek corridor.",
        reductionPercentage: 78
      }
    ]
  },
  {
    id: "emirati-culture-dialect",
    title: "Emirati Culture & Dialect",
    subtitle: "Hospitality Etiquette",
    icon: "translate",
    messages: [
      {
        id: "ecd-1",
        sender: "user",
        text: "Could you explain the etiquette for visiting an Emirati home or Majlis, and teach me some authentic local expressions?",
        timestamp: "2 days ago"
      },
      {
        id: "ecd-2",
        sender: "gemini",
        groundingTag: "Synthesized via UAE National Institute of Heritage & Living Traditions",
        text: "Hayakom Allah! The Emirati Majlis is a UNESCO recognized cultural space embodying generosity, poetry, and mutual respect. Here are the core protocols:",
        timestamp: "2 days ago",
        itineraryStops: [
          {
            id: 1,
            timeSlot: "Protocol Step 1",
            badge: "Greeting Custom",
            badgeType: "default",
            title: "Entering the Majlis & Handshakes",
            description: "Always remove your footwear at the threshold. Greet from right to left with a warm handshake using your right hand. Never point feet soles toward hosts.",
            tags: ["Right-hand etiquette", "Greeting elders first"],
            transfer: "Cultural orientation guideline"
          },
          {
            id: 2,
            timeSlot: "Protocol Step 2",
            badge: "Ceremonial Coffee",
            badgeType: "heat-shield",
            title: "The Dallah & Finjan Coffee Ritual",
            description: "Accept the cup with your right hand. Savor 1-3 servings. When satisfied, gently shake the finjan wrist-to-wrist before returning it.",
            tags: ["Finjan shake gesture", "Cardamom aroma"],
            transfer: "Hospitality standard"
          }
        ],
        sustainabilityNote: "Cultural preservation is Pillar 3 of UAE Centennial 2071, safeguarding national identity for generations.",
        reductionPercentage: 100
      }
    ]
  },
  {
    id: "grand-mosque-photo-route",
    title: "Grand Mosque Photo Route",
    subtitle: "Golden Hour Coordinates",
    icon: "photo_camera",
    messages: [
      {
        id: "gmp-1",
        sender: "user",
        text: "What are the best photography angles and light conditions for Sheikh Zayed Grand Mosque without violating modesty protocols?",
        timestamp: "3 days ago"
      },
      {
        id: "gmp-2",
        sender: "gemini",
        groundingTag: "Synthesized via DoT Lighting Engineers & Cultural Center Visitor Guide",
        text: "Salam! The Grand Mosque is designed with unique lunar illumination that shifts color tone with the moon cycle. Here is your camera itinerary:",
        timestamp: "3 days ago",
        itineraryStops: [
          {
            id: 1,
            timeSlot: "05:00 PM – 06:15 PM",
            badge: "Golden Hour Sunset",
            badgeType: "eco",
            title: "Reflective Basins & Sivec White Marble",
            description: "Position yourself at the South Arcade overlooking the tiled reflective pools as the sun dips, creating mirror reflections of the 82 domes.",
            tags: ["Tripods require cultural permit", "Silent shutter mode"],
            transfer: "Electric buggy shuttle from Visitor Center"
          },
          {
            id: 2,
            timeSlot: "06:30 PM – 07:30 PM",
            badge: "Lunar Illumination",
            badgeType: "architecture",
            title: "Blue Hour Architectural Lighting",
            description: "Observe the exterior projection system that bathes white domes in bluish-gray hues representing the current moon phase.",
            tags: ["Night exposure mode", "Courtyard arcade vista"],
            transfer: "Return via Eco Bus Route A1"
          }
        ],
        sustainabilityNote: "The Mosque features low-energy LED illumination reducing lighting power demand by over 70%.",
        reductionPercentage: 70
      }
    ]
  }
];

export const UAE_LANDMARKS: Landmark[] = [
  {
    id: "sheikh-zayed-grand-mosque",
    name: "Sheikh Zayed Grand Mosque",
    emirate: "Abu Dhabi",
    category: "Heritage",
    architecturalStyle: "Mughal, Moorish & Arabesque Architecture",
    materials: "Macedonian Sivec marble, 24K gold-plated Swarovski chandeliers, mother-of-pearl, Persian hand-knotted wool carpet",
    etiquette: "Modest dress mandatory: loose-fitting, non-transparent clothes covering wrists and ankles; women must wear headscarf (Abayas provided free). Remove shoes before carpet.",
    bestHours: "08:30 AM – 10:30 AM (tranquil light) & 05:15 PM – 07:00 PM (lunar illumination transition)",
    transit: "DoT Abu Dhabi Electric Route A1 & 101 directly to South Gate",
    co2Saved: "4.8 kg CO₂ per visitor vs. taxi",
    image: "https://images.unsplash.com/photo-1512632570417-a60965d1d644?auto=format&fit=crop&w=1000&q=80",
    description: "One of the world's largest mosques, featuring 82 white marble domes, 1,000 columns, and the world's largest hand-knotted carpet spanning 5,627 square meters."
  },
  {
    id: "louvre-abu-dhabi",
    name: "Louvre Abu Dhabi",
    emirate: "Abu Dhabi (Saadiyat Island)",
    category: "Cultural",
    architecturalStyle: "Jean Nouvel 'Rain of Light' Geodesic Dome",
    materials: "7,850 aluminum and stainless steel geometric stars layered into an 180-meter dome, floating over the Persian Gulf waters",
    etiquette: "Photography permitted without flash. Respect quiet gallery zones. Zero-emission sea-kayaking available around museum exterior.",
    bestHours: "02:00 PM – 05:00 PM (interior natural microclimate prevents desert heat fatigue)",
    transit: "Saadiyat Autonomous Shuttle & Bus Route 94 from Central Station",
    co2Saved: "5.2 kg CO₂ per visitor",
    image: "https://images.unsplash.com/photo-1578895101407-74229b015112?auto=format&fit=crop&w=1000&q=80",
    description: "A universal museum celebrating shared human stories across civilizations, housed beneath a spectacular microclimate dome that filters desert sunlight like date-palm fronds."
  },
  {
    id: "burj-khalifa",
    name: "Burj Khalifa & Downtown Dubai",
    emirate: "Dubai",
    category: "Modern",
    architecturalStyle: "Neo-Futuristic Tubular Spire & Islamic Hymenocallis Pattern",
    materials: "High-density reinforced concrete, 103,000 m² of solar-reflective glass, and embossed stainless steel",
    etiquette: "Smart casual attire. Timed bookings recommended for sunset. Observe elevator ear-pressure instructions.",
    bestHours: "05:15 PM – 06:45 PM (sunset across the Arabian Gulf horizon and Dubai Fountain show)",
    transit: "Dubai Metro Red Line (Burj Khalifa / Dubai Mall Station) via air-conditioned travellator bridge",
    co2Saved: "6.1 kg CO₂ per visitor",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80",
    description: "The world's tallest architectural marvel standing at 828 meters (2,716.5 feet), pioneering extreme wind engineering and sustainable condensate recycling."
  },
  {
    id: "qasr-al-watan",
    name: "Qasr Al Watan (Presidential Palace)",
    emirate: "Abu Dhabi",
    category: "Heritage",
    architecturalStyle: "Monumental Contemporary Arabesque",
    materials: "White granite, limestone, carved maple wood, and 23-carat gold leaf trims",
    etiquette: "Respect national ceremonial protocol. Evening light and sound show 'Palace in Motion' commences at 07:30 PM.",
    bestHours: "11:30 AM – 01:30 PM (interior geothermal climate-controlled during noon sun)",
    transit: "Island Autonomous Shuttle Route 12 & Corniche Electric Bus",
    co2Saved: "3.9 kg CO₂ per visitor",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80",
    description: "A working presidential palace opening Arabian governance, knowledge, and craftsmanship to global visitors, housing over 50,000 rare scholarly volumes in its library."
  },
  {
    id: "jubail-mangrove-park",
    name: "Al Jubail Mangrove Sanctuary",
    emirate: "Abu Dhabi",
    category: "Nature",
    architecturalStyle: "Low-Impact Elevated Eco-Boardwalk",
    materials: "Sustainably treated timber walkways elevated above marine intertidal zones",
    etiquette: "Do not touch or feed native wildlife. Remain on marked boardwalk paths. Single-use plastic is strictly prohibited.",
    bestHours: "05:00 PM – 07:00 PM (high tide coincides with foraging flamingos, herons, and turtles)",
    transit: "Eco-transit transfer from Saadiyat Cultural District",
    co2Saved: "4.4 kg CO₂ per visitor",
    image: "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1000&q=80",
    description: "A lush natural sanctuary protecting Abu Dhabi's indigenous grey mangrove forests, acting as vital coastal carbon sinks and home to diverse avian and marine life."
  },
  {
    id: "al-fahidi-quarter",
    name: "Al Fahidi Historical Neighbourhood",
    emirate: "Dubai",
    category: "Heritage",
    architecturalStyle: "Traditional Wind-Tower (Barajeel) Vernacular Architecture",
    materials: "Coral stone, sea stone, gypsum mortar, teak, and sandalwood",
    etiquette: "Respect traditional courtyards and residential silence. Enjoy traditional Gahwa coffee with right hand.",
    bestHours: "04:30 PM – 08:00 PM followed by heritage electric abra crossing to Old Deira",
    transit: "Dubai Metro Green Line (Al Fahidi Station) & RTA Electric Abra",
    co2Saved: "3.2 kg CO₂ per visitor",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80",
    description: "Dubai's historic heart dating to the 1890s, showcasing ancient passive cooling wind-towers, quaint museums, and tranquil artist cafes."
  }
];

export const EMIRATI_DIALECT_PHRASES: DialectPhrase[] = [
  {
    arabic: "مرحبا",
    transliteration: "Marhaba",
    english: "Welcome / Hello",
    context: "Universal friendly greeting used at any time of day across the Emirates.",
    audioPronunciation: "Mar-ha-baa",
    category: "Greeting"
  },
  {
    arabic: "حياكم الله",
    transliteration: "Hayakom Allah",
    english: "May God grant you life / You are most welcome",
    context: "Warm invitation when entering a home, majlis, or hospitable venue.",
    audioPronunciation: "Ha-ya-kom Al-lah",
    category: "Hospitality"
  },
  {
    arabic: "مشكور / مشكورة",
    transliteration: "Mashkour (m) / Mashkoura (f)",
    english: "Thank you sincerely",
    context: "Polite heartfelt gratitude said to taxi drivers, hosts, and guides.",
    audioPronunciation: "Mash-koor",
    category: "Expressions"
  },
  {
    arabic: "شوي شوي",
    transliteration: "Shway Shway",
    english: "Slowly, gently, step by step",
    context: "Often said with a smile when taking your time or easing into an activity.",
    audioPronunciation: "Sh-way Sh-way",
    category: "Expressions"
  },
  {
    arabic: "يلا",
    transliteration: "Yallah",
    english: "Let's go / Hurry along",
    context: "Energetic colloquial phrase used with companions to begin the next journey.",
    audioPronunciation: "Yal-lah",
    category: "Directions"
  },
  {
    arabic: "فنجان قهوة",
    transliteration: "Finjan Gahwa",
    english: "Cup of Arabic Coffee",
    context: "Ceremonial spiced coffee offered with fresh dates. Hold the finjan in your right hand.",
    audioPronunciation: "Fin-jan Gah-wah",
    category: "Hospitality"
  },
  {
    arabic: "ما شاء الله",
    transliteration: "Masha'Allah",
    english: "As God willed / Remarkable beauty",
    context: "Expressed when admiring spectacular sights like the Grand Mosque or desert sunsets.",
    audioPronunciation: "Ma-sha-Al-lah",
    category: "Expressions"
  }
];
