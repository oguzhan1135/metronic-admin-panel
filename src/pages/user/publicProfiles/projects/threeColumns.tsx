import Card from "../../../../components/card/card"
import Verify from '../../../../assets/icon/verify.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import { CiGrid2H, CiGrid41, CiMail } from "react-icons/ci"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router"
import Menu from "../../../../components/publicProfile/hovermenu"
import Plurk from '../../../../assets/icon/plurk.svg'
import PlurtkAvatar from '../../../../assets/icon/plurk-avatar-group.svg'
import Telegram from '../../../../assets/icon/telegram.svg'
import KickStarter from '../../../../assets/icon/kickstarter.svg'
import QuickBooks from '../../../../assets/icon/quickbooks.svg'
import GoogleAnalytics from '../../../../assets/icon/google-analytics.svg'
import GoogleWeb from '../../../../assets/icon/google-webdev.svg'
import Figma from '../../../../assets/icon/figma.svg'
import Btcchina from '../../../../assets/icon/btcchina.svg'
import Patientory from '../../../../assets/icon/patientory.svg'
import PlastickSCM from '../../../../assets/icon/plastic-scm.svg'
import Jira from '../../../../assets/icon/jira-work.svg'
import Perrier from '../../../../assets/icon/perrier.svg'
import { useState } from "react"
import { HiOutlineDotsVertical } from "react-icons/hi"
import CardMore from "../../../../components/more/cardMore"
interface Project {
    id: number;
    icon: React.ReactElement;
    projectName: string;
    content: string;
    startDate: string;
    endDate: string;
    progress: number;
}

const ThreeColumns = () => {
    const location = window.location.pathname

    const [project, setProject] = useState<Project[]>([
        {
            id: 1,
            projectName: "Phoenix SaaS",
            content: "Real-time photo sharing app",
            icon: <img src={Plurk} alt="plurk-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 65,
        },
        {
            id: 2,
            projectName: "Dreamweaver",
            content: "Social media photo sharing",
            icon: <img src={KickStarter} alt="KickStarter-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 0,
        },
        {
            id: 3,
            projectName: "Radiant Wave",
            content: "Real-time photo sharing app",
            icon: <img src={Telegram} alt="telegram-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 100,
        },
        {
            id: 4,
            projectName: "Horizon Quest",
            content: "Team communication and collaboration",
            icon: <img src={QuickBooks} alt="QuickBooks-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 20,
        },
        {
            id: 5,
            projectName: "Golden Gate Analytics",
            content: "Golden Gate Analytics",
            icon: <img src={GoogleAnalytics} alt="GoogleAnalytics-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 0,
        },
        {
            id: 6,
            projectName: "Celestial SaaS",
            content: "CRM App application to HR efficienty",
            icon: <img src={GoogleWeb} alt="GoogleWeb-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 100,
        },
        {
            id: 7,
            projectName: "Nexus Design System",
            content: "Online discussion and forum platform",
            icon: <img src={Figma} alt="Figma-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 0,
        },
        {
            id: 8,
            projectName: "Neptune App",
            content: "Team messaging and collaboration",
            icon: <img src={Btcchina} alt="Btcchina-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 38,
        },
        {
            id: 9,
            projectName: "SparkleTech",
            content: "Meditation and relaxation app",
            icon: <img src={Patientory} alt="Patientory-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 0,
        },
        {
            id: 10,
            projectName: "EmberX CRM",
            content: "Commission-free stock trading",
            icon: <img src={Jira} alt="Jira-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 100,
        },
        {
            id: 11,
            projectName: "LunaLink",
            content: "Meditation and relaxation app",
            icon: <img src={PlastickSCM} alt="PlastickSCM-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 0,
        },
        {
            id: 12,
            projectName: "TerraCrest App",
            content: "Video conferencing software",
            icon: <img src={Perrier} alt="parrier-icon" />,
            startDate: "Mar 06",
            endDate: "Dec 21",
            progress: 100,
        }
    ])
    const [selectedCardView, setSelectedCardView] = useState("card");
    const [more, setMore] = useState(false)

    return (
        <div className="flex flex-col gap-10  ">
            <div className="flex flex-col gap-3 items-center justify-center bg-mask bg-cover">
                <div className="rounded-full border border-success">
                    <img src={Jennifer} alt="" className='size-[100px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Jennifer Klabber</span>
                    <img src={Verify} alt="" />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <div className="flex flex-row items-center gap-[5px]">
                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>KeenThemes</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <SlLocationPin className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>SF, Bay Area</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <CiMail className='text-gray-600 text-b-14-14-500' />
                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary text-animation'>jenny@kteam.com</Link>
                    </div>
                </div>
            </div>
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex items-center justify-between">
                <h1 className="text-b-18-18-600 text-gray-900">12 Projects</h1>
                <div className="rounded-lg border p-1 bg-gray-200 flex flex-row items-center gap-1">
                    <div onClick={() => setSelectedCardView("card")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "card" ? " border-gray-200 bg-white" : "border-transparent"} cursor-pointer hover:bg-white text-animation`}>
                        <CiGrid41 className="text-gray-600 size-[14px]" />
                    </div>
                    <div onClick={() => setSelectedCardView("list")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "list" ? "border-gray-200 bg-white" : "border-transparent"} cursor-pointer hover:bg-white text-animation`}>
                        <CiGrid2H className="text-gray-600 size-[14px]" />
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1">
                {
                    project.map((item) => (
                        <>
                            {
                                selectedCardView === "card" ?
                                    <>
                                        <Card buttonStatus={false} dotStatus={false}
                                            content={
                                                <div className="flex flex-col gap-[30px] p-[30px]">
                                                    <div className="flex flex-row items-center justify-between">
                                                        <div className="p-2.5 bg-gray-100 rounded-lg">
                                                            {item.icon}
                                                        </div>

                                                        {
                                                            item.progress < 100 && item.progress != 0 ?
                                                                <>
                                                                    <div className="p-2 rounded-[4px] bg-primary-light border-primary border-opacity-10 border flex items-center justify-center">
                                                                        <span className="text-primary text-b-11-12-500">In Progress</span>
                                                                    </div>

                                                                </> : item.progress == 0 ?
                                                                    <>
                                                                        <div className="p-2 rounded-[4px] bg-gray-100  border-opacity-10 border flex items-center justify-center">
                                                                            <span className="text-primary text-b-11-12-500">Upcoming</span>
                                                                        </div>
                                                                    </> :
                                                                    <div className="p-2 rounded-[4px] bg-primary-light border-success border-opacity-10 border flex items-center justify-center">
                                                                        <span className="text-success text-b-11-12-500">Completed</span>
                                                                    </div>
                                                        }
                                                    </div>
                                                    <div className="flex flex-col gap-2.5">
                                                        <Link to={location} className="text-b-18-18-500 text-gray-900 hover:text-primary text-animation">{item.projectName}</Link>
                                                        <span className="text-b-14-14-400 text-gray-700">{item.content}</span>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-5">
                                                        <div className="flex flex-row items-center gap-[3px]">
                                                            <span className="text-gray-600 text-b-14-14-400">Start</span>
                                                            <span className="text-b-14-14-500 text-gray-800">{item.startDate}</span>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-[3px]">
                                                            <span className="text-gray-600 text-b-14-14-400">End</span>
                                                            <span className="text-b-14-14-500 text-gray-800">{item.endDate}</span>
                                                        </div>
                                                    </div>
                                                    {
                                                        item.progress < 100 && item.progress != 0 ?
                                                            <>
                                                                <div className="bg-primary-light rounded-[4px] h-[6px] w-full relative">
                                                                    <span className={`absolute left-0 top-0 block bg-primary h-[6px] rounded-[4px]`} style={{ width: `${item.progress}%` }}></span>
                                                                </div>

                                                            </> : item.progress == 0 ?
                                                                <>
                                                                    <div className="bg-gray-300 rounded-[4px] h-[6px] w-full relative">
                                                                    </div>
                                                                </> :
                                                                <div className="bg-primary-light rounded-[4px] h-[6px] w-full relative">
                                                                    <span className=" absolute left-0 top-0 block bg-success w-full h-[6px] rounded-[4px]"></span>
                                                                </div>
                                                    }


                                                    <img src={PlurtkAvatar} alt="avatar-group" className="w-[72px] h-[30px]" />
                                                </div>
                                            }
                                        />
                                    </> : null

                            }
                        </>
                    ))
                }
            </div>

            {
                selectedCardView === "list" ?
                    < div className="flex flex-col gap-5">
                        {
                            project.map((item) => (
                                <>
                                    <Card buttonStatus={false} dotStatus={false}
                                        content={
                                            <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-[30px] p-[30px]">
                                                <div className="flex flex-row items-center gap-[14px]">
                                                    {item.icon}
                                                    <div className="flex flex-col gap-3">
                                                        <Link to={location} className="text-b-18-18-500 text-gray-900 hover:text-primary text-animation">{item.projectName}</Link>
                                                        <span className="text-b-14-14-400 text-gray-700">{item.content}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-center w-full  gap-5 max-w-[500px] flex-wrap md:flex-nowrap">
                                                    {
                                                        item.progress < 100 && item.progress != 0 ?
                                                            <>
                                                                <div className="p-2 min-w-[80px] rounded-[4px] bg-primary-light border-primary border-opacity-10 border flex items-center justify-center">
                                                                    <span className="text-primary text-b-11-12-500">In Progress</span>
                                                                </div>

                                                            </> : item.progress == 0 ?
                                                                <>
                                                                    <div className="p-2 min-w-[80px] rounded-[4px] bg-gray-100  border-opacity-10 border flex items-center justify-center">
                                                                        <span className="text-primary text-b-11-12-500">Upcoming</span>
                                                                    </div>
                                                                </> :
                                                                <div className="p-2 min-w-[80px] rounded-[4px] bg-primary-light border-success border-opacity-10 border flex items-center justify-center">
                                                                    <span className="text-success text-b-11-12-500">Completed</span>
                                                                </div>
                                                    }
                                                    {
                                                        item.progress < 100 && item.progress != 0 ?
                                                            <>
                                                                <div className="bg-primary-light rounded-[4px] h-[6px] w-full min-w-[140px] relative">
                                                                    <span className={`absolute left-0 top-0 block bg-primary h-[6px] rounded-[4px]`} style={{ width: `${item.progress}%` }}></span>
                                                                </div>

                                                            </> : item.progress == 0 ?
                                                                <>
                                                                    <div className="bg-gray-300 rounded-[4px] h-[6px] w-full relative">
                                                                    </div>
                                                                </> :
                                                                <div className="bg-primary-light rounded-[4px] h-[6px] w-full relative">
                                                                    <span className=" absolute left-0 top-0 block bg-success w-full h-[6px] rounded-[4px]"></span>
                                                                </div>
                                                    }
                                                    <img src={PlurtkAvatar} alt="avatar-group" className="w-[72px] h-[30px]" />

                                                    <div className="relative">
                                                        <div
                                                            onClick={() => setMore((prev) => !prev)}
                                                            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
                                                        >
                                                            <HiOutlineDotsVertical />
                                                        </div>

                                                        {more && <CardMore setMore={setMore} more={more} />}
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    />
                                </>

                            ))
                        }
                    </div> : null

            }

            <div className="flex items-center justify-center">
                <Link to={location} className="border-b-primary border-b border-dotted text-b-13-14-500 text-primary">Show more projects</Link>
            </div>
        </div >
    )
}
export default ThreeColumns