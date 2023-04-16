import cn from 'classnames';
import styles from './telephome.module.css';
import InputMask from 'react-input-mask';
import { IMaskInput } from 'react-imask';
import { useState } from 'react';

interface ITelephoneProps {
  setValidateTelephone: (isValid: boolean) => void;
  validateTelephone: boolean;
  setBlurTelephone: (isValid: boolean) => void;
}

function Telephone({ validateTelephone, setValidateTelephone, setBlurTelephone }: ITelephoneProps) {
  const [error, setError] = useState('');

  function handlerTelephone(e: React.ChangeEvent<HTMLInputElement>) {
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
    <div>
      <label htmlFor='telephone'>
        Номер телефона<span>*</span>
      </label>
      <IMaskInput
        onBlur={() => setBlurTelephone(true)}
        onChange={handlerTelephone}
        mask='+{7}(000)000-00-00'
        id='telephone'
        className={cn({
          invalid: validateTelephone === false,
          valid: validateTelephone === true,
        })}
      />
      {error}
    </div>
  );
}

export { Telephone };
