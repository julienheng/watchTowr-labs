import { Card, CardBody } from '@nextui-org/react';
import { Icon } from '@iconify/react';

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
    <Card className="p-3">
      <CardBody>
        <h1 className="text-center font-playfair text-sm font-semibold">
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
      </CardBody>
    </Card>
  );
};

export default SummaryTotalAssetCard;
