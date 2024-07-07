export interface BookmarkTreeNode {
  id: string;
  title: string;
  index?: number;
  url?: string;
  children?: BookmarkTreeNode[];
  dataAdded?: number;
  dateLastUsed?: number;
  dateGroupModified?: number;
  parentId?: string;
  unmodifiable?: 'managed';
}

export interface BookmarkState {
  bookmarkNode: BookmarkTreeNode | null;
  fetchBookmarkTreeNode: () => void;
  editBookmarkTitle: (id: string, editTitle: string) => void;
}

export interface CreateDetails {
  index?: number; // 지정하지 않으면 자동으로 지정해줄 듯
  parentId?: string;
  title?: string;
  url?: string;
}
