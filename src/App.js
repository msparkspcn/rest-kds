import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import './index.css';
import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Login from "./pages/domain/login/Login";
import Setting from "@/pages/domain/setting/Setting";
import Main from "@/pages/domain/main/Main";
const loading = (_jsx("div", { className: "pt-3 text-center", children: _jsx("div", { className: "sk-spinner sk-spinner-pulse" }) }));
function App() {
    return (_jsx(_Fragment, { children: _jsx(Router, { children: _jsx(Suspense, { fallback: loading, children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Route, { path: "/setting", element: _jsx(Setting, {}) }), _jsx(Route, { path: "/main", element: _jsx(Main, {}) })] }) }) }) }));
}
export default App;
