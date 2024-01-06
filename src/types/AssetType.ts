export type AssetType = {
  assetId: string;
  assetName: string;
  assetType: {
    subdomain?: string;
    ip?: string;
  };
  port: string;
  technology: string;
};
