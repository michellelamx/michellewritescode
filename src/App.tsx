import { Header } from '@components/Header'
import { useSmoothScroll } from '@hooks/useSmoothScroll'
import { About } from '@pages/About'
import { Contact } from '@pages/Contact'
import { Hype } from '@pages/Hype'
import { Intro } from '@pages/Intro'
import { Work } from '@pages/Work'
import '@styles/main.css'


export default function App() {
  useSmoothScroll()

  return (
    <main className='container'>
      <Header />
      <Intro />
      <About />
      <Hype />
      <Work />
      <Contact />
    </main>
  )
}
