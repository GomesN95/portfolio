import Image from 'next/image'

import PROFILE from '@/assets/profile.png';
import FORMES from '@/assets/formes.svg';

import styles from "./page.module.scss";

export const metadata = {
  title: 'Nicolas Gomes | Full Stack Developer',
  description: "Explore Nicolas Gomes's profile, projects, and experience as a full-stack developer.",
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
          <h2 className={styles.poste}>Full-Stack Developer</h2>
        </div>
        <Image className={styles.formes} src={FORMES} alt="decorative shapes" />
      </main>
    </div>
  );
}
