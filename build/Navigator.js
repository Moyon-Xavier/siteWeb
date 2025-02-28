import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-rooter';
import Main from './Main/Main';
import Footer from './utils/Footer';
export default function Navigator() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Main, {}) }), _jsx(Route, { path: "/he", element: _jsx(Footer, {}) })] }));
}
