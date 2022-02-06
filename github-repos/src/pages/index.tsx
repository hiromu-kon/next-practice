import { useState, useEffect } from 'react';
/* libs */
import { apiClient } from '../lib/apiClient';
/* components */
import Navbar from '../components/navbar';

type Props = {
  value: number
}

const Home = (props: Props) => {
  const [joke, setJoke] = useState<string>('')
  const { value } = props;

  useEffect(() => {
    getJoke();
  }, [])

  const getJoke = async () => {
    const res = await apiClient.get('https://api.chucknorris.io/jokes/random')
    setJoke(res.data.value)
  }

  return (
    <div>
       <Navbar />
      <h1>Hello from Next js</h1>
      <p>Description of the page</p>
      <p>Value CSR: {joke}</p>
      <p>Value SSR: {value}</p>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await apiClient.get('https://api.chucknorris.io/jokes/random')

  return {
    props: {
      value: res.data.value
    }
  }
}

export default Home
