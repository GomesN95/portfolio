import { notFound } from "next/navigation";

import { ProjectCard } from "@/components/project-card/project-card";
import { isLocale } from "@/i18n/config";
import { getProjects } from "@/i18n/content";
import { getDictionary } from "@/i18n/dictionaries";

import styles from "./page.module.scss";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dictionary = getDictionary(locale);

  return {
    title: dictionary.projects.metadataTitle,
    description: dictionary.projects.metadataDescription,
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const projects = getProjects(locale);
  const dictionary = getDictionary(locale);

  return (
    <div className={styles.projectsPage}>
      <section className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            statusLabels={dictionary.projects.status}
            viewProjectLabel={dictionary.projects.viewProject}
          />
        ))}
      </section>
    </div>
  );
}
