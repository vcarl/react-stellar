import React from "react";
import Axios, { AxiosInstance } from "axios";
import createReactContext, { Context } from "create-react-context";
import { Account } from "../types/stellar";
import { createHorizonInstance } from "./horizonApi/horizonInstance";

export interface ProviderContext {
  state: any;
  horizon: AxiosInstance;
  setState: any;
}

export interface Accounts {
  [key: string]: Account;
}

export interface State {
  accounts: Accounts;
}

interface Props {
  horizonServer: string;
}

const HorizonServerContext: Context<ProviderContext> = createReactContext<
  ProviderContext
>({
  state: {},
  horizon: Axios.create({ baseURL: "" }),
  setState: () => undefined,
});

console.log("butts and stuff");

export const { Consumer } = HorizonServerContext;

export class StellarProvider extends React.Component<Props, State> {
  state = {
    accounts: {},
  };

  instance = createHorizonInstance(this.props.horizonServer);

  render() {
    return (
      <HorizonServerContext.Provider
        value={{
          state: this.state,
          horizon: this.instance,
          setState: this.setState.bind(this),
        }}
      >
        {this.props.children}
      </HorizonServerContext.Provider>
    );
  }
}
