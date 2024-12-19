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
  padding: 16px; /* 전체 여백 */
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

export const MenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#6673FF" : "#333333")};
  background-color: ${(props) => (props.active ? "#F5F5FA" : "transparent")};

  &:hover {
    background-color: #F0F1FF;
  }
`;

export const UserCard = styled.div`
  background-color: #6673FF; /* Primary 색상 */
  color: #FFFFFF;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  margin-bottom: 16px;

  .user-name {
    font-weight: bold;
    margin-top: 8px;
  }

  .streak {
    font-size: 0.875rem;
    margin-top: 4px;
  }
`;