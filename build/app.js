import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import Header from "./utils/Header";
import Main from "./Main/Main";
import Footer from "./utils/Footer";
const root = createRoot(document.querySelector('.body'));
console.log("HEy");
root.render(_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Main, {}), _jsx(Footer, {})] }));
