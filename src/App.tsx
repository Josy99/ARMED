import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/themes/defaultThemes";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./routes";

export function App() {

  return (
    <ThemeProvider theme={defaultThemes}>
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

