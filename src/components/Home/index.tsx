import Image from "next/image";
import styles from './styles.module.scss'

export function Home() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h4>Hey, welcome</h4>

                <strong>News about the <span>React</span> world</strong>

                <p>Get acess to all the publications <span>for $9,90 month</span></p>

                <button>Subscribe now</button>
            </div>

            <div>
                <Image src="/assets/Mulher.png" width={334} height={520} objectFit="cover"/>
            </div>
        </header>
    )
}