import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { usePieChartData } from '@/hooks/usePieChartData';
import CardLayout from '@/components/CardLayout';

interface PayloadItem {
  value: number;
  name: string;
}[]

interface DashboardPieChartProps {}

const DashboardPieChart: React.FC<DashboardPieChartProps> = () => {
  const { assetPieData, securityPieData } = usePieChartData();

  const CustomTooltip = ({ payload }: { payload?: PayloadItem[] }) => {
    if (payload) {
      return (
        <div className="rounded-md bg-white p-2 shadow-md">
          <p className="font-semibold">{`${payload[0]?.value}`}</p>
        </div>
      );
    }
  };

  return (
    <CardLayout>
      <div className="w-[450px] p-2">
        <h1 className="font-oswald text-center text-xl font-semibold">
          Security Progress
        </h1>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={assetPieData}
              nameKey="duration"
              dataKey="value"
              outerRadius={70}
              cx="50%"
              cy="50%"
              paddingAngle={3}
            >
              {assetPieData.map((entry) => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.name}
                />
              ))}
            </Pie>
            <Pie
              data={securityPieData}
              nameKey="duration"
              dataKey="value"
              innerRadius={90}
              outerRadius={110}
              cx="50%"
              cy="50%"
              paddingAngle={3}
            >
              {securityPieData.map((entry) => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.name}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="middle"
              align="right"
              widths="30%"
              layout="vertical"
              iconSize={10}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </CardLayout>
  );
};

export default DashboardPieChart;
