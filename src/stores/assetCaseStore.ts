import { create } from 'zustand';

// TOTAL ASSET CASES
type TotalAssetStore = {
  totalAsset: number;
  setTotalAsset: (value: number) => void;
};

export const useTotalAssetStore = create<TotalAssetStore>((set) => ({
  totalAsset: 10,
  setTotalAsset: (newCase: number) => {
    set({ totalAsset: newCase });
  },
}));

// HUNTED ASSET CASES
type AssetHuntedStore = {
  huntedCase: number;
  setHuntedCase: (value: number) => void;
};

export const useAssetHuntedStore = create<AssetHuntedStore>((set) => ({
  huntedCase: 0,
  setHuntedCase: (newCase: number) => {
    set({ huntedCase: newCase });
  },
}));

// AFFECTED ASSET CASES
type AssetAffectedStore = {
  affectedCase: number;
  setAffectedCase: (value: number) => void;
};

export const useAssetAffectedStore = create<AssetAffectedStore>((set) => ({
  affectedCase: 6,
  setAffectedCase: (newCase: number) => {
    set({ affectedCase: newCase });
  },
}));

// ASSIGNED ASSET CASES
type AssetAssignedStore = {
  assignedCase: number;
  setAssignedCase: (value: number) => void;
};

export const useAssetAssignedStore = create<AssetAssignedStore>((set) => ({
  assignedCase: 0,
  setAssignedCase: (newCase: number) => {
    set({ assignedCase: newCase });
  },
}));
