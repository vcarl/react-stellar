import React from 'react';
import { AccountRecord } from 'stellar-sdk';
import { IssuedAssetType, NativeAssetType, Balance } from '../types/stellar';
import { Consumer, ProviderContext } from './StellarProvider';

interface Props {
  render(props: ProviderContext): JSX.Element;
  context: ProviderContext;
  [key: string]: any;
}

export interface StellarAccountRecord {
  balances: Array<Balance>;
  trustlines: Array<undefined>;
}

const parseAccountResponse = ({
  id,
  balances,
}: // TODO: account keys
AccountRecord) => ({
  id,
  balances,
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
