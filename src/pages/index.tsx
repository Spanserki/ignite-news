import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from "next/image";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from './styles.module.scss';

interface productProps {
    product: {
        priceId: string;
        amount: number;
    }
}

export default function Home({ product }: productProps) {
    const { data: session } = useSession()
    return (
        <>
            <Head><title>Início | ig.News</title></Head>

            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <h4>👏 Hey, welcome</h4>

                    <strong>News about the <span>React</span> world</strong>

                    {!session && (
                        <div>
                            <SubscribeButton />
                        </div>
                    )}
                </div>

                <div>
                    <Image src="/assets/Mulher.png" width={334} height={520} objectFit="cover" />
                </div>
            </header>
        </>

    )
}