import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from "./button.module.scss";

export function NgButton(props: {
  content: string,
  type?: 'submit' | 'reset' | 'button',
  loading?: boolean,
  disabled?: boolean,
}) {
  return (
    <button type={props.type} className={styles.NgButton} disabled={props.disabled}>
      <div className={styles.btnContent}>
        <label>{props.content}</label>
        {props.loading && <FontAwesomeIcon className="fa-spin-pulse" icon={faSpinner} />}
      </div>
    </button>
  );
}