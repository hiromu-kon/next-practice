export const BASE_URL = 'http://localhost:5000';

/**
 * サインイン
 */
export const signIn = `${BASE_URL}/auth/signIn`;

/**
 * サインアップ
 */
export const signUp = `${BASE_URL}/auth/signUp`;

/**
 * サインアウト
 */
export const signOut = `${BASE_URL}/auth/signOut`;

/**
 * 投稿一覧取得
 */
export const fetchPosts = '/api/posts';

/**
 * 投稿詳細取得
 */
export const fetchPost = (pathParameter: { postId: number }): string => {
  return `/posts/${pathParameter.postId}`;
};
