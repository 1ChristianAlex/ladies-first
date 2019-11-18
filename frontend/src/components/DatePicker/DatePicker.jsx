import React, { useState, useContext } from "react";
import { StoreContext } from "context/store";
import { updateSign } from "context/actions/signup";

import DatePicker from "react-date-picker";
import { FaCalendar } from "react-icons/fa";

import StyledDate, { DateContainer, DateInputLabel, DateItem } from "./styled";

const DateInput = ({ label }) => {
  const currentDate = new Date();
  const [dateState, setDateState] = useState(currentDate);
  const { dispatch } = useContext(StoreContext);
  const handleChange = date => {
    setDateState(date);
    dispatch(updateSign({ birthday: date }));
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
