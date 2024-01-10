import {
  useAssetAffectedStore,
  useAssetHuntedStore,
  useAssetSecuredStore,
  useTotalAssetStore,
} from '@/stores/assetCaseStore';

type entryType = {
  name: string;
  value: number;
  color: string;
}[];

export const usePieChartData = () => {
  const totalAsset = useTotalAssetStore((state) => state.totalAsset);
  const totalHunted = useAssetHuntedStore((state) => state.huntedCase);
  const totalAffected = useAssetAffectedStore((state) => state.affectedCase);
  const totalSecured = useAssetSecuredStore((state) => state.securedCase);
  const security = totalAsset - totalAffected;
  const threat = totalAffected - totalHunted;

  const securityPieData: entryType = [
    {
      name: 'Security',
      value: security,
      color: '#4ade80',
    },
    {
      name: 'Threat',
      value: threat,
      color: '#f87171',
    },
  ];
  const assetPieData: entryType = [
    {
      name: 'Secured Assets',
      value: totalSecured,
      color: '#86efac',
    },
    {
      name: 'Affected Assets',
      value: totalAffected - totalHunted,
      color: '#fca5a5',
    },
    {
      name: 'Hunted Assets',
      value: totalHunted,
      color: '#fdba74',
    },
  ];

  return { securityPieData, assetPieData };
};
