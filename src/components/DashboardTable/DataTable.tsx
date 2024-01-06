/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useFetchData } from '@/hooks/useFetchData';
import { Spinner } from '@nextui-org/react';
// import {
//   Table,
//   TableBody,
//   TableHeader,
//   TableColumn,
//   TableRow,
//   TableCell,
// } from '@nextui-org/react';
// import { Link } from 'react-router-dom';
// import routes from '@/config/routes';
import { HuntType } from '@/types/HuntType';

interface DataTableProps {}

// const columns = ['ID', 'Asset', 'Tenants'];

const DataTable: React.FC<DataTableProps> = () => {
  // const { data, isLoading } = useFetchData();

  // console.log(data);

  return (
    <>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <>
          {/* <Table aria-label="Static Table" className="mx-auto max-w-4xl">
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column}>{column}</TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="hover:text-gray-500">{id}</TableCell>
                <TableCell className="cursor-pointerhover:text-gray-500">
                  <Link to={routes.vulnerability}>{name}</Link>
                </TableCell>
                <TableCell>{assetName}</TableCell>
              </TableRow>
            </TableBody>
          </Table> */}

          <div>
            {data?.map(({ id, name, assets }: HuntType) => (
              <div key={id} className="flex gap-8">
                <div>{id}</div>
                {assets?.map(({ assetName, assetId }, index) => (
                  <div className="flex" key={index}>
                    <div>{assetId}</div>
                    <div>{assetName}</div>
                  </div>
                ))}{' '}
                <div>{name}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default DataTable;
