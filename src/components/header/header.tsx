"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Locale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

import styles from "./header.module.scss";

export function Header(props: { locale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dictionary = getDictionary(props.locale);

  const navigationItems = [
    { href: `/${props.locale}`, label: dictionary.nav.home },
    { href: `/${props.locale}/education`, label: dictionary.nav.education },
    { href: `/${props.locale}/experiences`, label: dictionary.nav.experiences },
    { href: `/${props.locale}/projects`, label: dictionary.nav.projects },
    { href: `/${props.locale}/skills`, label: dictionary.nav.skills },
    { href: `/${props.locale}/contact`, label: dictionary.nav.contact },
  ];

  const localeMeta: Record<Locale, { label: string; flag: string }> = {
    en: { label: dictionary.nav.english, flag: "🇺🇸" },
    fr: { label: dictionary.nav.french, flag: "🇫🇷" },
    pt: { label: dictionary.nav.portuguese, flag: "🇵🇹" },
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const localizedPath = pathname?.replace(new RegExp(`^/(${locales.join("|")})`), "") || "";
  const getLocaleHref = (locale: Locale) => `/${locale}${localizedPath || ""}`;

  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value as Locale;
    closeMenu();
    router.push(getLocaleHref(selectedLocale));
  };

  return (
    <header className={styles.header}>
      <button
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
      >
        {isOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
      </button>
      <nav id="primary-navigation" className={`${styles.nav} ${isOpen ? styles.open : ""}`} aria-label="Primary">
        <ul className={styles.menu}>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className={styles.localeSwitcher}>
            <label htmlFor="locale-selector" className={styles.visuallyHidden}>
              {dictionary.nav.languageSwitcher}
            </label>
            <select id="locale-selector" value={props.locale} onChange={handleLocaleChange} aria-label={dictionary.nav.languageSwitcher}>
              {locales.map((locale) => (
                <option key={locale} value={locale}>
                  {localeMeta[locale].flag} {localeMeta[locale].label}
                </option>
              ))}
            </select>
          </li>
          <li className={styles.socials}>
            <Link href="https://www.linkedin.com/in/gomes-nicolas/" target="_blank" rel="noreferrer" aria-label={dictionary.nav.linkedInAria}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://github.com/GomesN95" target="_blank" rel="noreferrer" aria-label={dictionary.nav.githubAria}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
