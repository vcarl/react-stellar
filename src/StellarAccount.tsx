import React from 'react';
import Big from 'big.js';
import { AccountRecord } from 'stellar-sdk';
import { RawBalance, Balance } from '../types/stellar';
import { Consumer, ProviderContext } from './StellarProvider';
import { parseAsset } from './helpers/assets';

interface Props {
  render(props: ProviderContext): JSX.Element;
  context: ProviderContext;
  [key: string]: any;
}

export interface StellarAccountRecord {
  balances: Array<RawBalance>;
  trustlines: Array<undefined>;
}

const parseBalances = (balances: Array<RawBalance>): Array<Balance> =>
  balances.map((balance) => {
    if (balance.asset_type === 'native') {
      return {
        asset: parseAsset(balance),
        balance: Big(balance.balance),
        limit: Big('104144920420.1256628'),
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
AccountRecord) => ({
  id,
  balances: parseBalances(balances),
  // TODO: Map account keys to more useful values, parse numbers with Big.js
});

class Account extends React.Component<Props> {
  componentDidMount() {}
  render() {
    return this.props.render(this.props.context);
  }
}

export const StellarAccount = (props: Props) => (
  <Consumer>{(context) => <Account {...props} context={context} />}</Consumer>
);
