import Card from "../../../components/card/card"
import Verify from '../../../assets/icon/verify.svg'
import { CiGrid2H, CiGrid41, CiMail } from "react-icons/ci"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router"
import Menu from "../../../components/publicProfile/hovermenu"
import { useState } from "react"
import AvatarGoup from '../../../assets/icon/avatar-group.svg'
import Cody from '../../../assets/icon/cody-fisher.svg'
import Tyler from '../../../assets/icon/tyler-hero.svg'
import React from "react"
import Jennifer from '../../../assets/icon/jennifer.svg'
import { FaCheckCircle } from "react-icons/fa"
import { FaUsers } from "react-icons/fa6"

interface Project {
    id: number;
    icon?: React.ReactElement;
    personName: string;
    location: string;
    mail: string;
    team: React.ReactElement;
    purchases: number;
    avg: number;
    totalSpent: number;
    connected: boolean;
    color?: string;
    online: boolean
}

const Network = () => {
    const location = window.location.pathname

    const [network, setNetwork] = useState<Project[]>([
        {
            id: 1,
            personName: "Jenny Klabber",
            icon: <img src={Jennifer} className="min-h-20 min-w-20" />,
            location: "KeenTheme",
            mail: "jenny@kteam.com",
            team: <img src={AvatarGoup} className="min-w-[93px] min-h-[30px]" />,
            purchases: 92,
            avg: 69,
            totalSpent: 6240,
            connected: true,
            online: true
        },
        {
            id: 2,
            personName: "Sarah Johnson",
            location: "InnovateX",
            mail: "sarah@innovatex.com",
            team: <img src={AvatarGoup} className="min-w-[93px] min-h-[30px]" />,
            purchases: 123,
            avg: 72,
            totalSpent: 3270,
            connected: false,
            color: "info",
            online: true
        },
        {
            id: 3,
            personName: "Kevin Wang",
            location: "WebWorks",
            mail: "kevin@webworks.com",
            team: <img src={AvatarGoup} className="min-w-[93px] min-h-[30px]" />,
            purchases: 30,
            avg: 81,
            totalSpent: 4800,
            connected: false,
            color: "danger",
            online: true

        },
        {
            id: 4,
            personName: "Brian Davis",
            location: "Vertex Tech",
            icon: <img src={Tyler} className="min-h-20 min-w-20" />,
            mail: "brian@vertextech.com",
            team: <img src={AvatarGoup} className="min-w-[93px] min-h-[30px]" />,
            purchases: 87,
            avg: 78,
            totalSpent: 1993,
            connected: true,
            online: false
        },
        {
            id: 5,
            personName: "Megan Taylor",
            location: "Catalyst",
            mail: "megan@catalyst.com",
            team: <img src={AvatarGoup} className="min-w-[93px] min-h-[30px]" />,
            purchases: 45,
            avg: 74,
            totalSpent: 2500,
            connected: false,
            color: "success",
            online: false
        },
        {
            id: 6,
            personName: "Alex Martinez",
            icon: <img src={Cody} className="min-h-20 min-w-20" />,
            location: "Pixel Arts",
            mail: "alex@pixelarts.com",
            team: <img src={AvatarGoup} className="min-w-[93px] min-h-[30px]" />,
            purchases: 50,
            avg: 80,
            totalSpent: 4095,
            connected: false,
            online: true
        }
    ]);

    const [selectedCardView, setSelectedCardView] = useState("card");

    return (
        <div className="flex flex-col gap-10  ">
            <div className="flex flex-col gap-3 items-center justify-center bg-mask bg-cover">
                <div className="rounded-full border-success border-2">
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
                <h1 className="text-b-18-18-600 text-gray-900">{network.length} Connections</h1>
                <div className="rounded-lg border p-1 bg-gray-200 flex flex-row items-center gap-1">
                    <div onClick={() => setSelectedCardView("card")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "card" ? " border-gray-200 bg-white dark:bg-coal-300" : "border-transparent"} cursor-pointer hover:bg-gray-300 text-animation`}>
                        <CiGrid41 className="text-gray-600 size-[14px]" />
                    </div>
                    <div onClick={() => setSelectedCardView("list")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "list" ? "border-gray-200 bg-white dark:bg-coal-300" : "border-transparent"} cursor-pointer hover:bg-gray-300 text-animation`}>
                        <CiGrid2H className="text-gray-600 size-[14px]" />
                    </div>
                </div>

            </div>
            <div className={`${selectedCardView === "card" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[30px] z-1" : "flex flex-col gap-5"}`}>
                {
                    network.map((item) => (
                        < React.Fragment key={item.id}>
                            <Card buttonStatus={false} dotStatus={true}

                                content={
                                    <div className={`items-center ${selectedCardView === "card" ? "flex flex-col pb-[14px]  rounded-xl z-10 overflow-hidden" : "flex flex-col md:flex-row items-centerz md:items-center w-full justify-start md:justify-between gap-[30px] p-[30px] flex-wrap"}`}>

                                        <div className={`flex flex-col items-center ${selectedCardView === "list" ? " flex-col sm:flex-row gap-5 " : "pt-10"}`}>
                                            {
                                                item.icon ?

                                                    <div className="relative">
                                                        {item.icon}
                                                        <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${item.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-white`}></div>
                                                    </div>



                                                    :
                                                    <div className={`flex min-h-20 min-w-20 bg-${item.color} bg-opacity-10 rounded-full  border border-${item.color} items-center justify-center relative`}>
                                                        <span className={`text-h-26-26-600 text-${item.color}`}>{item.personName[0]}</span>
                                                        <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${item.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-white`}></div>

                                                    </div>
                                            }

                                            <div className={`flex flex-col gap-3 w-full justify-center ${selectedCardView === "card" ? " items-center pt-[11px]" : "items-center md:items-start "}`}>
                                                <div className="flex flex-row items-center gap-1 ">
                                                    <Link to={location} className="text-b-18-18-600 text-gray-900 hover:text-primary text-animation">{item.personName}</Link>
                                                    <img src={Verify} alt="" />
                                                </div>
                                                <div className="flex md:flex-row flex-col items-center gap-5">
                                                    <div className="flex flex-row items-center gap-[5px]">
                                                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                                        <span className='text-gray-600 text-b-14-14-500'>{item.location}</span>
                                                    </div>

                                                    <div className="flex flex-row items-center gap-[5px]">
                                                        <CiMail className='text-gray-600 text-b-14-14-500' />
                                                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary text-animation'>{item.mail}</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={`flex gap-[30px]  items-center ${selectedCardView === "card" ? "flex-col " : "flex-col lg:flex-row "}`}>
                                            <div className={`flex flex-col gap-[6px] items-center ${selectedCardView === "card" ? " pt-[30px]" : ""}`}>
                                                <span className="text-b-11-12-400 text-gray-600">TEAM</span>
                                                {item.team}
                                            </div>
                                            <div className="flex flex-row items-center flex-wrap lg:flex-nowrap justify-center gap-5">
                                                <div className="border border-dotted rounded-md p-2.5 flex flex-col items-start justify-center gap-[7px]">
                                                    <span className="text-b-14-14-500 text-gray-900">1-3 months</span>
                                                    <span className="text-b-11-12-400 text-gray-700">Duration</span>
                                                </div>
                                                <div className="border border-dotted rounded-md p-2.5 flex flex-col items-start justify-center gap-[7px]">
                                                    <span className="text-b-14-14-500 text-gray-900">{item.location}</span>
                                                    <span className="text-b-11-12-400 text-gray-700">Location</span>
                                                </div>
                                                <div className="border border-dotted rounded-md p-2.5 flex flex-col items-start justify-center gap-[7px]">
                                                    <span className="text-b-14-14-500 text-gray-900">1-3 months</span>
                                                    <span className="text-b-11-12-400 text-gray-700">Rate</span>
                                                </div>
                                            </div>
                                            <div className={`${selectedCardView === "card" ? "border-t w-screen pt-[14px] flex items-center justify-center" : ""}`}>
                                                <button className={`flex items-center justify-center flex-row p-2.5 rounded-md gap-1 ${item.connected ? "bg-primary text-white" : "border"} w-max `}>
                                                    {
                                                        item.connected ?
                                                            <>
                                                                <FaUsers className="size-[14px]" />
                                                                <span className="text-b-12-12-500">Connect</span>
                                                            </>
                                                            :
                                                            <>
                                                                <FaCheckCircle className="text-gray-500 size-[14px]" />
                                                                <span className="text-b-12-12-500 text-gray-700">Connected</span>

                                                            </>
                                                    }
                                                </button>
                                            </div>
                                        </div>




                                    </div>
                                }
                            />


                        </React.Fragment>
                    ))
                }

            </div>


            <div className="flex items-center justify-center">
                <Link to={location} className="border-b-primary border-b border-dotted text-b-13-14-500 text-primary">Show more projects</Link>
            </div>
        </div >
    )
}
export default Network