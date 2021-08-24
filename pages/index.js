import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Menu from '../components/GroupMenu'
import Intro from '../components/Intro'

export default function Home() {
  return (
    <div >
      <Head>
        <title>AlphaGrip</title>
        <meta name="description" content="AlphaGrip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Menu */}
      <Menu />

      <Intro />

      <Footer />
    </div>
  )
}
