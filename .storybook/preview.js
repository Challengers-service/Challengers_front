import { GlobalStyle } from "../src/styles/global-style";
import { theme } from "../src/styles/theme";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { DialogProvider } from "../src/contexts/DialogContext";

export const decorators = [
  Story => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DialogProvider>
          <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
        </DialogProvider>
      </ThemeProvider>
    </RecoilRoot>
  ),
];
