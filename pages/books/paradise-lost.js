import Head from "next/head";
import Link from "next/link";
import Book from "../../src/components/book";
import TextToggleBlock from "../../src/components/block";
import styles from "../../styles/Home.module.css";

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
        <h1 className={styles.title}>Paradise Lost</h1>

        <p className={styles.description}>By John Milton</p>

        <Book
          blocks={[
            <TextToggleBlock
              props={{
                texts: [
                  "hello what is going on youtube",
                  "my name is jordan",
                  "I write code",
                ],
                details: [
                  "should be hidden until activated",
                  "should be hidden until activated",
                  "should be hidden until activated",
                ],
              }}
            />,
          ]}
        />
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
