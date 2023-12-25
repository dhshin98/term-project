import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const InputStation = ({ title, text }) => {
  //local에 저장할때 title: 지하철명
  //local에 start:__역, end:___역으로 저장됨
  const [station, setStation] = useState(localStorage.getItem(title) || "");

  // const handleChange = (event) => {
  //   setStation(event.target.value);
  // };

  // useEffect(() => {
  //   localStorage.setItem(title, station);
  // }, [station, title]);

  // const { station, updateStation } = useStation();

  // const handleChange = (event) => {
  //   updateStation(event.target.value);
  // };

  const handleChange = (event) => {
    setStation(event.target.value);
    localStorage.setItem(title, event.target.value);
  };

  useEffect(() => {
    localStorage.setItem(title, station);
  }, [station, title]);

  useEffect(() => {
    const handleStorageChange = () => {
      setStation(localStorage.getItem(title) || "");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [title]);

  //2호선 전체
  const line2Stations = [
    "강남역",
    "잠실역",
    "홍대입구역",
    "신림역",
    "구로디지털단지역",
    "삼성역",
    "역삼역",
    "신도림역",
    "선릉역",
    "서울대입구역",
    "사당역",
    "을지로입구역",
    "건대입구역",
    "성수역",
    "신촌역",
    "합정역",
    "교대역",
    "강변역",
    "낙성대역",
    "신대방역",
    "대림역",
    "구의역",
    "봉천역",
    "뚝섬역",
    "잠실새내역",
    "을지로3가역",
    "시청역",
    "영등포구청역",
    "문래역",
    "서초역",
    "당산역",
    "방배역",
    "왕십리역",
    "이대역",
    "동대문역사문화공원역",
    "신당역",
    "왕십리역",
    "상왕십리역",
    "잠실나루역",
    "종합운동장역",
    "을지로4가역",
    "한양대역",
    "신정네거리역",
    "아현역",
    "충정로역",
    "양천구청역",
    "신설동역",
    "용답역",
    "용두역",
    "신답역",
    "도림천역",
  ];

  return (
    <div>
      <SelectContainer value={station} onChange={handleChange}>
        {line2Stations.map((stationName) => (
          <option key={stationName} value={stationName}>
            {stationName}
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
export default InputStation;
