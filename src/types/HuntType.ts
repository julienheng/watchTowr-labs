export type HuntType = {
  // huntId: string;
  // createdAt: string;
  // vulnerability: {
  //   name: string;
  //   description: string;
  //   releasedDate: string;
  //   affectedTechnologies: string[];
  //   fixedTechnologies: string[];
  // };

  id: string;
  name: string;
  assets: {
    assetId: string;
    assetName: string;
    assetType: {
      subdomain?: string;
      ip?: string;
    };
    attribute: {
      port: string;
    };
    technology: string;
  }[];
};

export type AssetType = {
  assets: {
    assetId: string;
    assetName: string;
    assetType: {
      subdomain?: string;
      ip?: string;
    };
    attribute: {
      port: string;
    };
    technology: string;
  }[];
};
