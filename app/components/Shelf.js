import Image from 'next/image';
import styles from './shelf.module.css'
import Link from 'next/link';


export default function Shelf({picture, title, id, originalPrice, price, currencyId}) {
    return(
        <Link  href={`/items/${id}`} className={styles.shelfLink}>
            <li className={styles.shelfContainer}>
                <Image src={picture} width={100} height={100} alt={title} />
                <div className={styles.shelfInfoContainer}>
                    <div className={styles.shelfPriceContainer}>
                    {originalPrice !== null ?
                    <p className={styles.originalPrice}>{Number(originalPrice).toLocaleString('es-AR', {style: 'currency', currency: currencyId}).slice(0, -3)}</p>
                                : '' }
                    <p className={styles.itemPrice}>{Number(price).toLocaleString('es-AR', {style: 'currency', currency: currencyId}).slice(0, -3)}</p>
                                
                    </div>
                    <p className={styles.shelfTitle}>{title}</p>
                </div>
            </li>
        </Link>
    )
}