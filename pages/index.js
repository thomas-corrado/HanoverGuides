import Head from "next/head"
import HomePage from "../components/Homepage/Main/Homepage";

export default function Home() {
  return (
    <div>
      <div>
        <Head>
          <title>TBC Guide Services</title>
          <meta
            name="viewport"
            content="initial-scale=1, viewport-fit=cover"
          ></meta>
          <meta name="theme-color" content="#FFFFFF"></meta>
          <link rel="icon" href="/phishing.ico" />
          
        </Head>

        <main>
          <HomePage></HomePage>
        </main>
      </div>
    </div>
  );
}
