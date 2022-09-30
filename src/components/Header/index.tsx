import Image from "next/image"
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src='/assets/ig.news.png' width={108} height={30} objectFit='cover'/>

                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a className={styles.active} href="">Posts</a>
                </nav>
            </div>
        </header>
    )
    }