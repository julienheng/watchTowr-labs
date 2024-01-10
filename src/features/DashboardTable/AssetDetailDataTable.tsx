import { Card, CardBody } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { useSelectedAssetStore } from '@/stores/selectedAssetStore';
import AssetDetails from './AssetDetail';

interface AssetDetailDataTableProps {}

const AssetDetailDataTable: React.FC<AssetDetailDataTableProps> = () => {
  const setSelectedAsset = useSelectedAssetStore(
    (state) => state.setSelectedAsset,
  );

  return (
    <>
      <div className="flex items-center">
        <Icon
          onClick={() => setSelectedAsset([])}
          className="cursor-pointer hover:text-gray-500"
          icon="ion:chevron-back-circle-outline"
          style={{ fontSize: '40px' }}
        />
        <h1 className="mx-auto text-center font-oswald text-2xl font-semibold uppercase">
          Asset Detail Table
        </h1>
      </div>
      <Card className="my-6">
        <CardBody>
          <AssetDetails />
        </CardBody>
      </Card>
    </>
  );
};

export default AssetDetailDataTable;
