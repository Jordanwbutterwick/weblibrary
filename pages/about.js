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
        <h1 className={styles.title}>About This Project</h1>
        <div className={styles.block}>
          <p>
            The basic idea behind the Web Library is to somewhat modernize
            classic public domain literature.
          </p>
          <p>
            Over time, as we work on this, we plan to include many works of
            literature from many authors.
          </p>
          <p>
            Any and all of the works published on this website belong in the
            public domain.
          </p>
          <p>
            This means they are free for use by anyone for any purpose,
            commercial or otherwise.
          </p>
          <p>
            If you wish to request a book, or have any other questions or
            comments, please feel free to email us at
          </p>
          <p>
            <b>jordan(at)butterwick(dot)tech</b>
          </p>
        </div>

        <p className={styles.description}>
          Visit our website at{" "}
          <a target="_blank" href="https://butterwick.tech">
            butterwick.tech
          </a>{" "}
          to see more of our projects
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
