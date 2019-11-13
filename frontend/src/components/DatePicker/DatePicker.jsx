import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { FaCalendar } from "react-icons/fa";

import StyledDate, { DateContainer, DateInputLabel, DateItem } from "./styled";

const DateInput = ({ label }) => {
  const currentDate = new Date();
  const [dateState, setDateState] = useState(currentDate);
  const handleChange = date => {
    setDateState(date);
  };
  return (
    <>
      <DateContainer>
        <StyledDate />
        {label && <DateInputLabel>{label}</DateInputLabel>}
        <DateItem>
          <DatePicker
            onChange={handleChange}
            value={dateState}
            calendarIcon={<FaCalendar />}
          />
        </DateItem>
      </DateContainer>
    </>
  );
};

export default DateInput;
