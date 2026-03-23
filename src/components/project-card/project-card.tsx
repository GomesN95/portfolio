import { IProject } from '@/interfaces/project.interface';
import { Tag } from '../tag/tag';

import styles from './project-card.module.scss';

export function ProjectCard(props: {project: IProject}) {
  const statusLabel = {
    live: "Live",
    "case-study": "Case study",
    private: "Private work",
  }[props.project.status];

  return (
    <article className={styles.projectCard}>
      <div className={styles.informations}>
        <div className={styles.topline}>
          <p className={styles.client}>{props.project.client}</p>
          <p className={styles.status}>{statusLabel}</p>
        </div>
        <h2>{props.project.name}</h2>
        <p className={styles.summary}>{props.project.summary}</p>
        <div className={styles.tags}>
          {props.project.stack.map((skill) => (
            <Tag key={skill} value={skill} />
          ))}
        </div>
        {props.project.href ? (
          <a href={props.project.href} target="_blank" rel="noreferrer" className={styles.link}>
            View project
          </a>
        ) : null}
      </div>
    </article>
  );
}
