import React, { useState } from 'react';
// import Select from 'react-select';
import CustomDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css'



function DatePicker({ selectedOption, setSelectedOption, params }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const currentDate = new Date();


  const handleDateChange = (date) => {
    setSelectedDate(date);
    const newselectedOptions = { ...selectedOption };
    newselectedOptions[params] = date;
    setSelectedOption(newselectedOptions)
    console.log(newselectedOptions)
  };


  return (
    <div >

      <CustomDatePicker className='datePicker'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        todayButton="Today"
        placeholderText="Date of Interview"
        showPopperArrow={false}
        minDate={currentDate}
        customInput={
          <button className="custom-select" onClick={() => { }}>
            {selectedDate ? selectedDate.toLocaleDateString() : 'Date of Interview'}
          </button>
        }
      />
    </div>
  )
}

export default DatePicker