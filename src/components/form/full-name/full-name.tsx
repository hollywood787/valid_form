import axios from 'axios';
import { useEffect, useState } from 'react';
import { url, token } from '~/core/constants';
import styles from './full-name.module.css';

interface INames {
  value: string;
}

function FullName() {
  const [value, setValue] = useState('');
  const [names, setNames] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

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
    if (typeof e.currentTarget.textContent === 'string') {
      setValue(e.currentTarget.textContent);
    }
    setIsOpen(!isOpen);
  }

  function itemClickHandler() {
    setIsOpen(true);
  }

  return (
    <div className={styles.autocomplete_form}>
      <input
        type='text'
        placeholder='ФИО'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={itemClickHandler}
      />
      <ul className={styles.autocomplete}>
        {value && isOpen
          ? names.map((item: INames) => (
              <li
                className={styles.autocomplete_item}
                onClick={itemHandler}
                role='presentation'
                key={item.value}
              >
                {item.value}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export { FullName };
