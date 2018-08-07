import { AccountRecord } from "stellar-sdk";
import { Account } from "../types/stellar";
import { parseBalances } from "./balances";
import { parseTrustlines } from "./trustlines";

export const parseAccountResponse = ({
  id,
  balances,
}: // TODO: account keys
AccountRecord): Account => ({
  id,
  balances: parseBalances(balances),
  trustlines: parseTrustlines(balances),
});
