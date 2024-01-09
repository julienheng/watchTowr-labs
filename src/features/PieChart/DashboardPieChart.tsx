/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import CardLayout from '@/components/CardLayout';
import {
  useAssetAffectedStore,
  useAssetHuntedStore,
  useAssetSecuredStore,
  useTotalAssetStore,
} from '@/stores/assetCaseStore';
// import { useSecurityStore } from '@/stores/securityStore';

type entryType = {
  name: string;
  value: number;
  color: string;
}[];

interface PayloadItem {
  value: number;
  name: string;
}

interface DashboardPieChartProps {}

const DashboardPieChart: React.FC<DashboardPieChartProps> = () => {
  const totalAsset = useTotalAssetStore((state) => state.totalAsset);
  const totalHunted = useAssetHuntedStore((state) => state.huntedCase);
  const totalAffected = useAssetAffectedStore((state) => state.affectedCase);
  const totalSecured = useAssetSecuredStore((state) => state.securedCase);
  const security = totalAsset - totalAffected;
  const threat = totalAffected - totalHunted;
  

  const securityData: entryType = [
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
  const data: entryType = [
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
        {/* <h1 className="font-playfair font-semibold text-center text-xl">Security Progress</h1> */}
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={data}
              nameKey="duration"
              dataKey="value"
              outerRadius={70}
              cx="50%"
              cy="50%"
              paddingAngle={3}
            >
              {data.map((entry) => (
                <Cell
                  fill={entry.color}
                  stroke={entry.color}
                  key={entry.name}
                />
              ))}
            </Pie>
            <Pie
              data={securityData}
              nameKey="duration"
              dataKey="value"
              innerRadius={90}
              outerRadius={110}
              cx="50%"
              cy="50%"
              paddingAngle={3}
            >
              {securityData.map((entry) => (
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
