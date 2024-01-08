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
  case: number;
  setCase: (value: number) => void;
};

export const useAssetHuntedStore = create<AssetHuntedStore>((set) => ({
  case: 8,
  setCase: (newCase: number) => {
    set({ case: newCase });
  },
}));

// AFFECTED ASSET CASES
type AssetAffectedStore = {
  case: number;
  setCase: (value: number) => void;
};

export const useAssetAffectedStore = create<AssetAffectedStore>((set) => ({
  case: 4,
  setCase: (newCase: number) => {
    set({ case: newCase });
  },
}));
