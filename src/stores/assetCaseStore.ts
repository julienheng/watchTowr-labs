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
  addHuntedCase: () => void;
  subHuntedCase: () => void;
};

export const useAssetHuntedStore = create<AssetHuntedStore>((set) => ({
  huntedCase: 0,
  setHuntedCase: (newCase: number) => {
    set({ huntedCase: newCase });
  },
  addHuntedCase: () => {
    set((state) => ({ huntedCase: state.huntedCase + 1 }));
  },
  subHuntedCase: () => {
    set((state) => ({ huntedCase: state.huntedCase - 1 }));
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

// SECURED ASSETS CASES
type AssetSecuredStore = {
  securedCase: number;
};

export const useAssetSecuredStore = create<AssetSecuredStore>(() => ({
  securedCase: 4,
}));


// ASSIGNED ASSET CASES
// type AssetAssignedStore = {
//   assignedCase: number;
//   setAssignedCase: (value: number) => void;
// };

// export const useAssetAssignedStore = create<AssetAssignedStore>((set) => ({
//   assignedCase: 0,
//   setAssignedCase: (newCase: number) => {
//     set({ assignedCase: newCase });
//   },
// }));
