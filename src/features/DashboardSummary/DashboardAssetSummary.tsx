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
      <h1 className="uppercase tracking-wide font-oswald text-center text-2xl font-semibold">
        asset summary
      </h1>
      <div className="flex flex-row gap-4 py-6">
        <SummaryTotalAssetCard data={data} />
        <SummaryOtherAssets data={data} />
      </div>
    </CardLayout>
  );
};

export default DashboardAssetSummary;
