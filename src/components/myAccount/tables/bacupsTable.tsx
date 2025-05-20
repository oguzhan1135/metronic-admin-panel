import Card from "@components/card/card"
import { useEffect, useState } from 'react';
import Switch from "@components/switch";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { LuFiles } from "react-icons/lu";
import { AiOutlinePicture } from "react-icons/ai";
import Pagination from "./pagination";

interface Backup {
    id: number;
    date: string;
    when: string;
    details: string;
    pages: number;
    media: number;
}

const BackupTable = () => {

    const [backup, setBackup] = useState<Backup[]>([
        {
            id: 1,
            when: "7 minutes ago",
            date: "24 Jan, 2024, 9:24:53 AM",
            details: "Routine Quick Backup",
            pages: 47,
            media: 235
        },
        {
            id: 2,
            when: "Today",
            date: "24 Jan, 2024, 2:09:26 AM",
            details: "Early Morning Sync",
            pages: 10,
            media: 120
        },
        {
            id: 3,
            when: "Yesterday",
            date: "23 Jan, 2024, 9:24:53 AM",
            details: "End of Day Data Archive",
            pages: 8,
            media: 109
        },
        {
            id: 4,
            when: "2 days ago",
            date: "22 Jan, 2024, 9:24:53 AM",
            details: "Midweek System Update",
            pages: 12,
            media: 150
        },
        {
            id: 5,
            when: "3 days ago",
            date: "21 Jan, 2024, 9:24:53 AM",
            details: "Routine Quick Backup",
            pages: 236,
            media: 3276
        }

    ]);
    const [cloud, setCloud] = useState(true)
    const showCount: number = 5
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);
    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = backup.every(backup => updated[backup.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        backup.forEach((backup) => {
            newCheckedItems[backup.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        backup.forEach(backup => {
            initialChecked[backup.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [backup]);

    const [upgradeData, setUpgradeData] = useState(backup.slice(0, showCount));


    type SortDirection = 'asc' | 'desc';
    type SortKey = 'when' | 'details';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('when');

    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        const sortedSessions = [...backup].sort((a, b) => {
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
            buttonStatus={false}
            title='Backups'
            dotStatus={false}
            dotContentStatus={true}
            dotContent={
                <>
                    <div className="flex flex-row items-center gap-[30px]">
                        <div className="flex flex-row items-center gap-2.5">
                            <span className="text-b-13-14-500 text-gray-700">Cloud Sync</span>
                            <Switch status={cloud} setSwitch={() => setCloud(!cloud)} size="medium" />
                        </div>

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
                                        <th onClick={() => handleSort("when")} className="px-5 py-[13px] border border-gray-200 cursor-pointer ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">When</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort("when")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Details</span>
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
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-b-14-14-500 text-gray-900">{item.when}</span>
                                                        <span className="text-b-13-14-400 text-gray-700">{item.date}</span>
                                                    </div>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-b-14-14-500 text-gray-900">{item.details}</span>
                                                        <div className="flex flex-row items-center gap-2.5">
                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                <LuFiles className="text-gray-500 size-[14px]" />
                                                                <span className="text-b-12-12-400 text-gray-600">{item.pages} pages</span>
                                                            </div>
                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                <AiOutlinePicture className="text-gray-500 size-[14px]" />
                                                                <span className="text-b-12-12-400 text-gray-600">{item.media} media</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className='px-5 py-[15px]  text-center border border-gray-200'>
                                                    <span className='text-b-12-12-500 text-gray-700'>Preview</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md  text-b-12-12-500 text-gray-700 border border-gray-200 gap-1 cursor-pointer dark:bg-gray-300">
                                                        Restore
                                                    </button>
                                                </td>

                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagination setUpgradeData={setUpgradeData} data={backup} />
                    </div>
                </>
            }
        />
    )
}

export default BackupTable