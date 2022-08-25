import { GlobalStyle } from "../src/styles/global-style";
import { theme } from "../src/styles/theme";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

export const decorators = [
  Story => (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
      </ThemeProvider>
    </RecoilRoot>
  ),
];
