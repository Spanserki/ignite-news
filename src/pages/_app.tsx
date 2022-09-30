import { AppProps } from "next/app"
import 'global.scss'
import { Header } from "../components/Header"
import { Home } from "../components/Home"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Home />
      <Component {...pageProps} />
    </div>
    
  ) 
}

