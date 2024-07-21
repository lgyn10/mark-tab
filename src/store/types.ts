export interface BookmarkTreeNode {
  id: string;
  title: string;
  url?: string;
  children?: BookmarkTreeNode[];
  index?: number;
  parentId?: string;
  dataAdded?: number;
  dateLastUsed?: number;
  dateGroupModified?: number;
  unmodifiable?: 'managed';
}

export interface BookmarkState {
  bookmarkNode: BookmarkTreeNode | null;
  fetchBookmarkTreeNode: () => void;
  editBookmarkNodeTitle: (id: string, editTitle: string) => void;
  deleteBookmarkNode: (id: string) => void;
}

//! 미사용
// export interface CreateDetails {
//   index?: number; // 지정하지 않으면 자동으로 지정해줄 듯
//   parentId?: string;
//   title?: string;
//   url?: string;
// }
