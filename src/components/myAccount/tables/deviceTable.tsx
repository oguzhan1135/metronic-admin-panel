import Card from "../../card/card"
import { useEffect, useState } from 'react';
import Switch from "../../switch";
import { MdOutlineDesktopMac, MdOutlineUnfoldMore } from "react-icons/md";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoIosLaptop, IoIosTabletLandscape } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import Pagination from "./pagination";

interface Device {
    id: number;
    name: string;
    browser: string;
    ip: string;
    location: string;
    added: string;
    lastSession: string;
    category: "Laptop" | "Phone" | "Tablet" | "Mac";
}

const DeviceTable = () => {

    const [devices, setDevices] = useState<Device[]>([
        {
            id: 1,
            name: "Mac",
            browser: "Chrome MacOS",
            ip: "117.61.104.86",
            location: "United States",
            added: "17 hours ago",
            lastSession: "16 Aug, 2024",
            category: "Laptop",
        },
        {
            id: 2,
            name: "iPhone 12",
            browser: "Safari iOS",
            ip: "234.0.155.191",
            location: "Canada",
            added: "2 days ago",
            lastSession: "15 Aug, 2024",
            category: "Phone",
        },
        {
            id: 3,
            name: "Samsung Galaxy S20",
            browser: "Chrome Android",
            ip: "70.218.212.162",
            location: "United Kingdom",
            added: "1 day ago",
            lastSession: "14 Aug, 2024",
            category: "Phone",
        },
        {
            id: 4,
            name: "iPad Pro",
            browser: "Safari iOS",
            ip: "140.92.152.213",
            location: "Australia",
            added: "3 days ago",
            lastSession: "13 Aug, 2024",
            category: "Tablet",
        },
        {
            id: 5,
            name: "Microsoft Surface 3",
            browser: "Edge on Windows",
            ip: "214.219.147.46",
            location: "Germany",
            added: "4 hours ago",
            lastSession: "12 Aug, 2024",
            category: "Tablet",
        },
        {
            id: 6,
            name: "Dell XPS",
            browser: "Chrome Windows",
            ip: "246.44.68.100",
            location: "France",
            added: "5 days ago",
            lastSession: "11 Aug, 2024",
            category: "Laptop",
        },
        {
            id: 7,
            name: "Google Pixel 5",
            browser: "Chrome Android",
            ip: "233.182.185.28",
            location: "Japan",
            added: "6 days ago",
            lastSession: "10 Aug, 2024",
            category: "Phone",
        },
        {
            id: 8,
            name: "Huawei P30",
            browser: "Chrome Android",
            ip: "76.216.214.248",
            location: "South Korea",
            added: "1 week ago",
            lastSession: "09 Aug, 2024",
            category: "Phone",
        },
        {
            id: 9,
            name: "MacBook Air",
            browser: "Safari MacOS",
            ip: "102.150.137.255",
            location: "Italy",
            added: "8 days ago",
            lastSession: "08 Aug, 2024",
            category: "Laptop",
        },
        {
            id: 10,
            name: "Lenova ThinkPad",
            browser: "Firefox Windows",
            ip: "75.243.106.80",
            location: "Spain",
            added: "9 days ago",
            lastSession: "17 Aug, 2024",
            category: "Laptop",
        },
    ]);

    const [address, setAddress] = useState(true)

    const showCount: number = 5
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = devices.every(item => updated[item.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        devices.forEach((item) => {
            newCheckedItems[item.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        devices.forEach(item => {
            initialChecked[item.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [devices]);
    const [upgradeData, setUpgradeData] = useState(devices.slice(0, showCount));

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'name' | 'ip' | 'location' | 'added' | 'lastSession';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('name');

    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        const sortedSessions = [...devices].sort((a, b) => {
            let valA = a[key];
            let valB = b[key];

            return newDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));

        });

        setSortKey(key);
        setSortDirection(newDirection);
        setUpgradeData(sortedSessions);
    };
    return (
        <Card
            buttonStatus={true}
            buttonTitle='View all Payments'
            title='IP Addresses'
            dotStatus={false}
            dotContentStatus={true}
            dotContent={
                <>
                    <div className="flex flex-row items-center gap-[30px]">
                        <div className="flex flex-row items-center gap-2.5">
                            <span className="text-b-13-14-500 text-gray-700">IP Allowlist Enabled</span>
                            <Switch status={address} setSwitch={() => setAddress(!address)} size="medium" />
                        </div>
                        <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border border-gray-200 gap-1 cursor-pointer">
                            Add IP Address
                        </button>
                    </div>

                </>
            }
            content={
                <>
                    <div className="flex flex-col overflow-hidden ">

                        <div className="flex flex-col overflow-x-auto custom-scroll">
                            <table className=" border border-gray-200-collapse  min-w-[700px]">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-[21px] py-[11px] text-center border border-gray-200">
                                            <input
                                                type="checkbox"
                                                className={`
                                                                size-[18px] rounded-[4px] border border-gray-500 
                                                                bg-white dark:bg-black 
                                                                appearance-none cursor-pointer transition-all 
                                                                checked:bg-blue-600 dark:checked:bg-blue-600 
                                                                checked:bg-check-icon
                                                                bg-no-repeat bg-center bg-[length:12px_12px]
                                                                    `}
                                                checked={selectAll}
                                                onChange={handleSelectAll}
                                            />
                                        </th>
                                        <th onClick={() => handleSort("name")} className="px-5 py-[13px] border border-gray-200 cursor-pointer ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Device</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("ip")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">IP Address</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("location")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Location</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("added")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Added</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>

                                        <th onClick={() => handleSort("lastSession")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Last Session</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>

                                        <th className="px-5 py-[13px] border border-gray-200">

                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200">

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        upgradeData.map((item) => (
                                            <tr className="border border-gray-200-t" key={item.ip}>
                                                <td className='px-[21px]  py-[15px] text-center border border-gray-200'>
                                                    <input
                                                        type="checkbox"
                                                        checked={!!checkedItems[item.id]}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                        className={`
                                                                size-[18px] rounded-[4px] border border-gray-500 
                                                                bg-white dark:bg-black 
                                                                appearance-none cursor-pointer transition-all 
                                                                checked:bg-blue-600 dark:checked:bg-blue-600 
                                                                checked:bg-check-icon
                                                                bg-no-repeat bg-center bg-[length:12px_12px]
                                                                    `}
                                                    />
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        {
                                                            item.category === "Laptop" ?
                                                                <IoIosLaptop className="size-6 text-gray-500" /> :
                                                                item.category === "Mac" ?
                                                                    <MdOutlineDesktopMac className="size-6 text-gray-500" /> :
                                                                    item.category === "Phone" ?
                                                                        <CiMobile3 className="size-6 text-gray-500" /> :
                                                                        <IoIosTabletLandscape className="size-6 text-gray-500" />
                                                        }
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-gray-900 text-b-14-14-500">{item.name}</span>
                                                            <span className="text-b-13-14-400 text-gray-700">{item.browser}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.ip}</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.location}</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.added}</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.lastSession}</span>
                                                </td>


                                                <td className='px-[30px] py-[21px] text-right border border-gray-200'>
                                                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <FaEdit className="text-gray-600 size-[18px]" />
                                                    </div>
                                                </td>
                                                <td className='px-[30px] py-[21px] text-right border border-gray-200'>
                                                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <FaRegTrashAlt className="text-gray-600 size-[18px]" />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagination setUpgradeData={setUpgradeData} data={devices} />
                    </div>
                </>
            }
        />
    )
}

export default DeviceTable