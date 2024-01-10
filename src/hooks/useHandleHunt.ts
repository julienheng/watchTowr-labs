import { useAssetHuntedStore } from '@/stores/assetCaseStore';
import { useFilteredItemsStore } from '@/stores/filterStore';
import { useRiskStatusStore } from '@/stores/riskStatusStore';
import { useState } from 'react';

export const useHandleHunt = () => {
  const data = useFilteredItemsStore((state) => state.filteredItems);
  const { addHuntedCase, subHuntedCase } = useAssetHuntedStore();
  const { riskStatus, setRiskStatus } = useRiskStatusStore();
  const [huntedAssets, setHuntedAssets] = useState<string[]>([]);

  const handleRowClick = (assetId: string, version: string) => {
    const affectedVersion = version === '8.6.0' || version === '8.6.1';

    // Check if the asset is among the affected assets or has the required version
    const isChecked =
      data?.some(
        (asset) => asset.assetId === assetId && asset.status === 'vulnerable',
      ) || affectedVersion;

    // Check if the asset is already hunted
    const isAlreadyHunted = huntedAssets.includes(assetId);

    // If the asset is selectable, update the hunted assets
    if (isChecked && !isAlreadyHunted) {
      setHuntedAssets((prevHuntedAssets) => [...prevHuntedAssets, assetId]);
      addHuntedCase();
      setRiskStatus(assetId, 'vulnerable');
    } else if (isAlreadyHunted) {
      // If the asset is already hunted, unselect it
      setHuntedAssets((prevHuntedAssets) =>
        prevHuntedAssets.filter((id) => id !== assetId),
      );
      subHuntedCase();
      setRiskStatus(assetId, '');
    }
  };

  return { handleRowClick, riskStatus, huntedAssets };
};
