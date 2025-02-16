import Image from 'next/image'

import PROFILE from '@/assets/profile.png';
import FORMES from '@/assets/formes.svg';

import styles from "./page.module.scss";

export const metadata = {
  title: 'Nicolas Gomes | Full Stack Developer',
  description: "Discover my work as a Full Stack developer, showcasing projects, skills, and experiences.",
}

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.profile}>
          <Image className={styles.profileImage} src={PROFILE} alt="profile" />
        </div>
        <div className={styles.texts}>
          <h1 className={styles.name}><span className={styles.lastName}>GOMES </span>NICOLAS</h1>
          <h2 className={styles.poste}>Développeur full stack</h2>
        </div>
        <Image className={styles.formes} src={FORMES} alt="formes" />
      </main>
    </div>
  );
}
