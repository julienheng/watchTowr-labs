import { create } from 'zustand';

type ThreatStore = {
  threatValue: number;
  setThreatValue: (value: number) => void;
};

export const useThreatStore = create<ThreatStore>((set) => ({
  threatValue: 0,
  setThreatValue: (newValue: number) => {
    set({ threatValue: newValue });
  },
}));