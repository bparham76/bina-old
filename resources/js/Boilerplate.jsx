import "../css/app.css";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider, css, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { CssBaseline, createTheme } from "@mui/material";
import Shabnam from "../font/Shabnam.woff2";
import ShabnamBold from "../font/Shabnam-Bold.woff2";
import AuthEcosystem from "./features/auth/AuthEcosystem";
import ShopEcosystem from "./features/shop/ShopEcosystem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
});

const RTL = (props) => {
    return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
};

const theme = createTheme({
    palette: { primary: { main: "#f00" } },
    typography: {
        fontFamily: "shabnam, Arial",
    },
    components: {
        MuiButton: {
            styleOverrides: {
                outlinedPrimary: {
                    color: "lightcoral",
                    borderColor: "lightcoral",
                    ":hover": { color: "red" },
                },
                containedPrimary: {
                    backgroundColor: "lightcoral",
                },
            },
        },
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

export default function Boilerplate({ children }) {
    return (
        <RTL>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AuthEcosystem>
                    <ShopEcosystem>{children}</ShopEcosystem>
                </AuthEcosystem>
                <ToastContainer
                    style={{ zIndex: 20000 }}
                    toastClassName="font-shabnam"
                    rtl
                    position="top-right"
                    autoClose={3500}
                    pauseOnHover={false}
                    pauseOnFocusLoss={false}
                    closeOnClick={false}
                />
            </ThemeProvider>
        </RTL>
    );
}
