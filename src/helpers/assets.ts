import { RawAsset, Asset } from "../../types/stellar";

export const parseAsset = (asset: RawAsset): Asset => {
  if (asset.asset_type === "native") {
    return {
      assetType: asset.asset_type,
      assetCode: "XLM",
      assetIssuer: "Stellar",
    };
  }
  return {
    assetType: asset.asset_type,
    assetCode: asset.asset_code,
    assetIssuer: asset.asset_issuer,
  };
};
