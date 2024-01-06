export type HuntType = {
  huntId: string;
  createdAt: string;
  vulnerability: {
    name: string;
    description: string;
    releasedDate: string;
    affectedTechnologies: string[];
    fixedTechnologies: string[];
  };
  tenants: {
    id: string;
    name: string;
    industry: string;
    assets: {
      assetId: string;
      assetType: {
        subdomain?: string;
        ipAddress?: string;
      };
      attribute: {
        port: string;
      };
      technology: string;
    }[];
  };
};
