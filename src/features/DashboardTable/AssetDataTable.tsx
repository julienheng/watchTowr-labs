import { useAssetData } from '@/hooks/useFetchData';
import { useAssetHuntedStore } from '@/stores/assetCaseStore';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardBody,
} from '@nextui-org/react';
import { useFilteredItemsStore } from '@/stores/filterStore';
import { useState } from 'react';
import { Checkbox } from '@nextui-org/react';

const AssetDataTable = () => {
  const filteredItems = useFilteredItemsStore((state) => state.filteredItems);
  const { data: assetData } = useAssetData();
  const data = filteredItems.length > 0 ? filteredItems : assetData;
  const { addHuntedCase, subHuntedCase } = useAssetHuntedStore();

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

  const handleRowClick = (assetId: string, version: string) => {
    const affectedVersion = version === '8.6.0' || version === '8.6.1';

    // Check if the asset is among the affected assets or has the required version
    const isChecked =
      data?.some(
        (asset) => asset.assetId === assetId && asset.status === 'vulnerable',
      ) || affectedVersion;

    // Check if the asset is already hunted
    const isAlreadyHunted = huntedAssets.includes(assetId);

    // If the asset is selectable, update the hunted assets
    if (isChecked && !isAlreadyHunted) {
      setHuntedAssets((prevHuntedAssets) => [...prevHuntedAssets, assetId]);
      addHuntedCase();
    } else if (isAlreadyHunted) {
      // If the asset is already hunted, unselect it
      setHuntedAssets((prevHuntedAssets) =>
        prevHuntedAssets.filter((id) => id !== assetId),
      );
      subHuntedCase();
    }
  };

  return (
    <Card className="mx-auto max-w-6xl p-6 ">
      <CardBody>
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
                      ? ' hover:bg-red-100 hover:text-red-500'
                      : 'bg-white hover:bg-gray-100'
                  } ${
                    huntedAssets.includes(assetId)
                      ? 'bg-red-200 text-red-500'
                      : ''
                  }`}
                >
                  <TableCell>
                    <Checkbox
                      isSelected={huntedAssets.includes(assetId)}
                      onChange={() => handleRowClick(assetId, version)}
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
      </CardBody>
    </Card>
  );
};

export default AssetDataTable;
