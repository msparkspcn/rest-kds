import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function DropdownMenu(
    {infoList}: {
    infoList: { infoCd: string, infoNm: string }[]; // infoList 배열을 받는 형태로 수정
}) {
    console.log("DropdownMenu infoList:" + JSON.stringify(infoList)); // 전달된 infoList 확인
    // const [selectedItem, setSelectedItem] = useState(infoList[0]);
    // const handleSelectItem = (item: { infoCd: string, infoNm: string }) => {
    //     setSelectedItem(item);
    // };
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-50 justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                    {/*<span className="text-left">{selectedItem.infoNm}</span>*/}
                    <span className="text-left">{infoList[0].infoNm}</span>
                    <ChevronDownIcon aria-hidden="true" className="ml-auto size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                <div className="py-1">
                    {infoList.map(({ infoNm }, index) => (
                        <MenuItem key={index}
                                  // onClick={() => handleSelectItem({ infoCd, infoNm })}
                        >
                            <div
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                            >
                                {infoNm}
                            </div>
                        </MenuItem>
                    ))}
                </div>
            </MenuItems>
        </Menu>
    )
}
