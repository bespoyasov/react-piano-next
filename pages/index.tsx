import React from "react";
import Head from "next/head";
import { App } from "../components/App";

const Main: React.FC = () => {
  return (
    <>
      <Head>
        <title>React Piano</title>
        <meta
          name="description"
          content="A virtual piano keyboard built with React and deployed with Vercel (former Next)."
        />
      </Head>

      <App />
    </>
  );
};

export default Main;
