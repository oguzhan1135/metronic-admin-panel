import { MdUnfoldMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router";
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
import { LuSettings2 } from "react-icons/lu";
import Pagination from "@components/myAccount/tables/pagination";

interface Crew {
    id: number;
    name: string;
    mail: string;
    role: string;
    icon: React.ReactElement;
    status: string;
    location: string;
    activity: string;
}

const TeamCrewTable = () => {

    const originalCards = [
        {
            id: 1,
            name: "Tyler Hero",
            mail: "tyler.hero@gmail.com",
            role: "Super Admin",
            status: "In Office",
            location: "Estonia",
            activity: "Current session",
            icon: <img src={Tyler} className="size-9" />
        },
        {
            id: 2,
            name: "Esther Howard",
            mail: "esther.howard@gmail.com",
            role: "Editor",
            status: "On Leave",
            location: "Malaysia",
            activity: "Week ago",
            icon: <img src={Esther} className="size-9" />
        },
        {
            id: 3,
            name: "Jacob Jones",
            mail: "jacob.jones@gmail.com",
            role: "Analyst",
            status: "Remote",
            location: "Ukraine",
            activity: "Today, 9:53 am",
            icon: <img src={Jacob} className="size-9" />
        },
        {
            id: 4,
            name: "Cody Fisher",
            mail: "cody.fisher@gmail.com",
            role: "Manager",
            status: "Remote",
            location: "Canada",
            activity: "Current session",
            icon: <img src={Cody} className="size-9" />
        },
        {
            id: 5,
            name: "Leslie Alexander",
            mail: "leslie.alexander@gmail.com",
            role: "Super Admin",
            status: "In Office",
            location: "India",
            activity: "Month ago",
            icon: <img src={Arlene} className="size-9" />
        },
        {
            id: 6,
            name: "Robert Fox",
            mail: "robert.fox@gmail.com",
            role: "Developer",
            status: "In Office",
            location: "USA",
            activity: "Today, 15:02",
            icon: <img src={Tyler} className="size-9" />
        },
        {
            id: 7,
            name: "Guy Hawkins",
            mail: "guy.hawkins@gmail.com",
            role: "HR",
            status: "Remote",
            location: "Turkey",
            activity: "Current session",
            icon: <img src={Jacob} className="size-9" />
        },
        {
            id: 8,
            name: "Theresa Webb",
            mail: "theresa.webb@gmail.com",
            role: "Admin",
            status: "On Leave",
            location: "Brasil",
            activity: "Current session",
            icon: <img src={Esther} className="size-9" />
        },
        {
            id: 9,
            name: "Marvin McKinney",
            mail: "marvin.mckinney@gmail.com",
            role: "Viewer",
            status: "In Office",
            location: "Latvia",
            activity: "Week ago",
            icon: <img src={Cody} className="size-9" />
        },
        {
            id: 10,
            name: "Ronald Richards",
            mail: "ronald.richards@gmail.com",
            role: "Manager",
            status: "Remote",
            location: "Uruguay",
            activity: "Current session",
            icon: <img src={Tyler} className="size-9" />
        }
    ];

    const [cards, setCards] = useState<Crew[]>(originalCards);

    const showCount: number = 5
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = cards.every(item => updated[item.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        cards.forEach((item) => {
            newCheckedItems[item.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        cards.forEach(item => {
            initialChecked[item.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [cards]);
    const [upgradeData, setUpgradeData] = useState(cards.slice(0, showCount));

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'name' | 'role' | 'location' | 'status' | 'activity';
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

    const [status, setStatus] = useState("All");

    useEffect(() => {
        let filtered = originalCards;

        if (status === "In Office") {
            filtered = filtered.filter(item => item.status === "In Office");
        } else if (status === "Remote") {
            filtered = filtered.filter(item => item.status === "Remote");
        }
        else if (status === "On Leave") {
            filtered = filtered.filter(item => item.status === "On Leave");
        }

        if (searchTerm.trim() !== "") {
            const lower = searchTerm.toLowerCase();
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(lower) ||
                item.mail.toLowerCase().includes(lower) ||
                item.location.toLowerCase().includes(lower) ||
                item.role.toLowerCase().includes(lower)
            );
        }

        setCards(filtered);
        setUpgradeData(cards.slice(0, showCount));
    }, [status, searchTerm]);

    return (
        <div className="grid lg:col-span-8 col-span-12 border rounded-xl">
            <div className="flex flex-col overflow-hidden ">
                <div className="border-b">
                    <div className="flex flex-row items-center justify-between py-3 px-5">
                        <span className="text-gray-900 text-b-14-14-500">Showing 10 of 49,053 users</span>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-5">

                                <div className="p-2.5 border rounded-md flex flex-row items-center gap-1 bg-light-active">
                                    <CiSearch className="text-gray-600 cursor-pointer" />
                                    <input
                                        type="text"
                                        className="text-gray-600 text-b-11-12-400 border-0 bg-transparent outline-none"
                                        placeholder="Type name, team name"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <select className="border px-3 py-2 rounded-md text-b-12-12-500 text-gray-800 outline-none bg-light-active" onChange={(e) => setStatus(e.target.value)}>
                                    <option value="All">All</option>
                                    <option value="In Office">In Office</option>
                                    <option value="On Leave">On Leave</option>
                                    <option value="Remote">Remote</option>
                                </select>
                                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary-light text-b-12-12-500 text-primary border border-primary border-opacity-20 gap-[6px]">
                                    <LuSettings2 className="size-[14px] text-primary" />
                                    Filters
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col overflow-x-auto custom-scroll">
                    <table className=" border-collapse  min-w-[800px]">
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
                                <th onClick={() => handleSort("role")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Role</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("status")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Status</span>
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
                                <th className="px-5 py-3 border border-gray-200 text-center">

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
                                                checked={!!checkedItems[team.id]}
                                                onChange={() => handleCheckboxChange(team.id)}
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
                                    <td className="px-5 py-3 flex flex-col gap-2 border border-gray-200">
                                        <div className="flex flex-row gap-2.5 items-center">
                                            {team.icon}
                                            <div className="flex flex-col gap-2">
                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{team.name}</Link>
                                                <span className='text-b-12-12-400 text-gray-700'>{team.mail}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{team.role}</span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        {
                                            team.status === "In Office" ?
                                                <div className="px-2.5 py-2 bg-success-light border border-success border-opacity-20 rounded-full flex justify-center items-center">
                                                    <span className="h-2.5 w-2.5 rounded-full bg-success mr-2"></span>
                                                    <span className="text-success font-medium text-b-11-12-500">In Office</span>
                                                </div> :
                                                team.status === "On Leave" ?
                                                    <div className="px-2.5 py-2 bg-danger-light border border-danger border-opacity-20 rounded-full flex justify-center items-center">
                                                        <span className="h-2.5 w-2.5 rounded-full bg-danger mr-2"></span>
                                                        <span className="text-danger font-medium text-b-11-12-500">On Leave</span>
                                                    </div> :
                                                    <div className="px-2.5 py-2 bg-primary-light border border-primary border-opacity-20 rounded-full flex justify-center items-center">
                                                        <span className="h-2.5 w-2.5 rounded-full bg-primary mr-2"></span>
                                                        <span className="text-primary font-medium text-b-11-12-500">Remote</span>
                                                    </div>
                                        }
                                    </td>
                                    <td className="px-4 py-2 text-left border border-gray-200">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            {
                                                team.location === "Malaysia" ?
                                                    <img src={Malaysia} />
                                                    : team.location === "Estonia" ?
                                                        <img src={Estonia} />
                                                        : team.location === "India" ?
                                                            <img src={India} />
                                                            : team.location === "Spain" ?
                                                                <img src={Spain} />
                                                                : team.location === "Germany" ?
                                                                    <img src={Germany} />
                                                                    : team.location === "France" ?
                                                                        <img src={France} />
                                                                        : team.location === "Japan" ?
                                                                            <img src={Japan} />
                                                                            : team.location === "Uruguay" ?
                                                                                <img src={Uruguay} />
                                                                                : team.location === "Ukraine" ?
                                                                                    <img src={Ukraine} /> :
                                                                                    <img src={Turkey} />
                                            }
                                            <span className="text-b-14-14-400 text-gray-800">{team.location}</span>
                                        </div>
                                    </td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{team.activity}</span>
                                    </td>
                                    <td className="px-4 py-2 text-center border border-gray-200">
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
                <Pagination setUpgradeData={setUpgradeData} data={cards} />
            </div>


        </div>
    )
}
export default TeamCrewTable