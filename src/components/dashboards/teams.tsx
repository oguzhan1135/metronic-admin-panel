

import AvatarGroup from "../../assets/icon/avatar-group.svg"
import { FaArrowLeft, FaArrowRight, FaRegStar, FaStar } from "react-icons/fa6";
import { MdUnfoldMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaStarHalfAlt } from "react-icons/fa";

const Teams = () => {
    const [teamsData, setTeamsData] = useState([
        { id: 1, name: "Product Management", description: "Product development & lifecycle", date: "21 Oct, 2024", raiting: 5 },
        { id: 2, name: "Marketing Team", description: "Campaigns & market analysis", date: "12 Feb, 2024", raiting: 3.5 },
        { id: 3, name: "HR Department", description: "Talent acquisition, employee welfare", date: "21 Oct, 2024", raiting: 4 },
        { id: 4, name: "Sales Division", description: "Customer relations, sales strategy", date: "21 Oct, 2024", raiting: 3 },
        { id: 5, name: "Finance Team", description: "Budgeting & financial planning", date: "20 Jul, 2024", raiting: 3.5 },
        { id: 6, name: "Engineering", description: "Software development & infrastructure", date: "21 Oct, 2024", raiting: 4.5 },
        { id: 7, name: "Quality Assuarance", description: "Product testing", date: "21 Oct, 2024", raiting: 2 },
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

    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);
    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = teamsData.every(team => updated[team.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        teamsData.forEach((team) => {
            newCheckedItems[team.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        teamsData.forEach(team => {
            initialChecked[team.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [teamsData]);

    type RatingStarsProps = {
        rating: number;
    };

    const RatingStars = ({ rating }: RatingStarsProps) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-0.5 text-warning">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} />
                ))}
                {hasHalfStar && <FaStarHalfAlt key="half" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="text-gray-400" />
                ))}
            </div>
        );
    };
    return (
        <div className="grid lg:col-span-8 col-span-12 border rounded-xl">
            <div className="flex flex-col overflow-hidden ">
                <div className="border-b">
                    <div className="flex flex-row items-center justify-between py-3 px-5">
                        <h3 className="text-gray-900 text-b-16-16-600">Teams</h3>
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
                    </div>
                </div>

                <div className="flex flex-col overflow-x-auto custom-scroll">
                    <table className=" border-collapse  min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" px-5 py-3 border border-gray-200 dark:bg-coal-500">
                                    <div className="flex justify-center">
                                        <input
                                            type="checkbox"
                                            className="size-[16px]"
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                        />
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
                            </tr>
                        </thead>
                        <tbody>
                            {upgradeData.map((team) => (
                                <tr key={team.id} className="">
                                    <td className="w-[40px] px-5 py-3 border border-gray-200">
                                        <div className="flex justify-center">
                                            <input
                                                type="checkbox"
                                                className="size-[16px]"
                                                checked={checkedItems[team.id] || false}
                                                onChange={() => handleCheckboxChange(team.id)}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 flex flex-col gap-1 border border-gray-200">
                                        <Link to={window.location.pathname} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">{team.name}</Link>
                                        <span className="text-b-12-12-400 text-gray-700">{team.description}</span>
                                    </td>
                                    <td className="px-4 py-2 text-left border border-gray-200">
                                        <RatingStars rating={team.raiting} />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200 text-gray-800 text-b-14-14-400">{team.date}</td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <img src={AvatarGroup} className="w-24 h-8" alt="" />
                                    </td>
                                </tr>
                            ))}



                        </tbody>

                    </table>

                </div>
                <div className="flex flex-row justify-between items-center p-5 flex-wrap ">
                    <div className="flex flex-row gap-3 items-center">
                        <span className="text-b-13-14-400 text-gray-700">Show</span>
                        <select

                            className="outline-none rounded-md p-2.5 cursor-pointer dark:bg-[#1F212A] text-b-11-12-400 text-gray-800"
                            value={showCount}
                            onChange={(e) => setShowCount(Number(e.target.value))}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <span className="text-b-13-14-400 text-gray-700">per page</span>
                    </div>

                    <div className="flex flex-row items-center gap-0.5">
                        <span className="pr-4">1-10 of 52</span>
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
export default Teams