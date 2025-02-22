import styled from "styled-components";
import {media} from "../media";

export const NavWrapper = styled.div`
  height: 100%;
  // min-width: 240px; /* 최소 너비 */
    // max-width: 280px; /* 최대 너비 */
  background-color: #FFFFFF; /* 배경색 */
  border: 1px solid #CACCD7; /* 테두리 색상 */
  border-radius: 0px 0px 40px 0px; /* 둥근 모서리 */
  box-shadow: 1px 1px 20px 0px rgba(0, 0, 0, 0.04); /* 그림자 */
  display: flex;
  flex-direction: column;
  padding: 24px; /* 전체 여백 */
  box-sizing: border-box;

    ${media.desktop`
    width: 240px; /* 1920~1280px 해상도에서 너비 줄이기 */
    // max-width: 260px;
    padding: 20px;
  `}

    ${media.tablet`
    width: 80px; /* 279~768px에서는 너비를 80px로 조정 */
    height: 100vh;
    padding: 36px 14px 629px 13px;
    align-items: center;
    gap: 31px;
  `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #6673FF; /* Primary 색상 */

    ${media.desktop`
    margin-bottom: 28px;
  `}

    ${media.tablet`
    margin-bottom: 0; /* 1279~768px 에서는 여백 제거 */
  `}
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

    ${media.tablet`
    gap: 31px; /* 💡 아이콘 간격 조정 */
  `}
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

    ${media.desktop`
    padding: 10px 16px; /* 패딩 줄이기 */
    gap: 16px; /* 아이콘과 텍스트 간격 줄이기 */
  `}

    ${media.tablet`
    // width: 48px; /* 아이콘 크기 줄이기 */
    // height: 48px;
  `}
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

    ${media.desktop`
    padding: 16px; /* 내부 패딩 줄이기 */
    gap: 10px;
    height: 80px;
  `}

    ${media.tablet`
    display: none; /* 💡 1279~768px 에서는 숨김 */
  `}
`;