import { create } from "zustand";

interface QuizState {
  selectedQuiz: number | null;
  isChecked: boolean;
  setSelectedQuiz: (id: number | null) => void;
  toggleIsChecked: () => void;
}

export const SolveQuizStore = create<QuizState>((set) => ({
  selectedQuiz: null,
  isChecked: false,
  setSelectedQuiz: (id) =>
    set((state) => ({
      selectedQuiz: id,
      isChecked: id !== null,
    })),
  toggleIsChecked: () => set((state) => ({ isChecked: !state.isChecked })),
}));

