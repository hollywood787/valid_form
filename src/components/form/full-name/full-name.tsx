import axios from 'axios';
import { useEffect, useState } from 'react';
import { url, token, defaultValue } from '~/core/constants';
import { nanoid } from 'nanoid';
import cn from 'classnames';
import styles from './full-name.module.css';

interface INames {
  value: string;
}

interface INameProps {
  setValidateName: (isValid: boolean) => void;
  validateName: boolean;
  setBlurNAme: (isValid: boolean) => void;
}

function FullName({ setValidateName, validateName, setBlurNAme }: INameProps) {
  const [value, setValue] = useState(defaultValue);
  const [names, setNames] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [error, setError] = useState(defaultValue);

  useEffect(() => {
    axios
      .post(
        url,
        { query: value },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: 'Token ' + token,
          },
          withCredentials: false,
        },
      )
      .then((response) => {
        setNames(response.data.suggestions);
      })
      .catch(function (error) {
        alert(error);
      });
  }, [value]);

  function itemHandler(e: React.MouseEvent<HTMLLIElement>) {
    const content = e.currentTarget.textContent;
    if (typeof content === 'string') {
      setValue(content);
      validateNameForm(content);
    }
    setIsOpen(!isOpen);
  }

  function itemClickHandler() {
    setIsOpen(true);
  }

  function inputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const content = e.target.value;
    setValue(content);
    validateNameForm(content);
  }

  function validateNameForm(name: string) {
    if (name.length > 1 && name.length < 240) {
      setValidateName(true);
      setError(defaultValue);
    } else {
      setValidateName(false);
      setError('Введите корректный ФИО');
    }
  }

  return (
    <div className={styles.autocomplete_form}>
      <label htmlFor='names'>
        ФИО<span>*</span>
      </label>
      <input
        id='names'
        type='text'
        value={value}
        onChange={inputHandler}
        onBlur={() => setBlurNAme(true)}
        onClick={itemClickHandler}
        className={cn({
          invalid: validateName === false,
          valid: validateName === true,
        })}
      />
      <ul className={styles.autocomplete}>
        {value && isOpen
          ? names.map((item: INames) => (
              <li
                className={styles.autocomplete_item}
                onClick={itemHandler}
                role='presentation'
                key={nanoid()}
              >
                {item.value}
              </li>
            ))
          : null}
      </ul>
      {error}
    </div>
  );
}

export { FullName };
