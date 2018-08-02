import * as React from "react";
import "./App.css";

import { StellarProvider } from "../../StellarProvider";
import { StellarAccount } from "../../StellarAccount";

class App extends React.Component {
  public render() {
    return (
      <StellarProvider horizonServer="https://horizon.stellar.org/">
        <StellarAccount
          accountId="GDDVPNV6DJEKYVGPI7BCJR7KGNWOQTV55GRQGLXUDI7HWTH42VMBK6MA"
          render={({ account }) => (
            <pre>{JSON.stringify(account, null, 2)}</pre>
          )}
        />
      </StellarProvider>
    );
  }
}

export default App;
