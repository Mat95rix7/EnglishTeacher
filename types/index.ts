// ─── Types ─────────────────────────────────────────────────────────────────────

export interface Registration {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courses: string;
  level: string;
  message?: string;
  createdAt: any;
}

export interface Question {
  id: string;
  name: string;
  email?: string;
  question: string;
  answered: boolean;
  lang?: string;
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