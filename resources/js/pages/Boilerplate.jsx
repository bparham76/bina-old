import "../../css/app.css";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { CssBaseline, createTheme } from "@mui/material";
import Shabnam from "../../font/Shabnam.woff2";
import ShabnamBold from "../../font/Shabnam-Bold.woff2";
import AuthProvider from "../features/AuthProvider";

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};

const theme = createTheme({
    typography: {
        fontFamily: "shabnam, Arial",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'shabnam';
          font-style: normal;
          src: url(${Shabnam}) format('woff2');
        }

        @font-face {
          font-family: 'shabnam';
          font-style: bold;
          src: url(${ShabnamBold}) format('woff2');
        }
      `,
        },
    },
});

export default function Boilerplate(props) {
    return (
        <RTL>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthProvider>{props.children}</AuthProvider>
            </ThemeProvider>
        </RTL>
    );
}
