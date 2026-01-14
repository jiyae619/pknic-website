export interface EventItem {
  id: string;
  date: string;
  title: string;
  speaker?: string;
  description?: string;
  link?: string;
  location?: string;
  type: 'in-person' | 'online';
  image?: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string; // URL or Placeholder text
}