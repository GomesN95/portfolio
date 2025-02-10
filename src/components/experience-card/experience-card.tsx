"use client"
import { useState } from 'react';

import { IExperience } from '@/interfaces/experience.interface';
import { Tag } from '../tag/tag';

import styles from './experience-card.module.scss';

export function ExperienceCard(props: { experience: IExperience }) {
  const [showAll, setShowAll] = useState<boolean>(false);
  const skillsToShow = showAll ? props.experience.skills : props.experience.skills.slice(0, 8);

  return (
    <div className={styles.experienceCard}>
      <div className={styles.title}>
        <h2 className='company'>{props.experience.companyName}</h2>
        <h2 className={styles.role}>{props.experience.role}</h2>
        <h3>{props.experience.dates[0]} {props.experience.dates[1] ? `- ${props.experience.dates[1]}` : ''}</h3>
      </div>
      <div className={styles.description}>
        <p>{props.experience.description}</p>
      </div>
      <div className={styles.tags}>
        {skillsToShow.map((skill, index) => (
          <Tag key={index} value={skill} />
        ))}
        {props.experience.skills.length > 8 && (
          <button className={styles.showButton} onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}