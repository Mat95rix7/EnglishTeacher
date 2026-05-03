import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Review } from '@/components/Reviews';

const COLLECTION = 'reviews';

/* ─────────────────────────────────────────────
   Types internes (ce qui est stocké en base)
───────────────────────────────────────────── */
interface ReviewDocument {
  name: string;
  country: string;
  avatar: string;
  rating: number;
  course: string;
  text: string;
  color: string;
  pending: boolean;
  createdAt: Timestamp;
}

/* ─────────────────────────────────────────────
   addReview
   Ajoute un avis en base avec pending: true
   → retourne l'id Firebase du document créé
───────────────────────────────────────────── */
export async function addReview(
  review: Omit<Review, 'id' | 'pending'>
): Promise<string> {
  const payload: Omit<ReviewDocument, 'createdAt'> & { createdAt: unknown } = {
    name:      review.name,
    country:   review.country,
    avatar:    review.avatar,
    rating:    review.rating,
    course:    review.course,
    text:      review.text,
    color:     review.color,
    pending:   true,              // toujours en attente de modération
    createdAt: serverTimestamp(), // timestamp serveur pour un tri fiable
  };

  const ref = await addDoc(collection(db, COLLECTION), payload);
  return ref.id;
}

/* ─────────────────────────────────────────────
   readReviews
   Récupère tous les avis approuvés (pending: false)
   triés du plus récent au plus ancien
───────────────────────────────────────────── */
export async function readReviews(): Promise<Review[]> {
  const q = query(
    collection(db, COLLECTION),
    where('pending', '==', false),   // uniquement les avis validés
    orderBy('createdAt', 'desc')
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => {
    const data = doc.data() as ReviewDocument;
    return {
      id:      doc.id,
      name:    data.name,
      country: data.country,
      avatar:  data.avatar,
      rating:  data.rating,
      course:  data.course,
      text:    data.text,
      color:   data.color,
      pending: data.pending,
    };
  });
}