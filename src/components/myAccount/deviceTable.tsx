import Card from "../card/card"
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Switch from "../switch";
import { MdOutlineDesktopMac, MdOutlineUnfoldMore } from "react-icons/md";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { IoIosLaptop, IoIosTabletLandscape } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";

interface Device {
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
            name: "Mac",
            browser: "Chrome MacOS",
            ip: "117.61.104.86",
            location: "United States",
            added: "17 hours ago",
            lastSession: "16 Aug, 2024",
            category: "Laptop",
        },
        {
            name: "iPhone 12",
            browser: "Safari iOS",
            ip: "234.0.155.191",
            location: "Canada",
            added: "2 days ago",
            lastSession: "15 Aug, 2024",
            category: "Phone",
        },
        {
            name: "Samsung Galaxy S20",
            browser: "Chrome Android",
            ip: "70.218.212.162",
            location: "United Kingdom",
            added: "1 day ago",
            lastSession: "14 Aug, 2024",
            category: "Phone",
        },
        {
            name: "iPad Pro",
            browser: "Safari iOS",
            ip: "140.92.152.213",
            location: "Australia",
            added: "3 days ago",
            lastSession: "13 Aug, 2024",
            category: "Tablet",
        },
        {
            name: "Microsoft Surface 3",
            browser: "Edge on Windows",
            ip: "214.219.147.46",
            location: "Germany",
            added: "4 hours ago",
            lastSession: "12 Aug, 2024",
            category: "Tablet",
        },
        {
            name: "Dell XPS",
            browser: "Chrome Windows",
            ip: "246.44.68.100",
            location: "France",
            added: "5 days ago",
            lastSession: "11 Aug, 2024",
            category: "Laptop",
        },
        {
            name: "Google Pixel 5",
            browser: "Chrome Android",
            ip: "233.182.185.28",
            location: "Japan",
            added: "6 days ago",
            lastSession: "10 Aug, 2024",
            category: "Phone",
        },
        {
            name: "Huawei P30",
            browser: "Chrome Android",
            ip: "76.216.214.248",
            location: "South Korea",
            added: "1 week ago",
            lastSession: "09 Aug, 2024",
            category: "Phone",
        },
        {
            name: "MacBook Air",
            browser: "Safari MacOS",
            ip: "102.150.137.255",
            location: "Italy",
            added: "8 days ago",
            lastSession: "08 Aug, 2024",
            category: "Laptop",
        },
        {
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
    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(devices.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(devices.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(devices.slice(showCount, devices.length + showCount))

    };
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(devices.slice(0, showCount))
        }
        else {
            setUpgradeData(devices.slice(0, 5))
        }


    }, [showCount])
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

                        <div className="flex flex-col overflow-x-auto">
                            <table className=" border border-gray-200-collapse  min-w-[700px]">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-[21px] py-[11px] text-center border border-gray-200">
                                            <input type="checkbox" className="size-[18px]" name="all" id="all" />
                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200 ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Device</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">IP Address</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Location</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Added</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>

                                        <th className="px-5 py-[13px] border border-gray-200">
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
                                                    <input type="checkbox" className="size-[18px]" name={item.name} id={item.name} />
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
                        <div className="flex flex-row justify-between items-center p-5 flex-wrap ">
                            <div className="flex flex-row gap-3 items-center">
                                <span>Show</span>
                                <select

                                    className="outline-none rounded-md p-2.5 cursor-pointer"
                                    value={showCount}
                                    onChange={(e) => setShowCount(Number(e.target.value))}
                                >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                                <span>per page</span>
                            </div>

                            <div className="flex flex-row items-center gap-0.5">
                                <span className="pr-4">1-10 of 52</span>
                                <FaArrowLeft onClick={() => { previousData(); setSelected(1) }} className="text-gray-400 cursor-pointer" />
                                <button className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400 text-gray-800 ${selected === 1 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'} `} onClick={() => { previousData(); setSelected(1) }}>1</button>
                                <span className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400  ${selected === 2 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'}  ${showCount < devices.length ? '' : 'hidden'}`} onClick={() => { nextData(); setSelected(2) }}>2</span>
                                <div className={`${showCount > devices.length ? ' hidden' : 'opacity-100'}`}>
                                    <FaArrowRight className={`${devices.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => { nextData(); setSelected(2) }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default DeviceTable