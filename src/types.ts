export type ViewMode = 'academic' | 'chatbot' | 'landmarks' | 'cultural' | 'itineraries';

export interface ItineraryStop {
  id: number;
  timeSlot: string;
  badge: string;
  badgeType?: 'default' | 'heat-shield' | 'architecture' | 'eco';
  title: string;
  description: string;
  tags: string[];
  transfer: string;
  image?: string;
  coordinates?: { lat: number; lng: number };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'gemini';
  text: string;
  timestamp: string;
  groundingTag?: string;
  itineraryStops?: ItineraryStop[];
  sustainabilityNote?: string;
  reductionPercentage?: number;
  audioText?: string;
  landmarkCard?: any;
}

export interface SavedSession {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  active?: boolean;
  messages: ChatMessage[];
}

export interface Landmark {
  id: string;
  name: string;
  emirate: string;
  category: 'Heritage' | 'Modern' | 'Nature' | 'Cultural';
  architecturalStyle: string;
  materials: string;
  etiquette: string;
  bestHours: string;
  transit: string;
  co2Saved: string;
  image: string;
  description: string;
}

export interface DialectPhrase {
  arabic: string;
  transliteration: string;
  english: string;
  context: string;
  audioPronunciation: string;
  category: 'Greeting' | 'Hospitality' | 'Directions' | 'Expressions';
}

export interface TelemetryData {
  city: string;
  temperature: number;
  condition: string;
  uvIndex: number;
  airQuality: string;
  busStatus: string;
}
