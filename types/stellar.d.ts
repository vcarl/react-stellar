export type IssuedAssetType = 'credit_alphanum4' | 'credit_alphanum12';
export type NativeAssetType = 'native';

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
