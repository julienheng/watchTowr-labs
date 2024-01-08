import { create } from 'zustand';

// TOTAL ASSET CASES
type AssetStore = {
  asset: number;
  setAsset: (value: number) => void;
};

export const useAssetStore = create<AssetStore>((set) => ({
  asset: 0,
  setAsset: (newCase: number) => {
    set({ asset: newCase });
  },
}));

// HUNTED ASSET CASES
type AssetHuntedStore = {
  huntedCase: number;
  setHuntedCase: (value: number) => void;
};

export const useAssetHuntedStore = create<AssetHuntedStore>((set) => ({
  huntedCase: 2,
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
  affectedCase: 4,
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
