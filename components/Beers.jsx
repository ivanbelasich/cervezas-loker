import Image from "next/image";
import React from "react";
import Link from "next/link";
import principal from "../public/images/principal.jpg";
import styles from "../styles/Beers.module.css";

export const Beers = () => {
  return (
    <Link href={"/cervezas"}>
      <a>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image src={principal} alt="img not found" layout="responsive" />
          </div>
          <div className={styles.span}>Nuestras cervezas</div>
        </div>
      </a>
    </Link>
  );
};
