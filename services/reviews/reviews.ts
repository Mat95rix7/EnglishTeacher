
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Review } from './types';
import { AVATAR_COLORS, COLLECTION } from './constants';
import type { ReviewDoc } from './types';

// ─── addReview ─────────────────────────────────────────────────────────────────
/**
 * Ajoute un avis en base.
 * Génère les initiales et la couleur côté client avant l'envoi.
 *
 * @returns L'id Firestore du document créé.
 */
export async function addReview(
  form: Pick<Review, 'name' | 'country' | 'course' | 'rating' | 'text'>
): Promise<string> {
  const initials = form.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const doc: ReviewDoc = {
    ...form,
    avatar:   initials,
    color:    AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)],
    pending:  true,
    featured: false,
    createdAt: serverTimestamp(),
  };

  const ref = await addDoc(collection(db, COLLECTION), doc);
  return ref.id;
}

// ─── readReviews ───────────────────────────────────────────────────────────────
/**
 * Récupère tous les avis approuvés (pending: false), triés du plus récent au plus ancien.
 *
 * @returns Tableau de Review enrichi de l'id Firestore.
 */
export async function readReviews(): Promise<Review[]> {
  const q = query(
    collection(db, COLLECTION),
    orderBy('createdAt', 'desc')
  );

  const snap = await getDocs(q);

  return snap.docs
    .map((doc) => {
      const data = doc.data() as ReviewDoc;
      return {
        id:      doc.id,
        name:    data.name,
        country: data.country,
        avatar:  data.avatar,
        rating:  data.rating,
        course:  data.course,
        text:    data.text,
        color:   data.color,
        pending: data.pending ?? false,
      } satisfies Review;
    })
    .filter((r) => !r.pending);
}