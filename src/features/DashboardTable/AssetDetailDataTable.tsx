import { AssetType } from '@/types/AssetType';
import { Card, CardBody } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { useTenantData } from '@/hooks/useFetchData';
import { useRiskStatusStore } from '@/stores/riskStatusStore';

interface AssetDetailTableProps {
  selectedAsset: AssetType[];
  setSelectedAsset: React.Dispatch<React.SetStateAction<AssetType[]>>;
}

const AssetDetailTable: React.FC<AssetDetailTableProps> = ({
  selectedAsset,
  setSelectedAsset,
}) => {
  const riskStatus = useRiskStatusStore((state) => state.riskStatus);
  const { data: tenantData } = useTenantData();
  console.log(tenantData);
  const x = tenantData?.map((tenant) => tenant);
  console.log(x);

  return (
    <>
      <div className="flex items-center">
        <Icon
          onClick={() => setSelectedAsset([])}
          className="cursor-pointer hover:text-blue-500"
          icon="ion:chevron-back-circle-outline"
          style={{ fontSize: '40px' }}
        />
        <h1 className="font-oswald mx-auto text-center text-2xl font-semibold uppercase">
          Asset Detail Table
        </h1>
      </div>
      <Card className="my-6">
        <CardBody>
          {selectedAsset.map(
            ({
              assetId,
              client,
              assetName,
              technology,
              status,
              version,
            }: AssetType) => (
              <div key={assetId}>
                <div
                  className={`font-oswald flex items-center justify-between rounded-t-xl p-3 ${
                    version === '8.6.0' || version === '8.6.1'
                      ? ' bg-[#fecaca]'
                      : ' bg-[#bbf7d0]'
                  } `}
                >
                  <h2 className="text-xl uppercase">Asset {assetId}</h2>
                  <p
                    className={`rounded-full px-3 py-2 font-lato text-sm text-white/80 ${
                      version === '8.6.0' || version === '8.6.1'
                        ? 'bg-[#f87171]'
                        : 'bg-[#4ade80]'
                    } `}
                  >
                    {riskStatus[assetId] || status}
                  </p>
                </div>
                <div className="rounded-b-xl bg-neutral-100 p-3">
                  <p className="text-xl font-semibold">{client}</p>
                  <p>{assetName}</p>
                  <p>{technology}</p>
                  <p>{version}</p>
                </div>
              </div>
            ),
          )}
        </CardBody>
      </Card>
    </>
  );
};

export default AssetDetailTable;
