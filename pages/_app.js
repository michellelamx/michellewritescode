import { Montserrat, Source_Code_Pro } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'] })
const sourceCodePro = Source_Code_Pro({ subsets: ['latin']})
import '@styles/index.scss';

export default function Application({ Component, pageProps }) {

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
        .code-font {
          font-family: ${sourceCodePro.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
