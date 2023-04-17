import { FullName } from './full-name/full-name';
import { DataBirth } from './data-birth/data-birth';
import { Telephone } from './telephone/telephone';
import { Gender } from './gender/gender';
import { useState } from 'react';

function Form() {
  const [validateName, setValidateName] = useState(true);
  const [validateData, setValidateData] = useState(true);
  const [validateTelephone, setValidateTelephone] = useState(true);
  const [blurName, setBlurNAme] = useState(false);
  const [blurData, setBlurData] = useState(false);
  const [blurTelephone, setBlurTelephone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!blurName) {
      setValidateName(false);
    }

    if (!blurData) {
      setValidateData(false);
    }

    if (!blurTelephone) {
      setValidateTelephone(false);
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
      <Telephone
        validateTelephone={validateTelephone}
        setValidateTelephone={setValidateTelephone}
        setBlurTelephone={setBlurTelephone}
      />
      <Gender />
      <button type='submit'>Отправить</button>
    </form>
  );
}

export { Form };
