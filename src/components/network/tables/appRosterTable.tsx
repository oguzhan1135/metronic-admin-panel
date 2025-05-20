import { MdUnfoldMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Switch from "@components/switch";
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Cody from '@assets/cody-fisher.svg'
import Jacob from '@assets/jonathan-taylor.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuSettings2 } from "react-icons/lu";
import Slack from '@assets/slack.svg'
import Twitch from '@assets/twitch-purple.svg'
import Invision from '@assets/invision.svg'
import GoogleAnalytic from '@assets/google-analytics.svg'
import GoogleCalendar from '@assets/google-calendar.svg'
import TikTok from '@assets/tiktok.svg'
import Monetha from '@assets/monetha.svg'
import Twitter from '@assets/twitter.svg'
import Instagram from '@assets/instagram.svg'
import Jira from '@assets/jira.svg'
import GoogleDev from '@assets/google-webdev.svg'
import Azure from '@assets/azure.svg'
import { FaFacebookSquare } from "react-icons/fa";
import Youtube from '@assets/youtube.svg'
import SoloLearn from '@assets/soloLearn.svg'
import Linkedin from '@assets/linkedin.svg'
import Office from '@assets/office.svg'
import Pagination from "@components/myAccount/tables/pagination";
import React from "react";

interface Member {
    id: number;
    name: string;
    telephoneNumber: string;
    branch: string;
    connectedApps: React.ReactElement[];
    tags: string[];
    enforce2FA: boolean;
    icon: React.ReactElement;
}


const AppRosterTable = () => {

    const originalCards = [
        {
            id: 1,
            name: "Tyler Hero",
            telephoneNumber: "(212) 867-5309",
            icon: <img src={Tyler} className="size-9" />,
            branch: "Miami, FL",
            tags: ["NFT", "Design"],
            connectedApps: [
                <img src={Slack} className="size-[18px]" />,
                <img src={Twitch} className="size-[18px]" />,
                <img src={Invision} className="size-[18px]" />,
            ],
            enforce2FA: true
        },
        {
            id: 2,
            name: "Jane Smith",
            telephoneNumber: "(305) 421-7890",
            icon: <img src={Esther} className="size-9" />,
            branch: "Dallas, TX",
            tags: ["Lead", "Investor"],
            connectedApps: [
                <img src={GoogleAnalytic} className="size-[18px]" />,
                <img src={GoogleCalendar} className="size-[18px]" />,
            ],
            enforce2FA: false
        },
        {
            id: 3,
            name: "Emma Johnson",
            telephoneNumber: "(702) 314-1592",
            icon: <img src={Arlene} className="size-9" />,
            branch: "Atlanta, GA",
            tags: ["Support", "Consultant"],
            connectedApps: [
                <img src={TikTok} className="size-[18px]" />,
                <img src={Monetha} className="size-[18px]" />,
            ],
            enforce2FA: true
        },
        {
            id: 4,
            name: "Michael Brown",
            telephoneNumber: "(415) 926-6487",
            icon: <img src={Cody} className="size-9" />,
            branch: "Denver, CO",
            tags: ["Developer", "Advisor"],
            connectedApps: [
                <img src={Instagram} className="size-[18px]" />,
                <img src={Twitter} className="size-[18px]" />,
            ],
            enforce2FA: false
        },
        {
            id: 5,
            name: "Chloe Davis",
            telephoneNumber: "(512) 582-4316",
            icon: <img src={Esther} className="size-9" />,
            branch: "Seattle, WA",
            tags: ["Strategist", "Partner"],
            connectedApps: [
                <img src={Twitch} className="size-[18px]" />,
                <img src={Slack} className="size-[18px]" />,
                <img src={Invision} className="size-[18px]" />,
                <img src={TikTok} className="size-[18px]" />,
            ],
            enforce2FA: true
        },
        {
            id: 6,
            name: "William Wilson",
            telephoneNumber: "(312) 753-9801",
            icon: <img src={Jacob} className="size-9" />,
            branch: "Boston, MA",
            tags: ["Manager", "Executor"],
            connectedApps: [
                <img src={Jira} className="size-[18px]" />,
                <img src={Slack} className="size-[18px]" />,
                <img src={GoogleDev} className="size-[18px]" />,

            ],
            enforce2FA: true
        },
        {
            id: 7,
            name: "Olivia Martin",
            telephoneNumber: "(213) 674-2983",
            icon: <img src={Arlene} className="size-9" />,
            branch: "Phoenix, AZ",
            tags: ["Creator", "Analyst"],
            connectedApps: [
                <img src={Azure} className="size-[18px]" />,
            ],
            enforce2FA: false
        },
        {
            id: 8,
            name: "Ethan Garcia",
            telephoneNumber: "(617) 935-2641",
            icon: <img src={Tyler} className="size-9" />,
            branch: "Detroit, MI",
            tags: ["Vendor", "Support"],
            connectedApps: [
                <FaFacebookSquare className="size-[18px] dark:text-white" />,
                <img src={Youtube} className="size-[18px]" />,
            ],
            enforce2FA: true
        },
        {
            id: 9,
            name: "Ava Rodriguez",
            telephoneNumber: "(404) 762-1453",
            icon: <img src={Esther} className="size-9" />,
            branch: "Nashville, TN",
            tags: ["Coordinator", "Marketer"],
            connectedApps: [
                <img src={SoloLearn} className="size-[18px]" />,
                <img src={Twitch} className="size-[18px]" />,
                <img src={Linkedin} className="size-[18px]" />,
                <img src={Office} className="size-[18px]" />,
            ],
            enforce2FA: true
        },
        {
            id: 10,
            name: "Matthew Martinez",
            telephoneNumber: "(503) 894-3752",
            icon: <img src={Cody} className="size-9" />,
            branch: "Portland, OR",
            tags: ["Engineer", "Executive"],
            connectedApps: [
                <img src={Slack} className="size-[18px]" />,
            ],
            enforce2FA: false
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
    type SortKey = 'name' | 'telephoneNumber' | 'branch' | 'connectedApps' | 'tags' | 'enforce2FA';
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
                                        <span className="text-b-13-14-400 text-gray-700">Users</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("telephoneNumber")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Phone</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("branch")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Branch</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("connectedApps")} className="px-5 py-3 border border-gray-200 min-w-[160px]">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Connected Apps</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("tags")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Tags</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("enforce2FA")} className="px-5 py-3 border border-gray-200  min-w-[160px]">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Enforce 2FA</span>
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
                                            <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{team.name}</Link>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{team.telephoneNumber}</span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{team.branch}</span>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <div className="flex flex-row gap-2.5">
                                            {
                                                team.connectedApps.map((item, index) => (
                                                    <React.Fragment key={index}>
                                                        {item}
                                                    </React.Fragment>

                                                ))
                                            }
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <div className="flex flex-row gap-2.5">
                                            {
                                                team.tags.map((item, index) => (
                                                    <div key={index} className="flex items-center justify-center py-[5px] px-[6px] bg-gray-200 rounded-[4px]">
                                                        <span className="text-b-11-12-500 text-gray-700">{item}</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <Switch setSwitch={() => handleSwitchToggle(team.id)} status={team.enforce2FA} size="medium" />
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
export default AppRosterTable