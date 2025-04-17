import Card from "../../card/card"
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Switch from "../../switch";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

interface Address {
    id: number;
    status: string;
    address: string;
    lastSession: string;
    label: string;
    method: string;
}

const IpAddresesTable = () => {
    const [ipAddress, setIPaddress] = useState<Address[]>([
        {
            id: 1,
            status: "active",
            address: "192.168.1.1",
            lastSession: "6 Aug, 2024",
            label: "HR Dept",
            method: "Basic auth",
        },
        {
            id: 2,
            status: "",
            address: "2001:db8:0:1234:0:567:8:5",
            lastSession: "22 Jul 2024",
            label: "Guy Hawkins",
            method: "Web",
        },
        {
            id: 3,
            status: "inactive",
            address: "2001:db8:0:1234:0:567:8:4",
            lastSession: "18 Jul, 2024",
            label: "Sales Dept",
            method: "SSH",
        },
        {
            id: 4,
            status: "active",
            address: "192.168.1.2",
            lastSession: "15 Jul, 2024",
            label: "Sales Dept",
            method: "Kerberos",
        },
        {
            id: 5,
            status: "warning",
            address: "2001:db8:0:1234:0:567:8:3",
            lastSession: "6 Aug, 2024",
            label: "HR Dept",
            method: "Basic auth",
        },
        {
            id: 6,
            status: "warning",
            address: "10.0.0.2",
            lastSession: "28 Jul, 2024",
            label: "Finance Dept",
            method: "API Key",
        },
        {
            id: 7,
            status: "active",
            address: "192.168.1.4",
            lastSession: "16 Jul, 2024",
            label: "Design Dept",
            method: "FIDO U2F",
        },
        {
            id: 8,
            status: "active",
            address: "2001:db8:0:1234:0:567:8:6",
            lastSession: "11 Aug, 2024",
            label: "Compliance Dept",
            method: "OpenID",
        },
        {
            id: 9,
            status: "active",
            address: "2001:db8:0:1234:0:567:8:9",
            lastSession: "19 Jul, 2024",
            label: "Alice Smith",
            method: "Biometric",
        },
        {
            id: 10,
            status: "inactive",
            address: "192.168.1.1",
            lastSession: "6 Aug, 2024",
            label: "HR Dept",
            method: "Basic auth",
        },
    ])
    const [address, setAddress] = useState(true)
    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(ipAddress.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(ipAddress.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(ipAddress.slice(showCount, ipAddress.length + showCount))

    };
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(ipAddress.slice(0, showCount))
        }
        else {
            setUpgradeData(ipAddress.slice(0, 5))
        }


    }, [showCount])

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'status' | 'address' | 'lastSession' | 'label' | 'method';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('status');

    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        const sortedSessions = [...ipAddress].sort((a, b) => {
            let valA = a[key];
            let valB = b[key];
            if (key === 'lastSession') {
                return newDirection === 'asc'
                    ? new Date(valA).getTime() - new Date(valB).getTime()
                    : new Date(valB).getTime() - new Date(valA).getTime();
            }
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

                        <div className="flex flex-col overflow-x-auto">
                            <table className=" border border-gray-200-collapse  min-w-[700px]">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-[21px] py-[11px] text-center border border-gray-200">
                                            <input type="checkbox" className="size-[18px]" name="all" id="all" />
                                        </th>
                                        <th onClick={() => handleSort("status")} className="px-5 py-[13px] border border-gray-200 cursor-pointer ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Status</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("address")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">IP Address</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("lastSession")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Last session</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("label")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Label</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>

                                        <th onClick={() => handleSort("method")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Method</span>
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
                                            <tr className="border border-gray-200-t" key={item.id}>
                                                <td className='px-[21px]  py-[26px] text-center border border-gray-200'>
                                                    <input type="checkbox" className="size-[18px]" name={item.address} id={item.address} />
                                                </td>

                                                <td className="px-5 py-[26px] text-center align-middle">
                                                    <span className="flex justify-center items-center">
                                                        {
                                                            item.status === "active" ? (
                                                                <span className="w-2 h-2 bg-success rounded-full"></span>
                                                            ) : item.status === "warning" ? (
                                                                <span className="w-2 h-2 bg-warning rounded-full"></span>
                                                            ) : (
                                                                <span className="w-2 h-2 bg-danger rounded-full"></span>
                                                            )
                                                        }
                                                    </span>
                                                </td>


                                                <td className='px-5 py-[26px]  text-left border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.address}</span>
                                                </td>
                                                <td className='px-5 py-[26px]  text-left border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.lastSession}</span>
                                                </td>
                                                <td className='px-5 py-[26px]  text-left border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.label}</span>
                                                </td>
                                                <td className='px-5 py-[26px]  text-left border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.method}</span>
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
                                <span className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400  ${selected === 2 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'}  ${showCount < ipAddress.length ? '' : 'hidden'}`} onClick={() => { nextData(); setSelected(2) }}>2</span>
                                <div className={`${showCount > ipAddress.length ? ' hidden' : 'opacity-100'}`}>
                                    <FaArrowRight className={`${ipAddress.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => { nextData(); setSelected(2) }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default IpAddresesTable