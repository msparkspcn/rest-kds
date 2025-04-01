import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
const OrderContainer = ({ item }) => {
    const [backColor, setBackColor] = useState("bg-green-600");
    const [diff, setDiff] = useState(0);
    console.log("item:" + JSON.stringify(item));
    const displayInstTime = dayjs(item.instTime, "YYYYMMDDHHmmss").format("HH:mm:ss");
    const timeDiff = dayjs(item.instTime, "YYYY-MM-DDTHH:mm:ss", true).diff(dayjs(), "minute");
    useEffect(() => {
        const interval = setInterval(() => {
            if (timeDiff > -5) {
                setBackColor("bg-green-600");
            }
            if (timeDiff <= -5 && timeDiff > -10) {
                setBackColor("bg-yellow-600");
            }
            else if (timeDiff <= -10) {
                setBackColor("bg-red-600");
            }
            setDiff(timeDiff);
        }, 1000);
        return () => clearInterval(interval);
    });
    return (_jsxs("div", { className: "w-full h-full bg-gray-200", children: [_jsx(OrderHeader, { orderNo: item.orderNo, instTime: displayInstTime, diff: diff }), _jsx("div", { className: "overflow-y-auto max-h-[170px]", children: item.orderDtList.map((orderItem, index) => (_jsx(RenderItem, { item: orderItem, index: index }, index))) })] }));
};
/*hd 가져오고 orderNo, updTime, 경과시간 처리.(경과시간 무엇을 기준으로 하는지 확인 필요)*/
const OrderHeader = ({ orderNo, instTime, diff }) => (_jsxs("div", { className: "flex w-full h-10", children: [_jsx("div", { className: "flex-3 border border-gray-400 bg-gray-500 p-1 text-white text-2xl flex justify-start items-end", children: orderNo }), _jsx("div", { className: "flex-4 border border-gray-400 bg-gray-500 p-1 text-white text-xl flex justify-center items-end", children: instTime }), _jsxs("div", { className: "flex-3 border border-gray-400 bg-gray-500 p-1 text-white text-xl flex justify-center items-end", children: [diff * -1, "'"] })] }));
const RenderItem = ({ item, index }) => (_jsx("button", { className: "w-full h-9 text-black", onClick: () => { }, children: _jsxs("div", { className: "flex w-full", children: [_jsx("div", { className: "flex-1 border border-gray-400 bg-white-500 p-1", children: index + 1 }), _jsx("div", { className: "flex-8 border border-gray-400 bg-white-500 p-1 flex justify-start items-end", children: item.productNm }), _jsx("div", { className: "flex-1 border border-gray-400 bg-white-500 p-1", children: item.saleQty })] }) }));
export default OrderContainer;
