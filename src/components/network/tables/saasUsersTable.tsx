import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdUnfoldMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Switch from "../../switch";
import Tyler from '../../../assets/icon/tyler-hero.svg'
import Esther from '../../../assets/icon/ester-hoeard.svg'
import Cody from '../../../assets/icon/cody-fisher.svg'
import Jacob from '../../../assets/icon/jonathan-taylor.svg'
import Arlene from '../../../assets/icon/arlene-mccoy.svg'
import { LuSettings2 } from "react-icons/lu";

interface Member {
    id: number;
    name: string;
    mail: string;
    products: string[];
    enforce2FA: boolean;
    icon: React.ReactElement;
    licanceType: string;
    licanceDate: string;
    lastPayment: string;
}

const SaasUSersTable = () => {

    const originalCards = [
        {
            id: 1,
            name: "Tyler Hero",
            mail: "tyler.hero@gmail.com",
            icon: <img src={Tyler} className="size-9" />,
            products: ["NFT", "Artwork", "Widget"],
            licanceType: "Premium",
            licanceDate: "4 months",
            enforce2FA: true,
            lastPayment: "6 Aug, 2024"
        },
        {
            id: 2,
            name: "Esther Howard",
            mail: "esther.howard@gmail.com",
            icon: <img src={Esther} className="size-9" />,
            products: ["Design", "Template"],
            licanceType: "Trial",
            licanceDate: "16 days",
            enforce2FA: false,
            lastPayment: "21 Apr, 2024"
        },
        {
            id: 3,
            name: "Jacob Jones",
            mail: "jacob.jones@gmail.com",
            icon: <img src={Jacob} className="size-9" />,
            products: ["App", "Plugin"],
            licanceType: "Premium",
            licanceDate: "2 months",
            enforce2FA: true,
            lastPayment: "14 Mar, 2024"
        },
        {
            id: 4,
            name: "Cody Fisher",
            mail: "cody.fisher@gmail.com",
            icon: <img src={Cody} className="size-9" />,
            products: ["Template", "NFT"],
            licanceType: "Standard",
            licanceDate: "",
            enforce2FA: false,
            lastPayment: "20 Apr, 2024"
        },
        {
            id: 5,
            name: "Leslie Alexander",
            mail: "leslie.alexander@gmail.com",
            icon: <img src={Esther} className="size-9" />,
            products: ["Artwork", "App"],
            licanceType: "Premium",
            licanceDate: "6 months",
            enforce2FA: false,
            lastPayment: "29 Jan, 2024"
        },
        {
            id: 6,
            name: "Robert Fox",
            mail: "robert.fox@gmail.com",
            icon: <img src={Jacob} className="size-9" />,
            products: ["Design", "Widget"],
            licanceType: "Trial",
            licanceDate: "5 days",
            enforce2FA: false,
            lastPayment: "17 Mar, 2024"
        },
        {
            id: 7,
            name: "Guy Hawkins",
            mail: "guy.hawkins@gmail.com",
            icon: <img src={Tyler} className="size-9" />,
            products: ["Plugin", "Artwork"],
            licanceType: "Standard",
            licanceDate: "",
            enforce2FA: false,
            lastPayment: "20 Jul, 2024"
        },
        {
            id: 8,
            name: "Theresa Webb",
            mail: "theresa.webb@gmail.com",
            icon: <img src={Arlene} className="size-9" />,
            products: ["NFT", "Template"],
            licanceType: "Trial",
            licanceDate: "2 days",
            enforce2FA: true,
            lastPayment: "06 May, 2024"
        },
        {
            id: 9,
            name: "Marvin McKinney",
            mail: "marvin.mckinney@gmail.com",
            icon: <img src={Cody} className="size-9" />,
            products: ["Widget", "App"],
            licanceType: "Premium",
            licanceDate: "1 month",
            enforce2FA: false,
            lastPayment: "16 Apr, 2024"
        },
        {
            id: 10,
            name: "Ronald Richards",
            mail: "ronald.richards@gmail.com",
            icon: <img src={Jacob} className="size-9" />,
            products: ["Artwork", "Design", "Plugin"],
            licanceType: "Premium",
            licanceDate: "3 months",
            enforce2FA: true,
            lastPayment: "15 Jun, 2024"
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
    const handleSwitchToggle = (id: number) => {
        setCards(prev =>
            prev.map(member =>
                member.id === id
                    ? { ...member, enforce2FA: !member.enforce2FA }
                    : member
            )
        );

        setUpgradeData(prev =>
            prev.map(member =>
                member.id === id
                    ? { ...member, enforce2FA: !member.enforce2FA }
                    : member
            )
        );
    };


    type SortDirection = 'asc' | 'desc';
    type SortKey = 'name' | 'products' | 'licanceType' | 'lastPayment' | 'enforce2FA';
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
                                        <span className="text-b-13-14-400 text-gray-700">Subscriber</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("products")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Products</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("licanceType")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">License</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("lastPayment")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Last Payment</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>

                                <th onClick={() => handleSort("enforce2FA")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Enforce 2FA</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Invoice</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
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
                                            <div className="flex flex-col gap-2">
                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{user.name}</Link>
                                                <span className="text-b-13-14-400 text-gray-700">{user.mail}</span>
                                            </div>

                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <div className="flex flex-row gap-2.5">
                                            {
                                                user.products.map((item) => (
                                                    <div className="flex items-center justify-center py-[5px] px-[6px] bg-gray-200 rounded-[4px]">
                                                        <span className="text-b-11-12-500 text-gray-700">{item}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-b-14-22-500 text-gray-800">{user.licanceType}</span>
                                            <span className={`${user.licanceDate === "" ? "hidden" : "text-b-12-12-400 text-gray-600"}`}>{user.licanceDate} {user.licanceDate === "" ? null : "left"}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-22-500 text-gray-800">{user.lastPayment}</span>
                                    </td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <Switch setSwitch={() => handleSwitchToggle(user.id)} status={user.enforce2FA} size="medium" />
                                    </td>

                                    <td className="px-4 py-2 text-center border border-gray-200">
                                        <div className="grid place-items-center">
                                            <Link to={location} className="text-primary border-b border-dotted border-b-primary">Download</Link>
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
export default SaasUSersTable