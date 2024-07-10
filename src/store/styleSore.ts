// styleStore.ts
import { create } from 'zustand';

interface StyleState {
  isDarkTheme: boolean;
  setStyles: (state: boolean) => void;
}

export const useStyleStore = create<StyleState>((set) => {
  const initialIsDarkTheme = window.localStorage.getItem('marktab-theme') === 'true' ? true : false;
  console.log('useStyleStore: ', window.localStorage.getItem('marktab-theme'));
  return {
    isDarkTheme: initialIsDarkTheme,
    setStyles: (state: boolean) => {
      set({ isDarkTheme: state });
    },
  };
});
