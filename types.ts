import { LucideIcon } from 'lucide-react';

export interface TechItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  image: string;
  stats: { label: string; value: string }[];
  colSpan?: number; // Tailwind col-span class logic (1 or 2)
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}
