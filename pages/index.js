import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to WebLibrary!
        </h1>

        <p className={styles.description}>
          We are currently under construction, but check back soon for updates
        </p>

      </main>

      <footer className={styles.footer}>
        <p>A <a href="https://butterwick.tech">butterwick.tech</a> project</p>
      </footer>
    </div>
  )
}
