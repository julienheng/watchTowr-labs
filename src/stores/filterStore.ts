import { create } from 'zustand';

type FilterStore = {
  value: string;
  setValue: (value: string) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  value: '',
  setValue: (newValue: string) => {
    set({ value: newValue });
  },
}));
