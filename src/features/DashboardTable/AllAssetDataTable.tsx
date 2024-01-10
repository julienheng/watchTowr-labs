import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
} from '@nextui-org/react';
import { useHandleHunt } from '@/hooks/useHandleHunt';
import { useFilteredItemsStore } from '@/stores/filterStore';
import { AssetType } from '@/types/AssetType';

interface AllAssetDataTableProps {
  data: AssetType[];
  handleAssetDetail: (assetId: string) => void;
}

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

const AllAssetDataTable: React.FC<AllAssetDataTableProps> = ({
  handleAssetDetail,
  data,
}) => {
  const { handleRowClick, riskStatus, huntedAssets } = useHandleHunt();
  const filteredItems = useFilteredItemsStore((state) => state.filteredItems);
  const assetData = filteredItems.length > 0 ? filteredItems : data;

  return (
    <>
      <h1 className="font-oswald mx-auto text-center text-2xl font-semibold uppercase">
        Asset Detail Table
      </h1>
      <Table aria-label="Asset table" className="mx-auto my-6 max-w-6xl">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column}>{column}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {(assetData || [])?.map(
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
                onClick={() => handleAssetDetail(assetId)}
                className={`${
                  version === '8.6.0' || version === '8.6.1'
                    ? ' cursor-pointer hover:bg-red-100 hover:text-red-500'
                    : 'cursor-pointer bg-white hover:bg-gray-100'
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
    </>
  );
};

export default AllAssetDataTable;
