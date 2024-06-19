import Link from 'next/link';
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from './items.module.css'
import Image from 'next/image';

export default async function ItemsPage({searchParams}) {

    const {results} = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchParams.search}&limit=8`).then( res => res.json())
    

    return (
    <>
    <Header />
        <main className={styles.main}>
            <section>
                <ol className={styles.itemsContainer}>
                {results.map( article => {
                    return(
                        <li key={article.id} className={styles.item}>
                        <Link  href={`/items/${article.id}`} className={styles.itemContainer}>
                            <div className={styles.itemImgContainer}>
                                <Image width={100} height={100} src={article.thumbnail} alt={article.title} />
                            </div>
                            <div className={styles.itemInfo}>
                            
                                <span>
  
                            {article.tags?.includes('best_seller_candidate') === true ? <p className={styles.itemHighlight}>MÁS VENDIDO</p> : <p></p>}
                            </span>
                                <p className={styles.itemName}>{article.title}</p>
                                    <div className={styles.itemPriceContainer}>
                                    <p className={styles.itemPrice}>{Number(article.price).toLocaleString('es-AR', {style: 'currency', currency: article.currency_id}).slice(0, -3)}</p>
                                
                                    <span className={styles.itemInstallments}>
                                    { article.installments !== null && article.installments.rate !== 0 ? `en ${article.installments.quantity}x ${Number(article.installments.amount).toLocaleString('es-AR', {style: 'currency', currency: article.currency_id}).slice(0, -3)}` : ''}
                                    </span> 
                                    <span className={styles.itemInstallmentsSamePrice}> 
                                    { article.installments.rate === 0  ? `Mismo precio en ${article.installments.quantity} cuotas de ${Number(article.installments.amount).toLocaleString('es-AR', {style: 'currency', currency: article.currency_id}).slice(0, -3)}` : ''}
                                    </span>
                                
                            
                                
                                </div>
                                <span className={styles.itemFreeShipping}>{article.shipping.free_shipping === true ? 'Envío gratis' : '' }</span>
                            </div>
                        </Link>
                        </li>
                    )
                })}
                </ol>
                
            </section>
        </main>
    <Footer />
    </>    
   
  )
}
