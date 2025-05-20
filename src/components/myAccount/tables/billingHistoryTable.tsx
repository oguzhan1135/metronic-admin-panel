import Card from "@components/card/card"
import { useEffect, useState } from 'react';
import { MdOutlineUnfoldMore } from "react-icons/md";
import Pagination from "./pagination";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";

interface Project {
    id: number;
    invoice: string;
    status: string;
    amount: number;
    date: string;
}

const BillingHistoryTable = () => {
    const [billing, setBilling] = useState<Project[]>([
        {
            id: 1,
            invoice: "Invoice-2024-xd912c",
            status: "upcoming",
            amount: 24.00,
            date: "6 Aug, 2024	",
        },
        {
            id: 2,
            invoice: "Invoice-2024-rq857m",
            status: "paid",
            amount: 29.99,
            date: "17 Jun, 2024	",
        },
        {
            id: 3,
            invoice: "Invoice-2024-jk563z",
            status: "paid",
            amount: 24.00,
            date: "30 Apr, 2024	",
        },
        {
            id: 4,
            invoice: "Invoice-2024-hg234x",
            status: "declined",
            amount: 6.59,
            date: "21 Apr, 2024	",
        },
        {
            id: 5,
            invoice: "Invoice-2024-lp098y	",
            status: "paid",
            amount: 24.00,
            date: "08 Jan, 2024	",
        },
        {
            id: 6,
            invoice: "Invoice-2024-q196l",
            status: "paid",
            amount: 257.00,
            date: "6 Aug, 2024	",
        },
        {
            id: 7,
            invoice: "Invoice-2024-m113s",
            status: "paid",
            amount: 67.00,
            date: "07 Nov, 2024	",
        },
        {
            id: 8,
            invoice: "Invoice-2024-u859c",
            status: "declined",
            amount: 494.00,
            date: "16 May, 2024	",
        },
        {
            id: 9,
            invoice: "Invoice-2024-m803g",
            status: "paid",
            amount: 142.00,
            date: "16 Mar, 2024",
        },
        {
            id: 10,
            invoice: "Invoice-2024-r204u",
            status: "paid",
            amount: 35.00,
            date: "25 Mar, 2024	",
        },
    ])
    const showCount: number = 5
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = billing.every(item => updated[item.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        billing.forEach((item) => {
            newCheckedItems[item.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        billing.forEach(item => {
            initialChecked[item.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [billing]);
    const [upgradeData, setUpgradeData] = useState(billing.slice(0, showCount));



    type SortDirection = 'asc' | 'desc';
    type SortKey = 'invoice' | 'status' | 'date' | 'amount';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('invoice');

    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        const sortedSessions = [...billing].sort((a, b) => {
            let valA = a[key];
            let valB = b[key];
            if (key === 'date') {
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
            title='Billing and Invoicing'
            dotStatus={false}
            dotContentStatus={true}
            dotContent={
                <>
                    <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer dark:bg-gray-300">
                        <div className="flex flex-row items-center gap-1">
                            <FaDownload className="text-gray-600 size-[14px]" />
                            Download All
                        </div>
                    </button>
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
                                            <div className="flex justify-center">
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
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort("invoice")} className="px-5 py-[13px] border border-gray-200 cursor-pointer ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Invoice</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("status")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Status</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("date")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Date</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("date")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Due Date</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>

                                        <th onClick={() => handleSort("amount")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Amount</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>

                                        <th className="px-5 py-[13px] border border-gray-200">

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        upgradeData.map((item) => (
                                            <tr className="border-t" key={item.id}>
                                                <td className="px-[21px] py-[11px]">
                                                    <div className="flex justify-center">
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
                                                    </div>
                                                </td>
                                                <td className='px-5 py-[21px] border '>
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{item.invoice}</Link>
                                                </td>

                                                <td className='px-5 py-[21px] border'>
                                                    {
                                                        item.status === "upcoming" ?
                                                            <>
                                                                <div className="bg-warning-light px-[6px] py-[5px] border border-warning flex rounded-md items-center justify-center w-max ">
                                                                    <span className="text-b-11-12-500 text-warning">Upcoming</span>
                                                                </div>
                                                            </> :
                                                            item.status === "paid" ?
                                                                <>
                                                                    <div className="bg-success-light border border-success px-[6px] py-[5px] flex rounded-md items-center justify-center w-max ">
                                                                        <span className="text-success text-b-11-12-500">Paid</span>
                                                                    </div>
                                                                </> :

                                                                item.status === "declined" ?
                                                                    <>
                                                                        <div className="bg-danger-light px-[6px] py-[5px] border border-danger flex rounded-md items-center justify-center w-max">
                                                                            <span className="text-b-11-12-500 text-danger">Declined</span>
                                                                        </div>
                                                                    </> : null
                                                    }
                                                </td>

                                                <td className='px-5 py-[21px] text-left border'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.date}</span>
                                                </td>
                                                <td className='px-5 py-[21px] text-left border'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.date}</span>
                                                </td>
                                                <td className='px-5 py-[21px] text-left border'>
                                                    <span className="text-b-14-14-400 text-gray-800">${item.amount}</span>
                                                </td>
                                                <td className='px-5 py-[21px] text-right border'>
                                                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <span className="text-primary border-b border-dotted border-b-primary text-b-13-14-500">Download</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagination data={billing} setUpgradeData={setUpgradeData} />
                    </div>
                </>
            }
        />
    )
}

export default BillingHistoryTable