import { useState } from 'react';
import Select from 'react-select';
import { options } from '~/core/mocks';

function Selector() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <Select options={options} defaultValue={selectedOption} onChange={() => setSelectedOption} />
  );
}

export { Selector };
