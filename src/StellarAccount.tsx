import React from "react";
import { Account as ParsedStellarAccount } from "./types/stellar";
import createReactContext from "create-react-context";
import { accountSelector } from "./selectors/accounts";
import { Consumer, ProviderContext, Accounts } from "./StellarProvider";
import { parseAccountResponse } from "./horizonApi/accounts";

interface PublicProps {
  accountId: string;
  render: (props: { account: ParsedStellarAccount }) => JSX.Element;
  [key: string]: any;
}

interface Props extends PublicProps {
  context: ProviderContext;
}

export const AccountContext = createReactContext("");

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
    return (
      <AccountContext.Provider value={this.props.accountId}>
        {this.props.render(
          accountSelector(this.props.context.state, this.props.accountId),
        )}
      </AccountContext.Provider>
    );
  }
}

export const StellarAccount = (props: PublicProps) => (
  <Consumer>{(context) => <Account {...props} context={context} />}</Consumer>
);
