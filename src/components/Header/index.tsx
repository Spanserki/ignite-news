import Image from "next/image"
import { ActiveLink } from "../Activelink"
import { SigninButton } from "../SigninButton"
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src='/assets/ig.news.png' width={108} height={30} objectFit='cover'/>

                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                         <a>Home</a>
                    </ActiveLink>

                    <ActiveLink activeClassName={styles.active}  href="/posts" prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SigninButton />
            </div>
        </header>
    )
}