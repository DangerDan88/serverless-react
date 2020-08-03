import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ScoreProvider } from "./context/ScoreContext";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-mc3c1nmv.us.auth0.com"
    clientId="jF5vhMEAiMz7zXSbj1LhTnwb7aNOKBMX"
    redirectUri={window.location.origin}
    audience="https://learnbuildtypeapi"
    scope="read:current_user update:current_user_metadata"
  >
    <ScoreProvider>
      <App />
    </ScoreProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
