// COMPONENTS
import SearchBar from '@/features/SearchBar';
import DashboardTable from '@/features/Dashboard/DashboardTable/AssetDataTable';
import DashboardTitle from '../features/DashboardTitle';
import CasesHuntedCard from '@/features/DashboardSummary';
import DashboardPieChart from '@/features/Dashboard/PieChart/DashboardPieChart';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <main>
      <DashboardTitle />
      <div className="mx-auto flex max-w-5xl items-center">
        <CasesHuntedCard />
        <DashboardPieChart />
        <SearchBar />
      </div>
      <DashboardTable />
    </main>
  );
};

export default Dashboard;
