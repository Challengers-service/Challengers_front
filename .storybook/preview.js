import { GlobalStyle } from "../src/styles/global-style";
import { theme } from "../src/styles/theme";
import { MemoryRouter } from "react-router";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { DialogProvider } from "../src/contexts/DialogContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();
const queryClient = new QueryClient();
export const decorators = [
  Story => (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <DialogProvider>
            <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
          </DialogProvider>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  ),
  mswDecorator,
];
