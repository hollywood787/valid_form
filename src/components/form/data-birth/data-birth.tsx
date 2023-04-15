import cn from 'classnames';
import styles from './data-birtx.module.css';

interface IDataProps {
  setValidateData: (isValid: boolean) => void;
  validateData: boolean;
  setBlurData: (isValid: boolean) => void;
}

function DataBirth({ setValidateData, validateData, setBlurData }: IDataProps) {
  function handlerData(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === '') {
      setValidateData(false);
      setBlurData(false);
    } else {
      setValidateData(true);
    }
  }

  return (
    <input
      type='date'
      onChange={handlerData}
      onBlur={() => setBlurData(true)}
      className={cn({
        [styles.invalid]: validateData === false,
        [styles.valid]: validateData === true,
      })}
    />
  );
}

export { DataBirth };