import React from "react";
import { Account as ParsedStellarAccount } from "../types/stellar";
import { Consumer, ProviderContext, Accounts } from "./StellarProvider";
import { parseAccountResponse } from "./horizonApi/accounts";

interface PublicProps {
  accountId: string;
  render(props: { account: ParsedStellarAccount }): JSX.Element;
  [key: string]: any;
}

interface Props extends PublicProps {
  context: ProviderContext;
}

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

export const StellarAccount = (props: PublicProps) => (
  <Consumer>{(context) => <Account {...props} context={context} />}</Consumer>
);
