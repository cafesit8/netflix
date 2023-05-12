import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ContextProvider>
);
