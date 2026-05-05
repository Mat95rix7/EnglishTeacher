import { db } from '@/lib/firebase';
import { collection, writeBatch, doc, serverTimestamp, Timestamp } from 'firebase/firestore';

interface Review {
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


export const MOCK_REVIEWS: Pick<
  Review,
  'name' | 'country' | 'avatar' | 'rating' | 'course' | 'text' | 'color' | 'pending' | 'featured' | 'createdAt'
>[] = [
  {
    name: 'Marie Dupont',
    country: '🇫🇷 France',
    avatar: 'MD',
    rating: 5,
    course: 'Business English',
    text: 'In just 3 months I went from being terrified of English meetings to confidently leading presentations. I got promoted, partly thanks to Khawla!',
    color: 'from-pink-400 to-rose-500',
    pending: false,
    featured: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Ahmed Hassan',
    country: '🇸🇦 Saudi Arabia',
    avatar: 'AH',
    rating: 5,
    course: 'IELTS Preparation',
    text: 'I needed a Band 7.5 for my university application and Khawla helped me achieve 8.0! Her structured approach and detailed feedback made all the difference.',
    color: 'from-blue-400 to-cyan-500',
    pending: false,
    featured: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Yuki Tanaka',
    country: '🇯🇵 Japan',
    avatar: 'YT',
    rating: 5,
    course: 'Conversational English',
    text: 'Before her lessons I was too shy to speak English. Now I travel alone and chat freely! Her patience is endless. Best teacher I have ever had.',
    color: 'from-violet-400 to-purple-500',
    pending: false,
    featured: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Carlos Mendez',
    country: '🇲🇽 Mexico',
    avatar: 'CM',
    rating: 5,
    course: 'Pronunciation',
    text: 'My accent was always a source of embarrassment but Khawla turned it into a strength! My colleagues now say I sound incredibly clear and professional.',
    color: 'from-emerald-400 to-green-500',
    pending: false,
    featured: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Fatima Al-Rashid',
    country: '🇦🇪 UAE',
    avatar: 'FA',
    rating: 5,
    course: 'Academic Writing',
    text: "Khawla helped me with my Master's thesis. Her feedback was detailed and constructive. My supervisor was very impressed with the final quality.",
    color: 'from-amber-400 to-orange-500',
    pending: false,
    featured: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Lucas Schmidt',
    country: '🇩🇪 Germany',
    avatar: 'LS',
    rating: 5,
    course: 'General English',
    text: "6 months from B1 and I just passed my C1 exam. Her lessons are fun, varied, never boring. The homework was exactly what I needed. 10/10!",
    color: 'from-indigo-400 to-blue-500',
    pending: false,
    featured: false,
    createdAt: serverTimestamp(),
  },
];


export const reviewService = {

  async seedReviews() {
    const batch = writeBatch(db);
    const reviewsRef = collection(db, 'reviews');

    MOCK_REVIEWS.forEach((review) => {
      // On crée une nouvelle référence de document avec un ID auto-généré
      const newDocRef = doc(reviewsRef); 
      batch.set(newDocRef, {
        ...review,
        pending: false, // Les mocks sont déjà validés
        createdAt: serverTimestamp(),
      });
    });

    console.log('🚀 Envoi du batch de seeding...');
    await batch.commit();
    console.log('✅ Seeding terminé avec succès !');
  }
};