import Big from "big.js";
import { RawBalance, Balance } from "types/stellar";
import { parseAsset } from "./assets";

export const parseBalance = (balance: RawBalance): Balance => {
  if (balance.asset_type === "native") {
    return {
      asset: parseAsset(balance),
      balance: Big(balance.balance),
      // Total issued Lumens
      limit: Big("104144920420.1256628"),
    };
  }
  return {
    asset: parseAsset(balance),
    balance: Big(balance.balance),
    limit: Big(balance.limit),
  };
};

export const parseBalances = (balances: Array<RawBalance>): Array<Balance> =>
  balances.map(parseBalance);
