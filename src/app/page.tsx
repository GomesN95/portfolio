import Image from 'next/image'

import PROFILE from '@/assets/profile.png';
import FORMES from '@/assets/formes.svg';

import styles from "./page.module.css";

export const metadata = {
  title: 'Gomes Nicolas - Home',
}

export default function Home() {
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
