// lib/registrationService.ts
// ─────────────────────────────────────────────────────────────
// Couche d'abstraction BDD — change UNIQUEMENT ce fichier
// pour brancher Firebase, Supabase, PocketBase, etc.
// ─────────────────────────────────────────────────────────────

export interface RegistrationData {
  name: string;
  email: string;
  phone?: string;
  level?: string;
  message?: string;
  lang: string;          // langue du formulaire au moment de la soumission
  created_at?: string;   // rempli automatiquement
}

// ── Option A : Supabase (décommenter si tu utilises Supabase) ──
// import { supabase } from './supabase';
// export async function saveRegistration(data: RegistrationData): Promise<void> {
//   const { error } = await supabase.from('registrations').insert([data]);
//   if (error) throw error;
// }

// ── Option B : Firebase Firestore ─────────────────────────────
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from './firebase';
// export async function saveRegistration(data: RegistrationData): Promise<void> {
//   await addDoc(collection(db, 'registrations'), {
//     ...data,
//     created_at: new Date().toISOString(),
//   });
// }

// ── Option C : API REST custom ────────────────────────────────
// export async function saveRegistration(data: RegistrationData): Promise<void> {
//   const res = await fetch('/api/registrations', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) throw new Error(await res.text());
// }

// ── Option active : simulation (à remplacer) ──────────────────
export async function saveRegistration(data: RegistrationData): Promise<void> {
  console.log('[saveRegistration] données à envoyer :', data);
  await new Promise((r) => setTimeout(r, 900)); // simule un appel réseau
  // Décommente la ligne suivante pour tester l'état d'erreur :
  // throw new Error('Simulated error');
}