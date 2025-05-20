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
import { LuSettings2 } from "react-icons/lu";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Pagination from "@components/myAccount/tables/pagination";

interface Member {
    id: number;
    name: string;
    mail: string;
    icon: React.ReactElement;
    clientId: string;
    orderValue: number;
    location: string;
    activity: string;
}

const StoreClientsTable = () => {

    const originalCards = [
        {
            id: 1,
            name: "Tyler Hero",
            mail: "tyler.hero@gmail.com",
            icon: <img src={Tyler} className="size-9" />,
            clientId: "MS-23456832",
            orderValue: 27456.09,
            location: "Spain",
            activity: "Current session"
        },
        {
            id: 2,
            name: "Esther Howard",
            mail: "esther.howard@gmail.com",
            icon: <img src={Esther} className="size-9" />,
            clientId: "MS-52967418",
            orderValue: 45800.90,
            location: "Malaysia", // kaldı
            activity: "Week ago"
        },
        {
            id: 3,
            name: "Jacob Jones",
            mail: "jacob.jones@gmail.com",
            icon: <img src={Jacob} className="size-9" />,
            clientId: "MS-43765928",
            orderValue: 63250.30,
            location: "Japan",
            activity: "Today, 9:53 am"
        },
        {
            id: 4,
            name: "Cody Fisher",
            mail: "cody.fisher@gmail.com",
            icon: <img src={Cody} className="size-9" />,
            clientId: "MS-29846571",
            orderValue: 80100.45,
            location: "France",
            activity: "Current session"
        },
        {
            id: 5,
            name: "Leslie Alexander",
            mail: "leslie.alexander@gmail.com",
            icon: <img src={Arlene} className="size-9" />,
            clientId: "MS-71639482",
            orderValue: 56500.60,
            location: "Germany",
            activity: "Month ago"
        },
        {
            id: 6,
            name: "Robert Fox",
            mail: "robert.fox@gmail.com",
            icon: <img src={Tyler} className="size-9" />,
            clientId: "MS-65438729",
            orderValue: 70342.25,
            location: "India", // kaldı
            activity: "Today, 15:02"
        },
        {
            id: 7,
            name: "Guy Hawkins",
            mail: "guy.hawkins@gmail.com",
            icon: <img src={Cody} className="size-9" />,
            clientId: "MS-58372914",
            orderValue: 40210.15,
            location: "Estonia", // değiştirildi
            activity: "Current session"
        },
        {
            id: 8,
            name: "Theresa Webb",
            mail: "theresa.webb@gmail.com",
            icon: <img src={Esther} className="size-9" />,
            clientId: "MS-47298356",
            orderValue: 52315.70,
            location: "Germany",
            activity: "Current session"
        },
        {
            id: 9,
            name: "Marvin McKinney",
            mail: "marvin.mckenney@gmail.com",
            icon: <img src={Jacob} className="size-9" />,
            clientId: "MS-83926145",
            orderValue: 68450.55,
            location: "France",
            activity: "Week ago"
        },
        {
            id: 10,
            name: "Ronald Richards",
            mail: "ronald.richards@gmail.com",
            icon: <img src={Tyler} className="size-9" />,
            clientId: "MS-72649538",
            orderValue: 73270.80,
            location: "Ukraine", // kaldı
            activity: "Current session"
        }
    ];

    const [cards, setCards] = useState<Member[]>(originalCards);
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
    type SortKey = 'name' | 'mail' | 'clientId' | 'orderValue' | 'location' | "activity";
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
                                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary-light text-b-12-12-500 text-primary border border-primary border-opacity-20 gap-[6px]">
                                    <LuSettings2 className="size-[14px] text-primary" />
                                    Filters
                                </button>
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
                                <th onClick={() => handleSort("clientId")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Client ID</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("orderValue")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Orders Value</span>
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
                                <th className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Invoice</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 border border-gray-200">

                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {upgradeData.map((user) => (
                                <tr key={user.id} className="">
                                    <td className="w-[40px] px-5 py-3 border border-gray-200">
                                        <div className="flex justify-center">
                                            <input
                                                type="checkbox"
                                                checked={!!checkedItems[user.id]}
                                                onChange={() => handleCheckboxChange(user.id)}
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
                                            {user.icon}
                                            <div className="flex flex-col gap-2">
                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{user.name}</Link>
                                                <span className="text-b-13-14-400 text-gray-700">{user.mail}</span>
                                            </div>

                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{user.clientId}</span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">${user.orderValue}</span>
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

                                    <td className="px-4 py-2 text-center border border-gray-200">
                                        <div className="grid place-items-center">
                                            <Link to={location} className="text-primary border-b border-dotted border-b-primary">View</Link>
                                        </div>
                                    </td>
                                    <td className='px-4 py-2 text-right border border-gray-200'>
                                        <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                            <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
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
export default StoreClientsTable