export type HuntType = {
  huntId: string;
  vulnerability: {
    name: string;
    description: string;
    affectedTechnologies: {
      name: string;
      version: string;
    }[];
    fixedTechnologies: {
      name: string;
      version: string;
    }[];
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
      technology: {
        name: string;
        version: string;
      }[];
    };
  };
};
