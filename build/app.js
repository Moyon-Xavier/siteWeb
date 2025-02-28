import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import Header from "./utils/Header";
import Footer from "./utils/Footer";
import { BrowserRouter } from 'react-router';
import Navigator from "./Navigator";
const root = createRoot(document.querySelector('.body'));
console.log("HEy");
root.render(_jsxs(BrowserRouter, { children: [_jsx(Header, {}), _jsx(Navigator, {}), _jsx(Footer, {})] }));
