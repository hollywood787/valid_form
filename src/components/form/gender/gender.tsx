import styles from './gender.module.css';

function Gender() {
  return (
    <div>
      <label>Пол</label>
      <div className={styles.gender_block_genders}>
        <div className={styles.gender_block_gender}>
          <input type='radio' name='gender' id='gender1' defaultChecked />
          <label htmlFor='gender1'>Муж.</label>
        </div>
        <div className={styles.gender_block_gender}>
          <input type='radio' id='gender2' name='gender' value='phone' />
          <label htmlFor='gender2'>Жен.</label>
        </div>
      </div>
    </div>
  );
}

export { Gender };
