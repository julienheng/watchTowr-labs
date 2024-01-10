import { useSelectedAssetStore } from '@/stores/selectedAssetStore';
import { useRiskStatusStore } from '@/stores/riskStatusStore';
import { AssetType } from '@/types/AssetType';

interface AssetDetailProps {}

const AssetDetails: React.FC<AssetDetailProps> = () => {
  const selectedAsset = useSelectedAssetStore((state) => state.selectedAsset);
  const riskStatus = useRiskStatusStore((state) => state.riskStatus);
  const isVulnerable = (version: string) =>
    version === '8.6.0' || version === '8.6.1';

  return (
    <>
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
              className={`flex items-center justify-between rounded-t-xl p-3 font-oswald ${
                isVulnerable(version) ? ' bg-[#fecaca]' : ' bg-[#bbf7d0]'
              } `}
            >
              <h2 className="text-xl uppercase">Asset {assetId}</h2>
              <p
                className={`rounded-full px-3 py-2 font-lato text-sm text-white/80 ${
                  isVulnerable(version) ? 'bg-[#f87171]' : 'bg-[#4ade80]'
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
    </>
  );
};

export default AssetDetails;
