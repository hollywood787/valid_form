import { FullName } from './full-name/full-name';
import { DataBirth } from './data-birth/data-birth';
import { useState } from 'react';

function Form() {
  const [validateName, setValidateName] = useState(true);
  const [validateData, setValidateData] = useState(true);
  const [blurName, setBlurNAme] = useState(false);
  const [blurData, setBlurData] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!blurName) {
      setValidateName(false);
    }

    if (!blurData) {
      setValidateData(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FullName
        setValidateName={setValidateName}
        validateName={validateName}
        setBlurNAme={setBlurNAme}
      />
      <DataBirth
        validateData={validateData}
        setValidateData={setValidateData}
        setBlurData={setBlurData}
      />
      <button type='submit'>Отправить</button>
    </form>
  );
}

export { Form };
