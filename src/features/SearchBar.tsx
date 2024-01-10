/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFilterStore, useFilteredItemsStore } from '@/stores/filterStore';
import { useAssetData } from '@/hooks/useFetchData';
import { AssetType } from '@/types/AssetType';

// COMPONENTS
import SearchBarInput from '@/components/SearchBarInput';

const filterFields = [
  'assetId',
  'assetName',
  'client',
  'port',
  'ip',
  'subdomain',
  'technology',
  'status',
  'version',
];

const SearchBar = () => {
  const { value, setValue } = useFilterStore();
  const setFilteredItems = useFilteredItemsStore(
    (state) => state.setFilteredItems,
  );
  const { data } = useAssetData();

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    const filteredItems = data?.filter((item: AssetType) => {
      const searchTerm = e.target.value.toLowerCase();

      return filterFields.some((field) => {
        const fieldValue = (item as any)[field];
        const filteredValue = fieldValue ? fieldValue.toLowerCase() : '';
        return filteredValue.startsWith(searchTerm);
      });
    });

    // set filtered items to be used in the table
    setFilteredItems(filteredItems || []);
  };

  return (
    <SearchBarInput
      handleSearch={handleSearch}
      onSearch={onSearch}
      value={value}
    />
  );
};

export default SearchBar;
