import styles from './tag.module.scss';

export function Tag(props: { value: string }) {
  return (
    <div className={styles.tag}>
      <p>{props.value}</p>
    </div>
  );
}