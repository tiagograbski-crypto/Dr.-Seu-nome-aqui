import type { LucideIcon } from 'lucide-react';

export interface Procedure {
  title: string;
  desc: string;
  before: string;
  after: string;
  objectPosition?: string;
}

export interface Review {
  name: string;
  text: string;
  time: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ProtocolPillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Partner {
  label: string;
  name: string;
  hiddenOnMobile?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}
