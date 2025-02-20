import React, { useState } from "react";
import styled from "styled-components";

// Props 타입 정의
interface TabNavigationProps {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {

    const tabs = [
        { id: "today", label: "오늘 하루" },
        { id: "allTasks", label: "모든 할일" },
        { id: "schedule", label: "일정" },
    ];

    return (
        <TabWrapper>
            {tabs.map((tab) => (
                <TabButton
                    key={tab.id}
                    $isActive={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </TabButton>
            ))}
        </TabWrapper>
    );
};

const TabWrapper = styled.div`
  display: flex;
  min-width: 310px;
  max-width: 460px;
  padding: 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white}; 
`;

const TabButton = styled.button<{ $isActive: boolean }>`
  flex: 1; /* 각 탭 버튼이 동일한 너비를 가짐 */
  padding: 10px 16px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary || "#6673FF" : theme.colors.white || "#FFF"};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white || "#FFF" : theme.colors.gray700 || "#333"};
  box-shadow: ${({ $isActive }) =>
    $isActive ? "0px 4px 8px rgba(0, 0, 0, 0.1)" : "none"};

  &:hover {
    background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primaryDark || "#6673FF" : "#F0F0F0"};
  }
`;