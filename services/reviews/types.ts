import { serverTimestamp, Timestamp } from "firebase/firestore";

export interface ReviewDoc {
  name: string;
  country: string;
  avatar: string;
  rating: number;
  course: string;
  text: string;
  color: string;
  pending: boolean;
  featured: boolean;
  createdAt: Timestamp | ReturnType<typeof serverTimestamp>;
}

export interface Review {
  id?: string;
  name: string;
  country: string;
  avatar: string;
  rating: number;
  course: string;
  text: string;
  color: string;
  pending?: boolean;
  featured?: boolean;
}
