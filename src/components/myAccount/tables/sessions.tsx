import Card from "@components/card/card"
import { useCallback, useEffect, useState } from 'react';
import Switch from "@components/switch";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { AiOutlineChrome } from "react-icons/ai";
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Cody from '@assets/cody-fisher.svg'
import Jacob from '@assets/jonathan-taylor.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import { Link } from "react-router";
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



interface Session {
    id: number;
    personImage: React.ReactElement;
    personName: string;
    browser: string;
    ipAddress: string;
    location: string;

}

const SessionsTable = () => {

    const [sessions, setSessions] = useState<Session[]>([
        {
            id: 1,
            personImage: <img src={Esther} className="size-9" />,
            personName: "Esther Howard",
            browser: "Chrome on Mac OS X",
            ipAddress: "234.0.155.191",
            location: "Malaysia"
        },
        {
            id: 2,
            personImage: <img src={Tyler} className="size-9" />,
            personName: "Tyler Hero",
            browser: "Chrome on Windows 7",
            ipAddress: "70.218.212.162",
            location: "Estonia"
        },
        {
            id: 3,
            personImage: <img src={Arlene} className="size-9" />,
            personName: "Leslie Alexander",
            browser: "Chrome on Mac OS X",
            ipAddress: "140.219.252.213",
            location: "India"
        },
        {
            id: 4,
            personImage: <img src={Jacob} className="size-9" />,
            personName: "Brooklyn Simmons",
            browser: "Chrome on Windows 10",
            ipAddress: "214.219.147.46",
            location: "Spain"
        },
        {
            id: 5,
            personImage: <img src={Esther} className="size-9" />,
            personName: "Darlene Robertson",
            browser: "Chrome on Mac OS X",
            ipAddress: "246.44.68.100",
            location: "Germany"
        },
        {
            id: 6,
            personImage: <img src={Cody} className="size-9" />,
            personName: "Jerome Bell",
            browser: "Chrome on iOS 14",
            ipAddress: "246.44.68.100",
            location: "France"
        },
        {
            id: 7,
            personImage: <img src={Tyler} className="size-9" />,
            personName: "Devon Lane",
            browser: "Chrome on Windows 11",
            ipAddress: "233.182.185.28",
            location: "Japan"
        },
        {
            id: 8,
            personImage: <img src={Arlene} className="size-9" />,
            personName: "Kathryn Murphy",
            browser: "Chrome on Android 16",
            ipAddress: "76.216.214.248",
            location: "Uruguay"
        },
        {
            id: 9,
            personImage: <img src={Cody} className="size-9" />,
            personName: "Jacob Jones",
            browser: "Safari on Mac OS X",
            ipAddress: "102.150.137.255",
            location: "Ukraine"
        },
        {
            id: 10,
            personImage: <img src={Jacob} className="size-9" />,
            personName: "Albert Flores",
            browser: "Chrome on Mac OS X",
            ipAddress: "75.243.106.80",
            location: "Turkey"
        }
    ]);

    const [cloud, setCloud] = useState(true);
    const [selectedBrowser, setSelectedBrowser] = useState('All Browsers');
    const [selectedLocations, setSelectedLocations] = useState('All Locations');
    const [upgradeData, setUpgradeData] = useState<Session[]>([]);

    const location = window.location.pathname;
    const [currentPage, setCurrentPage] = useState(1);
    const showCount: number = 5
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = sessions.every(item => updated[item.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        sessions.forEach((item) => {
            newCheckedItems[item.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        sessions.forEach(item => {
            initialChecked[item.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [sessions]);
    const startIndex = (currentPage - 1) * showCount;
    const endIndex = startIndex + showCount;


    const filterAndPaginate = useCallback(() => {
        let filtered = sessions;

        // Browser select filter
        if (selectedBrowser !== 'All Browsers') {
            filtered = filtered.filter(item => item.browser.split(' ')[0] === selectedBrowser);
        }

        // Location select filter
        if (selectedLocations !== 'All Locations') {
            filtered = filtered.filter(item => item.location === selectedLocations);
        }

        setUpgradeData(filtered.slice(startIndex, endIndex));
    }, [selectedBrowser, selectedLocations, showCount, currentPage, sessions]);

    useEffect(() => {
        filterAndPaginate();
    }, [filterAndPaginate]);


    type SortDirection = 'asc' | 'desc';
    type SortKey = 'personName' | 'browser' | 'ipAddress' | 'location';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('personName');

    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        const sortedSessions = [...sessions].sort((a, b) => {
            let valA = a[key];
            let valB = b[key];

            return newDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });

        setSortKey(key);
        setSortDirection(newDirection);
        setUpgradeData(sortedSessions);
    };

    return (
        <Card
            buttonStatus={false}
            title='Current Sessions'
            dotStatus={false}
            dotContentStatus={true}
            dotContent={
                <>
                    <div className="flex flex-row items-center gap-[30px] flex-wrap">
                        <div className="flex flex-row items-center gap-2.5">
                            <span className="text-b-13-14-500 text-gray-700">Only Active Users</span>
                            <Switch status={cloud} setSwitch={() => setCloud(!cloud)} size="medium" />
                        </div>
                        <select
                            name="browsers"
                            id="browsers"
                            value={selectedBrowser}
                            onChange={(e) => setSelectedBrowser(e.target.value)}
                            className="border rounded-md text-b-11-12-400 text-gray-800 px-2.5 py-[9px] outline-none bg-light-active"
                        >
                            <option value="All Browsers">All Browsers</option>
                            <option value="Chrome">Chrome</option>
                            <option value="Firefox">Firefox</option>
                            <option value="Edge">Edge</option>
                            <option value="Safari">Safari</option>
                            <option value="Brave">Brave</option>
                        </select>

                        <select
                            name="locations"
                            id="locations"
                            value={selectedLocations}
                            onChange={(e) => setSelectedLocations(e.target.value)}
                            className="border rounded-md text-b-11-12-400 text-gray-800 px-2.5 py-[9px] outline-none bg-light-active">
                            <option value="All Locations">All Locations</option>
                            <option value="Estonia">Estonia</option>
                            <option value="India">India</option>
                            <option value="Spain">Spain</option>
                            <option value="Germany">Germany</option>
                            <option value="france">france</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Japan">Japan</option>
                            <option value="Malaysia">Malaysia</option>
                        </select>
                    </div>

                </>
            }
            content={
                <>
                    <div className="flex flex-col overflow-hidden ">

                        <div className="flex flex-col overflow-x-auto custom-scroll">
                            <table className=" border border-gray-200-collapse  min-w-[800px]">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-[21px] py-[11px] text-center border border-gray-200">
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
                                            />                                        </th>
                                        <th onClick={() => handleSort("personName")} className="px-5 py-[13px] border border-gray-200 cursor-pointer ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Person</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th onClick={() => handleSort("browser")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Browser</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort("ipAddress")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">IP Address</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th onClick={() => handleSort("location")} className="px-5 py-[13px] border border-gray-200 cursor-pointer">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Location</span>
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
                                                    <input
                                                        type="checkbox"
                                                        checked={!!checkedItems[item.id]}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                        className={`
                                                                size-[18px] rounded-[4px] border border-gray-500 
                                                                bg-white dark:bg-black 
                                                                appearance-none cursor-pointer transition-all 
                                                                checked:bg-blue-600 dark:checked:bg-blue-600 
                                                                checked:bg-check-icon
                                                                bg-no-repeat bg-center bg-[length:12px_12px]
                                                                    `}
                                                    />
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        {item.personImage}
                                                        <Link to={location} className="text-b-14-14-500 hover:text-primary text-animation text-gray-800">{item.personName}</Link>
                                                    </div>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <div className="flex flex-row items-center gap-[6px]">
                                                        <AiOutlineChrome className="size-4 text-gray-500" />
                                                        <span className="text-b-14-14-400 text-gray-500">{item.browser}</span>
                                                    </div>
                                                </td>
                                                <td className='px-5 py-[15px]  border border-gray-200'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.ipAddress}</span>
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <div className="flex flex-row items-center gap-[6px]">
                                                        {
                                                            item.location === "Malaysia" ?
                                                                <img src={Malaysia} />
                                                                : item.location === "Estonia" ?
                                                                    <img src={Estonia} />
                                                                    : item.location === "India" ?
                                                                        <img src={India} />
                                                                        : item.location === "Spain" ?
                                                                            <img src={Spain} />
                                                                            : item.location === "Germany" ?
                                                                                <img src={Germany} />
                                                                                : item.location === "France" ?
                                                                                    <img src={France} />
                                                                                    : item.location === "Japan" ?
                                                                                        <img src={Japan} />
                                                                                        : item.location === "Uruguay" ?
                                                                                            <img src={Uruguay} />
                                                                                            : item.location === "Ukraine" ?
                                                                                                <img src={Ukraine} /> :
                                                                                                <img src={Turkey} />
                                                        }
                                                        <span className="text-b-14-14-400 text-gray-800">{item.location}</span>
                                                    </div>
                                                </td>
                                                <td className='px-5 py-[15px]  border border-gray-200'>
                                                    <div className="flex items-center justify-center">
                                                        <button className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                            <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                                        </button>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <Pagination setUpgradeData={setUpgradeData} data={sessions} />
                    </div>
                </>
            }
        />
    )
}

export default SessionsTable