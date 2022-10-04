import 'global.scss'
import { Header } from "../components/Header"
import { SessionProvider } from "next-auth/react"

export default function MyApp({ Component, pageProps: {session, ...pageProps}, }: any) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
    
  ) 
}

