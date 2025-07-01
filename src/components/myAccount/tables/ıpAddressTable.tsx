import Card from "@components/card/card"
import { useEffect, useState } from 'react';
import Switch from "@components/switch";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import Pagination from "./pagination";

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
    const showCount: number = 5
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = ipAddress.every(item => updated[item.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        ipAddress.forEach((item) => {
            newCheckedItems[item.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        ipAddress.forEach(item => {
            initialChecked[item.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [ipAddress]);
    const [upgradeData, setUpgradeData] = useState(ipAddress.slice(0, showCount));

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

                        <div className="flex flex-col overflow-x-auto custom-scroll">
                            <table className=" border border-gray-200-collapse  min-w-[700px]">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-coal-200">
                                        <th className="px-[21px] py-[11px] text-center border border-gray-200">
                                            <input
                                                type="checkbox"
                                                className={`custom-checkbox`}
                                                checked={selectAll}
                                                onChange={handleSelectAll}
                                            />
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
                                                    <input
                                                        type="checkbox"
                                                        checked={!!checkedItems[item.id]}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                        className={`custom-checkbox`}
                                                    />
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
                                                    <div className=" flex items-center justify-center">
                                                        <a href={"#"} className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200 ">
                                                            <FaEdit className="text-gray-600 size-[18px]" />
                                                        </a>
                                                    </div>

                                                </td>
                                                <td className='px-[30px] py-[21px] text-right border border-gray-200'>
                                                    <div className=" flex items-center justify-center">
                                                        <a href="#" className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                            <FaRegTrashAlt className="text-gray-600 size-[18px]" />
                                                        </a>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagination data={ipAddress} setUpgradeData={setUpgradeData} />
                    </div>
                </>
            }
        />
    )
}

export default IpAddresesTable