import { MdUnfoldMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Switch from "../../switch";
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Cody from '@assets/cody-fisher.svg'
import Jacob from '@assets/jonathan-taylor.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import Turkey from '@assets/turkey.svg'
import Ukraine from '@assets/ukraine.svg'
import Uruguay from '@assets/uruguay.svg'
import Japan from '@assets/japan.svg'
import France from '@assets/france.svg'
import Germany from '@assets/germany.svg'
import Spain from '@assets/spain.svg'
import India from '@assets/india.svg'
import Estonia from '@assets/estonia.svg'
import Malaysia from '@assets/malaysia.svg'
import { HiOutlineDotsVertical } from "react-icons/hi";
import Pagination from "./pagination";

interface Member {
    id: number;
    name: string;
    image: React.ReactElement;
    connections: number;
    location: string;
    status: "deleted" | "active" | "pending"
    recentActivity: string;

}

const PermissionTable = () => {
    const [members, setMembers] = useState<Member[]>([
        {
            id: 1,
            name: "Tyler Hero",
            connections: 26,
            image: <img src={Tyler} />,
            location: "Estonia",
            status: "active",
            recentActivity: "Current session",
        },
        {
            id: 2,
            name: "Esther Howard",
            connections: 639,
            image: <img src={Esther} />,
            location: "Malaysia",
            status: "pending",
            recentActivity: "Week ago",
        },
        {
            id: 3,
            name: "Jacob Jones",
            connections: 125,
            image: <img src={Jacob} />,
            location: "Ukraine",
            status: "active",
            recentActivity: "Today, 9:53 am",
        },
        {
            id: 4,
            name: "Cody Fisher",
            connections: 81,
            image: <img src={Cody} />,
            location: "Ukraine",
            status: "deleted",
            recentActivity: "Current session",
        },
        {
            id: 5,
            name: "Leslie Alexander",
            connections: 1203,
            image: <img src={Arlene} />,
            location: "India",
            status: "active",
            recentActivity: "Month ago",
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

        const allChecked = members.every(item => updated[item.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        members.forEach((item) => {
            newCheckedItems[item.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        members.forEach(item => {
            initialChecked[item.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [members]);
    const [upgradeData, setUpgradeData] = useState(members.slice(0, showCount));

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'name' | 'location' | 'status' | 'recentActivity';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('name');


    const [searchTerm, setSearchTerm] = useState("");
    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        let filtered = [...members];

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
        let filtered = [...members];

        if (searchTerm.trim() !== "") {
            filtered = filtered.filter(team =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                team.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                team.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
                team.recentActivity.toLowerCase().includes(searchTerm.toLowerCase())
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
    }, [searchTerm, sortKey, sortDirection, showCount, members]);

    const [group, setGroup] = useState(false);
    return (
        <div className="grid lg:col-span-8 col-span-12 border rounded-xl">
            <div className="flex flex-col overflow-hidden ">
                <div className="border-b">
                    <div className="flex flex-row items-center justify-between py-3 px-5">
                        <span className="text-gray-900 text-b-16-16-600">Team Members</span>
                        <div className="flex flex-row items-center gap-[30px]">
                            <div className="p-2.5 border rounded-md flex flex-row items-center gap-1 bg-gray-100">
                                <CiSearch className="text-gray-600 cursor-pointer" />
                                <input
                                    type="text"
                                    className="text-gray-600 text-b-11-12-400 border-0 bg-transparent outline-none"
                                    placeholder="Search Members"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Active Users</span>
                                <Switch status={group} size="medium" setSwitch={() => setGroup(!group)} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col overflow-x-auto custom-scroll">
                    <table className=" border-collapse  min-w-[1000px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" px-5 py-3 border border-gray-200">
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
                                <th onClick={() => handleSort("name")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer w-max">
                                        <span className="text-b-13-14-400 text-gray-700">Member</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>

                                <th onClick={() => handleSort("location")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Location</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("status")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Status</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("recentActivity")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Recent activity</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("recentActivity")} className="px-5 py-3 border border-gray-200">

                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {upgradeData.map((member) => (
                                <tr key={member.id} className="">
                                    <td className="w-[40px] px-5 py-3 border border-gray-200">
                                        <div className="flex justify-center">
                                            <input
                                                type="checkbox"
                                                checked={!!checkedItems[member.id]}
                                                onChange={() => handleCheckboxChange(member.id)}
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
                                    <td className="px-5 py-[15px] flex flex-col gap-2 border border-gray-200">
                                        <div className="flex flex-row gap-2.5 items-center">
                                            {member.image}
                                            <div className="flex flex-col gap-2">
                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{member.name}</Link>
                                                <span className='text-b-12-12-400 text-gray-700'>{member.connections} connections</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-5 py-[26px] text-left border border-gray-200">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            {
                                                member.location === "Malaysia" ?
                                                    <img src={Malaysia} />
                                                    : member.location === "Estonia" ?
                                                        <img src={Estonia} />
                                                        : member.location === "India" ?
                                                            <img src={India} />
                                                            : member.location === "Spain" ?
                                                                <img src={Spain} />
                                                                : member.location === "Germany" ?
                                                                    <img src={Germany} />
                                                                    : member.location === "France" ?
                                                                        <img src={France} />
                                                                        : member.location === "Japan" ?
                                                                            <img src={Japan} />
                                                                            : member.location === "Uruguay" ?
                                                                                <img src={Uruguay} />
                                                                                : member.location === "Ukraine" ?
                                                                                    <img src={Ukraine} /> :
                                                                                    <img src={Turkey} />
                                            }
                                            <span className="text-b-14-14-400 text-gray-800">{member.location}</span>
                                        </div>
                                    </td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        {
                                            member.status === "pending" ?
                                                <div className="border border-warning border-opacity-20 px-[6px] py-[5px] flex items-center justify-center w-max bg-warning-light bg-opacity-10 rounded-[4px]">
                                                    <span className="text-warning text-b-11-12-500">High</span>
                                                </div> :
                                                member.status === "active" ?
                                                    <div className="border border-success border-opacity-20 px-[6px] py-[5px] flex items-center justify-center w-max bg-success-light bg-opacity-10 rounded-[4px]">
                                                        <span className="text-success text-b-11-12-500">Active</span>
                                                    </div> :
                                                    <div className="border border-danger border-opacity-20 px-[6px] py-[5px] flex items-center justify-center w-max bg-danger-light bg-opacity-10 rounded-[4px]">
                                                        <span className="text-danger text-b-11-12-500">Deleted</span>
                                                    </div>
                                        }
                                    </td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{member.recentActivity}</span>
                                    </td>

                                    <td className="px-4 py-2 text-center border-b border-l border-r border-gray-200">
                                        <div className="grid place-items-center">
                                            <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </td>


                                </tr>
                            ))}



                        </tbody>

                    </table>

                </div>
                <Pagination setUpgradeData={setUpgradeData} data={members} />
            </div>


        </div>
    )
}
export default PermissionTable