import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// GROQ queries
export const queries = {
  // News articles
  news: `*[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    content,
    author,
    publishedAt,
    category,
    featured,
    image,
    slug
  }`,

  // Team members
  teamMembers: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    realName,
    game,
    bio,
    image,
    achievements[],
    stats,
    social,
    featured
  }`,

  // Leadership team
  leadership: `*[_type == "leadership"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    image,
    achievements[],
    social
  }`,

  // Tournaments
  tournaments: `*[_type == "tournament"] | order(date desc) {
    _id,
    title,
    game,
    date,
    endDate,
    prizePool,
    format,
    status,
    participants,
    maxParticipants,
    winner,
    runnerUp,
    finalScore,
    mvp,
    highlights[],
    viewership,
    image
  }`,

  // Live matches
  liveMatches: `*[_type == "match" && status == "live"] | order(_createdAt desc) {
    _id,
    tournament,
    game,
    team1,
    team2,
    status,
    viewers,
    timeRemaining,
    map
  }`,

  // Media items
  media: `*[_type == "media"] | order(date desc) {
    _id,
    title,
    type,
    category,
    image,
    videoUrl,
    duration,
    views,
    likes,
    date,
    description
  }`,

  // Sponsors
  sponsors: `*[_type == "sponsor"] | order(tier desc, name asc) {
    _id,
    name,
    logo,
    tier,
    website,
    description
  }`,

  // Community events
  events: `*[_type == "event"] | order(date asc) {
    _id,
    title,
    description,
    date,
    time,
    type,
    location,
    participants,
    maxParticipants,
    prizePool,
    image,
    featured
  }`
};