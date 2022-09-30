import { AppProps } from "next/app"
import 'global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
    
  ) 
}

