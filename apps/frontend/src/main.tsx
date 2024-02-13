import * as React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./app";
import "./styles.css";
import { ReactQueryProvider } from "./providers/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </React.StrictMode>
);
