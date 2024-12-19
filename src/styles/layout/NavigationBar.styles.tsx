import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 280px;
  height: 1053px;
  background-color: #FFFFFF; /* 배경색 */
  border: 1px solid #CACCD7; /* 테두리 색상 */
  border-radius: 0px 0px 40px 0px; /* 둥근 모서리 */
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04); /* 그림자 */
  display: flex;
  flex-direction: column;
  padding: 24px; /* 전체 여백 */
  box-sizing: border-box;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #6673FF; /* Primary 색상 */
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li.withConfig({
    shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 12px 20px;
    border-radius: 8px;
    margin-bottom: 16px;
    cursor: pointer;
    color: ${(props) => (props.active ? "#6673FF" : "#333333")};
    background-color: ${(props) => (props.active ? "#F5F5FA" : "transparent")};

    &:hover {
        background-color: #F0F1FF;
    }
`;


export const UserCard = styled.div`
    display: flex;
    width: 100%; /* 지정된 너비 */
    height : 88px;
    padding: 20px; /* 내부 여백 */
    align-items: center; /* 세로 중앙 정렬 */
    gap: 12px; /* 아이템 간 간격 */
    border-radius: 8px; /* 모서리 둥글게 */
    background: #6373FF; /* 배경색 */
    color: #ffffff; /* 텍스트 색상 */
    box-sizing: border-box; /* 패딩 포함 크기 계산 */
    margin-bottom : 40px;  /* UserCard 와 MenuList 간 간격 추가 */
`;