import React from 'react';
import Axios, { AxiosInstance } from 'axios';
import createReactContext, { Context } from 'create-react-context';
import { createHorizonInstance } from './HorizonApi';

export interface ProviderContext {
  state: any;
  horizonServer: AxiosInstance;
  setState: any;
}

interface Props {
  horizonServer: string;
}

const HorizonServerContext: Context<ProviderContext> = createReactContext<
  ProviderContext
>({
  state: {},
  horizonServer: Axios.create({ baseURL: '' }),
  setState: () => {},
});

export const { Consumer } = HorizonServerContext;

export class StellarProvider extends React.Component<Props> {
  state = {
    account: null,
  };

  instance = createHorizonInstance(this.props.horizonServer);

  render() {
    return (
      <HorizonServerContext.Provider
        value={{
          state: this.state,
          horizonServer: this.instance,
          setState: this.setState,
        }}
      >
        {this.props.children}
      </HorizonServerContext.Provider>
    );
  }
}
