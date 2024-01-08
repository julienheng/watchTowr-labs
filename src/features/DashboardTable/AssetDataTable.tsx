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

const DataTable = () => {
  const filteredData = useFilteredItemsStore((state) => state.filteredItems);
  const { data: assetData } = useAssetData();
  const x = assetData?.map((item) => item.status);
  console.log(x);

  const data = filteredData.length > 0 ? filteredData : assetData;

  const columns = [
    'Client',
    'Asset ID',
    'Asset',
    'Asset Type ',
    'Technology',
    'Risk Status',
  ];

  return (
    <Table
      color="primary"
      selectionMode="single"
      aria-label="Asset table"
      className="mx-auto max-w-5xl"
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column}>{column}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {(data || []).map(
          ({
            client,
            assetId,
            assetName,
            ip,
            subdomain,
            technology,
            status,
          }) => (
            <TableRow
              key={assetId}
            >
              <TableCell>{client}</TableCell>
              <TableCell>{assetId}</TableCell>
              <TableCell>{assetName}</TableCell>
              <TableCell>{subdomain ? subdomain : ip}</TableCell>
              <TableCell>{technology}</TableCell>
              <TableCell
                // className={`${status === 'vulnerable' && 'text-red-500'}`}
              >
                {status}
              </TableCell>
            </TableRow>
          ),
        )}
      </TableBody>
    </Table>
  );
};

export default DataTable;
