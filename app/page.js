import Image from 'next/image'
import Header from './components/Header'
import Footer from "./components/Footer";
import styles from './page.module.css'
import Shelf from './components/Shelf'

export default async function Home() {

  const {results} = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=samsung}&limit=4`).then( res => res.json())
console.log(results)
  return (
    <>
    <Header />
     <main className={styles.main}>
      <div className={styles.bannerContainer}>
      <Image src='/bannerHome.webp' width={1500} height={400}/>

      </div>
      <div>
        <h2 className={styles.relatedProductsTitle}>Conseguí las mejores ofertas</h2>
        <ul className={styles.relatedProductsContainer}>
        {
          results.map( product => {
            return(
              <Shelf 
                  key={product.id}
                  id={product.id}
                  picture={product.thumbnail}
                  title={product.title}
                  originalPrice={product.original_price}
                  price={product.price}
                  currencyId={product.currency_id}
              />
            )
          })
        }
        </ul>
      </div>
    
    </main>
    <Footer />
    </>    
   
  )
}
