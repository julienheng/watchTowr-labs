// COMPONENTS
import SearchBar from '@/features/SearchBar';
import DashboardPieChart from '@/features/PieChart/DashboardPieChart';
import DashboardAssetSummary from '@/features/DashboardSummary/DashboardAssetSummary';

const DashboardSummary = () => {
  return (
    <div className="mx-auto flex max-w-6xl justify-between ">
      <div className="flex flex-col justify-evenly gap-6">
        <DashboardAssetSummary />
        <SearchBar />
      </div>
      <DashboardPieChart />
    </div>
  );
};

export default DashboardSummary;
