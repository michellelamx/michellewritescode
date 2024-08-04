import { Header } from '@components/Header'
import { useSmoothScroll } from '@hooks/useSmoothScroll'
import { About } from '@pages/About'
import { Contact } from '@pages/Contact'
import { Hype } from '@pages/Hype'
import { Intro } from '@pages/Intro'
import { Skills } from '@pages/Skills'
import { Work } from '@pages/Work'
import { EarthboundFarm } from '@pages/EarthboundFarm'
import { Slang } from '@pages/Slang'
import { Splunk } from '@pages/Splunk'
import { NYULangone } from '@pages/NYULangone'
import { NYULangoneGiving } from '@pages/NYULangoneGiving'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '@styles/main.css'


export default function App() {
  useSmoothScroll()

  return (
    <Router>
      <main className='container'>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <Intro />
              <About />
              <Hype />
              <Skills />
              <Work />
              <Contact />
            </>
          } />
          <Route path='/earthbound-farm' element={<EarthboundFarm />} />
          <Route path='/slang' element={<Slang />} />
          <Route path='/splunk' element={<Splunk />} />
          <Route path='/nyulangone' element={<NYULangone />} />
          <Route path='/nyulangone-giving' element={<NYULangoneGiving />} />
        </Routes>
      </main>
    </Router>
  )
}
