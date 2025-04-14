import Card from "../../card/card"
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Switch from "../../switch";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { LuFiles } from "react-icons/lu";
import { AiOutlinePicture } from "react-icons/ai";

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
    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(backup.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(backup.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(backup.slice(showCount, backup.length + showCount))

    };
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(backup.slice(0, showCount))
        }
        else {
            setUpgradeData(backup.slice(0, 5))
        }


    }, [showCount])
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

                        <div className="flex flex-col overflow-x-auto">
                            <table className=" border border-gray-200-collapse  min-w-[700px]">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-[21px] py-[11px] text-center border border-gray-200">
                                            <input type="checkbox" className="size-[18px]" name="all" id="all" />
                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200 ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">When</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200">
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
                                                    <input type="checkbox" className="size-[18px]" name={item.when} id={item.details} />
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
                                                    <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md  text-b-12-12-500 text-gray-700 border border-gray-200 gap-1 cursor-pointer">
                                                        Restore
                                                    </button>
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
                                <span className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400  ${selected === 2 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'}  ${showCount < backup.length ? '' : 'hidden'}`} onClick={() => { nextData(); setSelected(2) }}>2</span>
                                <div className={`${showCount > backup.length ? ' hidden' : 'opacity-100'}`}>
                                    <FaArrowRight className={`${backup.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => { nextData(); setSelected(2) }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default BackupTable