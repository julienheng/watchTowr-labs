// COMPONENTS
import SearchBar from '@/features/SearchBar';
import DashboardTable from '@/features/DashboardTable/AssetDataTable';
import DashboardTitle from '../features/DashboardTitle';
import CasesHuntedCard from '@/features/DashboardSummary';
import DashboardPieChart from '@/features/PieChart/DashboardPieChart';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <main className="space-y-10 py-20">
      <DashboardTitle />
      <div className="flex max-w-5xl mx-auto justify-between ">
        <div className="flex flex-col justify-evenly gap-6">
          <CasesHuntedCard />
          <SearchBar />
        </div>
        <DashboardPieChart />
      </div>
      <DashboardTable />
    </main>
  );
};

export default Dashboard;
