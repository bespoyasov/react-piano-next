import React from "react";
import { Footer } from "../Footer";
import { Logo } from "../Logo";
import { Main } from "../Main";
import styles from "./App.module.css";

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <main className={styles.content}>
        <Main />
      </main>
      <Footer />
    </div>
  );
};
