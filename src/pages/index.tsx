import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Checkboxtext from '../components/atoms/checkboxtext'

const Home: NextPage = () => {
  return (
    <div>
      <Checkboxtext buttontext="テスト" />
    </div>
  )
}

export default Home
