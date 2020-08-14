import React, { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <a href="https://newline.co/fullstack-react-with-typescript">
        Newline.co
      </a>{" "}
      | <a href="https://github.com/bespoyasov/react-piano-next">GitHub</a>
      <br />
      {currentYear}
    </footer>
  );
};
