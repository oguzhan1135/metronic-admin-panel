import Card from "../../card/card"
import { useEffect, useState } from 'react';
import { FaArrowDownUpLock, FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Switch from "../../switch";
import { MdOutlineUnfoldMore, MdWifi } from "react-icons/md";
import { GrCircleInformation } from "react-icons/gr";
import { IoKey } from "react-icons/io5";
import { FaFileDownload, FaSearch } from "react-icons/fa";
import { GoShieldSlash } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import { BsShieldFillX } from "react-icons/bs";
import { LuNotepadText } from "react-icons/lu";

interface Security {
    id: number;
    timestampt: string;
    eventType: string;
    actionTaken: string;
    sourceIP: string;
    destinationIP: string;
    severity: string;
}

const SecurityLogTable = () => {

    const [logs, setLogs] = useState<Security[]>([
        {
            id: 1,
            timestampt: "2024-01-04T23:59:59Z",
            eventType: "Unauthorized Access",
            actionTaken: "Login Attempt Blocked",
            sourceIP: "192.168.10.15",
            destinationIP: "10.1.1.50",
            severity: "high"
        },
        {
            id: 2,
            timestampt: "2024-01-04T22:30:00Z",
            eventType: "Key Rotation",
            actionTaken: "Key Successfully Rotated",
            sourceIP: "10.0.0.1",
            destinationIP: "192.168.1.1",
            severity: "medium"
        },
        {
            id: 3,
            timestampt: "2024-01-04T21:15:25Z",
            eventType: "Suspicious Login",
            actionTaken: "User Account Locked",
            sourceIP: "172.16.254.3",
            destinationIP: "10.2.2.2",
            severity: "high"
        },
        {
            id: 4,
            timestampt: "2024-01-03T20:05:10Z",
            eventType: "Firewall Update",
            actionTaken: "New Rule Implemented",
            sourceIP: "192.168.1.100",
            destinationIP: "172.16.0.1",
            severity: "low"
        },
        {
            id: 5,
            timestampt: "2024-01-03T18:45:05Z",
            eventType: "Traffic Anomaly",
            actionTaken: "Traffic Analysis Initiated",
            sourceIP: "10.0.1.200",
            destinationIP: "10.1.2.50",
            severity: "critical"
        },
        {
            id: 6,
            timestampt: "2024-01-04T17:30:00Z",
            eventType: "Secure Data Transfer",
            actionTaken: "Transfer Completed",
            sourceIP: "192.168.2.150",
            destinationIP: "192.168.2.1",
            severity: "medium"
        },
        {
            id: 7,
            timestampt: "2024-01-04T16:00:15Z",
            eventType: "Data Backup Completed",
            actionTaken: "Backup Verified",
            sourceIP: "10.1.1.20",
            destinationIP: "192.168.4.1",
            severity: "low"
        },
        {
            id: 8,
            timestampt: "2024-01-03T14:45:30Z",
            eventType: "Network Scanning",
            actionTaken: "Scanning Completed",
            sourceIP: "172.16.0.5",
            destinationIP: "10.3.3.3",
            severity: "medium"
        },
        {
            id: 9,
            timestampt: "2024-01-04T12:05:05Z",
            eventType: "System Maintenance",
            actionTaken: "Maintenance Completed",
            sourceIP: "10.2.2.40",
            destinationIP: "192.168.5.1",
            severity: "low"
        },
        {
            id: 10,
            timestampt: "2024-01-07T13:20:00Z",
            eventType: "Access Denied",
            actionTaken: "Access Revoked",
            sourceIP: "192.168.3.30",
            destinationIP: "172.16.1.1",
            severity: "high"
        }
    ]);

    const [pushAlert, setPushAlert] = useState(true)
    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(logs.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(logs.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(logs.slice(showCount, logs.length + showCount))

    };
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(logs.slice(0, showCount))
        }
        else {
            setUpgradeData(logs.slice(0, 5))
        }


    }, [showCount])

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'timestampt' | 'eventType' | 'actionTaken' | 'sourceIP' | 'destinationIP' | 'severity';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('timestampt');

    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        const sortedLogs = [...logs].sort((a, b) => {
            let valA = a[key];
            let valB = b[key];

            if (key === 'timestampt') {
                return newDirection === 'asc'
                    ? new Date(valA).getTime() - new Date(valB).getTime()
                    : new Date(valB).getTime() - new Date(valA).getTime();
            } else {
                return newDirection === 'asc'
                    ? String(valA).localeCompare(String(valB))
                    : String(valB).localeCompare(String(valA));
            }
        });

        setSortKey(key);
        setSortDirection(newDirection);
        setLogs(sortedLogs);
        setUpgradeData(sortedLogs);
    };

    
    const [selectAll, setSelectAll] = useState(false);

    return (
        <Card
            buttonStatus={false}
            title='Security Log'
            dotStatus={false}
            dotContentStatus={true}
            dotContent={
                <>
                    <div className="flex flex-row items-center gap-[30px]">
                        <div className="flex flex-row items-center gap-2.5">
                            <span className="text-b-13-14-500 text-gray-700">Push Alerts</span>
                            <Switch status={pushAlert} setSwitch={() => setPushAlert(!pushAlert)} size="medium" />
                        </div>

                    </div>

                </>
            }
            content={
                <>
                    <div className="flex flex-col overflow-hidden ">

                        <div className="flex flex-col overflow-x-auto">
                            <table className=" border border-gray-200-collapse  min-w-[1200px]">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-[21px] py-[11px] text-center border border-gray-200">
                                            <input
                                                type="checkbox"
                                                className="size-[18px]"
                                                checked={selectAll}
                                                onChange={() => setSelectAll(prev => !prev)}
                                            />
                                        </th>
                                        <th onClick={() => handleSort('timestampt')} className="px-5 py-[13px] border border-gray-200 cursor-pointer ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Timestamp</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort('eventType')} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Event Type</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort('actionTaken')} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Action Taken</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort('sourceIP')} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Source IP</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort('destinationIP')} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Destination IP</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort('severity')} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Severity</span>
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
                                            <tr className="border border-gray-200-t" key={item.id}>
                                                <td className='px-[21px]  py-[15px] text-center border border-gray-200'>
                                                    <input type="checkbox" className="size-[18px]" name={item.timestampt} id={item.timestampt} checked={selectAll}  />
                                                </td>

                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <span className="text-b-14-14-400 text-gray-800">{item.timestampt}</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <div className="flex flex-row items-center gap-[6px]">
                                                        {
                                                            item.eventType === "Unauthorized Access" ?
                                                                <GrCircleInformation className="text-danger size-[18px]" />
                                                                : item.eventType === "Key Rotation" ?
                                                                    < IoKey className="text-warning size-[18px]" />
                                                                    : item.eventType === "Suspicious Login" ?
                                                                        <FaSearch className="text-primary size-[18px]" />
                                                                        : item.eventType === "Firewall Update" ?
                                                                            <GoShieldSlash className="text-[#FF6F1E] size-[18px]" />
                                                                            : item.eventType === "Traffic Anomaly" ?
                                                                                <TfiWorld className="text-primary size-[18px]" />
                                                                                : item.eventType === "Secure Data Transfer" ?
                                                                                    <FaArrowDownUpLock className="text-success size-[18px]" />
                                                                                    : item.eventType === "Data Backup Completed" ?
                                                                                        <FaFileDownload className="text-gray-600 size-[18px]" />
                                                                                        : item.eventType === "Network Scanning" ?
                                                                                            <MdWifi className="text-info size-[18px]" /> : item.eventType === "System Maintenance" ?
                                                                                                <FiSettings className="text-primary size-[18px]" />
                                                                                                :
                                                                                                <BsShieldFillX className="text-danger size-[18px]" />
                                                        }
                                                        <span className="text-b-14-14-400 text-gray-800">{item.eventType}</span>
                                                    </div>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <span className="text-b-14-14-400 text-gray-800">{item.actionTaken}</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <span className="text-b-14-14-400 text-gray-800">{item.sourceIP}</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <span className="text-b-14-14-400 text-gray-800">{item.destinationIP}</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    {
                                                        item.severity === "high" ?
                                                            <div className="border border-warning border-opacity-20 px-[6px] py-[5px] flex items-center justify-center w-max bg-warning bg-opacity-10 rounded-[4px]">
                                                                <span className="text-warning text-b-11-12-500">High</span>
                                                            </div>
                                                            : item.severity === "medium" ?
                                                                <div className="border border-primary border-opacity-20 px-[6px] py-[5px] flex items-center justify-center w-max bg-primary bg-opacity-10 rounded-[4px]">
                                                                    <span className="text-primary text-b-11-12-500">Medium</span>
                                                                </div>
                                                                : item.severity === "low" ?
                                                                    <div className="border border-success border-opacity-20 px-[6px] py-[5px] flex items-center justify-center w-max bg-success bg-opacity-10 rounded-[4px]">
                                                                        <span className="text-success text-b-11-12-500">Low</span>
                                                                    </div>
                                                                    :
                                                                    <div className="border border-danger border-opacity-20 px-[6px] py-[5px] flex items-center justify-center w-max bg-danger bg-opacity-10 rounded-[4px]">
                                                                        <span className="text-danger text-b-11-12-500">Critical</span>
                                                                    </div>
                                                    }
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <LuNotepadText className="text-gray-600 size-[18px]" />
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
                                <span className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400  ${selected === 2 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'}  ${showCount < logs.length ? '' : 'hidden'}`} onClick={() => { nextData(); setSelected(2) }}>2</span>
                                <div className={`${showCount > logs.length ? ' hidden' : 'opacity-100'}`}>
                                    <FaArrowRight className={`${logs.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => { nextData(); setSelected(2) }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default SecurityLogTable