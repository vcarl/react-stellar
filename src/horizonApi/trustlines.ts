import { parseAsset } from "./assets";
import { RawBalance } from "../types/stellar";

export const parseTrustlines = (balances: Array<RawBalance>) =>
  balances.map((balance) => ({
    asset: parseAsset(balance),
  }));
