export type IssuedAssetType = 'credit_alphanum4' | 'credit_alphanum12';
export type NativeAssetType = 'native';
export interface NativeAsset {
  asset_type: NativeAssetType;
}
export interface RawIssuedAsset {
  asset_type: IssuedAssetType;
  asset_issuer: string;
  asset_code: string;
}
export type RawAsset = NativeAsset | RawIssuedAsset;

export interface Asset {
  assetType: IssuedAssetType | NativeAssetType;
  assetIssuer: string;
  assetCode: string;
}

interface IssuedBalance {
  balance: string;
  asset_type: NativeAssetType;
}
interface NativeBalance {
  balance: string;
  limit: string;
  asset_type: IssuedAssetType;
  asset_code: string;
  asset_issuer: string;
}
export type Balance = IssuedBalance | NativeBalance;
