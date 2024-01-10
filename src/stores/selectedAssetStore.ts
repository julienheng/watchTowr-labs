import { create } from 'zustand';
import { AssetType } from '@/types/AssetType';

type SelectedAssetStore = {
  selectedAsset: AssetType[];
  setSelectedAsset: (asset: AssetType[]) => void;
};

export const useSelectedAssetStore = create<SelectedAssetStore>((set) => ({
  selectedAsset: [],
  setSelectedAsset: (asset) => {
    set({ selectedAsset: asset });
  },
}));
