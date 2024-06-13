import Image from 'next/image'
import styles from './header.module.css'

export default function Home() {
  return (
    <header className={styles.header}>
     <div className={styles.logo}></div>
     <div className={styles.searchBox}>
        <form action='/items' className={styles.searchForm}>
            <input name='search' type='text'className={styles.searchInput} placeholder='Buscar productos, marcas y más'/>
            <button type='submit' className={styles.searchSubmit}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#959595"
            viewBox="0 0 64 64"
          >
          <g>
            <circle cx="24" cy="24" r="16"></circle>
            <path d="M56 56L35.31 35.31"></path>
          </g>
        </svg>
            </button>
        </form>
     </div>
     <div className={styles.icons}>
      <Image src='/banner-disney.webp' 
             width={400}
             height={50}
             alt='¡Por $999 suscribite a Nivel 6 y obtené Disney Plus!'
       />
     </div>

    </header>
  )
}