import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputWeekday = () => {
  const weekdays = ["월요일", "화요일", "수요일", "목요일", "금요일"];
  const [weekday, setWeekday] = useState(
    localStorage.getItem("weekday") || "월요일"
  );

  useEffect(() => {
    const storedWeekday = localStorage.getItem("weekday") || "월요일";
    setWeekday(storedWeekday);
  }, []);

  const handleWeekdayChange = (event) => {
    setWeekday(event.target.value);
    localStorage.setItem("weekday", event.target.value);
  };

  return (
    <div>
      <SelectContainer value={weekday} onChange={handleWeekdayChange}>
        <option key="MON" value="MON">
          월요일
        </option>
        <option key="TUE" value="TUE">
          화요일
        </option>
        <option key="WED" value="WED">
          수요일
        </option>
        <option key="THU" value="THU">
          목요일
        </option>
        <option key="FRI" value="FRI">
          금요일
        </option>
        {/* {weekdays.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))} */}
      </SelectContainer>
    </div>
  );
};

const SelectContainer = styled.select`
  width: 200px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 13px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  &:focus {
    border: 1px solid #21d13f;
    box-sizing: border-box;
    border-radius: 10px;
    outline: 1px solid #42f560;
    border-radius: 10px;
  }
`;

export default InputWeekday;
