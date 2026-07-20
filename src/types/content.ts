import type { LucideIcon } from 'lucide-react';

export interface Procedure {
  title: string;
  desc: string;
  before: string;
  after: string;
  /** Shared crop anchor when before/after overrides are not set. */
  objectPosition?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  /** Scale the before image up when its source framing is wider. */
  beforeScale?: number;
  /** Scale the after image down (<1) when its source crop is tighter than antes. */
  afterScale?: number;
  beforeTransformOrigin?: string;
  afterTransformOrigin?: string;
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
