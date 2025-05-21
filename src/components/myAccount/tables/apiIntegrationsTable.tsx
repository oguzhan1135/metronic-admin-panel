import { MdUnfoldMore } from "react-icons/md";
import { useEffect, useState } from "react";
import Switch from "@components/switch/index";
import { FaEdit, FaRegCopy } from "react-icons/fa";
import Pagination from "@components/myAccount/tables/pagination";

interface Integration {
    id: number;
    integrationName: string;
    apiKeys: string;
    dailyCalls: number;
    status: boolean;
}

const ApiIntebrationTable = () => {
    const [integrations, setIntegrations] = useState<Integration[]>([

        {
            id: 1,
            integrationName: "Quick Pay Service",
            apiKeys: "a1b2Xc3dY4ZxQvPlQp",
            dailyCalls: 10000,
            status: true
        },
        {
            id: 2,
            integrationName: "User Auth System",
            apiKeys: "f6g7Z8h9R0TfUaSdTf",
            dailyCalls: 15000,
            status: false
        },
        {
            id: 3,
            integrationName: "Data Analytics",
            apiKeys: "k1V2m3N4L5CvPbDvDa",
            dailyCalls: 5000,
            status: false
        },
        {
            id: 4,
            integrationName: "CRM Connector",
            apiKeys: "p6qM7rS8tK9BnHjCcR",
            dailyCalls: 8000,
            status: false
        }, {
            id: 5,
            integrationName: "Inventory Manager",
            apiKeys: "u1vP2wF3xJ4KlYnIlM",
            dailyCalls: 12000,
            status: true
        },
        {
            id: 6,
            integrationName: "Email Dispatcher",
            apiKeys: "z6G7bT8cQ9WxEcEdEs",
            dailyCalls: 20000,
            status: true
        },
        {
            id: 7,
            integrationName: "Order Tracking Sys",
            apiKeys: "e1E2gH3hB4iYtUvOtS",
            dailyCalls: 9500,
            status: false
        },

        {
            id: 8,
            integrationName: "Feedback Loop",
            apiKeys: "j6k7l8m9n0QaWsFlFb",
            dailyCalls: 7000,
            status: true
        },
        {
            id: 9,
            integrationName: "Payment Gateway",
            apiKeys: "1p2q3r4s5DfGhPgPy",
            dailyCalls: 25000,
            status: false
        },
        {
            id: 10,
            integrationName: "Shipping Coordinator",
            apiKeys: "t6u7v8w9x0CvBnNlSc",
            dailyCalls: 14000,
            status: true
        },



    ])
    const showCount: number = 5;
    const [upgradeData, setUpgradeData] = useState(integrations.slice(0, showCount));

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'integrationName' | 'apiKeys' | 'status' | 'dailyCalls';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('integrationName');

    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = integrations.every(item => updated[item.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        integrations.forEach((item) => {
            newCheckedItems[item.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        integrations.forEach(item => {
            initialChecked[item.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [integrations]);

    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        let filtered = [...integrations];

        filtered.sort((a, b) => {
            let valA = a[key];
            let valB = b[key];

            if (key === 'dailyCalls') {
                return newDirection === 'asc'
                    ? (valA as number) - (valB as number)
                    : (valB as number) - (valA as number);
            }

            return newDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });

        setSortKey(key);
        setSortDirection(newDirection);
        setUpgradeData(filtered.slice(0, showCount));
    };

    const [apiPause, setApiPause] = useState(false);
    return (
        <div className="grid lg:col-span-8 col-span-12 border rounded-xl">
            <div className="flex flex-col overflow-hidden ">
                <div className="border-b">
                    <div className="flex flex-row items-center justify-between py-3 px-5">
                        <span className="text-gray-900 text-b-16-16-600">API Integrations</span>
                        <div className="flex flex-row items-center gap-[30px]">
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Pause All</span>
                                <Switch status={apiPause} size="medium" setSwitch={() => setApiPause(!apiPause)} />
                            </div>
                            <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                Add New
                            </button>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col overflow-x-auto custom-scroll">
                    <table className=" border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" px-5 py-3 border border-gray-200">
                                    <div className="flex justify-center">
                                        <input
                                            type="checkbox"
                                            className={`custom-checkbox`}
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                        />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("integrationName")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer w-max">
                                        <span className="text-b-13-14-400 text-gray-700">Integration</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>

                                <th onClick={() => handleSort("apiKeys")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">API Key</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("dailyCalls")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Daily Calls</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("status")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Status</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 border border-gray-200">

                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {upgradeData.map((item) => (
                                <tr key={item.id} className="">
                                    <td className="w-[40px] px-5 py-3 border border-gray-200">
                                        <div className="flex justify-center">
                                            <input
                                                type="checkbox"
                                                checked={!!checkedItems[item.id]}
                                                onChange={() => handleCheckboxChange(item.id)}
                                                className={`custom-checkbox`}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-[15px] border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{item.integrationName}</span>
                                    </td>

                                    <td className="px-5 py-[26px] border border-gray-200">
                                        <div className="flex flex-row items-center gap-2">
                                            <span className="text-b-14-14-400 text-gray-800">{item.apiKeys}</span>
                                            <FaRegCopy className="size-4 cursor-pointer text-gray-500 hover:text-primary" />
                                        </div>
                                    </td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">
                                            {item.dailyCalls.toLocaleString()}
                                        </span>
                                    </td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <Switch
                                            status={item.status}
                                            size="medium"
                                            setSwitch={() =>
                                                setIntegrations((prev) =>
                                                    prev.map((row) =>
                                                        row.id === item.id
                                                            ? { ...row, status: !row.status }
                                                            : row
                                                    )
                                                )
                                            }
                                        />


                                    </td>

                                    <td className="px-4 py-2 text-center border-b border-l border-r border-gray-200">
                                        <div className="grid place-items-center">
                                            <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                <FaEdit className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </td>


                                </tr>
                            ))}



                        </tbody>

                    </table>

                </div>
                <Pagination setUpgradeData={setUpgradeData} data={integrations} />
            </div>


        </div>
    )
}
export default ApiIntebrationTable