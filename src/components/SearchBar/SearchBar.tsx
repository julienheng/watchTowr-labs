import { Input } from '@nextui-org/react';
import { SearchIcon } from './SearchIcon';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="mx-auto max-w-md">
      <Input
        label="Search"
        variant="bordered"
        radius="md"
        classNames={{
          label: 'text-black/50 dark:text-white/90',
        }}
        placeholder="Asset, IP, Domain, Keyword ..."
        endContent={
          <SearchIcon className="pointer-events-none mb-0.5 flex-shrink-0 text-black" />
        }
      />
    </div>
  );
};

export default SearchBar;
