import cn from 'classnames';
import styles from './gender.module.css';

function Gender() {
  return (
    <>
      <input type='radio' name='gender' id='gender1' checked />
      <label htmlFor='gender1'>Муж.</label>

      <input type='radio' id='gender2' name='gender' value='phone' />
      <label htmlFor='gender2'>Жен.</label>
    </>
  );
}

export { Gender };
