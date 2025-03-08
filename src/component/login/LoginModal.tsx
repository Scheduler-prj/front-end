import React from "react";
import styled from "styled-components";
import {ReactComponent as KakaoIcon} from "../../assets/icons/login/KakaoIcon.svg";
import {ReactComponent as NaverIcon} from "../../assets/icons/login/NaverIcon.svg";
import {ReactComponent as GoogleIcon} from "../../assets/icons/login/GoogleIcon.svg";
import {ReactComponent as CloseBtn} from "../../assets/icons/login/CloseBtn.svg";

interface LoginModalProps {
    onClose: () => void;  // 모달 닫기 함수
    onLogin: (token: string) => void;   // 로그인 상태 변경 함수
}

export const LoginModal = ({onClose, onLogin}: LoginModalProps) => {
    const baseURL = process.env.REACT_APP_BASEURL;  // 백엔드 URL

    const handleSocialLogin = (provider: "google" | "kakao" | "naver") => {
        onClose();  // 모달 달기
        console.log(';;;',baseURL);
        // const redirectURI = `url`; // 소셜 로그인 성공 후 프론트엔드 경로
        // window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
        window.location.href = `${baseURL}oauth2/authorization/${provider}`;
    }

    return (
        <Overlay>
            <ModalWrapper>
                <CloseButton>
                    <CloseBtn onClick={onClose} />
                </CloseButton>
                <ModalContainer>
                    <Title>Log in</Title>
                    <Subtitle>SNS 계정으로 간편 가입하기</Subtitle>
                    <ButtonContainer>
                        <LoginButton onClick={() => handleSocialLogin("kakao")}>
                            <KakaoIcon />
                            <span>카카오로 로그인</span>
                        </LoginButton>
                        <LoginButton onClick={() => handleSocialLogin("naver")}>
                            <NaverIcon />
                            <span>네이버로 로그인</span>
                        </LoginButton>
                        <LoginButton onClick={() => handleSocialLogin("google")}>
                            <GoogleIcon />
                            <span>구글로 로그인</span>
                        </LoginButton>
                    </ButtonContainer>
                </ModalContainer>
            </ModalWrapper>
        </Overlay>
    );
};

// 모달 오버레이
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8); /* 반투명 배경 */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalWrapper = styled.div`
    position: relative;  /* 취소 버튼을 모달 박스 기준으로 배치 */
    display: inline-flex;
    align-items: flex-start;
`;

const ModalContainer = styled.div`
    position: relative;
    display: flex;
    padding: 40px 88px 64px 88px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    background: #FFF;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CloseButton = styled.button`
    position: absolute;
    top: -3px;
    right: -75px;
    background: none;
    border: none;
    cursor: pointer;

    svg {
        width: 52px;
        height: 52px;
    }

    &:hover {
        opacity: 0.8;
    }
`;

const Title = styled.h2`
    font-size: 48px;
    font-weight: bold;
    color: #6373FF;
`;

const Subtitle = styled.p`
    font-size: 14px;
    color: #888888;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;

const LoginButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border: none;
    background: none;
    cursor: pointer;

    img {
        width: 48px;
        height: 48px;
    }

    span {
        font-size: 14px;
        color: #333;
    }

    &:hover {
        opacity: 0.8;
    }
`;