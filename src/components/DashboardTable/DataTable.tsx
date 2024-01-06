import { useFetchData } from '@/hooks/useFetchData';
import { HuntType } from '@/types/HuntType';
import { Spinner } from '@nextui-org/react';
import {
  Table,
  TableBody,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
} from '@nextui-org/react';
import { Link } from 'react-router-dom';
import routes from '@/config/routes';

interface DataTableProps {
  filterValue?: string;
}
const columns = ['Hunt', 'Vulnerability', 'Tenants'];

const DataTable: React.FC<DataTableProps> = (
) => {
  const { data, isLoading } = useFetchData();

  return (
    <>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <Table aria-label="Static Table" className="mx-auto max-w-4xl">
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column}>{column}</TableColumn>
            ))}
          </TableHeader>
          <TableBody>
            {data?.map(
              ({ huntId, vulnerability, tenants }: HuntType, index: number) => (
                <TableRow key={index}>
                  <TableCell>{huntId}</TableCell>
                  <TableCell className="cursor-pointerhover:text-gray-500">
                    <Link to={routes.vulnerability}>{vulnerability.name}</Link>
                  </TableCell>
                  <TableCell className="hover:text-gray-500">
                    <Link to={routes.tenant}>{tenants.name}</Link>
                  </TableCell>
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
