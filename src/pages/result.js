import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Result = () => {
  const [weekday, setWeekday] = useState("");
  const [time, setTime] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [dir, setDir] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setWeekday(params.get("weekday") || "");
    setTime(params.get("time") || "");
    setStart(params.get("start") || "");
    setEnd(params.get("end") || "");
    setDir(params.get("dir") || "");
  }, []);

  return (
    <ResultContainer>
      <h1>찾고 싶은 혼잡도 정보</h1>
      <form
        method="GET"
        action="http://cspro.sogang.ac.kr/~cse20181648/cgi-bin/DB_project_display.php"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <label htmlFor="weekday">요일:</label>
        <input
          type="text"
          id="weekday"
          name="weekday"
          placeholder="e.g., FRI"
          required
          value={weekday}
          onChange={(e) => setWeekday(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            border: "2px solid #007BFF",
            borderRadius: "10px",
            margin: "5px 0",
            outline: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.3s ease-in-out",
          }}
        />

        <label htmlFor="time">시간:</label>
        <input
          type="text"
          id="time"
          name="time"
          placeholder="e.g., 07:06"
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            border: "2px solid #007BFF",
            borderRadius: "10px",
            margin: "5px 0",
            outline: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.3s ease-in-out",
          }}
        />

        <label htmlFor="start">출발역:</label>
        <input
          type="number"
          id="start"
          name="start"
          placeholder="e.g., 239"
          required
          value={start}
          onChange={(e) => setStart(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            border: "2px solid #007BFF",
            borderRadius: "10px",
            margin: "5px 0",
            outline: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.3s ease-in-out",
          }}
        />

        <label htmlFor="end">도착역:</label>
        <input
          type="number"
          id="end"
          name="end"
          placeholder="e.g., 230"
          required
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            border: "2px solid #007BFF",
            borderRadius: "10px",
            margin: "5px 0",
            outline: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.3s ease-in-out",
          }}
        />

        <label htmlFor="dir">상/하행 정보:</label>
        <input
          type="number"
          id="dir"
          name="dir"
          placeholder="e.g., 0"
          required
          value={dir}
          onChange={(e) => setDir(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            border: "2px solid #007BFF",
            borderRadius: "10px",
            margin: "5px 0",
            outline: "none",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "border-color 0.3s ease-in-out",
          }}
        />

        <CustomButton type="submit" className="button">
          혼잡도 확인하러 가기
        </CustomButton>
      </form>
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CustomButton = styled.button`
  margin-top: 1rem;
  display: inline-block;
  border-radius: 7px;
  border: none;
  background: #1875ff;
  color: white;
  font-family: inherit;
  text-align: center;
  font-size: 13px;
  width: 13rem;
  padding: 1em;
  transition: all 0.4s;
  cursor: pointer;
  &:hover span {
    padding-right: 3.55em;
  }
`;

export default Result;
