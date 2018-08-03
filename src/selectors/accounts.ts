import { createSelector } from "reselect";
import { Accounts, State } from "../StellarProvider";

export const accountSelector = createSelector(
  [(state: State) => state.accounts, (_: State, id: string) => id],
  (accounts: Accounts, id: string) => ({ account: accounts[id] }),
);
