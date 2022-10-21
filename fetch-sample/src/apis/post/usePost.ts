import { fetchPosts } from '@/constants/endpoints';
import useSWR from 'swr';
import { postApi } from '../post/postApi';
import { FetchPostsListRequest } from '../post/requests';
import { FetchPostsListResponse } from '../post/responses';

/**
 * 投稿一覧を取得するカスタムフック
 *
 * @param {FetchPostsListRequest} query
 */
export const useFetchPosts = (query: FetchPostsListRequest) => {
  return useSWR<FetchPostsListResponse>(fetchPosts, () => postApi.fetchList(query));
};

/**
 * 　Idに紐づく投稿を取得するカスタムフック
 *
 * @param {number} userId
 */
export const useFetchPost = (userId: number) => {};
