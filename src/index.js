import React from "react";
import ReactDOM from "react-dom";
import reducer, { initialState } from "./states/reducer";
import { StateProvider } from "./states/StateProvider";

import App from "./App/index.js";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
