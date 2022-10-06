import Image from "next/image"
import { SigninButton } from "../SigninButton"
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src='/assets/ig.news.png' width={108} height={30} objectFit='cover'/>

                <nav>
                    <a className={styles.active} href="/">Home</a>
                    <a href="/posts">Posts</a>
                </nav>

                <SigninButton />
            </div>
        </header>
    )
    }