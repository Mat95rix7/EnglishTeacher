'use client';

import { useState, useEffect, useCallback } from 'react';
import { addReview, readReviews } from '../services/reviewsService';
import type { Review } from '@/components/Reviews';

const AVATAR_COLORS = [
  'from-pink-400 to-rose-500',
  'from-blue-400 to-cyan-500',
  'from-violet-400 to-purple-500',
  'from-emerald-400 to-green-500',
  'from-amber-400 to-orange-500',
  'from-indigo-400 to-blue-500',
];

interface UseReviewsReturn {
  reviews:     Review[];
  loading:     boolean;
  error:       string | null;
  submitReview: (fields: SubmitFields) => Promise<void>;
}

export interface SubmitFields {
  name:    string;
  country: string;
  course:  string;
  rating:  number;
  text:    string;
}

export function useReviews(
  fallback: Review[] = []   // les INITIAL_REVIEWS passés en prop de secours
): UseReviewsReturn {
  const [reviews, setReviews] = useState<Review[]>(fallback);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  /* ── Chargement initial ── */
  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await readReviews();
      // Si Firestore est vide, on garde les mocks en fallback
      setReviews(data.length > 0 ? data : fallback);
    } catch (err) {
      console.error('[useReviews] fetch error:', err);
      setError('Impossible de charger les avis.');
      setReviews(fallback); // on ne casse pas l'UI
    } finally {
      setLoading(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { fetchReviews(); }, [fetchReviews]);

  /* ── Soumission d'un nouvel avis ── */
  const submitReview = useCallback(async (fields: SubmitFields) => {
    // Construit l'avatar et la couleur côté client (pas besoin de les stocker)
    const avatar = fields.name
      .split(' ')
      .map((w) => w[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const color =
      AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];

    const id = await addReview({ ...fields, avatar, color });

    // Optimistic UI : on ajoute l'avis localement avec pending: true
    // Il disparaîtra au prochain fetchReviews (car pending est filtré)
    const optimistic: Review = {
      id,
      ...fields,
      avatar,
      color,
      pending: true,
    };
    setReviews((prev) => [...prev, optimistic]);
  }, []);

  return { reviews, loading, error, submitReview };
}