import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Checkboxtext from '../components/atoms/checkboxtext'
import Categorybutton from '../components/atoms/categorybutton'

const Home: NextPage = () => {
  return (
    <div>
      <Checkboxtext buttontext="テスト" />
      <Categorybutton buttonText="テスト" state={true} href="/signin" />
    </div>
  )
}

export default Home
