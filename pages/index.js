import Head from 'next/head'
import Image from 'next/image'
import mLogo from '../public/m-logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>michellelamx.com</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='logo'>
          <Image
            src={ mLogo }
          />
        </div>
        <div className='container'>
          <h2>Hi, I'm Michelle.</h2>
        </div>
      </main>
    </>
  )
}
