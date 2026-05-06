import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface QuestionInput {
  name: string;
  email: string;
  question: string;
  lang?: string;
}

export async function saveQuestion(data: QuestionInput): Promise<void> {
  await addDoc(collection(db, 'questions'), {
    ...data,
    createdAt: serverTimestamp(),
  });
}