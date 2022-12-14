import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>cryptopic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <a>Cryptopic</a>
      </nav>

      <main className={styles.main}>
        <h1>Welcome To Cryptopic!</h1>
        <button className={styles.signin}>
          <span>Sign in with MetaMask to get started</span>
          <Image className={styles.metalogin} width={30} height={30} src="/480px-MetaMask_Fox.svg.png"/>
        </button>
      </main>

      <footer className={styles.footer}>
        <p>Decentralized media storage that you own, permanently.</p>
      </footer>

    </div>
  )
}
