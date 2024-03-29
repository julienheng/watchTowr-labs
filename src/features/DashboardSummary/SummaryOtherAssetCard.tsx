import { Icon } from '@iconify/react';
import CardLayout from '@/components/CardLayout';

interface SummaryOtherAssetCardProps {
  data: {
    title: string;
    icon: string;
    number: number;
    textColor: string;
    iconColor: string;
  }[];
}

const SummaryOtherAssetCard: React.FC<SummaryOtherAssetCardProps> = ({
  data,
}) => {
  return (
    <CardLayout>
      <div className="flex flex-row gap-8">
        {data
          .slice(1)
          .map(({ title, icon, number, textColor, iconColor }, index) => (
            <div key={index}>
              <h1 className="font-oswald text-lg font-semibold">{title}</h1>
              <div className="flex items-center justify-around">
                <Icon
                  className="text-5xl"
                  icon={icon}
                  style={{ color: iconColor }}
                />
                <p className={`text-4xl ${textColor}`}>{number}</p>
              </div>
            </div>
          ))}
      </div>
    </CardLayout>
  );
};

export default SummaryOtherAssetCard;
