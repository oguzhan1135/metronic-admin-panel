import { Link } from "react-router"
import { useEffect, useState } from "react";
import React from "react";
import Card from "@components/card/card";
import Cody from '@assets/cody-fisher.svg'
import Tyler from '@assets/tyler-hero.svg'
import Jennifer from '@assets/jennifer.svg'
import Jonathan from '@assets/jonathan-taylor.svg'
import Verify from '@assets/verify.svg'
import { LuSettings2 } from "react-icons/lu";
import { CiGrid2H, CiGrid41, CiSearch } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { IoBasketballOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";


interface Crew {
    id: number;
    icon?: React.ReactElement;
    personName: string;
    city: string;
    color?: string;
    online: boolean;
    popular: boolean;
}

const Social = () => {
    const location = window.location.pathname
    const originalCards: Crew[] = [
        {
            id: 1,
            personName: "Jenny Klabber",
            icon: <img src={Jennifer} className="min-h-20 min-w-20" />,
            online: true,
            popular: true,
            city: "San Antonio, TX",
        },
        {
            id: 2,
            personName: "Jenny Klabber",
            color: "danger",
            online: true,
            popular: true,
            city: "Fort Wayne, IN",
        },
        {
            id: 3,
            personName: "Brian Devis",
            icon: <img src={Tyler} className="min-h-20 min-w-20" />,
            online: true,
            popular: false,
            city: "Reno, NV",
        },
        {
            id: 4,
            personName: "Guy Hawkins",
            icon: <img src={Jonathan} className="min-h-20 min-w-20" />,
            online: true,
            popular: true,
            city: "Irving, TX",
        },
        {
            id: 5,
            personName: "Albert Flores",
            icon: <img src={Cody} className="min-h-20 min-w-20" />,
            online: true,
            popular: false,
            city: "Boise, ID",
        },
        {
            id: 6,
            personName: "Savannah Nguyen",
            color: "info",
            online: true,
            popular: true,
            city: "Spokane, WA",
        },
        {
            id: 7,
            personName: "Marvin McKinney",
            color: "success",
            online: false,
            popular: false,
            city: "Richmond, VA",
        },

        {
            id: 8,
            personName: "Darrell Steward",
            icon: <img src={Jonathan} className="min-h-20 min-w-20" />,
            online: true,
            popular: true,
            city: "Baton Rouge, LA",
        },
        {
            id: 9,
            personName: "Eleanor Pena",
            icon: <img src={Jennifer} className="min-h-20 min-w-20" />,
            online: true,
            popular: true,
            city: "Des Moines, IA",
        },

    ];
    const [cards, setCards] = useState<Crew[]>(originalCards);
    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState("All");
    const [selectedCardView, setSelectedCardView] = useState("card");

    useEffect(() => {
        let filtered = originalCards;

        if (status === "Online") {
            filtered = filtered.filter(item => item.online);
        } else if (status === "Offline") {
            filtered = filtered.filter(item => !item.online);
        }

        if (searchTerm.trim() !== "") {
            const lower = searchTerm.toLowerCase();
            filtered = filtered.filter(item =>
                item.personName.toLowerCase().includes(lower) ||
                item.city.toLowerCase().includes(lower)
            );
        }

        setCards(filtered);
    }, [status, searchTerm]);

    return (
        <div className="flex flex-col gap-10  ">

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px]">
                    <h1 className='text-gray-900 text-h-24-24-600'>Social</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Upload CSV
                    </button>
                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border">
                        Add User
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between flex-wrap md:gap-0 gap-5">
                <span className="text-b-15-16-500 text-gray-900">Showing {cards.length} Users</span>
                <div className="flex flex-wrap items-center gap-5 ">
                    <div className="flex flex-row items-center gap-2.5">
                        <select className="border px-3 py-2 rounded-md text-b-12-12-500 text-gray-900 outline-none bg-light-active border-gray-300" onChange={(e) => setStatus(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary-light text-b-12-12-500 text-primary border border-primary border-opacity-20 gap-[6px]">
                            <LuSettings2 className="size-[14px] text-primary" />
                            Filters
                        </button>
                    </div>
                    <div className="p-2.5 border rounded-md flex flex-row items-center gap-1 bg-light-active border-gray-300">
                        <CiSearch className="text-gray-600 cursor-pointer" />
                        <input
                            type="text"
                            className="text-gray-600 text-b-11-12-400 border-0 bg-transparent outline-none"
                            placeholder="Type name, team name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="rounded-lg border p-[3px] bg-gray-200 flex flex-row items-center gap-1">
                        <div onClick={() => setSelectedCardView("card")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "card" ? " border-gray-200 bg-light" : "border-transparent"} cursor-pointer hover:bg-light text-animation`}>
                            <CiGrid41 className="text-gray-600 size-[14px]" />
                        </div>
                        <div onClick={() => setSelectedCardView("list")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "list" ? "border-gray-200 bg-light" : "border-transparent"} cursor-pointer hover:bg-light text-animation`}>
                            <CiGrid2H className="text-gray-600 size-[14px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`z-1 ${selectedCardView === "list" ? 'flex flex-col gap-[30px]' : 'grid grid-cols-1 md:grid-cols-2 gap-[30px]'}`}>
                {
                    cards.map((card, index) =>
                    (
                        <React.Fragment key={index}>
                            <Card
                                dotStatus={false}
                                buttonStatus={false}
                                content={<>
                                    <div className={`flex  gap-[30px] ${selectedCardView === "list" ? 'flex-col md:flex-row items-center justify-between p-[30px] ' : 'flex-col   pt-10 '}`}>
                                        <div className={`flex gap-[10px] items-center ${selectedCardView === "list" ? ' flex-col md:flex-row  ' : 'flex-col justify-center'}`}>
                                            {
                                                card.icon ?

                                                    <div className="relative">
                                                        {card.icon}
                                                        <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${card.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-white`}></div>
                                                    </div>
                                                    :
                                                    <div className={`flex min-h-20 min-w-20 bg-${card.color}-light bg-opacity-10 rounded-full  border border-${card.color} items-center justify-center relative`}>
                                                        <span className={`text-h-26-26-600 text-${card.color}`}>{card.personName[0]}</span>
                                                        <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${card.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-white`}></div>

                                                    </div>
                                            }
                                            <div className={`flex gap-[14px] flex-col ${selectedCardView === "list" ? ' items-center md:items-start' : ' items-center '}`}>
                                                <div className="flex flex-row items-center gap-1 ">
                                                    <Link to={location} className="text-b-18-18-600 text-gray-900 hover:text-primary text-animation">{card.personName}</Link>
                                                    {card.popular && <img src={Verify} alt="" />}
                                                </div>
                                                <span className="text-b-14-14-400 text-gray-700">{card.city}</span>

                                            </div>

                                        </div>
                                        <div className={`flex   ${selectedCardView === "list" ? 'flex flex-row md:justify-between items-center w-full max-w-[350px] gap-5 flex-wrap lg:flex-nowrap justify-center' : 'flex-col gap-[30px] items-center '}`}>

                                            <div className="flex flex-row gap-[2px]">
                                                <Link to={location} className="p-[7px] rounded-md hover:bg-gray-200">
                                                    <FaFacebook className="size-[18px] text-gray-600" />
                                                </Link>
                                                <Link to={location} className="p-[7px] rounded-md hover:bg-gray-200">
                                                    <IoBasketballOutline className="size-[18px] text-gray-600" />
                                                </Link>
                                                <Link to={location} className="p-[7px] rounded-md hover:bg-gray-200">
                                                    <FaInstagram className="size-[18px] text-gray-600" />
                                                </Link>
                                            </div>
                                            <div className={`flex items-center justify-center ${selectedCardView == "list" ? '' : ' border-t w-full py-[14px]'}`}>
                                                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                                    <MdOutlineMessage className="size-[14px] text-gray-500" />
                                                    Message
                                                </button>

                                            </div>
                                            <button className={`${selectedCardView === "card" ? "hidden" : "p-2 rounded-md cursor-pointer w-max hover:bg-gray-200"}`}>
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </div>
                                </>}
                            />
                        </React.Fragment>
                    ))
                }

            </div>
            <div className="flex items-center justify-center">
                <Link to={location} className="text-primary border-b border-dotted border-primary text-b-13-14-500">Show more Users</Link>
            </div>

        </div >
    )
}
export default Social