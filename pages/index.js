import Head from 'next/head'
import Blog from '../components/Blog'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tryfle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Blog />
    </>
  )
}
