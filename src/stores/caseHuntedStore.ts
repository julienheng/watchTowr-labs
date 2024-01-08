import { create } from 'zustand';

type HuntedCaseStore = {
  case: number;
  setCase: (value: number) => void;
};

export const useHuntedCaseStore = create<HuntedCaseStore>((set) => ({
  case: 8,
  setCase: (newCase: number) => {
    set({ case: newCase });
  },
}));
