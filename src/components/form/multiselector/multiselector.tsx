import Multiselect from 'multiselect-react-dropdown';
import { customerGroup } from '~/core/mocks';
import cn from 'classnames';
import styles from './multiselector.module.css';

interface IMultiSelectProps {
  setValidateMultiSelect: (isValid: boolean) => void;
  validateMultiSelect: boolean;
  setBlurMultiSelect: (isValid: boolean) => void;
}

function MultiSelect({
  validateMultiSelect,
  setValidateMultiSelect,
  setBlurMultiSelect,
}: IMultiSelectProps) {
  function handlerMulti(arrayGroup: Array<{ name: string; id: number }>) {
    if (arrayGroup.length > 0) {
      setValidateMultiSelect(true);
    } else {
      setValidateMultiSelect(false);
    }
  }

  return (
    <div onBlur={() => setBlurMultiSelect(true)}>
      <label htmlFor='multiselector'>
        Группа клиентов<span>*</span>
      </label>
      <Multiselect
        onRemove={handlerMulti}
        onSelect={handlerMulti}
        options={customerGroup.options}
        displayValue='name'
        id='multiselector'
        className={cn({
          invalid: validateMultiSelect === false,
          valid: validateMultiSelect === true,
        })}
        placeholder=''
      />
    </div>
  );
}

export { MultiSelect };
