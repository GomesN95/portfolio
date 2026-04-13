import { notFound } from "next/navigation";

import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

import styles from "./page.module.scss";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.skills.metadataTitle,
    description: dictionary.skills.metadataDescription,
  };
}

export default async function SkillsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const sections = dictionary.skills.sections;

  return (
    <div className={styles.skillsPage}>
      <section className={styles.hero}>
        <p className={styles.kicker}>{dictionary.skills.kicker}</p>
        <h1>{dictionary.skills.title}</h1>
        <p className={styles.subtitle}>{dictionary.skills.intro}</p>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <h2>{sections.hard.title}</h2>
          <ul>
            {sections.hard.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={styles.card}>
          <h2>{sections.services.title}</h2>
          <ul>
            {sections.services.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.soft}`}>
          <h2>{sections.soft.title}</h2>
          <ul>
            {sections.soft.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className={`${styles.card} ${styles.certifications}`}>
          <h2>{sections.certifications.title}</h2>
          <ul>
            {sections.certifications.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
