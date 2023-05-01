import Head from 'next/head'
import Image from 'next/image'
import mLogo from '../public/m-logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>michelle writes code</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='logo'>
          <Image
            src={ mLogo }
          />
        </div>
        <div className='container'>
          <p className='code-font'>Hi, my name is</p>
          <h2>Michelle Lamoureaux</h2>
          <h4>I'm a frontend/UI developer focused on making designs come to life as pixel-perfect, clean, reusable code.</h4>
        </div>
      </main>
    </>
  )
}
