import { useFetchData } from '@/hooks/useFetchData';
import { Spinner } from '@nextui-org/react';
import { Card, CardBody } from '@nextui-org/react';
import AssetDataTableHeader from './AssetDataTableHeader';
import AssetDataTableBody from './AssetDataTableBody';

interface DataTableProps {}

const DataTable: React.FC<DataTableProps> = () => {
  const { isLoading } = useFetchData();

  return (
    <>
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <Card className="mx-auto max-w-5xl rounded-xl">
          <CardBody>
            <AssetDataTableHeader />
            <AssetDataTableBody />
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default DataTable;
