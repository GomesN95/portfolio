import { ProjectCard } from '@/components/project-card/project-card';
import { PROJECTS } from '@/constant/project';

import styles from './page.module.scss';

export const metadata = {
  title: 'Projects & Portfolio |  Nicolas Gomes',
  description: "Take a look at my latest Full Stack development projects, featuring innovative designs, clean code, and real-world applications.",
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