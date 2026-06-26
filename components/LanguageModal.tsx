'use client';

import { useI18n } from '@/lib/i18n'; // Vérifie le chemin selon ton architecture
import { Lang } from '@/lib/i18n/types';

interface LanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LanguageModal({ isOpen, onClose }: LanguageModalProps) {
  const { setLanguage } = useI18n();

  // Si isOpen est faux, le composant ne retourne rien (il est invisible)
  if (!isOpen) return null;

  const handleSelectLanguage = (lang: Lang) => {
    if (setLanguage) {
      setLanguage(lang);
    }
    // On appelle la fonction passée par le parent (App) pour fermer le modal
    onClose(); 
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-purple-100 p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full mx-4" dir="ltr">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose your language</h2>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">اختر لغتك</h2>
        
        <div className="flex gap-3">
          <button
            onClick={() => handleSelectLanguage('en')}
            className="w-full px-6 py-3 bg-purple-200 text-purple-800 text-lg font-bold rounded-lg hover:bg-purple-300 transition-colors"
          >
            English
          </button>
          <button
            onClick={() => handleSelectLanguage('ar')}
            className="w-full px-6 py-3 bg-purple-200 text-purple-800 text-lg font-bold rounded-lg hover:bg-purple-300 transition-colors"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}