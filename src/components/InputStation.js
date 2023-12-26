import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const InputStation = ({ title, text }) => {
  //local에 저장할때 title: 지하철명
  const [stationName, setStationName] = useState(
    localStorage.getItem(title) || ""
  );
  const [stationCode, setStationCode] = useState("");

  const handleChange = (event) => {
    const selectedStationName = event.target.value.replace("역", "");
    const selectedStationCode = getStationCode(selectedStationName);
    setStationName(event.target.value); // 사용자가 선택한 역 이름 저장
    setStationCode(selectedStationCode); // 선택된 역의 코드 저장
    localStorage.setItem(title, selectedStationCode); // 로컬 스토리지에는 역 코드로 저장
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setStationCode(localStorage.getItem(title) || "");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [title]);
  // 역 이름을 역 코드로 변환하는 함수
  const getStationCode = (stationName) => {
    const stationCodes = {
      시청: 201,
      을지로입구: 202,
      을지로3가: 203,
      을지로4가: 204,
      동대문역사문화공원: 205,
      신당: 206,
      상왕십리: 207,
      왕십리: 208,
      한양대: 209,
      뚝섬: 210,
      성수: 211,
      건대입구: 212,
      구의: 213,
      강변: 214,
      잠실나루: 215,
      잠실: 216,
      잠실새내: 217,
      종합운동장: 218,
      삼성: 219,
      선릉: 220,
      역삼: 221,
      강남: 222,
      교대: 223,
      서초: 224,
      방배: 225,
      사당: 226,
      낙성대: 227,
      서울대입구: 228,
      봉천: 229,
      신림: 230,
      신대방: 231,
      구로디지털단지: 232,
      대림: 233,
      신도림: 234,
      문래: 235,
      영등포구청: 236,
      당산: 237,
      합정: 238,
      홍대입구: 239,
      신촌: 240,
      이대: 241,
      아현: 242,
      충정로: 243,
    };
    return stationCodes[stationName] || stationName;
  };
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
      <SelectContainer value={stationName} onChange={handleChange}>
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
