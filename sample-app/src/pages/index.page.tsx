import type { NextPage } from 'next';
import styles from '@/pages/Home.module.scss';
import useSWR from 'swr';
import { Post } from '@/types/Post';

const Home: NextPage = () => {
  const fetcher = async <JSON = any,>(input: RequestInfo, init?: RequestInit): Promise<JSON> => {
    const res = await fetch(input, init);
    return res.json();
  };

  const { data: posts, error } = useSWR<Post[]>('/api/posts', fetcher);

  console.log(JSON.stringify(posts));
  return <div className={styles.container}></div>;
};

export default Home;
