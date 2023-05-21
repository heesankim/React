import styled from 'styled-components';

const Btn = styled.button`
  // props만 살짝식 바꿔주면 다른 스타일을 손쉽게 적용할 수 있다.
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == 'blue' ? 'white' : 'black')};
  &:hover {
    transform: scale(1.2);
  }
`;

// 오렌지 버튼이 필요하다면?? -> props 문법을이용해 js처럼 작성할 수 있다.

// const orangeBtn = styled.button`
//   background-color: orange;
//   color: black;
//   &:hover {
//     background-color: black;
//     color: yellow;
//   }
// `;

// 기존 스타일 복사 가능
const NewBtn = styled(Btn)`
  // 복사한것에다가 추가해서 작성한다.
  padding: 5px;
`;

const Box = styled.div`
  padding: 20px;
`;

export { Btn, NewBtn, Box };
