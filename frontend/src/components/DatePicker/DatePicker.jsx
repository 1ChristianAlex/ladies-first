import React, { useState } from "react";
import { useStore } from "context/store";
import { updateForm } from "context/actions/form";

import DatePicker from "react-date-picker";
import { FaCalendar } from "react-icons/fa";

import StyledDate, { DateContainer, DateInputLabel, DateItem } from "./styled";

const DateInput = ({ label }) => {
  const currentDate = new Date();
  const [dateState, setDateState] = useState(currentDate);
  const { dispatch } = useStore();

  const handleChange = date => {
    setDateState(date);
    let Data = new Date(date);

    dispatch(
      updateForm({
        birthday: `${Data.getMonth() +
          1}/${Data.getDate()}/${Data.getFullYear()}`
      })
    );
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
