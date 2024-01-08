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
  useAssetAssignedStore,
  useAssetHuntedStore,
  useAssetStore,
} from '@/stores/assetCaseStore';
import { useSecurityStore } from '@/stores/securityStore';
import { useThreatStore } from '@/stores/threatStateStore';
type entryType = {
  name: string;
  value: number;
  color: string;
}[];

interface DashboardPieChartProps {}

const DashboardPieChart: React.FC<DashboardPieChartProps> = () => {
  const totalAsset = useAssetStore((state) => state.asset);
  const totalAffected = useAssetAffectedStore((state) => state.affectedCase);
  const totalHunted = useAssetHuntedStore((state) => state.huntedCase);
  const totalAssigned = useAssetAssignedStore((state) => state.assignedCase);
  const security = useSecurityStore((state) => state.securityValue);
  const threat = useThreatStore((state) => state.threatValue);



  const securityData = [
    {
      name: 'Security',
      value: security - threat,
      color: '#22c55e',
    },
    {
      name: 'Threat',
      value: threat,
      color: '#ef4444',
    },
  ];
  const data: entryType = [
    {
      name: 'Total Assets',
      value: totalAsset,
      color: '#3b82f6',
    },
    {
      name: 'Assets Affected',
      value: totalAffected,
      color: '#f97316',
    },
    {
      name: 'Assets Assigned',
      value: totalAssigned,
      color: '#ec4899',
    },
    {
      name: 'Assets Hunted',
      value: totalHunted,
      color: '#a855f7',
    },
  ];

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
              <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
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
              <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
            ))}
          </Pie>
          <Tooltip />
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
