/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFilterStore, useFilteredItemsStore } from '@/stores/filterStore';
import { useAssetData } from '@/hooks/useFetchData';
import { SearchBarInput } from './SearchBarInput';
import { AssetType } from '@/types/AssetType';

const SearchBar = () => {
  const { value, setValue } = useFilterStore();
  const { setFilteredItems } = useFilteredItemsStore();

  const { data: assetData } = useAssetData();

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

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

    const filteredItems = assetData?.filter((item: AssetType) => {
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
