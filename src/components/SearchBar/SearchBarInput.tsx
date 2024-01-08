import { SearchIcon } from './SearchIcon';
import { Input, InputProps } from '@nextui-org/react';

interface SearchBarInputProps extends InputProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (searchTerm: string) => void;
  value: string;
}

export const SearchBarInput: React.FC<SearchBarInputProps> = ({
  handleSearch,
  onSearch,
  value,
  ...props
}) => (
  <Input
    label="Search"
    variant="bordered"
    radius="md"
    onChange={handleSearch}
    value={value}
    className="mx-auto max-w-md"
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
    {...props}
  />
);
