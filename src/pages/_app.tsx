import { AppProps } from "next/app"
import 'global.scss'
import { Header } from "../components/Header"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
    
  ) 
}

