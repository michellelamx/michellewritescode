import Head from 'next/head'
import { Skills } from '../components/Skills'

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
            <p className='subtitle'>I'm a frontend developer making designs come to life with pixel-perfect, clean, performant, reusable code.</p>
          </header>
          <Skills />
        </div>
      </main>
    </>
  )
}
