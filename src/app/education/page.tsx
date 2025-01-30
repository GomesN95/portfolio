import styles from './page.module.scss';

// interface IEducation {
//   diploma: string;
//   school: string;
//   city: string
//   yearStart: string;
//   yearEnd: string;
//   field: string;
// }

// const educationList = [
//   {
//     diploma: 'Titre RNCP Niveau 7 (BAC+5) EIAL',
//     school: 'ScholaNova',
//     city: 'Paris',
//     yearStart: '2019',
//     yearEnd: '2020',
//     field: 'Expert en Ingénierie et Architecture Logicielle',
//   },
//   {
//     diploma: 'Titre RNCP Niveau 6 (BAC+4) DAI',
//     school: 'ScholaNova',
//     city: 'Paris',
//     yearStart: '2018',
//     yearEnd: '2019',
//     field: 'Concepteur-Développeur Applicatif et Internet',
//   },
//   {
//     diploma: 'Licence Professionnelle MICDTL',
//     school: 'Paris 13',
//     city: 'Villetaneuse',
//     yearStart: '2017',
//     yearEnd: '2018',
//     field: 'Métiers de l\'Informatique : Conception, Développement, Test de Logiciels',
//   },
//   {
//     diploma: 'BTS SNIR',
//     school: 'La Tourelle',
//     city: 'Sarcelles',
//     yearStart: '2015',
//     yearEnd: '2017',
//     field: 'Systèmes Numériques option Informatique et Réseaux',
//   },
//   {
//     diploma: 'BAC Professionnelle SENR',
//     school: 'La Tourelle',
//     city: 'Sarcelles',
//     yearStart: '2012',
//     yearEnd: '2015',
//     field: 'Systèmes Electroniques Numériques option Télécom et Réseaux',
//   },
// ];

export const metadata = {
  title: 'Gomes Nicolas - Education',
}

export default function Education() {
  return (
    <div className={styles.main}>
      {/* <h1>Education</h1> */}
      {/* {
        educationList.map((education, index) => (
          <CircleYear key={index} index={index} isLast={index === educationList.length - 1} education={education} />
        ))
      } */}
    </div>
  );
}

// export function CircleYear(props: {
//   education: IEducation;
//   isLast: boolean,
//   index: number,
// }) {
//   return (
//     <div className={styles.circleYear}>
//       <div className={styles.circle}>
//         <EducationCard education={props.education} position={props.index % 2 === 0 ? 'right' : 'left'} />
//         <p>{props.education.yearEnd}</p>
//       </div>
//       {
//         !props.isLast && (
//           <div className={styles.line} >
//             <div className={styles.light} style={{ animationDelay: `${props.index * 3}s` }} />
//             <div className={styles.light} style={{ animationDelay: `${props.index * 3 + 2}s` }} />
//             <div className={styles.light} style={{ animationDelay: `${props.index * 3 + 4}s` }} />
//           </div>
//         )
//       }
//     </div>
//   );
// }

// export function EducationCard(props: {
//   education: IEducation;
//   position: 'right' | 'left'
// }) {
//   return (
//     <div className={`${styles.educationCard} ${styles[`educationCard-${props.position}`]}`}>
//       <div className={styles.inner}>
//         <div>
//           <p>{props.education.diploma}</p>
//           <p>{props.education.field}</p>
//         </div>
//         <div className={styles.footer}>
//           <p>{props.education.school} - {props.education.city}</p>
//         </div>
//       </div>
//     </div>
//   );
// }
