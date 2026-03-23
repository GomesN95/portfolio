"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from "./header.module.scss";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/experiences", label: "Experiences" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <header className={styles.header}>
      <button
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {
          isOpen
          ? <FontAwesomeIcon icon={faXmark} />
          : <FontAwesomeIcon icon={faBars} />
        }
      </button>
      <nav id="primary-navigation" className={`${styles.nav} ${isOpen ? styles.open : ""}`} aria-label="Primary">
        <ul className={styles.menu}>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className={styles.socials}>
            <Link
              href="https://www.linkedin.com/in/gomes-nicolas/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Nicolas Gomes LinkedIn profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link
              href="https://github.com/GomesN95"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Nicolas Gomes GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )

}
