import { create } from 'zustand';
import { TenantType } from '@/types/TenantType';
import { AssetType } from '@/types/AssetType';

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

type FilteredItemsStore = {
  filteredItems: (TenantType | AssetType)[];
  setFilteredItems: (items: TenantType[]) => void;
};

export const useFilteredItemsStore = create<FilteredItemsStore>((set) => ({
  filteredItems: [],
  setFilteredItems: (items) => {
    set({ filteredItems: items });
  },
}));
