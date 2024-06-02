import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@simple-quicks/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const theme = extendTheme({
  fonts: {
    lato: lato.style.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
