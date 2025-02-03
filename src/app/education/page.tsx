import { IEducation } from '@/interfaces/education';

import styles from './page.module.scss';
import { EDUCATIONS } from '@/constant/education';

export const metadata = {
  title: 'Gomes Nicolas - Education',
}

export default function Education() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Education</h1>
      {
        EDUCATIONS.map((education, index) => (
          <YearModule key={index} index={index} isLast={index === EDUCATIONS.length - 1} education={education} />
        ))
      }
    </div>
  );
}

function YearModule(props: {
  education: IEducation;
  isLast: boolean,
  index: number,
}) {
  return (
    <div className={styles.yearModule}>
      <div className={styles.module}>
        <EducationCard education={props.education} position={props.index % 2 === 0 ? 'right' : 'left'} />
        <p className={styles.circle}>{props.education.yearEnd}</p>
      </div>
      {
        !props.isLast && (
          <div className={styles.line} >
            <div className={styles.light} style={{ animationDelay: `${props.index * 3}s` }} />
            <div className={styles.light} style={{ animationDelay: `${props.index * 3 + 2}s` }} />
            <div className={styles.light} style={{ animationDelay: `${props.index * 3 + 4}s` }} />
          </div>
        )
      }
    </div>
  );
}

function EducationCard(props: {
  education: IEducation;
  position: 'right' | 'left'
}) {
  return (
    <div className={`${styles.educationCard} ${styles[`educationCard-${props.position}`]}`}>
      <div className={styles.inner}>
        <div>
          <p>{props.education.diploma}</p>
          <p>{props.education.field}</p>
        </div>
        <div className={styles.footer}>
          <p>{props.education.school} - {props.education.city}</p>
        </div>
      </div>
    </div>
  );
}
