import React from "react";
import { BeerCard } from "../components/BeerCard";
import styles from "../styles/BeerContainer.module.css";

const Cervezas = () => {
  return (
    <>
      <div className={styles.container}>
        <BeerCard />
      </div>
    </>
  );
};

export default Cervezas;
