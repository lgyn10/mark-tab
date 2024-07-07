import { create } from 'zustand';
import { defaultData } from './data';
import { BookmarkState } from './types';

// id = '2'인 기타 북마크 폴더만 가지고 crud 진행 예정
export const bookmarkStore = create<BookmarkState>((set) => ({
  bookmarkNode: null,
  fetchBookmarkTreeNode: async () => {
    try {
      const result = await chrome.bookmarks.getSubTree('2');
      console.log('크롬에서 북마크 데이터를 가져옵니다.');
      set({ bookmarkNode: result[0] });
    } catch (error) {
      console.log('error', error);
      console.log('로컬에서 북마크 데이터를 가져옵니다.');
      set({ bookmarkNode: defaultData });
    }
  },
  editBookmarkTitle: async (id: string, editTitle: string) => {
    try {
      chrome.bookmarks.update(id, { title: editTitle });
    } catch (e) {
      console.log(e);
    }
  },
}));
