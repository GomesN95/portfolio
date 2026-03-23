import { ProjectCard } from '@/components/project-card/project-card';
import { PROJECTS } from '@/constant/project';

import styles from './page.module.scss';

export const metadata = {
  title: 'Projects & Portfolio',
  description: "Selection of projects delivered or led by Nicolas Gomes, with context, stack, and role.",
}

export default function ProjectsPage() {
  return (
    <div className={styles.projectsPage}>
      <section className={styles.projects}>
        {
          PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        }
      </section>
    </div>
  );
}
