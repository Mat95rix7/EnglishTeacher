// lib/registrationService.ts
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  courses: string;
  level: string;
  message: string;
}

export async function saveRegistration(data: RegistrationData): Promise<void> {
  await addDoc(collection(db, 'registrations'), {
    ...data,
    createdAt: serverTimestamp(),
  });
}