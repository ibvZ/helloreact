import styles from "./FormsControls.module.css";

export const Element = (Element) => ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error;

  return (
  <div className={styles.formControl  + " " + (hasError ? styles.error : '')}>
    <div>
      <Element {...input} type={props.type} placeholder={props.placeholder} />
    </div>
    {hasError && <span>{meta.error}</span>}
  </div>
  );
}
