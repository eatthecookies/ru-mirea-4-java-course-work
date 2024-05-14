import React, { useState } from "react";
import './styles/CustomSelect.css'; // Импортируем файл со стилями

function MySelect({selectors, onChange}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <select className="custom-select" value={selectedOption} onChange={handleSelectChange}>
      <option value="">Выберите элемент</option>
      {selectors.map((selector, index) =>(
        <option key={index} value={selector}>{selector}</option>
      ))}

    </select>
  );
}

export default MySelect;
