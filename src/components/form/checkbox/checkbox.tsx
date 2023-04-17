import { useState } from 'react';

interface IText {
  text: String;
}

function CheckBox({ text }: IText) {
  const [checked, setChecked] = useState(true);
  return (
    <>
      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      <label htmlFor='checkbox'>{text}</label>
    </>
  );
}

export { CheckBox };
