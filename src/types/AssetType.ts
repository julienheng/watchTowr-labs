export type AssetType = {
  assetId: string;
  tenantId: string;
  assetName: string;
  assetType: {
    subdomain?: string;
    ip?: string;
  };
  attribute: {
    port: string;
  };
  technology: string;
};
