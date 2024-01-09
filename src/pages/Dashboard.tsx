// COMPONENTS
import SearchBar from '@/features/SearchBar';
import DashboardTable from '@/features/DashboardTable/AssetDataTable';
import DashboardTitle from '../features/DashboardTitle';
import DashboardPieChart from '@/features/PieChart/DashboardPieChart';
import DashboardSummary from '@/features/DashboardSummary/DashboardSummary';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <main className="space-y-10 py-20">
      <DashboardTitle />
      <div className="mx-auto flex max-w-6xl justify-between ">
        <div className="flex flex-col justify-evenly gap-6">
          <DashboardSummary />
          <SearchBar />
        </div>
        <DashboardPieChart />
      </div>
      <DashboardTable />
    </main>
  );
};

export default Dashboard;
