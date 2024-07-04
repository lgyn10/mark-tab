import { create } from 'zustand';
import { BookmarkState } from './types';

// id = '2'인 기타 북마크 폴더만 가지고 crud 진행 예정
export const bookmarkStore = create<BookmarkState>((set) => ({
  bookmarkNode: null,
  fetchBookmarkTreeNode: async () => {
    try {
      const result = await chrome.bookmarks.getSubTree('2');
      set({ bookmarkNode: result[0] });
    } catch (error) {
      console.log('error', error);
    }
  },
}));
