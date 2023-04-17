import { FullName } from './full-name/full-name';
import { DataBirth } from './data-birth/data-birth';
import { Telephone } from './telephone/telephone';
import { MultiSelect } from './multiselector/multiselector';
import { Gender } from './gender/gender';
import { Selector } from './selector/selector';
import { CheckBox } from './checkbox/checkbox';
import { SuccessForm } from './success-form/success-form';
import { useState } from 'react';
import styles from './form.module.css';

function Form() {
  const [validateName, setValidateName] = useState(true);
  const [validateData, setValidateData] = useState(true);
  const [validateTelephone, setValidateTelephone] = useState(true);
  const [validateMultiSelect, setValidateMultiSelect] = useState(true);
  const [blurName, setBlurNAme] = useState(false);
  const [blurData, setBlurData] = useState(false);
  const [blurTelephone, setBlurTelephone] = useState(false);
  const [blurMultiSelect, setBlurMultiSelect] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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

    if (!blurMultiSelect) {
      setValidateMultiSelect(false);
    }

    if (
      validateName &&
      validateData &&
      validateTelephone &&
      validateMultiSelect &&
      blurName &&
      blurData &&
      blurTelephone &&
      blurMultiSelect
    ) {
      setOpenModal(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form_block}>
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
      <MultiSelect
        validateMultiSelect={validateMultiSelect}
        setValidateMultiSelect={setValidateMultiSelect}
        setBlurMultiSelect={setBlurMultiSelect}
      />
      <Selector />
      <CheckBox text={'Не отправлять СМС'} />
      <button type='submit'>Отправить</button>
      <SuccessForm
        textContent={'Новый клиент успешно создан'}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </form>
  );
}

export { Form };
