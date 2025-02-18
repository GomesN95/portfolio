"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from "./header.module.scss";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
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
            <Link href="/" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link href="/education" onClick={closeMenu}>Education</Link>
          </li>
          <li>
            <Link href="/experiences" onClick={closeMenu}>Experiences</Link>
          </li>
          <li>
            <Link className={styles.disabled} href="/projects" onClick={closeMenu}>Projects</Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
          </li>
          <li className={styles.socials}>
            <Link href="https://www.linkedin.com/in/gomes-nicolas/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://github.com/GomesN95">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}