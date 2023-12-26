import React, { useState, useEffect } from "react";
import styled from "styled-components";

const InputTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const storedTime = localStorage.getItem("time");
    if (storedTime) {
      setTime(storedTime);
      checkTime(storedTime);
    } else {
      const now = new Date();
      // 현재 시간을 한국 시간으로 설정
      now.setHours(now.getHours() + 9);
      const koreaTime = now.toISOString().substring(11, 16);
      setTime(koreaTime);
      localStorage.setItem("time", koreaTime);
      checkTime(koreaTime);
    }
  }, []);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    localStorage.setItem("time", event.target.value);
    checkTime(event.target.value);
  };

  const checkTime = (time) => {
    const hours = parseInt(time.substring(0, 2));
    const minutes = parseInt(time.substring(3));

    if (hours < 6 || (hours === 10 && minutes > 59) || hours > 10) {
      alert("시간을 오전 6시 00분에서 오전 10시 59분 사이로 설정해주세요.");
    }
  };

  return (
    <div>
      <Input type="time" value={time} onChange={handleTimeChange} />
    </div>
  );
};

const Input = styled.input`
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

export default InputTime;
