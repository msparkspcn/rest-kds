import React from "react";
interface OrderItem {
    productNm: string;
    saleQty: number;
}
interface OrderData {
    orderNo: string;
    instTime: string;
    orderDtList: OrderItem[];
}
interface OrderContainerProps {
    item: OrderData;
}
declare const OrderContainer: React.FC<OrderContainerProps>;
export default OrderContainer;
