import React from "react";
import { AccountContext } from "./StellarAccount";

export interface Props {
  accountId?: string;
  [key: string]: any;
}

export const withAccount = (Component: any) => ({
  accountId,
  ...props
}: Props) => (
  <AccountContext.Consumer>
    {(contextAccount) => (
      <Component {...props} accountId={contextAccount || accountId} />
    )}
  </AccountContext.Consumer>
);
