import Card from "../../../components/publicProfile/card"
import Verify from '../../../assets/icon/verify.svg'
import { CiGrid2H, CiGrid41, CiMail } from "react-icons/ci"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router"
import Menu from "../../../components/hovermenu"
import { useState } from "react"
import React from "react"
import Jennifer from '../../../assets/icon/jennifer.svg'
import { FaCheckCircle } from "react-icons/fa"
import { FaUsers } from "react-icons/fa6"
import Twitch from '../../../assets/icon/twitch-purple.svg'
import Instagram from '../../../assets/icon/instagram.svg'
import Youtube from '../../../assets/icon/youtube.svg'
import Amazon from '../../../assets/icon/amazon.svg'
import Engagament from '../../../assets/icon/mailchimp.svg'
import Linkedin from '../../../assets/icon/linkedin.svg'
import { HiOutlineDotsVertical } from "react-icons/hi"
import CardMore from "../../../components/more/cardMore"

type Campaign = {
    id: number;
    icon: React.ReactElement;
    title: string;
    platform: string;
    progress: number;
    description: string;
    metrics: {
        trafficUp?: string;
        newFans?: string;
        donated?: string;
        linkHits?: string;
        engageUptick?: string;
        earnings?: string;
        videoPlays?: string;
        subGain?: string;
        productSales?: string;
        actions?: string;
        subscribers?: string;
        totalSales?: string;
        surveyInputs?: string;
        influencerTies?: string;
        impressions?: string;
        trafficRise?: string;
    };
};

const Campaigns = () => {
    const location = window.location.pathname
    const [more, setMore] = useState(false)
    const [campaigns, setCampaigns] = useState<Campaign[]>(
        [
            {
                id: 1,
                icon: <img src={Twitch} className="size-[50px]" />,
                title: "Urban Dreams",
                platform: "Twitch",
                progress: 100,
                description: "Live Gaming Spectacle Unveiled",
                metrics: {
                    trafficUp: "50.7%",
                    newFans: "201k",
                    donated: "$100k"
                }
            },
            {
                id: 2,
                icon: <img src={Instagram} className="size-[50px]" />,
                title: "Photo Promotion",
                platform: "Instagram",
                progress: 60,
                description: "Visual Stories Unleashed Worldwide",
                metrics: {
                    linkHits: "25k",
                    engageUptick: "32.9%",
                    earnings: "$7.5k"
                }
            },
            {
                id: 3,
                icon: <img src={Youtube} className="size-[50px]" />,
                title: "Video Viral",
                platform: "YouTube",
                progress: 60,
                description: "Video Content Showcase Spotlighted",
                metrics: {
                    videoPlays: "12M",
                    subGain: "40%",
                    linkHits: "25k"
                }
            },
            {
                id: 4,
                icon: <img src={Amazon} className="size-[50px]" />,
                title: "Product Push",
                platform: "Amazon",
                progress: 100,
                description: "Prime Shopping Bliss Delivered",
                metrics: {
                    trafficRise: "50%",
                    productSales: "$34.8k",
                    actions: "10k"
                }
            },
            {
                id: 5,
                icon: <img src={Engagament} className="size-[50px]" />,
                title: "Email Engagement",
                platform: "Mailchimp",
                progress: 0,
                description: "Email Engagement Power Unleashed",
                metrics: {
                    subscribers: "24.3k",
                    trafficRise: "34.8%",
                    totalSales: "$20.5k"
                }
            },
            {
                id: 6,
                icon: <img src={Linkedin} className="size-[50px]" />,
                title: "Career Boost",
                platform: "LinkedIn",
                progress: 20,
                description: "Pro Connections Empowered Globally",
                metrics: {
                    surveyInputs: "5.2k",
                    influencerTies: "834",
                    impressions: "70k"
                }
            }
        ]
    );

    const [selectedCardView, setSelectedCardView] = useState("card");
    const [moreStates, setMoreStates] = useState<{ [key: number]: boolean }>({});

    const toggleMore = (id: number) => {
        setMoreStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

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
                <h1 className="text-b-18-18-600 text-gray-900">6 Campaigns</h1>
                <div className="rounded-lg border p-1 bg-gray-200 flex flex-row items-center gap-1">
                    <div onClick={() => setSelectedCardView("card")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "card" ? " border-gray-200 bg-white" : "border-transparent"} cursor-pointer hover:bg-white text-animation`}>
                        <CiGrid41 className="text-gray-600 size-[14px]" />
                    </div>
                    <div onClick={() => setSelectedCardView("list")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "list" ? "border-gray-200 bg-white" : "border-transparent"} cursor-pointer hover:bg-white text-animation`}>
                        <CiGrid2H className="text-gray-600 size-[14px]" />
                    </div>
                </div>

            </div>
            <div className={`${selectedCardView === "card" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1" : "flex flex-col gap-5"}`}>
                {
                    campaigns.map((item) => (
                        <Card buttonStatus={false} dotStatus={true} titleContent={selectedCardView === "card" ?
                            <>
                                {
                                    item.progress < 100 && item.progress != 0 ?
                                        <>
                                            <div className="p-2 rounded-[4px] bg-primary-light border-primary border-opacity-10 border flex items-center justify-center">
                                                <span className="text-primary text-b-11-12-500">In Progress</span>
                                            </div>

                                        </> : item.progress == 0 ?
                                            <>
                                                <div className="p-2 rounded-[4px] bg-gray-100  border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Upcoming</span>
                                                </div>
                                            </> :
                                            <div className="p-2 rounded-[4px] bg-success-light border-success border-opacity-10 border flex items-center justify-center">
                                                <span className="text-success text-b-11-12-500">Completed</span>
                                            </div>
                                }
                            </> : undefined}

                            content={
                                <div className={`flex   items-center  relative ${selectedCardView === "card" ? "flex-col pt-[30px] overflow-hidden " : "flex-row p-[30px] gap-[14px] justify-center sm:justify-between flex-wrap"}`}>

                                    <div className={`flex items-center ${selectedCardView === "card" ? "flex-col gap-[30px] pb-[30px]" : "flex-col sm:flex-row items-center  gap-[14px]"} `}>
                                        {item.icon}

                                        <div className={`flex  gap-2.5 flex-col ${selectedCardView === "card" ? "items-center" : "items-center sm:items-start"}`}>
                                            <Link to={location} className="text-b-18-18-500 text-gray-900 hover:text-primary text-animation">
                                                {item.title}
                                            </Link>
                                            <span className="text-b-14-14-400 text-gray-700">{item.description}</span>
                                        </div>
                                    </div>



                                    <div className={`flex flex-row items-center flex-wrap gap-5 ${selectedCardView === "card" ? "pb-[30px]" : ""}`}>
                                        {Object.entries(item.metrics).map(([key, value]) => (
                                            value && (
                                                <div key={key} className="border border-dotted rounded-md p-2.5 flex flex-col items-start justify-center gap-[7px]">
                                                    <span className="text-b-14-14-500 text-gray-900">{value}</span>
                                                    <span className="text-b-11-12-400 text-gray-700">
                                                        {key.replace(/([A-Z])/g, ' $1').trim().replace(/^./, str => str.toUpperCase())}
                                                    </span>

                                                </div>
                                            )
                                        ))}
                                    </div>

                                    <>
                                        {selectedCardView === "card" && (
                                            <>
                                                {
                                                    item.progress < 100 && item.progress !== 0 ? (
                                                        <div className="relative w-full h-[6px] bg-primary-light rounded-full -mt-[3px]">
                                                            <span
                                                                className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-300"
                                                                style={{ width: `${item.progress}%` }}
                                                            ></span>
                                                        </div>
                                                    ) : item.progress === 0 ? (
                                                        <div className="w-full h-[6px] bg-gray-300 rounded-full -mt-[3px]"></div>
                                                    ) : (
                                                        <div className="w-full h-[6px] bg-success rounded-full -mt-[3px]"></div>
                                                    )
                                                }
                                            </>
                                        )}
                                    </>
                                    {
                                        selectedCardView === "list" && (
                                            <>
                                                {
                                                    item.progress < 100 && item.progress != 0 ?
                                                        <>
                                                            <div className="p-2 rounded-[4px] bg-primary-light border-primary border-opacity-10 border flex items-center justify-center">
                                                                <span className="text-primary text-b-11-12-500">In Progress</span>
                                                            </div>

                                                        </> : item.progress == 0 ?
                                                            <>
                                                                <div className="p-2 rounded-[4px] bg-gray-100  border-opacity-10 border flex items-center justify-center">
                                                                    <span className="text-gray-700 text-b-11-12-500">Upcoming</span>
                                                                </div>
                                                            </> :
                                                            <div className="p-2 rounded-[4px] bg-success-light border-success border-opacity-10 border flex items-center justify-center">
                                                                <span className="text-success text-b-11-12-500">Completed</span>
                                                            </div>
                                                }
                                            </>
                                        )
                                    }

                                    {selectedCardView === "list" && (
                                        <div className="relative">
                                            <div
                                                onClick={() => toggleMore(item.id)}
                                                className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
                                            >
                                                <HiOutlineDotsVertical />
                                            </div>
                                            {moreStates[item.id] && <CardMore setMore={() => toggleMore(item.id)} more={moreStates[item.id]} />}
                                        </div>
                                    )}
                                </div>

                            }
                        />
                    ))
                }
            </div>


            <div className="flex items-center justify-center">
                <Link to={location} className="border-b-primary border-b border-dotted text-b-13-14-500 text-primary">Show more Campaigns</Link>
            </div>
        </div >
    )
}
export default Campaigns