import { create } from 'zustand';
import { BookmarkState } from './types';

export const createBookmarkStore = create<BookmarkState>((set) => ({
  bookmarks: [],
  fetchBookmarks: async () => {},
}));
