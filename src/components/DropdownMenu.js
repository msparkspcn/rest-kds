import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
export default function DropdownMenu({ infoList }) {
    console.log("DropdownMenu infoList:" + JSON.stringify(infoList)); // 전달된 infoList 확인
    // const [selectedItem, setSelectedItem] = useState(infoList[0]);
    // const handleSelectItem = (item: { infoCd: string, infoNm: string }) => {
    //     setSelectedItem(item);
    // };
    return (_jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [_jsx("div", { children: _jsxs(MenuButton, { className: "inline-flex w-50 justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50", children: [_jsx("span", { className: "text-left", children: infoList[0].infoNm }), _jsx(ChevronDownIcon, { "aria-hidden": "true", className: "ml-auto size-5 text-gray-400" })] }) }), _jsx(MenuItems, { transition: true, className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in", children: _jsx("div", { className: "py-1", children: infoList.map(({ infoNm }, index) => (_jsx(MenuItem, { children: _jsx("div", { className: "block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden", children: infoNm }) }, index))) }) })] }));
}
