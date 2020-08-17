import React from "react";
import dynamic from "next/dynamic";

import { Footer } from "../Footer";
import { Logo } from "../Logo";
import styles from "./App.module.css";

const DynamicMain = dynamic(() => import("../Main").then((mod) => mod.Main), {
  ssr: false,
});

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}>
        <DynamicMain />
      </main>
      <Footer />
    </div>
  );
};
