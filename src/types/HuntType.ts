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
  industry: string;
  assets: {
    assetId: string;
    assetName: string;
    assetType: {
      subdomain?: string;
      ip?: string;
    };
    port: string;
    technology: string;
  }[];
};
