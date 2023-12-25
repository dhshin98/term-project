import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputDirection = () => {
  const directions = ["상행", "하행"];
  const [direction, setDirection] = useState(
    localStorage.getItem("direction") || "상행"
  );

  useEffect(() => {
    const storedDirection = localStorage.getItem("direction") || "월요일";
    setDirection(storedDirection);
  }, []);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
    localStorage.setItem("direction", event.target.value);
  };

  return (
    <div>
      <SelectContainer value={direction} onChange={handleDirectionChange}>
        {directions.map((dir) => (
          <option key={dir} value={dir}>
            {dir}
          </option>
        ))}
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

export default InputDirection;
