import styles from './styles.module.scss'

interface SubcribeButtonProps {
    priceId: string;
}

export function SubscribeButton({priceId}: SubcribeButtonProps) {
    return (
        <button className={styles.SubscribeButoon}>Subscribe now</button>
    )
}