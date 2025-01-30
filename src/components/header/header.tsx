"use client";

import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import styles from "./header.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <header>
    //   <nav>
    //     <ul className={styles.menu}>
    //       <li>
    //         <Link href="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link href="/education">Education</Link>
    //       </li>
    //       {/*
    //       <li>Experiences</li>
    //       <li>Projects</li>
    //       <li>Contact</li> */}
    //     </ul>
    //   </nav>
    // </header>
    <header className={styles.header}>
      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen
          ? <FontAwesomeIcon icon={faXmark} />
          : <FontAwesomeIcon icon={faBars} />
        }
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menu}>
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link className={styles.disabled} href="/education" onClick={() => setIsOpen(false)}>Education</Link>
          </li>
          <li>
            <Link className={styles.disabled} href="/experiences" onClick={() => setIsOpen(false)}>Experiences</Link>
          </li>
          <li>
            <Link className={styles.disabled} href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link className={styles.disabled} href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}