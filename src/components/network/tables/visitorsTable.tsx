import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdUnfoldMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Tyler from '../../../assets/icon/tyler-hero.svg'
import Esther from '../../../assets/icon/ester-hoeard.svg'
import Cody from '../../../assets/icon/cody-fisher.svg'
import Jacob from '../../../assets/icon/jonathan-taylor.svg'
import Arlene from '../../../assets/icon/arlene-mccoy.svg'
import Turkey from '../../../assets/icon/turkey.svg'
import Ukraine from '../../../assets/icon/ukraine.svg'
import Uruguay from '../../../assets/icon/uruguay.svg'
import Japan from '../../../assets/icon/japan.svg'
import France from '../../../assets/icon/france.svg'
import Germany from '../../../assets/icon/germany.svg'
import Spain from '../../../assets/icon/spain.svg'
import India from '../../../assets/icon/india.svg'
import Estonia from '../../../assets/icon/estonia.svg'
import Malaysia from '../../../assets/icon/malaysia.svg'
import { LuSettings2 } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiChrome } from "react-icons/fi";

interface Member {
    id: number;
    name: string;
    icon: React.ReactElement;
    location: string;
    activity: string;
    ipAddress: string;
    browser: string;
}

const VisitorsTable = () => {

    const originalCards = [
        {
            id: 1,
            name: "Tyler Hero",
            icon: <img src={Tyler} className="size-9" />,
            location: "Germany",
            activity: "Current session",
            browser: "Chrome on Mac OS X",
            ipAddress: "234.0.155.191"
        },
        {
            id: 2,
            name: "Jane Smith",
            icon: <img src={Esther} className="size-9" />,
            location: "France",
            activity: "Week ago",
            browser: "Chrome on Windows 7",
            ipAddress: "70.218.212.162"
        },
        {
            id: 3,
            name: "Emma Johnson",
            icon: <img src={Arlene} className="size-9" />,
            location: "Japan",
            activity: "Today, 9:53 am",
            browser: "Chrome on Mac OS X",
            ipAddress: "140.92.152.213"
        },
        {
            id: 4,
            name: "Michael Brown",
            icon: <img src={Esther} className="size-9" />,
            location: "Malaysia",
            activity: "Current session",
            browser: "Chrome on Windows 10",
            ipAddress: "214.219.147.46"
        },
        {
            id: 5,
            name: "Chloe Davis",
            icon: <img src={Cody} className="size-9" />,
            location: "Spain",
            activity: "Month ago",
            browser: "Chrome on iOS 14",
            ipAddress: "246.44.68.100"
        },
        {
            id: 6,
            name: "William Wilson",
            icon: <img src={Arlene} className="size-9" />,
            location: "India",
            activity: "Today, 15:02",
            browser: "Chrome on Windows 11",
            ipAddress: "233.182.185.28"
        },
        {
            id: 7,
            name: "Olivia Martin",
            icon: <img src={Esther} className="size-9" />,
            location: "Turkey",
            activity: "Current session",
            browser: "Chrome on Android 16",
            ipAddress: "76.216.214.248"
        },
        {
            id: 8,
            name: "Ethan Garcia",
            icon: <img src={Jacob} className="size-9" />,
            location: "Estonia",
            activity: "Current session",
            browser: "Safari on Mac OS X",
            ipAddress: "102.150.137.255"
        },
        {
            id: 9,
            name: "Ava Rodriguez",
            icon: <img src={Arlene} className="size-9" />,
            location: "Uruguay",
            activity: "Week ago",
            browser: "Safari on Mac OS X",
            ipAddress: "75.243.106.80"
        },
        {
            id: 10,
            name: "Matthew Martinez",
            icon: <img src={Tyler} className="size-9" />,
            location: "Ukraine",
            activity: "Current session",
            browser: "Chrome on Mac OS X",
            ipAddress: "214.219.147.46"
        }
    ];

    const [cards, setCards] = useState<Member[]>(originalCards);
    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(cards.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(cards.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(cards.slice(showCount, cards.length + showCount))

    };
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(cards.slice(0, showCount))
        }
        else {
            setUpgradeData(cards.slice(0, 5))
        }


    }, [showCount])

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'name' | 'browser' | 'ipAddress' | 'location' | "activity";
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('name');

    const [searchTerm, setSearchTerm] = useState("");
    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        let filtered = [...cards];

        if (searchTerm.trim() !== "") {
            filtered = filtered.filter(team =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        filtered.sort((a, b) => {
            let valA = a[key];
            let valB = b[key];

            return newDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });

        setSortKey(key);
        setSortDirection(newDirection);
        setUpgradeData(filtered.slice(0, showCount));
    };

    useEffect(() => {
        let filtered = [...cards];
        if (searchTerm.trim() !== "") {
            filtered = filtered.filter(team =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        filtered.sort((a, b) => {
            let valA = a[sortKey];
            let valB = b[sortKey];

            return sortDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });
        setUpgradeData(filtered.slice(0, showCount));
    }, [searchTerm, sortKey, sortDirection, showCount, cards]);


    return (
        <div className="grid lg:col-span-8 col-span-12 border rounded-xl">
            <div className="flex flex-col overflow-hidden ">
                <div className="border-b">
                    <div className="flex flex-row items-center justify-between py-3 px-5">
                        <span className="text-gray-900 text-b-14-14-500">Showing 10 of 49,053 users</span>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-5">

                                <div className="p-2.5 border rounded-md flex flex-row items-center gap-1 bg-[#FCFCFC]">
                                    <CiSearch className="text-gray-600 cursor-pointer" />
                                    <input
                                        type="text"
                                        className="text-gray-600 text-b-11-12-400 border-0 bg-transparent outline-none"
                                        placeholder="Type name, team name"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary-light text-b-12-12-500 text-primary border border-primary border-opacity-20 gap-[6px]">
                                    <LuSettings2 className="size-[14px] text-primary" />
                                    Filters
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col overflow-x-auto">
                    <table className=" border-collapse  min-w-[1000px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" px-5 py-3 border border-gray-200">
                                    <div className="flex justify-center">
                                        <input type="checkbox" className="size-[16px]" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("name")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer w-max">
                                        <span className="text-b-13-14-400 text-gray-700">User</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("browser")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Browser</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("ipAddress")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">IP Address</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("location")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Location</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>

                                <th onClick={() => handleSort("activity")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Activity</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("activity")} className="px-5 py-3 border border-gray-200">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {upgradeData.map((user) => (
                                <tr key={user.id} className="">
                                    <td className="w-[40px] px-5 py-3 border border-gray-200">
                                        <div className="flex justify-center">
                                            <input type="checkbox" className="size-[16px]" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 flex flex-col gap-2 border border-gray-200">
                                        <div className="flex flex-row gap-2.5 items-center">
                                            {user.icon}
                                            <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{user.name}</Link>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <FiChrome className="size-4 text-gray-500" />
                                            <span className="text-b-14-14-400 text-gray-800">{user.browser}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{user.ipAddress}</span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            {
                                                user.location === "Malaysia" ?
                                                    <img src={Malaysia} />
                                                    : user.location === "Estonia" ?
                                                        <img src={Estonia} />
                                                        : user.location === "India" ?
                                                            <img src={India} />
                                                            : user.location === "Spain" ?
                                                                <img src={Spain} />
                                                                : user.location === "Germany" ?
                                                                    <img src={Germany} />
                                                                    : user.location === "France" ?
                                                                        <img src={France} />
                                                                        : user.location === "Japan" ?
                                                                            <img src={Japan} />
                                                                            : user.location === "Uruguay" ?
                                                                                <img src={Uruguay} />
                                                                                : user.location === "Ukraine" ?
                                                                                    <img src={Ukraine} /> :
                                                                                    <img src={Turkey} />
                                            }
                                            <span className="text-b-14-14-400 text-gray-800">{user.location}</span>
                                        </div>
                                    </td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-22-500 text-gray-800">{user.activity}</span>
                                    </td>
                                    <td className='px-4 py-2 text-center origin-center border border-gray-200'>
                                        <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                            <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-row justify-between items-center p-5 flex-wrap ">
                    <div className="flex flex-row gap-3 items-center">
                        <span className="text-gray-600 text-b-13-14-500">Show</span>
                        <select

                            className="outline-none rounded-md px-2.5 py-[9px] cursor-pointer border text-b-11-12-400 text-gray-800"
                            value={showCount}
                            onChange={(e) => setShowCount(Number(e.target.value))}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <span className="text-gray-600 text-b-13-14-500">per page</span>
                    </div>

                    <div className="flex flex-row items-center gap-0.5">
                        <span className="text-gray-600 text-b-13-14-500 pr-4">1-10 of 52</span>
                        <FaArrowLeft onClick={() => { previousData(); setSelected(1) }} className="text-gray-400 cursor-pointer" />
                        <button className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400 text-gray-800 ${selected === 1 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'} `} onClick={() => { previousData(); setSelected(1) }}>1</button>
                        <span className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400  ${selected === 2 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'}  ${showCount < cards.length ? '' : 'hidden'}`} onClick={() => { nextData(); setSelected(2) }}>2</span>
                        <div className={`${showCount > cards.length ? ' hidden' : 'opacity-100'}`}>
                            <FaArrowRight className={`${cards.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => { nextData(); setSelected(2) }} />

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default VisitorsTable