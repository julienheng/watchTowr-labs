import create from 'zustand';

type RiskStatusStore = {
  riskStatus: Record<string, string>;
  setRiskStatus: (assetId: string, newStatus: string) => void;
};

export const useRiskStatusStore = create<RiskStatusStore>((set) => ({
  riskStatus: {},
  setRiskStatus: (assetId: string, newStatus: string) => {
    set((state) => ({ riskStatus: { ...state.riskStatus, [assetId]: newStatus } }));
  },
}));
