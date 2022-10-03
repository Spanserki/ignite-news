import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SigninButton() {
    const IsUserLoggedIn = true

    return IsUserLoggedIn ? (
        <button 
            type='button'
            className={styles.SigninButton}
            >
            <FaGithub color='#04d361'/>
            Guilherme Spanserki
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ): (
        <button 
            type='button'
            className={styles.SigninButton}
            >
            <FaGithub color='#eba417'/>
            Sign in with GitHub
        </button>
    )
}