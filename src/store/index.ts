import { create } from 'zustand';
import { createBookmarkStore } from './bookmarkStore';
import { BookmarkStore } from './types';

export type RootState = BookmarkStore;

export const bookmarkStore = create<RootState>((set, get) => {...createBookmarkStore(set, get)});
