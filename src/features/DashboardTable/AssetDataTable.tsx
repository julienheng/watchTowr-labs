import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardBody,
  Checkbox,
} from '@nextui-org/react';
import { useHandleHunt } from '@/hooks/useHandleHunt';
import { useAssetData } from '@/hooks/useFetchData';
import { useFilteredItemsStore } from '@/stores/filterStore';

const columns = [
  'To Hunt',
  'Client',
  'Asset ID',
  'Asset',
  'Asset Type ',
  'Technology',
  'Version',
  'Risk Status',
];

const AssetDataTable = () => {
  const filteredItems = useFilteredItemsStore((state) => state.filteredItems);
  const { data: assetData } = useAssetData();
  const data = filteredItems.length > 0 ? filteredItems : assetData;

  const { handleRowClick, riskStatus, huntedAssets } = useHandleHunt();

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
                  <TableCell>{riskStatus[assetId] || status}</TableCell>
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
