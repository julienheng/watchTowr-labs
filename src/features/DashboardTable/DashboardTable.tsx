import { Card, CardBody } from '@nextui-org/react';
import { useAssetData } from '@/hooks/useFetchData';
import { useSelectedAssetStore } from '@/stores/selectedAssetStore';

// COMPONENTS
import AssetDetailDataTable from './AssetDetailDataTable';
import AllAssetDataTable from './AllAssetDataTable';

const DashboardTable = () => {
  const { data: assetData } = useAssetData();
  const { selectedAsset, setSelectedAsset } = useSelectedAssetStore();
  const isVulnerable = (version: string) =>
    version === '8.6.0' || version === '8.6.1';

  const handleAssetDetail = (assetId: string) => {
    const asset = assetData?.filter((asset) => asset.assetId === assetId);
    setSelectedAsset(asset || []);
  };

  const isAssetDetailSelected = selectedAsset.length > 0;

  return (
    <Card
      className={`mx-auto max-w-${isAssetDetailSelected ? '2xl' : '6xl'} p-4`}
    >
      <CardBody>
        {selectedAsset.length > 0 ? (
          <AssetDetailDataTable />
        ) : (
          <AllAssetDataTable
            data={assetData || []}
            handleAssetDetail={handleAssetDetail}
            isVulnerable={isVulnerable}
          />
        )}
      </CardBody>
    </Card>
  );
};

export default DashboardTable;
