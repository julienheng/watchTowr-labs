import { Input } from '@nextui-org/react';
import { SearchIcon } from './SearchIcon';
import { useFilterStore } from '@/stores/filterStore';
import { useFetchData } from '@/hooks/useFetchData';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const value = useFilterStore((state) => state.value);
  const setValue = useFilterStore((state) => state.setValue);

  const { data } = useFetchData();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSearch = (searchTerm: string) => {
    setValue(searchTerm);
  };

  return (
    <div className="mx-auto max-w-md">
      <Input
        label="Search"
        variant="bordered"
        radius="md"
        onChange={handleSearch}
        classNames={{
          label: 'text-black/50 dark:text-white/90',
        }}
        placeholder="Asset, IP, Domain, Keyword ..."
        endContent={
          <SearchIcon
            onClick={() => onSearch(value)}
            className="pointer-events-none mb-0.5 flex-shrink-0 text-black"
          />
        }
      />

      <div className="flex flex-col border border-neutral-100">
        {data
          ?.filter((item) => {
            const searchTerm = value.toLowerCase();
            const clientName = item.name.toLowerCase();

            return searchTerm && clientName.startsWith(searchTerm);
          })
          .map((item) => (
            <div
              key={item.name}
              onClick={() => onSearch(item.name)}
              className="cursor-pointer"
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
