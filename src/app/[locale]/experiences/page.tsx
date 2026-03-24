import { notFound } from "next/navigation";

import { ExperienceCard } from "@/components/experience-card/experience-card";
import { isLocale } from "@/i18n/config";
import { getExperiences } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";

import styles from "./page.module.scss";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.experiences.metadataTitle,
    description: dictionary.experiences.metadataDescription,
  };
}

export default async function ExperiencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const experiences = getExperiences(locale);

  return (
    <div className={styles.experiencesPage}>
      <h1 className={styles.title}>{dictionary.experiences.title}</h1>
      <div className={styles.experiences}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            experience={experience}
            showMoreLabel={dictionary.experiences.showMore}
            showLessLabel={dictionary.experiences.showLess}
          />
        ))}
      </div>
    </div>
  );
}
