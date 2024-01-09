import { useAssetData } from '@/hooks/useFetchData';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { useFilteredItemsStore } from '@/stores/filterStore';
import { useState } from 'react';
import { Checkbox } from '@nextui-org/react';

const AssetDataTable = () => {
  const filteredItems = useFilteredItemsStore((state) => state.filteredItems);
  const { data: assetData } = useAssetData();
  const data = filteredItems.length > 0 ? filteredItems : assetData;

  const columns = [
    'Hunted',
    'Client',
    'Asset ID',
    'Asset',
    'Asset Type ',
    'Technology',
    'Version',
    'Risk Status',
  ];

  const [huntedAssets, setHuntedAssets] = useState<string[]>([]);

  const handleRowClick = (assetId: string) => {
    setHuntedAssets((prevHuntedAssets) =>
      prevHuntedAssets.includes(assetId)
        ? prevHuntedAssets.filter((id) => id !== assetId)
        : [...prevHuntedAssets, assetId],
    );
  };

  console.log(huntedAssets);
  return (
    <div className="mx-auto max-w-5xl">
      <Table
        aria-label="Asset table"
        className="mx-auto max-w-5xl"
      >
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column}>{column}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {(data || [])?.map(
            ({
              client,
              assetId,
              assetName,
              ip,
              subdomain,
              technology,
              version,
              status,
            }) => (
              <TableRow
                key={assetId}
                className={`${
                  version === '8.6.0' || version === '8.6.1' ? 'bg-red-100 text-red-500' : 'bg-white'
                } ${huntedAssets.includes(assetId) ? 'bg-yellow-500' : ''}`}
              >
                <TableCell>
                  <Checkbox
                    isSelected={huntedAssets.includes(assetId)}
                    onChange={() => handleRowClick(assetId)}
                  />
                </TableCell>
                <TableCell>{client}</TableCell>
                <TableCell>{assetId}</TableCell>
                <TableCell>{assetName}</TableCell>
                <TableCell>{subdomain ? subdomain : ip}</TableCell>
                <TableCell>{technology}</TableCell>
                <TableCell>{version}</TableCell>
                <TableCell>{status}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssetDataTable;
