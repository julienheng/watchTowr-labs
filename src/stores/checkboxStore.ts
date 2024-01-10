import create from 'zustand';

type checkboxStore = {
  check: string[];
  setCheck: (check: string[]) => void;
};

export const useCheckboxStore = create<checkboxStore>((set) => ({
  check: [],
  setCheck: (value: string[]) => set({ check: value }),
}));
