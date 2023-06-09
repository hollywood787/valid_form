import cn from 'classnames';
import { defaultValue } from '~/core/constants';

interface IDataProps {
  setValidateData: (isValid: boolean) => void;
  validateData: boolean;
  setBlurData: (isValid: boolean) => void;
}

function DataBirth({ setValidateData, validateData, setBlurData }: IDataProps) {
  function handlerData(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === defaultValue) {
      setValidateData(false);
      setBlurData(false);
    } else {
      setValidateData(true);
    }
  }

  return (
    <div>
      <label htmlFor='databirth'>
        Дата рождения<span>*</span>
      </label>
      <input
        type='date'
        id='databirth'
        onChange={handlerData}
        onBlur={() => setBlurData(true)}
        className={cn({
          invalid: validateData === false,
          valid: validateData === true,
        })}
      />
    </div>
  );
}

export { DataBirth };
