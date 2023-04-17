import { useState } from 'react';
import Select from 'react-select';
import { options } from '~/core/mocks';

function Selector() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div>
      <label htmlFor='doctor'>Лечащий врач</label>
      <Select
        id='doctor'
        options={options}
        defaultValue={selectedOption}
        onChange={() => setSelectedOption}
        placeholder=''
      />
    </div>
  );
}

export { Selector };
