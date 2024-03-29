import { Icon } from '@iconify/react';
import CardLayout from '@/components/CardLayout';

export interface SummaryTotalAssetCardProps {
  data: {
    title: string;
    icon: string;
    number: number;
    textColor: string;
    iconColor: string;
  }[];
}

const SummaryTotalAssetCard: React.FC<SummaryTotalAssetCardProps> = ({
  data,
}) => {
  return (
    <CardLayout>
      <h1 className="text-center font-oswald text-lg font-semibold">
        Total Assets
      </h1>
      <div className="flex items-center justify-around">
        <Icon
          className="text-5xl"
          icon={data[0].icon}
          style={{ color: data[0].iconColor }}
        />
        <p className={`text-4xl ${data[0].textColor}`}>{data[0].number}</p>
      </div>
    </CardLayout>
  );
};

export default SummaryTotalAssetCard;
