import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubcribeButtonProps {
    priceId: string;
}

export function SubscribeButton({priceId}: SubcribeButtonProps) {
    const {data: session} = useSession()

    function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }
    }

    return (
        <button 
            className={styles.SubscribeButoon}
            onClick={handleSubscribe}
            >Subscribe now
        </button>
    )
}