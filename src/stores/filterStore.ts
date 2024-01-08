import { create } from 'zustand';
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
  filteredItems: AssetType[];
  setFilteredItems: (items: AssetType[]) => void;
};

export const useFilteredItemsStore = create<FilteredItemsStore>((set) => ({
  filteredItems: [],
  setFilteredItems: (items) => {
    set({ filteredItems: items });
  },
}));
