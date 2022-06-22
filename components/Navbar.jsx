import React, { useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import logo from "../public/images/logoLoker.png";
import Image from "next/image";

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <header>
      <nav className={styles.nav}>
        <Link href={"/"}>
          <div className={styles.logo_container}>
            <Image src={logo} alt="img not found" height={210} width={210} />
          </div>
        </Link>
        <div className={!showMobileMenu ? styles.menu_disabled : styles.menu}>
          <li className={styles.menu_item}>
            <Link href={"/"}>
              <a
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={styles.menu_item_a}
              >
               Inicio
              </a>
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link href={"/cervezas"}>
              <a
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={styles.menu_item_a}
              >
                Cervezas
              </a>
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link href={"/nosotros"}>
              <a
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={styles.menu_item_a}
              >
                Nosotros
              </a>
            </Link>
          </li>
          <li className={styles.menu_item}>
            <Link href={"/contacto"}>
              <a
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={styles.menu_item_a}
              >
                Contacto
              </a>
            </Link>
          </li>
        </div>
        <div
          className={styles.hamburg}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? (
            <FaTimes size="3em" color="#202020" />
          ) : (
            <FaBars size="3em" color="#202020" />
          )}
          Menu
        </div>
      </nav>
    </header>
  );
};
