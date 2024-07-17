export type ThemeName = 'light' | 'dark';

export interface Theme {
  name: ThemeName;
  mainBackgroundColor: string;
  containerBorderColor: string;
  containerBackgroundColor: string;
  boardCardBackgroundColor: string;
  boardCardBorderColor: string;
  boardCardDividerColor: string;
  boardHeadingColor: string;
  itemTextColor: string;
  itemHoverTextColor: string;
  itemHoverTextShadow: string;
  buttonBoxBackgroundColor: string;
  itemButtonFilterValue: number;
}

export const lightTheme: Theme = {
  name: 'light',
  mainBackgroundColor: '#f7f8fb',
  containerBorderColor: '#e2e1ea',
  containerBackgroundColor: '#fff',
  boardCardBackgroundColor: `#fff`,
  boardCardBorderColor: '#c9cacf',
  boardCardDividerColor: '#eaebef',
  boardHeadingColor: '#353535',
  itemTextColor: '#898989',
  itemHoverTextColor: '#1077eb',
  itemHoverTextShadow: '#2c8af6',
  buttonBoxBackgroundColor: '#cce5f8',
  itemButtonFilterValue: 0,
};

export const darkTheme: Theme = {
  name: 'dark',
  mainBackgroundColor: '#1C2128',
  containerBorderColor: '#514C48',
  containerBackgroundColor: '#1C2023',
  boardCardBackgroundColor: `#22272D`,
  boardCardBorderColor: '#23272A',
  boardCardDividerColor: '#778491',
  boardHeadingColor: '#C4D1DE',
  itemTextColor: '#778491',
  itemHoverTextColor: '#468BE7',
  itemHoverTextShadow: '#468BE7',
  buttonBoxBackgroundColor: '#B97418',
  itemButtonFilterValue: 1,
};

export const theme = {
  lightTheme,
  darkTheme,
};
