import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./app";
import { Provider } from "./providers/store";
import "./styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
