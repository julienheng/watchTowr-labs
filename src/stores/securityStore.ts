import { create } from 'zustand';

type SecurityStore = {
  securityValue: number;
  securityCal: (value: number) => void;
};

export const useSecurityStore = create<SecurityStore>((set) => ({
  securityValue: 10,
  securityCal: (newValue: number) => {
    set((state) => ({ securityValue: state.securityValue - newValue }));
  },
}));
