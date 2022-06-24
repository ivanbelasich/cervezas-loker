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
          <FaPhoneAlt size={"2em"} /> <h4>+543447789563</h4>
        </li>
        <li>
          <AiOutlineMail size={"2em"} /> <h4>cervezaloker@gmail.com</h4>
        </li>
      </ul>
      <ul className={styles.social_links}>
        <h3>Redes</h3>
        <li>
          <a href="https://www.facebook.com/cervezaloker" target="_blank">
            <FaFacebookSquare size="2em" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/cervezaloker/" target="_blank">
            <BsInstagram size="2em" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
