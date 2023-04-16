import { useState } from 'react';
import styles from './checkbox.module.css';

interface IText {
  text: String;
}

function CheckBox({ text }: IText) {
  const [checked, setChecked] = useState(false);
  return (
    <div className={styles.checkbox_block}>
      <input
        type='checkbox'
        className={styles.checkbox}
        checked={checked}
        onChange={() => setChecked(!checked)}
        id='checkbox'
      />
      <label htmlFor='checkbox'>{text}</label>
    </div>
  );
}

export { CheckBox };
