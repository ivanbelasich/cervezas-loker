import Image from "next/image";
import React from "react";
import Link from "next/link";
import principal from "../public/images/principal.png";
import styles from "../styles/Beers.module.css";

export const Beers = () => {
  return (
    <div className={styles.container}>
      <Link href={"/cervezas"}>
        <div>
          <div className={styles.image}>
            <Image src={principal} alt="img not found" layout="responsive" />
          </div>
          <div className={styles.span}>Nuestras cervezas</div>
        </div>
      </Link>
    </div>
  );
};
