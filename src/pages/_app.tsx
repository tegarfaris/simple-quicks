import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppPropsWithLayout } from "@simple-quicks/app/interface/main.interface";
import MainLayout from "@simple-quicks/app/layout/main-layout";
import { store } from "@simple-quicks/app/redux/store";
import "@simple-quicks/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import { Provider } from "react-redux";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const theme = extendTheme({
  fonts: {
    lato: lato.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        {Component.getLayout ? (
          <Component {...pageProps} />
        ) : (
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        )}
      </ChakraProvider>
    </Provider>
  );
}
