import AvatarGroup from "../../../assets/icon/avatar-group.svg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdUnfoldMore } from "react-icons/md";
import Raiting from "../../../assets/icon/raiting.svg"
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Switch from "../../switch";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TeamsTable = () => {
    const [teamsData, setTeamsData] = useState([
        { id: 1, name: "Product Management", description: "Product development & lifecycle", date: "21 Oct, 2024" },
        { id: 2, name: "Marketing Team", description: "Campaigns & market analysis", date: "12 Feb, 2024" },
        { id: 3, name: "HR Department", description: "Talent acquisition, employee welfare", date: "21 Oct, 2024" },
        { id: 4, name: "Sales Division", description: "Customer relations, sales strategy", date: "21 Oct, 2024" },
        { id: 5, name: "Finance Team", description: "Budgeting & financial planning", date: "20 Jul, 2024" },
        { id: 6, name: "Engineering", description: "Software development & infrastructure", date: "21 Oct, 2024" },
        { id: 7, name: "Quality Assuarance", description: "Product testing", date: "21 Oct, 2024" },
    ])
    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(teamsData.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(teamsData.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(teamsData.slice(showCount, teamsData.length + showCount))

    };
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(teamsData.slice(0, showCount))
        }
        else {
            setUpgradeData(teamsData.slice(0, 5))
        }


    }, [showCount])



    type SortDirection = 'asc' | 'desc';
    type SortKey = 'name' | 'date';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('name');



    const [searchTerm, setSearchTerm] = useState("");
    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        let filtered = [...teamsData];

        if (searchTerm.trim() !== "") {
            filtered = filtered.filter(team =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        filtered.sort((a, b) => {
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
        setUpgradeData(filtered.slice(0, showCount));
    };

    useEffect(() => {
        let filtered = [...teamsData];

        if (searchTerm.trim() !== "") {
            filtered = filtered.filter(team =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        filtered.sort((a, b) => {
            let valA = a[sortKey];
            let valB = b[sortKey];
            if (sortKey === 'date') {
                return sortDirection === 'asc'
                    ? new Date(valA).getTime() - new Date(valB).getTime()
                    : new Date(valB).getTime() - new Date(valA).getTime();
            }
            return sortDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });

        setUpgradeData(filtered.slice(0, showCount));
    }, [searchTerm, sortKey, sortDirection, showCount, teamsData]);

    const [group, setGroup] = useState(false);
    return (
        <div className="grid lg:col-span-8 col-span-12 border rounded-xl">
            <div className="flex flex-col overflow-hidden ">
                <div className="border-b">
                    <div className="flex flex-row items-center justify-between py-3 px-5">
                        <span className="text-gray-900 text-b-16-16-600">Teams</span>
                        <div className="flex flex-row items-center gap-[30px]">
                            <div className="p-2.5 border rounded-md flex flex-row items-center gap-1 bg-gray-100">
                                <CiSearch className="text-gray-600 cursor-pointer" />
                                <input
                                    type="text"
                                    className="text-gray-600 text-b-11-12-400 border-0 bg-transparent outline-none"
                                    placeholder="Search Teams"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Open Active Groups</span>
                                <Switch status={group} size="medium" setSwitch={() => setGroup(!group)} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col overflow-x-auto">
                    <table className=" border-collapse  min-w-[800px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" px-5 py-3 border border-gray-200">
                                    <div className="flex justify-center">
                                        <input type="checkbox" className="size-[16px]" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("name")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer w-max">
                                        <span className="text-b-13-14-400 text-gray-700">Team</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Raiting</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("date")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Last Modified</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Members</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 border border-gray-200">

                                </th>
                                <th className="px-5 py-3 border border-gray-200">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {upgradeData.map((team) => (
                                <tr key={team.id} className="">
                                    <td className="w-[40px] px-5 py-3 border border-gray-200">
                                        <div className="flex justify-center">
                                            <input type="checkbox" className="size-[16px]" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 flex flex-col gap-2 border border-gray-200">
                                        <Link to={window.location.pathname} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">{team.name}</Link>
                                        <span className="text-b-12-12-400 text-gray-700">{team.description}</span>
                                    </td>
                                    <td className="px-4 py-2 text-left border border-gray-200">
                                        <img src={Raiting} alt="" />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">{team.date}</td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <img src={AvatarGroup} className="w-24 h-8" alt="" />
                                    </td>
                                    <td className='px-4 py-2 text-right border border-gray-200'>
                                        <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                            <FaEdit className="text-gray-600 size-[18px]" />
                                        </div>
                                    </td>
                                    <td className='px-4 py-2 text-right border border-gray-200'>
                                        <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                            <FaRegTrashAlt className="text-gray-600 size-[18px]" />
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
                        <span className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400  ${selected === 2 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'}  ${showCount < teamsData.length ? '' : 'hidden'}`} onClick={() => { nextData(); setSelected(2) }}>2</span>
                        <div className={`${showCount > teamsData.length ? ' hidden' : 'opacity-100'}`}>
                            <FaArrowRight className={`${teamsData.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => { nextData(); setSelected(2) }} />

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default TeamsTable