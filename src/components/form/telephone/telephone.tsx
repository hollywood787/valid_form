import cn from 'classnames';
import { IMaskInput } from 'react-imask';
import { useState } from 'react';
import { defaultValue } from '~/core/constants';

interface ITelephoneProps {
  setValidateTelephone: (isValid: boolean) => void;
  validateTelephone: boolean;
  setBlurTelephone: (isValid: boolean) => void;
}

function Telephone({ validateTelephone, setValidateTelephone, setBlurTelephone }: ITelephoneProps) {
  const [error, setError] = useState(defaultValue);

  function handlerTelephone(e: React.ChangeEvent<HTMLInputElement>) {
    const number = e.target.value.replace(/[^0-9]/gim, defaultValue);

    if (number.length === 11) {
      setValidateTelephone(true);
      setError(defaultValue);
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
