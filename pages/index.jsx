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
          <div className='top-row'>
            <div className='links'>
              <h2>Links</h2>
              <a href='https://github.com/michellelamx?tab=repositories' target='_blank'>GitHub</a>
              <a href='https://www.linkedin.com/in/michellelamoureaux/' target='_blank'>LinkedIn</a>
              <a href='/MichelleLamoureaux-resume-FrontEndDeveloper.pdf' download>resume</a>
            </div>
            <div className='contact'>
              <h2>Get in Touch</h2>
              <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#105;&#99;&#104;&#101;&#108;&#108;&#101;&#46;&#108;&#97;&#109;&#111;&#117;&#114;&#101;&#97;&#117;&#120;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">&#109;&#105;&#99;&#104;&#101;&#108;&#108;&#101;&#46;&#108;&#97;&#109;&#111;&#117;&#114;&#101;&#97;&#117;&#120;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>
            </div>
          </div>
          <Skills />
        </div>
      </main>
    </>
  )
}
