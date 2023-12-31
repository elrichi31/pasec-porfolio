import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Portafolio <a href="https://www.usfq.edu.ec/es/programa-de-aprendizaje-y-servicio-pasec">PASEC</a>
        </h1>

        <div style={{marginTop: "30px", marginBottom: "20px"}}>
          <Image src={"https://upload.wikimedia.org/wikipedia/commons/f/f9/Escudo_usfq-01.png"} height={250} width={300}></Image>
        </div>

        <p className={styles.description}>
          Nicolas Moina{' '}
          {/* <code className={styles.code}>pages/index.tsx</code> */}
        </p>

        <div className={styles.grid}>
          <Link href={"/fortalezas"}><a className={styles.card}>
            <h2>Fortalezas &rarr;</h2>
            <p>Se describiran las diferentes fortalezas que se posee</p>
          </a></Link>

          <Link href={"/aportes"}><a className={styles.card}>
            <h2>Aportes &rarr;</h2>
            <p>Actividades remotas o presenciales brindan a la organización.</p>
          </a></Link>

          <Link href={"/objetivo"}><a
            className={styles.card}
          >
            <h2>Objetivo a futuro &rarr;</h2>
            <p>Se planteara un objetivo a futuro tomando en cuenta el rol como ciudadano responsable.</p>
          </a></Link>

          <Link href={"/video"}><a
            className={styles.card}
          >
            <h2>Video &rarr;</h2>
            <p>
              Video de 2 minutos en el que se narra la experiencia que se tuvo con la organización.
            </p>
          </a></Link>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
