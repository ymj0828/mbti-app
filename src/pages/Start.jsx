import styled from "styled-components";
import YellowButton from "../components/YellowButton";
import { useDispatch } from "react-redux";
import { next } from "../store/modules/mbti";

const MainImg = styled.img`
  width: inherit;
`;
const Header = styled.p`
  font-size: 3rem;
`;
const SubHeader = styled.p`
  font-size: 1.5rem;
  color: #777;
`;

export default function Start() {
  const dispatch = useDispatch()
  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg
        src={process.env.PUBLIC_URL + "/assets/main.jpg"}
        alt="메인 페이지 이미지"
      />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!
      </SubHeader>
      <YellowButton text='테스트 시작!' clickEvent={()=>dispatch(next())}></YellowButton>
      {/* <YellowButton text='테스트 시작!' clickEvent={()=>dispatch({type:'mbti/NEXT'})}></YellowButton> */}
    </>
  );
}