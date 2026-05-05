// ─── Types ─────────────────────────────────────────────────────────────────────

export interface Registration {
  id: string;
  name: string;
  email: string;
  whatsapp?: string;
  course: string;
  level?: string;
  message?: string;
  createdAt: any;
}

export interface Question {
  id: string;
  name: string;
  email?: string;
  question: string;
  answered: boolean;
  createdAt: any;
}

export interface Review {
  id: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  course: string;
  text: string;
  color: string;
  pending: boolean;
  featured: boolean;
  createdAt: any;
}