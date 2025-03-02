// 캘린더 우측 사이드바에서 일정 관한 상태를 관리하기 위한 store 입니다.

import {create} from "zustand";
import axios from "axios";

export interface Plan {
    planId: number;
    title: string;
    startDate: string;
    endDate: string;
    color: string;
    alarm: boolean;
    comment: string;
    clear: boolean;
}

interface PlanState {
    plans: Plan[];
    fetchPlans: (year: number, month: number) => Promise<void>;
    togglePlan: (id: number) => void;
    submitPlan: (id: number) => void;
}

// 더미 데이터
const dummyPlans: Plan[] = [
    { planId: 1, title: "스터디 모임", startDate: "2025-02-10T10:00:00Z", endDate: "2025-02-10T12:00:00Z", color: "#FFD8DA", alarm: true, comment: "", clear: false },
    { planId: 2, title: "운동하기", startDate: "2025-02-12T18:00:00Z", endDate: "2025-02-12T19:00:00Z", color: "#FFE8C9", alarm: false, comment: "", clear: true },
    { planId: 3, title: "친구 만나기", startDate: "2025-02-15T15:00:00Z", endDate: "2025-02-15T17:00:00Z", color: "#D9E2FF", alarm: true, comment: "", clear: false },
    { planId: 4, title: "놀기", startDate: "2025-02-20T15:00:00Z", endDate: "2025-02-21T17:00:00Z", color: "#D9E2FF", alarm: true, comment: "", clear: false },
    { planId: 5, title: "긴 문자열 테스트으으으으으으으으으으으으응", startDate: "2025-02-24T15:00:00Z", endDate: "2025-02-21T17:00:00Z", color: "#D9E2FF", alarm: true, comment: "", clear: false },
    { planId: 6, title: "긴 문자열 테스틍ㅇㅇㅇㅇㅇ으으으헤으응", startDate: "2025-02-24T15:00:00Z", endDate: "2025-02-21T17:00:00Z", color: "#D9E2FF", alarm: true, comment: "", clear: false },
    { planId: 7, title: "긴 문자열 테스틍ㅇㅇㅇㅇㅇ으으으헤으응2s", startDate: "2025-02-24T15:00:00Z", endDate: "2025-02-21T17:00:00Z", color: "#FFE8C9", alarm: true, comment: "", clear: true },
    { planId: 8, title: "긴 문자열 테스틍ㅇㅇㅇㅇㅇ으으으헤으응3s", startDate: "2025-03-01T15:00:00Z", endDate: "2025-02-21T17:00:00Z", color: "#FFE8C9", alarm: true, comment: "", clear: true },
];

export const usePlanStore = create<PlanState>((set) => ({
    plans: [],

    // 일정 데이터 가져오기
    fetchPlans: async (year, month) => {
        try {
            console.warn("API 호출을 비활성화하고 더미 데이터를 로드합니다.");

            // API 호출을 비활성화하고 더미 데이터만 사용
            set({ plans: dummyPlans });

            // 이후 실제 API 연결 시 주석 해제
            // const response = await axios.get(`/api/v1/plan/${year}/${month}`, {
            //     headers: {
            //         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            //     },
            // });
            // set({ plans: response.data });

        } catch (error) {
            console.error("Error fetching plans:", error);
            set({ plans: dummyPlans });
        }
    },

    // 일정 완료/미완료 토글
    togglePlan: (id) =>
        set((state) => ({
            plans: state.plans.map((plan) =>
                plan.planId === id ? { ...plan, clear: !plan.clear } : plan
            ),
        })),

    // 성과 제출
    submitPlan: (id) =>
        set((state) => ({
            plans: state.plans.map((plan) =>
                plan.planId === id ? { ...plan, comment: "제출 완료" } : plan
            ),
        })),
}));