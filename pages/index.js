import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/books/paradise-lost">
            <a>Paradise Lost</a>
          </Link>
        </li>
      </ul>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to WebLibrary!</h1>

        <p className={styles.description}>
          We are currently under construction, but check back soon for updates
        </p>
      </main>

      <footer>
        <p>
          A{" "}
          <a target="_blank" href="https://butterwick.tech">
            butterwick.tech
          </a>{" "}
          project
        </p>
      </footer>
    </div>
  );
}
