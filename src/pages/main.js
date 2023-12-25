import InputStation from "../components/InputStation";
import InputTime from "../components/InputTime";
import styled from "styled-components";
import CustomBtn from "../components/button/button";
//이미지
import line2Img from "../assets/images/line2.png";
import InputWeekday from "../components/InputWeekday";
import InputDirection from "../components/InputDirection";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <InputContainer>
        <h1>🚊 2호선 출근시간 평균 혼잡도 확인 🚊</h1>
        <img src={line2Img} alt="line2" width="400px" height="400px" />
        <InputItem>
          요일 선택
          <InputWeekday />
        </InputItem>
        <InputItem>
          지하철 탑승시간
          <InputTime />
        </InputItem>
        <InputItem>
          탑승역
          <InputStation text="탑승역" title="start" />
        </InputItem>
        <InputItem>
          도착역
          <InputStation text="도착역" title="end" />
        </InputItem>

        <InputItem>
          상, 하행 선택
          <InputDirection />
        </InputItem>
        <CustomBtn
          text="평균 혼잡도 확인"
          onClick={() => navigate("/result")}
        />
      </InputContainer>
    </div>
  );
};
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
const InputItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 350px;
`;

export default Main;
