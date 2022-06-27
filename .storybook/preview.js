import { GlobalStyle } from "../src/styles/global-style";
import { theme } from "../src/styles/theme";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
    </ThemeProvider>
  ),
];
