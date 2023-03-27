import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] })
import '@styles/main.scss';

export default function Application({ Component, pageProps }) {

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
