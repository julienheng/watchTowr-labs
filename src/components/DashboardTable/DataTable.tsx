import { useFetchData } from '@/hooks/useFetchData';
import { HuntType } from '@/types/HuntType';
import { Spinner } from '@nextui-org/react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';

interface DataTableProps {}

const DataTable: React.FC<DataTableProps> = () => {
  const { data, isLoading } = useFetchData();

  return (
    <>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Hunt</TableColumn>
            <TableColumn>Vulnerability</TableColumn>
            <TableColumn>Tenants</TableColumn>
          </TableHeader>
          <TableBody>
            {data?.map(
              ({ huntId, vulnerability, tenants }: HuntType, index: number) => (
                <TableRow key={index}>
                  <TableCell>{huntId}</TableCell>
                  <TableCell>{vulnerability.name}</TableCell>
                  <TableCell>{tenants.name}</TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default DataTable;
