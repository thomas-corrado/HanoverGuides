import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hanover Guides</title>
        <meta name="description" content="Hanover Guides" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  );
}