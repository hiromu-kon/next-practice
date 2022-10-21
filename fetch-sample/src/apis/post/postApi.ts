import axios from 'axios';

import { Post } from '../../types/Post';
import { PostApiImpl } from './postApiImple';
import { FetchPostsListRequest } from './requests';
import { FetchPostsListResponse } from './responses';
import { ApiResponse } from '@/types/ApiResponse';
import { fetchPost, fetchPosts } from '@/constants/endpoints';

class PostApi implements PostApiImpl {
  public async fetchList(query: FetchPostsListRequest): Promise<FetchPostsListResponse> {
    const res: ApiResponse<FetchPostsListResponse> = await axios.get(fetchPosts, {
      params: {
        paginationPageNumber: query,
      },
    });

    return res.data!;
  }

  public async fetchById(postId: number): Promise<Post> {
    const res: ApiResponse<Post> = await axios.get(fetchPost({ postId: postId }));
    return res.data!;
  }

  public async create(requestBody: Omit<Post, 'id'>): Promise<number> {
    const url = `/api/posts/`;
    const res = await axios.post(url, {
      email: requestBody.title,
      description: requestBody.description,
    });

    return res.data.data.id;
  }

  public async update(requestBody: Post): Promise<void> {
    const url = `/api/posts/${requestBody.id}`;
    await axios.patch(url, {
      id: requestBody.id,
      title: requestBody.title,
      description: requestBody.description,
    });
  }

  public async delete(postId: number): Promise<void> {
    const url = `/api/posts/${postId}`;
    await axios.delete(url);
  }
}

export const postApi = new PostApi();
