import { create } from 'zustand';

import { BookmarkState } from './types';

// id = '2'인 기타 북마크 폴더만 가지고 crud 진행 예정
export const bookmarkStore = create<BookmarkState>((set) => ({
  bookmarkNode: null,
  fetchBookmarkTreeNode: async () => {
    try {
      const markTabId = await chrome.bookmarks.search({ title: 'mark-tab' }).then((res) => {
        return res[0].id;
      });
      const result = await chrome.bookmarks.getSubTree(markTabId);
      // console.log('크롬에서 북마크 데이터를 가져옵니다.');
      set({ bookmarkNode: result[0] });
    } catch (error) {
      console.log('error', error);
      alert(
        'Cannot find the ‘mark-tab’ folder in the bookmarks bar.\nCreate a ‘mark-tab’ folder in the bookmarks bar.'
      );
    }
  },
  editBookmarkNodeTitle: async (id: string, editTitle: string) => {
    try {
      await chrome.bookmarks.update(id, { title: editTitle });
      const markTabId = await chrome.bookmarks.search({ title: 'mark-tab' }).then((res) => {
        return res[0].id;
      });
      const result = await chrome.bookmarks.getSubTree(markTabId);
      set({ bookmarkNode: result[0] });
    } catch (e) {
      console.log(e);
    }
  },
  deleteBookmarkNode: async (id: string) => {
    try {
      chrome.bookmarks.remove(id);
      const markTabId = await chrome.bookmarks.search({ title: 'mark-tab' }).then((res) => {
        return res[0].id;
      });
      const result = await chrome.bookmarks.getSubTree(markTabId);
      set({ bookmarkNode: result[0] });
    } catch (e) {
      console.log(e);
    }
  },
}));
