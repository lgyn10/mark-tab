// styleStore.ts
import create from 'zustand';

interface StyleState {
  mainBackgroundColor: string;
  containerBorderColor: string;
  boardCardBorderColor: string;
  boardCardDividerColor: string;
  boardHeadingColor: string;
  itemTextColor: string;
  itemHoverTextColor: string;
  itemHoverTextShadow: string;
  buttonBoxBackgroundColor: string;
  darkMode: boolean;
  itemButtonFilterValue: number;
  toggleDarkMode: () => void;
  setStyles: (styles: Partial<StyleState>) => void;
}

export const useStyleStore = create<StyleState>((set) => ({
  mainBackgroundColor: '#f7f8fb',
  containerBorderColor: '#e2e1ea',
  boardCardBorderColor: '#c9cacf',
  boardCardDividerColor: '#eaebef',
  boardHeadingColor: '#353535',
  itemTextColor: '#898989',
  itemHoverTextColor: '#1077eb',
  itemHoverTextShadow: '#2c8af6',
  buttonBoxBackgroundColor: '#cce5f8',
  itemButtonFilterValue: 0,
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  setStyles: (styles) => set((state) => ({ ...state, ...styles })),
}));
