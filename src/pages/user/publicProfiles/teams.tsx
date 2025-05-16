import Card from "../../../components/card/card"
import Verify from '../../../assets/icon/verify.svg'
import Jennifer from '../../../assets/icon/jennifer.svg'
import { CiBasketball, CiGrid2H, CiGrid41, CiMail } from "react-icons/ci"
import { GiAbstract030, GiAbstract051, GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router"
import Menu from "../../../components/publicProfile/hovermenu"
import React, { useState } from "react"
import { FaCheckCircle, FaGhost, } from "react-icons/fa"
import AvatarGroup from '../../../assets/icon/avatar-group.svg'
import Raiting from '../../../assets/icon/raiting.svg'
import { IoIosFlash } from "react-icons/io"
import { FiShieldOff } from "react-icons/fi"
import { TbBrandNexo } from "react-icons/tb"
import { FaUsers } from "react-icons/fa6"

interface Team {
    id: number;
    teamIcon: React.ReactElement;
    teamName: string;
    content: string;
    members: React.ReactElement;
    skills: string[];
    raiting: React.ReactElement;
    joined: Boolean;

}

const Teams = () => {


    const location = window.location.pathname
    const [selectedCardView, setSelectedCardView] = useState("card");
    const [teams, setTeams] = useState<Team[]>([
        {
            id: 1,
            teamIcon: <FaGhost className="size-6 text-gray-600" />,
            teamName: "Pixel Crafters",
            content: "Crafting digital experiences for the world",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["UI", "DevOps"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: true
        },
        {
            id: 2,
            teamIcon: <IoIosFlash className="size-6 text-gray-600" />,
            teamName: "Code Masters",
            content: "Coding the future, one line at a time",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["Dev", "AI", "Cloud"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: true
        },
        {
            id: 3,
            teamIcon: <CiBasketball className="size-6 text-gray-600" />,
            teamName: "Market Mavericks",
            content: "Navigating markets with strategic solutions",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["Marketing", "Brand"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: false
        },
        {
            id: 4,
            teamIcon: <FiShieldOff className="size-6 text-gray-600" />,
            teamName: "Data Dynamo",
            content: "Transforming data into actionable insights",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["Analytics", "Data"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: true
        },
        {
            id: 5,
            teamIcon: <CiBasketball className="size-6 text-gray-600" />,
            teamName: "Market Mavericks",
            content: "Navigating markets with strategic solutions",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["Marketing", "Brand"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: false
        },
        {
            id: 6,
            teamIcon: <IoIosFlash className="size-6 text-gray-600" />,
            teamName: "Code Masters",
            content: "Coding the future, one line at a time",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["Dev", "AI", "Cloud"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: true
        },
        {
            id: 7,
            teamIcon: <TbBrandNexo className="size-6 text-gray-600" />,
            teamName: "Fusion Thinkers",
            content: "Merging strategy for impactful results",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["Creative", "Strat"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: false
        },
        {
            id: 8,
            teamIcon: <GiAbstract051 className="size-6 text-gray-600" />,
            teamName: " Spark Surge",
            content: " Igniting ideas into powerful solutions",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["Innovation", "Tech"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: true
        },
        {
            id: 9,
            teamIcon: <GiAbstract030 className="size-6 text-gray-600" />,
            teamName: "Quantum Craft",
            content: "Infusing concepts into cutting-edge tech",
            members: <img src={AvatarGroup} className="w-[93px] h-[30px]" />,
            skills: ["Marketing", "Brand"],
            raiting: <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />,
            joined: false
        }
    ])
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
                <h1 className="text-b-18-18-600 text-gray-900">{teams.length} Teams</h1>
                 <div className="rounded-lg border p-1 bg-gray-200 flex flex-row items-center gap-1">
                    <div onClick={() => setSelectedCardView("card")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "card" ? " border-gray-200 bg-white dark:bg-coal-300" : "border-transparent"} cursor-pointer hover:bg-gray-300 text-animation`}>
                        <CiGrid41 className="text-gray-600 size-[14px]" />
                    </div>
                    <div onClick={() => setSelectedCardView("list")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "list" ? "border-gray-200 bg-white dark:bg-coal-300" : "border-transparent"} cursor-pointer hover:bg-gray-300 text-animation`}>
                        <CiGrid2H className="text-gray-600 size-[14px]" />
                    </div>
                </div>

            </div>
            <div className={`${selectedCardView === "card" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1" : "flex flex-col gap-5"}`}>
                {
                    teams.map((item) => (
                        < React.Fragment key={item.id}>
                            <Card  buttonStatus={false} dotStatus={true}

                                content={
                                    <div className={`${selectedCardView === "card" ? "flex flex-col  pb-[14px] rounded-xl items-center pt-20" : "flex flex-col md:flex-row items-start md:items-center w-full justify-start md:justify-between gap-[30px] p-[30px]  flex-wrap md:flex-nowrap "}`}>
                                        <div className={`${selectedCardView === "card" ? "flex flex-col gap-5 items-center" : "flex flex-row gap-5 items-center"}`}>
                                            <div className="bg-gray-100 rounded-full border p-5 ">
                                                {item.teamIcon}
                                            </div>
                                            <div className={`flex flex-col gap-2 pb-4 ${selectedCardView === "card" ? "items-center" : "items-start"} `}>
                                                <Link to={location} className="text-b-16-16-500 text-gray-900 hover:text-primary text-animation">{item.teamName}</Link>
                                                <span className="text-b-13-14-400 text-gray-700">{item.content}</span>
                                            </div>
                                        </div>
                                        <div className={`flex items-center justify-center  ${selectedCardView === "card" ? "flex-col w-full px-[30px] " : "flex flex-row gap-5 items-center flex-wrap md:flex-nowrap"}`}>
                                            <div className={`flex   ${selectedCardView === "card" ? "flex-row justify-between  w-full items-center border-b border-dotted py-[14px]" : "flex-col gap-[14px] items-start "}`}>
                                                <span className="text-b-11-12-400 text-gray-600 text-center">SKILLS</span>
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    {
                                                        item.skills.map((childItem) => (
                                                            <div className="bg-gray-200 rounded-[4px] flex items-center justify-center py-[5px] px-[6px]">
                                                                <span className="text-b-11-12-500 text-gray-700">{childItem}</span>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className={`flex ${selectedCardView === "card" ? "flex-row justify-between w-full items-center border-b border-dotted py-[14px]" : "flex-col gap-[14px] items-end"}`}>
                                                <span className="text-b-11-12-400 text-gray-600">RAITING</span>
                                                {item.raiting}
                                            </div>
                                            <div className={`flex ${selectedCardView === "card" ? "flex-row justify-between w-full items-center border-b border-dotted py-[14px]" : "flex-col gap-[14px] items-end"}`}>
                                                <span className="text-b-11-12-400 text-gray-600">MEMBERS</span>
                                                {item.members}
                                            </div>
                                            <button className={`flex items-center justify-center flex-row p-2.5 rounded-md gap-1 mt-[14px] ${item.joined ? "bg-primary text-white" : "border"} w-max `}>
                                                {
                                                    item.joined ?
                                                        <>
                                                            <FaUsers className="size-[14px]" />
                                                            <span className="text-b-12-12-500">Join</span>
                                                        </>
                                                        :
                                                        <>
                                                            <FaCheckCircle className="text-gray-500 size-[14px]" />
                                                            <span className="text-b-12-12-500 text-gray-700">Joined</span>

                                                        </>
                                                }
                                            </button>
                                        </div>



                                    </div>
                                }
                            />


                        </React.Fragment>
                    ))
                }


            </div>


            <div className="flex items-center justify-center">
                <Link to={location} className="border-b-primary border-b border-dotted text-b-13-14-500 text-primary">Show more works</Link>
            </div>
        </div >
            )
}
            export default Teams