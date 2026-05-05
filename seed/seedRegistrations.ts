import { collection, doc, serverTimestamp, writeBatch } from 'firebase/firestore';
import { db } from '@/lib/firebase';

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

export const MOCK_REGISTRATIONS: Omit<Registration, 'id'>[] = [
  {
    name: 'Sophie Martin',
    email: 'sophie.martin@gmail.com',
    whatsapp: '+33612345678',
    course: 'Business English',
    level: 'B2',
    message: 'Je veux me préparer pour des entretiens en anglais.',
    createdAt: serverTimestamp(),
  },
  {
    name: 'Omar Benali',
    email: 'omar.benali@hotmail.com',
    whatsapp: '+21360000001',
    course: 'IELTS Preparation',
    level: 'B1',
    message: "Besoin de Band 7 pour mon master à l'étranger.",
    createdAt: serverTimestamp(),
  },
  {
    name: 'Lena Fischer',
    email: 'lena.fischer@web.de',
    whatsapp: '+4917600000002',
    course: 'Conversational English',
    level: 'A2',
    createdAt: serverTimestamp(),
  },
  {
    name: 'Rafael Costa',
    email: 'rafael.costa@outlook.com',
    whatsapp: '+5511900000003',
    course: 'Pronunciation',
    level: 'B1',
    message: "Mon accent est trop fort, je veux m'améliorer.",
    createdAt: serverTimestamp(),
  },
  {
    name: 'Aisha Ndiaye',
    email: 'aisha.ndiaye@gmail.com',
    whatsapp: '+221700000004',
    course: 'Academic Writing',
    level: 'C1',
    message: 'Rédaction de ma thèse de doctorat en anglais.',
    createdAt: serverTimestamp(),
  },
];

export const registrationService = {
  async seedRegistrations() {
    const batch = writeBatch(db);
    const registrationsRef = collection(db, 'registrations');

    MOCK_REGISTRATIONS.forEach((registration) => {
      const newDocRef = doc(registrationsRef);
      const data: Record<string, any> = {
        name: registration.name,
        email: registration.email,
        course: registration.course,
        createdAt: serverTimestamp(),
      };

      if (registration.whatsapp !== undefined) {
        data.whatsapp = registration.whatsapp;
      }
      if (registration.level !== undefined) {
        data.level = registration.level;
      }
      if (registration.message !== undefined && registration.message !== null) {
        data.message = registration.message;
      }

      batch.set(newDocRef, data);
    });

    console.log('🚀 Envoi du batch de seeding registrations...');
    await batch.commit();
    console.log('✅ Seeding registrations terminé avec succès !');
  },
};