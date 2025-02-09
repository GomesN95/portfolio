import { EXPERIENCES } from '@/constant/experiences';
import { IExperience } from '@/interfaces/experience.interface';
import { Tag } from '@/components/tag/tag';

import styles from './page.module.scss';

export const metadata = {
  title: 'Career & Work Experience | Nicolas Gomes',
  description: "Explore my career as a Full Stack developer, working with modern technologies like Next.js, React, and TypeScript to build high-performance applications.",
}

export default function Experiences() {
  return (
    <div className={styles.experiencesPage}>
      <h1 className={styles.title}>Experiences</h1>
      <div className={styles.experiences}>
        {
          EXPERIENCES.map((experience, index) =>
            <Experience key={index} experience={experience} />
          )
        }
      </div>
    </div>
  );
}

function Experience(props: { experience: IExperience }) {
  return (
    <div className={styles.experience}>
      <div className={styles.title}>
        <h2 className='company'>{props.experience.companyName}</h2>
        <h2 className='role'>{props.experience.role}</h2>
      </div>
      <div className={styles.description}>
        <p>{props.experience.description}</p>
      </div>
      <div className={styles.tags}>
        {
          props.experience.skills.map((skill, index) => <Tag key={index} value={skill} color={'orange'} />)
        }
      </div>
    </div>
  );
}