import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./button.module.scss";

export function NgButton(props: {
  content: string,
  type?: 'submit' | 'reset' | 'button',
  loading?: boolean,
  disabled?: boolean,
  ariaLabel?: string,
}) {
  return (
    <button
      type={props.type}
      className={styles.NgButton}
      disabled={props.disabled}
      aria-busy={props.loading}
      aria-label={props.ariaLabel}
    >
      <div className={styles.btnContent}>
        <span>{props.content}</span>
        {props.loading && <FontAwesomeIcon className="fa-spin-pulse" icon={faSpinner} />}
      </div>
    </button>
  );
}
