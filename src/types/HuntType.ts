export type HuntType = {
  huntId: string;
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
      subdomain?: string;
      ipAddress?: string;
      assetType: string;
      port: string;
      technology: string;
    }[];
  };
};
