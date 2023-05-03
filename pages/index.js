import Head from 'next/head'
// import Image from 'next/image'
// import mLogo from '../public/m-logo.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>michelle writes code</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* <div className='logo'>
          <Image
            src={ mLogo }
          />
        </div> */}
        <div className='container'>
          <div className='content-wrapper'>
            <p className='code-font'>Hey there! My name is</p>
            <p className='name'>Michelle Lamoureaux</p>
            <p className='subtitle'>I'm a frontend/UI developer focused on making designs come to life with pixel-perfect, clean, reusable code.</p>
          </div>
          <footer />
        </div>
      </main>
    </>
  )
}
