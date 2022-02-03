import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Datepicker.css'

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div> 
            <DatePicker class="form-control" wrapperClassName="datePicker" dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)}  />
        </div>
    );
};

export default Datepicker;