import type { NextPage } from 'next'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import Button from '../src/components/atoms/Button'
import style from './index.module.css'

const Home: NextPage = () => {
  const [count, setCount] = useState(0)

  const CountUp = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  const CountDown = useCallback(() => {
    setCount(prevCount => prevCount - 1)
  }, [])

  return (
    <div>
      <Link href="/About">
        <a>Aboutページへ</a>
      </Link>
      <div className={style.div}>
        {count}
      </div>
      <div className={style.div}>
        <Button children="カウントアップ" onClick={CountUp} />
        <Button children="カウントダウン" onClick={CountDown} />
      </div>
    </div>
  )
}

export default Home
