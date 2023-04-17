function Gender() {
  return (
    <>
      <input type='radio' name='gender' id='gender1' defaultChecked />
      <label htmlFor='gender1'>Муж.</label>

      <input type='radio' id='gender2' name='gender' value='phone' />
      <label htmlFor='gender2'>Жен.</label>
    </>
  );
}

export { Gender };
