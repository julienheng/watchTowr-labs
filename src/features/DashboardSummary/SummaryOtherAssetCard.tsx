import { Icon } from '@iconify/react';
import { Card, CardBody } from '@nextui-org/react';

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
    <Card className="p-3">
      <CardBody className="flex flex-row gap-8">
        {data
          .slice(1)
          .map(({ title, icon, number, textColor, iconColor }, index) => (
            <div key={index}>
              <h1 className="font-playfair text-sm font-semibold">{title}</h1>
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
      </CardBody>
    </Card>
  );
};

export default SummaryOtherAssetCard;
