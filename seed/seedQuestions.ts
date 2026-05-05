import { collection, doc, serverTimestamp, writeBatch } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Question {
  id: string;
  name: string;
  email?: string;
  question: string;
  answered: boolean;
  createdAt: any;
}

export const MOCK_QUESTIONS: Omit<Question, 'id'>[] = [
  {
    name: 'Julien Morel',
    email: 'julien.morel@gmail.com',
    question: "Proposez-vous des cours le weekend ? Je travaille en semaine et j'ai du mal à trouver des créneaux.",
    answered: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Layla Hamdan',
    email: 'layla.hamdan@hotmail.com',
    question: "Est-ce que vous pouvez aider pour le TOEFL en plus de l'IELTS ?",
    answered: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Mehmet Yilmaz',
    email: undefined,
    question: 'Combien de temps faut-il pour passer de B1 à C1 avec vos cours ?',
    answered: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Priya Sharma',
    email: 'priya.sharma@gmail.com',
    question: 'Est-ce que les cours sont enregistrés pour pouvoir les revoir après ?',
    answered: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Antoine Dubois',
    email: 'a.dubois@outlook.com',
    question: "Proposez-vous un essai gratuit avant de s'engager ?",
    answered: false,
    createdAt: serverTimestamp(),
  },
  {
    name: 'Yuna Park',
    email: 'yuna.park@naver.com',
    question: 'Je suis débutante complète, est-ce que vous acceptez le niveau A1 ?',
    answered: false,
    createdAt: serverTimestamp(),
  },
];

export const questionService = {
  async seedQuestions() {
    const batch = writeBatch(db);
    const questionsRef = collection(db, 'questions');

    MOCK_QUESTIONS.forEach((question) => {
      const newDocRef = doc(questionsRef);
      const data: Record<string, any> = {
        name: question.name,
        question: question.question,
        answered: false,
        createdAt: serverTimestamp(),
      };

      if (question.email !== undefined) {
        data.email = question.email;
      }

      batch.set(newDocRef, data);
    });

    console.log('🚀 Envoi du batch de seeding questions...');
    await batch.commit();
    console.log('✅ Seeding questions terminé avec succès !');
  },
};