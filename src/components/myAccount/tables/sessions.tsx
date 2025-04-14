import Card from "../../card/card"
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Switch from "../../switch";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { AiOutlineChrome} from "react-icons/ai";
import Tyler from '../../../assets/icon/tyler-hero.svg'
import Esther from '../../../assets/icon/ester-hoeard.svg'
import Cody from '../../../assets/icon/cody-fisher.svg'
import Jacob from '../../../assets/icon/jonathan-taylor.svg'
import Arlene from '../../../assets/icon/arlene-mccoy.svg'
import { Link } from "react-router";
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
import { HiOutlineDotsVertical } from "react-icons/hi";



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


    const [cloud, setCloud] = useState(true)
    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(sessions.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(sessions.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(sessions.slice(showCount, sessions.length + showCount))

    };
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(sessions.slice(0, showCount))
        }
        else {
            setUpgradeData(sessions.slice(0, 5))
        }


    }, [showCount])
    const location = window.location.pathname

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
                            <span className="text-b-13-14-500 text-gray-700">Cloud Sync</span>
                            <Switch status={cloud} setSwitch={() => setCloud(!cloud)} size="medium" />
                        </div>
                        <select name="browsers" id="browsers" className="border rounded-md text-b-11-12-400 text-gray-800 px-2.5 py-[9px] outline-none ">
                            <option value="All Browsers" selected>All Browsers</option>
                            <option value="Chrome">Chrome</option>
                            <option value="Firefox">Firefox</option>
                            <option value="Edge">Edge</option>
                            <option value="Safari">Safari</option>
                            <option value="Brave">Brave</option>
                        </select>
                        <select name="location" id="location" className="border rounded-md text-b-11-12-400 text-gray-800 px-2.5 py-[9px] outline-none ">
                            <option value="All Locations" selected>All Locations</option>
                            <option value="London">London</option>
                            <option value="USA">USA</option>
                            <option value="Japan">Japan</option>
                            <option value="Malaysia">Malaysia</option>
                        </select>
                    </div>

                </>
            }
            content={
                <>
                    <div className="flex flex-col overflow-hidden ">

                        <div className="flex flex-col overflow-x-auto">
                            <table className=" border border-gray-200-collapse  min-w-[800px]">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-[21px] py-[11px] text-center border border-gray-200">
                                            <input type="checkbox" className="size-[18px]" name="all" id="all" />
                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200 ">
                                            <div className="flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Person</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>

                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">Browser</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200">
                                            <div className=" flex flex-row items-center gap-2">
                                                <span className="text-b-13-14-400 text-gray-700">IP Address</span>
                                                <MdOutlineUnfoldMore className="size-[14px] text-gray-600" />
                                            </div>
                                        </th>
                                        <th className="px-5 py-[13px] border border-gray-200">
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
                                                    <input type="checkbox" className="size-[18px]" name={item.ipAddress} id={item.ipAddress} />
                                                </td>
                                                <td className='px-5 py-[15px]  text-left border border-gray-200'>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        {item.personImage}
                                                        <Link to={location} className="text-b-14-14-500 hover:text-primary text-animation">{item.personName}</Link>
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
                                                    <button className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                                    </button>
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
                                <span className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400  ${selected === 2 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'}  ${showCount < sessions.length ? '' : 'hidden'}`} onClick={() => { nextData(); setSelected(2) }}>2</span>
                                <div className={`${showCount > sessions.length ? ' hidden' : 'opacity-100'}`}>
                                    <FaArrowRight className={`${sessions.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => { nextData(); setSelected(2) }} />

                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    )
}

export default SessionsTable