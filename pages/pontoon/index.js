import * as React from "react";
import Head from "next/head";
import PontoonPageComponent from "../../components/ServicesPage/PontoonPageComponent";


export default function PontoonPage() {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover"
        ></meta>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        
        <title>Pontoon Boat</title>
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/tbcguides.fish/fishing-logo.jpg"
        />
        <meta name="theme-color" content="#FFFFFF"></meta>
        <link rel="icon" href="/phishing.ico" />
      </Head>
      <PontoonPageComponent />
    </div>
  );
}
