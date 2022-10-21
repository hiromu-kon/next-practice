import { useFetchPosts } from '@/apis/post/usePost';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { hiddenToastStatus, showToastStatus } from '@/features/toastMessage/toastMessageSlice';
import { pagesPath } from '@/utils/$path';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.module.scss';

const Home: NextPage = () => {
  // const { data: data, error } = useSWR<FetchPostsListResponse>(fetchPosts, fetcher);
  const { data: data, error } = useFetchPosts({ paginationPageNumber: 1 });

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(showToastStatus());

    setTimeout(() => {
      hiddenToastStatus();
      dispatch(hiddenToastStatus());
    }, 5000);
  };
  return (
    <div className={styles.container}>
      <Link href={pagesPath.add_post.$url()}>
        <a>Add Post</a>
      </Link>
      <main className={styles.main}>
        <h1>TotalCount: {data?.totalItemsCount}</h1>
        {!data && !error ? (
          <h1>Loading</h1>
        ) : (
          data?.posts.map((p) => (
            <Card key={p.id} link="/" heading={p.title} description={p.description} />
          ))
        )}
      </main>
      <button onClick={onClick}>送信</button>
      <Footer />
    </div>
  );
};

export default Home;
