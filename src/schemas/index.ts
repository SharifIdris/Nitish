// Sanity schema types for TypeScript
export interface NewsArticle {
  _id: string;
  title: string;
  excerpt: string;
  content: any[];
  author: string;
  publishedAt: string;
  category: string;
  featured: boolean;
  image: any;
  slug: { current: string };
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  realName?: string;
  game: string;
  bio: string;
  image: any;
  achievements: string[];
  stats: Record<string, string>;
  social: {
    twitter?: string;
    instagram?: string;
    twitch?: string;
  };
  featured: boolean;
}

export interface Leadership {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: any;
  achievements: string[];
  social: {
    twitter?: string;
    instagram?: string;
    twitch?: string;
  };
}

export interface Tournament {
  _id: string;
  title: string;
  game: string;
  date: string;
  endDate?: string;
  prizePool: string;
  format: string;
  status: 'upcoming' | 'live' | 'completed';
  participants: number;
  maxParticipants: number;
  winner?: {
    name: string;
    logo: string;
  };
  runnerUp?: {
    name: string;
    logo: string;
  };
  finalScore?: string;
  mvp?: string;
  highlights: string[];
  viewership?: string;
  image: any;
}

export interface Match {
  _id: string;
  tournament: string;
  game: string;
  team1: {
    name: string;
    logo: string;
    score: number;
  };
  team2: {
    name: string;
    logo: string;
    score: number;
  };
  status: 'live' | 'upcoming' | 'completed';
  viewers: number;
  timeRemaining: string;
  map: string;
}

export interface MediaItem {
  _id: string;
  title: string;
  type: 'video' | 'photo';
  category: string;
  image: any;
  videoUrl?: string;
  duration?: string;
  views: number;
  likes: number;
  date: string;
  description: string;
}

export interface Sponsor {
  _id: string;
  name: string;
  logo: any;
  tier: 'Platinum' | 'Gold' | 'Silver';
  website: string;
  description: string;
}

export interface CommunityEvent {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'Tournament' | 'Meet & Greet' | 'Workshop' | 'Contest';
  location: string;
  participants: number;
  maxParticipants?: number;
  prizePool?: string;
  image: any;
  featured: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any[];
  author: string;
  publishedAt: string;
  category: string;
  featured: boolean;
  image: any;
  tags: string[];
  readTime: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  rating: number;
  image?: any;
  featured: boolean;
  category: string;
  date: string;
  order?: number;
}