import { InputHTMLAttributes } from 'react';

import styles from './TextInput.module.css';

export interface TextInputFieldStatelessProps extends InputHTMLAttributes<HTMLInputElement> {
  error: string;
  label: string;
}

const TextInputFieldStateless = ({ error, label, value, type = 'text', onBlur, onChange, ...rest }: TextInputFieldStatelessProps) => {
  return (
    <div className={styles.fieldWrapper}>
      {label && <label htmlFor={rest.id}>{label}</label>}
      <input className={styles.textInputField} type={type} value={value} onBlur={onBlur} onChange={onChange} {...rest} />
      {error && <span className={styles.fieldError}>{error}</span>}
    </div>
  );
};

export default TextInputFieldStateless;
