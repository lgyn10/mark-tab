import { create } from 'zustand';
import { defaultData } from './data';
import { BookmarkState } from './types';

// id = '2'인 기타 북마크 폴더만 가지고 crud 진행 예정
export const bookmarkStore = create<BookmarkState>((set) => ({
  bookmarkNode: defaultData,
  fetchBookmarkTreeNode: async () => {
    try {
      const result = await chrome.bookmarks.getSubTree('2');
      set({ bookmarkNode: result[0] });

      //
      //| "permissions": ["bookmarks", "scripting", "activeTab"],
      // const textData = JSON.stringify(result[0], null, 2);
      // const blob = new Blob([textData], { type: 'text/plain' });
      // const url = URL.createObjectURL(blob);

      // const link = document.createElement('a');
      // link.href = url;
      // link.download = 'bookmarkNode.txt';
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    } catch (error) {
      console.log('error', error);
    }
  },
}));
