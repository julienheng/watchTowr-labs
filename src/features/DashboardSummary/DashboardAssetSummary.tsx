import { useDashboardAssetSummary } from '@/hooks/useDashboardAssetSummary';

//COMPONENTS
import CardLayout from '@/components/CardLayout';
import SummaryTotalAssetCard from './SummaryTotalAssetCard';
import SummaryOtherAssets from './SummaryOtherAssetCard';

interface DashboardAssetSummaryProps {}

const DashboardAssetSummary: React.FC<DashboardAssetSummaryProps> = () => {
  const { data } = useDashboardAssetSummary();

  return (
    <CardLayout>
      <div className="flex flex-row gap-4 py-8">
        <SummaryTotalAssetCard data={data} />
        <SummaryOtherAssets data={data} />
      </div>
    </CardLayout>
  );
};

export default DashboardAssetSummary;
