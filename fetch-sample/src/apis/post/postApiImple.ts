import { Post } from '@/types/Post';
import { FetchPostsListRequest } from './requests';
import { FetchPostsListResponse } from './responses';

export interface PostApiImpl {
  fetchList: (query: FetchPostsListRequest) => Promise<FetchPostsListResponse>;

  fetchById: (userId: number) => Promise<Post>;

  create: (requestBody: Omit<Post, 'id'>) => Promise<number>;

  update: (requestBody: Post) => Promise<void>;

  delete: (postId: number) => Promise<void>;
}
