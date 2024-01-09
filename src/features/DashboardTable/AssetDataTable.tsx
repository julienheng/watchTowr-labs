import { useAssetData } from '@/hooks/useFetchData';
import { useAssetHuntedStore } from '@/stores/assetCaseStore';
import { useAssetAffectedStore } from '@/stores/assetCaseStore';
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
  const addHuntedCase = useAssetHuntedStore((state) => state.addHuntedCase);
  const subHuntedCase = useAssetHuntedStore((state) => state.subHuntedCase);
  const huntedCase = useAssetHuntedStore((state) => state.huntedCase);
  const totalAffected = useAssetAffectedStore((state) => state.affectedCase);

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
    if (huntedCase < totalAffected) {
      setHuntedAssets((prevHuntedAssets) =>
        prevHuntedAssets.includes(assetId)
          ? prevHuntedAssets.filter((id) => id !== assetId)
          : [...prevHuntedAssets, assetId],
      );
      if (huntedAssets.includes(assetId) && huntedCase === 1) {
        subHuntedCase();
      } else {
        addHuntedCase();
      }
    } else {
    
      if (huntedAssets.includes(assetId)) {
        subHuntedCase();
      }
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      <Table aria-label="Asset table" className="mx-auto max-w-6xl">
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
                  version === '8.6.0' || version === '8.6.1'
                    ? ' hover:bg-red-200'
                    : 'bg-white hover:bg-gray-100'
                } ${huntedAssets.includes(assetId) ? '' : ''}`}
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
