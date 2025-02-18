import Image from 'next/image'

import { IProject } from '@/interfaces/project.interface';
import BIC from '@/assets/BIC.png';

import styles from './project-card.module.scss';

export function ProjectCard(props: {project: IProject}) {
  return (
    <div className={styles.projectCard}>
      {/* <div className={styles.image}> */}
        <Image className={styles.image} src={BIC} alt="BIC" />
      {/* </div> */}
      <div className={styles.informations}>
        <label htmlFor="Project">{props.project.name}</label>
        <label htmlFor="client">{props.project.client}</label>
      </div>
    </div>
  );
}