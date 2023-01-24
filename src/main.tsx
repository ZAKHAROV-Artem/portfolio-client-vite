import ReactDOM from "react-dom/client";
import { createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppState from "./state/AppState";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./index.css";

export const Context = createContext({} as { app: AppState });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Context.Provider value={{ app: new AppState() }}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Context.Provider>
);
