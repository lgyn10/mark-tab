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
  mainBackgroundColor: '#1F2020',
  containerBorderColor: '#514C48',
  containerBackgroundColor: '#1C2023',
  boardCardBackgroundColor: `#333333`, //#22272D
  boardCardBorderColor: '#3C3C3C',
  boardCardDividerColor: '#5E5E5E',
  boardHeadingColor: '#969696',
  itemTextColor: '#a8a8a8',
  itemHoverTextColor: '#EEE',
  itemHoverTextShadow: '#EEE',
  buttonBoxBackgroundColor: '#B97418',
  itemButtonFilterValue: 1,
};

export const theme = {
  lightTheme,
  darkTheme,
};
