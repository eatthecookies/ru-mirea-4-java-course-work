import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles/CustomDatePicker.css'; // Импортируем файл со стилями
function MyDatePicker({ onDateChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div className='container'>
      <DatePicker
      className='my-datepicker'
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy" // Формат даты
      placeholderText="Выберите дату" // Текст заполнителя
    />
    </div>
    
  );
}

export default MyDatePicker;

