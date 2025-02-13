import { EXPERIENCES } from '@/constant/experiences';
import { ExperienceCard } from '@/components/experience-card/experience-card';

import styles from './page.module.scss';

export const metadata = {
  title: 'Career & Work Experience | Nicolas Gomes',
  description: "Explore my career as a Full Stack developer, working with modern technologies like Next.js, React, and TypeScript to build high-performance applications.",
}

export default function ExperiencesPage() {
  return (
    <div className={styles.experiencesPage}>
      <h1 className={styles.title}>Experiences</h1>
      <div className={styles.experiences}>
        {
          EXPERIENCES.map((experience, index) =>
            <ExperienceCard key={index} experience={experience} />
          )
        }
      </div>
    </div>
  );
}
