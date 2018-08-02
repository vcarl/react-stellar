import React from "react";
import Big from "big.js";
import { AccountRecord } from "stellar-sdk";
import {
  RawBalance,
  Balance,
  Account as ParsedStellarAccount,
} from "../types/stellar";
import { Consumer, ProviderContext, Accounts } from "./StellarProvider";
import { parseAsset } from "./helpers/assets";

interface PublicProps {
  accountId: string;
  render(props: { account: ParsedStellarAccount }): JSX.Element;
  [key: string]: any;
}

interface Props extends PublicProps {
  context: ProviderContext;
}

const parseBalances = (balances: Array<RawBalance>): Array<Balance> =>
  balances.map((balance) => {
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
  });

const parseAccountResponse = ({
  id,
  balances,
}: // TODO: account keys
AccountRecord): ParsedStellarAccount => ({
  id,
  balances: parseBalances(balances),
});

class Account extends React.Component<Props> {
  componentDidMount() {
    this.fetchAccount(this.props.accountId);
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.accountId !== this.props.accountId) {
      this.fetchAccount(this.props.accountId);
    }
  }
  fetchAccount = (publicKey: string) => {
    const { horizon, setState } = this.props.context;
    horizon.get(`/accounts/${this.props.accountId}`).then(({ data }) =>
      setState(({ accounts }: { accounts: Accounts }) => ({
        accounts: {
          ...accounts,
          [publicKey]: parseAccountResponse(data),
        },
      })),
    );
  };
  render() {
    return this.props.render({
      account: this.props.context.state.accounts[this.props.accountId],
    });
  }
}

export interface StellarAccountRecord {
  balances: Array<RawBalance>;
  trustlines: Array<undefined>;
}

export const StellarAccount = (props: PublicProps) => (
  <Consumer>{(context) => <Account {...props} context={context} />}</Consumer>
);
