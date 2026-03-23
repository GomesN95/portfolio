import styles from "./input.module.scss";

export function InputForm(props: {
  label: string;
  name: string;
  placeholder?: string;
  inputType: 'textarea' | 'input',
  type?: "text" | "email";
  autoComplete?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}) {
  const fieldProps = {
    id: props.name,
    name: props.name,
    placeholder: props.placeholder,
    autoComplete: props.autoComplete,
    required: props.required,
    disabled: props.disabled,
    "aria-invalid": Boolean(props.error),
    "aria-describedby": props.error ? `${props.name}-error` : undefined,
  };

  return (
    <div className={styles.inputForm}>
      <label htmlFor={props.name}>{props.label}</label>
      {
        props.inputType === 'textarea' ? (
          <textarea {...fieldProps} rows={6}/>
        ) : (
          <input {...fieldProps} type={props.type ?? "text"} />
        )
      }
      {props.error ? <p id={`${props.name}-error`} className={styles.error}>{props.error}</p> : null}
    </div>
  );
}
