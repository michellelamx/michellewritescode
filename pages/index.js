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
          <p className='description'>
            Get started by editing <code>pages/index.js</code>
          </p>
        </div>
      </main>
    </>
  )
}
