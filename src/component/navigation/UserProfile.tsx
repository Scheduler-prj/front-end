import React from "react";
import { T6, B6 } from "../../styles/Typography";
import { useAuthStore } from "../../store/feature/authStore";
import styled from "styled-components";
import { media } from "../../styles/media";

export const UserProfile = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    const { userInfo } = useAuthStore();

    return (
        <UserCard>
            <div
                style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid white",
                    backgroundColor: !isLoggedIn ? "#E0E0E0" : undefined,
                }}
            >
                {isLoggedIn && userInfo && (
                    <img
                        src={userInfo.profile}
                        alt="User"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        referrerPolicy="no-referrer"
                    />
                )}
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                }}
            >
                <T6>{isLoggedIn && userInfo ? userInfo.nickname : "Guest"}</T6>
                <B6 style={{ color: "#F5F5FA" }}>
                    {isLoggedIn ? "20일 연속 학습 중!" : "로그인을 해주세요"}
                </B6>
            </div>
        </UserCard>
    );
};

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
    display: none; /* 1279~768px 에서는 숨김 */
  `}
`;