import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.contact}>
        <h3>Contacto</h3>
        <li>
          <FaPhoneAlt size={"2em"} /> <h4>+543417789563</h4>
        </li>
        <li>
          <AiOutlineMail size={"2em"} /> <h4>cervezaloker@gmail.com</h4>
        </li>
      </ul>
      <h3>Nuestras redes</h3>
      <ul className={styles.social_links}>
        <li>
          <a
            href="https://www.facebook.com/cervezaloker"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare size="2.3em" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cervezaloker/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size="2.3em" />
          </a>
        </li>
      </ul>
      2022 Cerveza Loker©
    </div>
  );
};

export default Footer;
