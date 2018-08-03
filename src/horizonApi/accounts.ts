import { AccountRecord } from "stellar-sdk";
import { Account } from "types/stellar";
import { parseBalances } from "./balances";

export const parseAccountResponse = ({
  id,
  balances,
}: // TODO: account keys
AccountRecord): Account => ({
  id,
  balances: parseBalances(balances),
});
