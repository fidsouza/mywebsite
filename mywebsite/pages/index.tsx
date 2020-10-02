import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin } from "react-icons/ai";



export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Filipe da Costa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span className={styles.h1Main}>
          FILIPE COSTA
      </span>
      <p>
          Full-Stack developer apaixonado pelo que faz e que adora desenvolver aplicações com a melhor experiência para o usuário
      </p>

      <footer>
        <div className={styles.footersocial}>
          <a href="https://github.com/fidsouza" className="github"><DiGithubBadge className={styles.githubIcon}/></a>
          <a href="https://www.linkedin.com/in/filipe-souza-836a9b26/" className="github"><AiFillLinkedin className={styles.githubIcon}/></a>

        </div>
      </footer>

      


    </div>
  )
}
