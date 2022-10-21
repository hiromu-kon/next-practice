import { Post } from '@/types/Post';

/**
 * 投稿一覧取得のレスポンス型
 */
export type FetchPostsListResponse = {
  totalItemsCount: number;
  posts: Post[];
};
