import styles from './footer.module.css'

export default function Home() {
    return(
        <footer className={styles.footer}>
           <a>Trabajá con nosotros</a>
           <a>Términos y condiciones</a>
           <a>Cómo cuidamos tu privacidad</a>
           <a>Accesibilidad</a>
           <a>Información al usuario financiero</a>
           <a>Ayuda</a>
           <a>Defensa del Consumidor</a> 
           <a>Información sobre seguros</a> 

        </footer>
    )
}