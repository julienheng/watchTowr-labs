/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFilterStore, useFilteredItemsStore } from '@/stores/filterStore';
import { useTenantData, useAssetData } from '@/hooks/useFetchData';
import { SearchBarInput } from './SearchBarInput';

interface HuntTypeProps {
  [key: string]: any;
}

const SearchBar = () => {
  const { value, setValue } = useFilterStore();
  const { setFilteredItems } = useFilteredItemsStore();

  const { data: tenantData } = useTenantData();
  const { data: assetData } = useAssetData();

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchTerm = e.target.value;
    setValue(searchTerm);

    const filterFields = ['name', 'industry', 'assetName', 'assetId'];

    const filteredItems = [...(tenantData || []), ...(assetData || [])].filter(
      (item: HuntTypeProps) => {
        const normalizedSearchTerm = searchTerm.toLowerCase();

        return filterFields.some((field) => {
          const tenantName = item[field].toLowerCase();
          return (
            tenantName.includes(normalizedSearchTerm) &&
            tenantName !== normalizedSearchTerm
          );
        });
      },
    );

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
