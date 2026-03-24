import Image from "next/image";
import { notFound } from "next/navigation";

import PROFILE from "@/assets/profile.png";
import FORMES from "@/assets/formes.svg";
import { isLocale, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

import styles from "./page.module.scss";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const dictionary = getDictionary(locale as Locale);

  return {
    title: dictionary.metadata.title.default,
    description: dictionary.home.metadataDescription,
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.profile}>
          <Image className={styles.profileImage} src={PROFILE} alt={dictionary.home.profileAlt} />
        </div>
        <div className={styles.texts}>
          <h1 className={styles.name}><span className={styles.lastName}>GOMES </span>NICOLAS</h1>
          <h2 className={styles.poste}>{dictionary.home.jobTitle}</h2>
        </div>
        <Image className={styles.formes} src={FORMES} alt={dictionary.home.shapesAlt} />
      </main>
    </div>
  );
}
