import { Card, CardProps, CardBody } from '@nextui-org/react';

export interface CardLayoutProps extends CardProps {}

const CardLayout: React.FC<CardLayoutProps> = ({ children }) => {
  return (
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default CardLayout;
