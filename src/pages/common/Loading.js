import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Loading = () => {
    return (_jsxs("div", { className: "flex flex-col gap-3", style: {
            position: 'absolute',
            background: '#00000099',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh'
        }, children: [_jsx("div", { className: "bg-white animate-spin h-10 w-10 border-4 border-red-500" }), _jsx("p", { className: "text-white", children: "\uCC98\uB9AC\uC911\uC785\uB2C8\uB2E4..." })] }));
};
export default Loading;
