import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>michelle writes code</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main>
        <div className='content-wrapper'>
          <header>
            <p className='code-font'>Hey there! My name is...</p>
            <p className='name'>Michelle Lamoureaux</p>
            <p className='subtitle'>I'm a frontend/UI developer focused on making designs come to life with pixel-perfect, clean, reusable code.</p>
          </header>
          <footer />
        </div>
      </main>
    </>
  )
}
