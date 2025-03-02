import { ReactComponent as CalendarIcon } from "../../assets/icons/navigation-bar/CalendarIcon.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/navigation-bar/DashboardIcon.svg";
import { ReactComponent as QuizIcon } from "../../assets/icons/navigation-bar/QuizIcon.svg";
import { ReactComponent as QuizListIcon } from "../../assets/icons/navigation-bar/QuizListIcon.svg";
import { ReactComponent as ResultsIcon } from "../../assets/icons/navigation-bar/ResultsIcon.svg";

export const NAVIGATION_MENUS = [
    { name: "캘린더", path: "/calendar", icon: CalendarIcon },
    { name: "성과 대시보드", path: "/dashboard", icon: DashboardIcon },
    { name: "퀴즈 풀기", path: "/quiz", icon: QuizIcon },
    { name: "퀴즈 모아보기", path: "/quiz-list", icon: QuizListIcon },
    { name: "성과 모아보기", path: "/result", icon: ResultsIcon },
];