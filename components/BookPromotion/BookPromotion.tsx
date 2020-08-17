import React from "react";
import styles from "./BookPromotion.module.css";

export const BookPromotion: React.FC = () => {
  return (
    <p className={styles.promo}>
      If you want to learn how to create your own keyboard like this one, check
      out our{" "}
      <a href="https://www.newline.co/fullstack-react-with-typescript">
        “FullStack React with TypeScript” book
      </a>
      .
    </p>
  );
};
