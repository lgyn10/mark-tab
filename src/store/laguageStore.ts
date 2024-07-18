import { create } from 'zustand';

interface LaguageState {
  lang: string;
  setLang: (lang: string) => void;
}

export const useLaguageStore = create<LaguageState>((set) => ({
  lang: localStorage.getItem('mark-tab-lang') || 'en',
  setLang: (lang: string) => set({ lang }),
}));
