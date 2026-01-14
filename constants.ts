import { EventItem, StatItem, Partner } from './types';

export const HERO_CONTENT = {
  title: "PKNIC",
  subtitle: "Connect. Learn. Grow.",
  mission: "We bring together professionals across the U.S. and Canada to share insights, explore new opportunities, and build meaningful connections.",
};

export const STATS_2025: StatItem[] = [
  { value: "8", label: "Events", description: "Curated experiences" },
  { value: "400+", label: "Participants", description: "Professionals engaged" },
  { value: "8", label: "Speakers", description: "Industry leaders" },
];

export const PARTNERS: Partner[] = [
  { name: "KOTRA", logo: "KOTRA" },
  { name: "Ringle", logo: "Ringle" },
  { name: "Google", logo: "Google" },
  { name: "Texas Legacy", logo: "Texas Legacy" },
  { name: "Market Stadium", logo: "Market Stadium" },
];

export const EVENTS: EventItem[] = [
  {
    id: "1",
    date: "Dec 13, 2025",
    title: "Career Survival Strategy in the AI Era",
    speaker: "Woonyoung Park",
    type: "in-person",
    link: "https://app.pknic.club/c/events/ai-90",
    location: "Bay Area",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: "2",
    date: "Dec 6, 2025",
    title: "US Investment Seminar",
    speaker: "John Chung x Texas Legacy",
    type: "in-person",
    location: "Dallas",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: "3",
    date: "Nov 25, 2025",
    title: "Global Career Development",
    speaker: "Sora Lee & KOTRA SV",
    type: "in-person",
    location: "Silicon Valley",
    image: "https://picsum.photos/600/400?random=3"
  },
  {
    id: "4",
    date: "Oct 18, 2025",
    title: "US Investment Seminar",
    speaker: "John Chung",
    type: "in-person",
    location: "Los Angeles",
    image: "https://picsum.photos/600/400?random=4"
  },
  {
    id: "5",
    date: "Jul 13, 2025",
    title: "SF In-Person Connect",
    speaker: "Eunjoo Kim, Seunghoon Lee, Keeyong Han",
    type: "in-person",
    location: "San Francisco",
    image: "image/sf-connect.png"
  },
  {
    id: "6",
    date: "Nov 20, 2025",
    title: "All About US Employment",
    speaker: "Won Park",
    type: "online",
    link: "https://app.pknic.club/c/events/wonpark-q-a",
    image: "https://picsum.photos/600/400?random=6"
  },
  {
    id: "7",
    date: "Oct 29, 2025",
    title: "Facing Layoffs and Job Uncertainty",
    speaker: "Lois Kim",
    type: "online",
    image: "https://picsum.photos/600/400?random=7"
  }
];

export const SOCIAL_LINKS = {
  circle: "https://app.pknic.club/feed", // Placeholder
  instagram: "https://www.instagram.com/p_knic/", // Placeholder
  linkedin: "https://www.linkedin.com/company/p-knic", // Placeholder
  github: "https://github.com/pknic", // Placeholder
  email: "info@pknic.club"
};