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
    size="sm"
    color="primary"
    onChange={handleSearch}
    value={value}
    className="group mx-auto max-w-md "
    classNames={{
      label: 'text-neutral-700',
    }}
    placeholder="Asset, IP, Domain, Keyword ..."
    endContent={
      <SearchIcon
        onClick={() => onSearch(value)}
        className="pointer-events-none mb-0.5 flex-shrink-0 text-neutral-500 "
      />
    }
    {...props}
  />
);
