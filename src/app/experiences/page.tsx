import { EXPERIENCES } from '@/constant/experiences';
import { ExperienceCard } from '@/components/experience-card/experience-card';

import styles from './page.module.scss';

export const metadata = {
  title: 'Career & Work Experience',
  description: "Professional experience across web and mobile products, as well as DevOps topics.",
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
