import { Card, CardBody } from '@nextui-org/react';
import { useAssetData } from '@/hooks/useFetchData';
import { useState } from 'react';
import { AssetType } from '@/types/AssetType';

// COMPONENTS
import AssetDetailTable from './AssetDetailDataTable';
import AllAssetDataTable from './AllAssetDataTable';

const AssetDataTable = () => {
  const { data: assetData } = useAssetData();
  const [selectedAsset, setSelectedAsset] = useState<AssetType[]>([]);

  const handleAssetDetail = (assetId: string) => {
    const asset = assetData?.filter((asset) => asset.assetId === assetId);
    setSelectedAsset(asset || []);
  };

  return (
    <Card
      className={`${
        selectedAsset.length > 0 ? 'mx-auto max-w-2xl p-4' : 'mx-auto max-w-6xl p-4 '
      } `}
    >
      <CardBody className="">
        {selectedAsset.length > 0 ? (
          <AssetDetailTable
            selectedAsset={selectedAsset}
            setSelectedAsset={setSelectedAsset}
          />
        ) : (
          <AllAssetDataTable
            data={assetData || []}
            handleAssetDetail={handleAssetDetail}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default AssetDataTable;
