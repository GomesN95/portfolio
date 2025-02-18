import Image from 'next/image'

import BIC from '@/assets/BIC.png';

import styles from './project-card.module.scss';

export function ProjectCard() {
  return (
    <div className={styles.projectCard}>
      {/* <div className={styles.image}> */}
        <Image className={styles.image} src={BIC} alt="BIC" />
      {/* </div> */}
      <div className={styles.informations}>
        <label htmlFor="Project">Project</label>
        <label htmlFor="client">Client</label>
      </div>
    </div>
  );
}