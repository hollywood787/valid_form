import cn from 'classnames';
import styles from './telephome.module.css';
import InputMask from 'react-input-mask';
import { useState } from 'react';

interface ITelephoneProps {
  setValidateTelephone: (isValid: boolean) => void;
  validateTelephone: boolean;
  setBlurTelephone: (isValid: boolean) => void;
}

function Telephone({ validateTelephone, setValidateTelephone, setBlurTelephone }: ITelephoneProps) {
  const [error, setError] = useState('');

  function handleTelephone(e: React.ChangeEvent<HTMLInputElement>) {
    const number = e.target.value.replace(/[^0-9]/gim, '');

    if (number.length === 11) {
      setValidateTelephone(true);
      setError('');
    } else {
      setValidateTelephone(false);
      setError('Введите корректный телефон');
    }
  }

  return (
    <>
      <InputMask
        onBlur={() => setBlurTelephone(true)}
        onChange={handleTelephone}
        mask='+7(999)-999-99-99'
        className={cn({
          [styles.invalid]: validateTelephone === false,
          [styles.valid]: validateTelephone === true,
        })}
      ></InputMask>
      {error}
    </>
  );
}

export { Telephone };
