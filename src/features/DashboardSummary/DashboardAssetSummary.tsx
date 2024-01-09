import CardLayout from '../../components/CardLayout';
import {
  useAssetAffectedStore,
  useAssetHuntedStore,
  useAssetSecuredStore,
  useTotalAssetStore,
} from '@/stores/assetCaseStore';
import SummaryTotalAssetCard from './SummaryTotalAssetCard';
import SummaryOtherAssets from './SummaryOtherAssetCard';

interface DashboardAssetSummaryProps {}

const DashboardAssetSummary: React.FC<DashboardAssetSummaryProps> = () => {
  const totalAsset = useTotalAssetStore((state) => state.totalAsset);
  const totalAffected = useAssetAffectedStore((state) => state.affectedCase);
  const totalHunted = useAssetHuntedStore((state) => state.huntedCase);
  const totalSecured = useAssetSecuredStore((state) => state.securedCase);

  const data = [
    {
      title: 'Total Assets',
      icon: 'game-icons:human-target',
      number: totalAsset,
      textColor: 'text-[#60a5fa]',
      iconColor: '#60a5fa',
    },
    {
      title: 'Secured Assets',
      icon: 'arcticons:moto-secure',
      number: totalSecured,
      textColor: 'text-[#4ade80]',
      iconColor: '#4ade80',
    },
    {
      title: 'Affected Assets',
      icon: 'solar:danger-circle-broken',
      number: totalAffected - totalHunted,
      textColor: 'text-[#f87171]',
      iconColor: '#f87171',
    },
    {
      title: 'Hunted Assets',
      icon: 'material-symbols-light:assignment-turned-in-outline',
      number: totalHunted,
      textColor: 'text-[#fdba74]',
      iconColor: '#fdba74',
    },
  ];

  return (
    <>
      <CardLayout>
        <div className="flex flex-row gap-8">
          <SummaryTotalAssetCard data={data} />
          <SummaryOtherAssets data={data} />
        </div>
      </CardLayout>
    </>
  );
};

export default DashboardAssetSummary;
