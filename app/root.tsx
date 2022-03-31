import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
    
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })


export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

const Document = () => {
  return (
    <body>
       <ColorModeScript initialColorMode={"dark"} />
      <ChakraProvider>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
            
      </ChakraProvider>
    </body>
  );
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <Document />
    </html>
  );
}
