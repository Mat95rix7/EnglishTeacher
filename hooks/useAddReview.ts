import { useState } from 'react';
import { addReview } from '@/services/reviewsService';
import type { Review } from '@/components/Reviews';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function useAddReview() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<Error | null>(null);

  const submit = async (form: Omit<Review, 'id' | 'color' | 'pending' | 'avatar'>) => {
    if (status === 'submitting') return;
    setStatus('submitting');
    setError(null);
    try {
      await addReview(form);
      setStatus('success');
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erreur inconnue'));
      setStatus('error');
    }
  };

  return { submit, status, error, reset: () => setStatus('idle') };
}