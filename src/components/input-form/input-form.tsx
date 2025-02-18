import styles from "./input.module.scss";

export function InputForm(props: {
  label: string,
  name: string,
  placeholder?: string
  inputType: 'textarea' | 'input',
}) {
  return (
    <div className={styles.inputForm}>
      <label htmlFor={props.name}>{props.label}</label>
      {
        props.inputType === 'textarea' ? (
          <textarea id={props.name} name={props.name} placeholder={props.placeholder} rows={6}/>
        ) : (
          <input id={props.name} name={props.name} placeholder={props.placeholder} />
        )
      }
    </div>
  );
}