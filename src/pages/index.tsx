import Head from 'next/head'
import { GetServerSideProps } from "next";
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from './styles.module.scss'

interface productProps {
    product: {
        priceId: string;
        amount: number;
    }
    
}

export default function Home({product}: productProps) {
  return (
    <>
        <Head><title>Início | ig.News</title></Head>

        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h4>👏 Hey, welcome</h4>

                <strong>News about the <span>React</span> world</strong>

                <p>Get acess to all the publications <span>for {product.amount} month</span></p>

                <SubscribeButton priceId={product.priceId}/>
            </div>

            <div>
                <Image src="/assets/Mulher.png" width={334} height={520} objectFit="cover"/>
            </div>
        </header>
    </>
    
  )
}
export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1LopG9J6dkfts0iOqiZPSxVt')
  
console.log(price)
  const product = {
      priceId: price.id,
      amount: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

      }).format(price.unit_amount / 100)
  }

  return {
      props: {
          product
      }
  }
}