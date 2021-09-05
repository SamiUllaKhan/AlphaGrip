import Head from 'next/head'
import Footer from '../components/Footer'
import Menu from '../components/GroupMenu'
import Intro from '../components/Intro'
import Main from '../components/Main'

export default function Home() {
  return (
    <div >
      <Head>
        <title>AlphaGrip</title>
        <meta name="description" content="AlphaGrip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />

      <Intro />

    </div>
  )
}
