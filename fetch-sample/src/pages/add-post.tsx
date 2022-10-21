import { FetchPostsListResponse } from '@/apis/post/responses';
import { Link } from '@/components/Link/Link';
import { fetchPost, fetchPosts } from '@/constants/endpoints';
import { Post } from '@/types/Post';
import { pagesPath } from '@/utils/$path';
import { NextPage } from 'next';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { mutate, useSWRConfig } from 'swr';

const AddPost: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { cache } = useSWRConfig();
  const onSubmit = async () => {
    const result = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    const post: Post = await result.json();
    // const oldPosts: FetchPostsListResponse = cache.get(fetchPosts);
    // if (oldPosts) {
    //   mutate('/api/posts', [...oldPosts.posts, post], { revalidate: false });
    // }

    router.push(pagesPath.$url());
  };

  return (
    <div>
      {/* <Link href={pagesPath.$url()}>
        <a>戻る</a>
      </Link> */}
      <Link href="/">戻る</Link>
      <label htmlFor="">
        Title
        <br />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label htmlFor="">
        Description
        <br />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button onClick={() => onSubmit()}>Add</button>
    </div>
  );
};

export default AddPost;
