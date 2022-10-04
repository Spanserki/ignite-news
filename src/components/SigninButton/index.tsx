import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

import { signIn, signOut, useSession } from 'next-auth/react'

export function SigninButton() {
    const {data: session} = useSession()
    console.log(session)

    return session ? (
        <button 
            type='button'
            className={styles.SigninButton}
            >
            <FaGithub color='#04d361'/>
            {session.user.name}
            <FiX className={styles.closeIcon} onClick={() => signOut()}/>
        </button>
    ): (
        <button 
            type='button'
            className={styles.SigninButton}
            onClick={() => signIn('github')}
            >
            <FaGithub color='#eba417'/>
            Sign in with GitHub
        </button>
    )
}