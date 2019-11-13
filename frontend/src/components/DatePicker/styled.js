import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "../../styles";

const CalendarSyled = createGlobalStyle`
.react-calendar__tile--active{
    background:${Colors.primary}!important;
}
.react-date-picker__calendar .react-calendar {
    border-radius: 10px;
}
.react-date-picker__wrapper {
border: 1px solid ${Colors.primary}!important;
    padding: 0px 10px;
    border-radius: 15px;
}
`;
export const DateContainer = styled.div`
  background: ${Colors.white};
  color: ${Colors.dark};
  padding: 12px 15px;
  border-radius: ${props => props.borderRadius || 35}px;
  border: 3px solid ${Colors.primary};
  font-size: 18px;
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row;
`;
export const DateInputLabel = styled.label`
  color: ${Colors.dark};
  flex: 1;
`;
export const DateItem = styled.div`
  flex: 1;
`;
export default CalendarSyled;
