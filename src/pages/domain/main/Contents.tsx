import OrderContainer from "/src/pages/domain/main/order/OrderContainer";
import {useState} from "react";

const Contents = (props) => {
    const ITEMS_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(props.orderList.length / ITEMS_PER_PAGE);
    const paginatedOrders = props.orderList.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    return (
        <div className="flex flex-col flex-1">
            <div className="flex-1 grid grid-cols-3 grid-rows-[repeat(3,minmax(0,1fr))] gap-4 w-full h-full p-4">
                {paginatedOrders.map((orderItem, index) => (
                    <OrderContainer key={String(index)} item={orderItem} />
                ))}
            </div>
        </div>
    )
}


export default Contents;
