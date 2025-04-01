import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
const SegmentedControl = ({ name, segments, callback, defaultIndex = 0, controlRef }) => {
    const [activeIndex, setActiveIndex] = useState(() => defaultIndex ?? 0);
    const componentReady = useRef(false);
    useEffect(() => {
        componentReady.current = true;
    }, []);
    useEffect(() => {
        const activeSegmentRef = segments[activeIndex].ref;
        if (activeSegmentRef.current && controlRef.current) {
            const { offsetWidth, offsetLeft } = activeSegmentRef.current;
            const { style } = controlRef.current;
            style.setProperty("--highlight-width", `${offsetWidth}px`);
            style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
        }
    }, [activeIndex, controlRef, segments]);
    const onInputChange = (value, index) => {
        setActiveIndex(index);
        callback(value, index);
    };
    return (_jsx("div", { className: "w-full mt-1 mb-1", ref: controlRef, children: _jsxs("div", { className: `relative inline-flex justify-start bg-white shadow-md w-full rounded-lg p-3 overflow-hidden 
            ${componentReady.current ? "transition-all duration-300" : ""}`, children: [_jsx("div", { className: "absolute bg-blue-600 rounded-md top-2 bottom-2 left-0 right-0 z-0", style: {
                        width: "var(--highlight-width)",
                        transform: "translateX(var(--highlight-x-pos))",
                        transition: componentReady.current ? "transform 0.3s ease, width 0.3s ease" : "none"
                    } }), segments?.map((item, i) => (_jsxs("div", { className: `relative w-1/2 text-center z-10 ${i === activeIndex ? "text-white" : "text-black"}`, ref: item.ref, children: [_jsx("input", { type: "radio", value: item.value, id: item.label, name: name, onChange: () => onInputChange(item.value, i), checked: i === activeIndex, className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer" }), _jsx("label", { htmlFor: item.label, className: "block font-bold p-2 cursor-pointer transition-colors duration-500", children: item.label })] }, item.value)))] }) }));
};
export default SegmentedControl;
