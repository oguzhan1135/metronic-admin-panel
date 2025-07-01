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
import { GiAbstract080 } from "react-icons/gi";
import { IoCopyOutline, IoSettingsOutline } from "react-icons/io5";


interface Card {
    id: number;
    icon?: React.ReactElement;
    personName: string;
    userName: string;
    sales: number;
    items: number;
    listed: number;
    color?: string;
    online: boolean;
    popular: boolean;
    link: string;
}

const NFT = () => {
    const location = window.location.pathname
    const originalCards: Card[] = [
        {
            id: 1,
            personName: "Jenny Klabber",
            icon: <img src={Jennifer} className="min-h-20 min-w-20" />,
            online: true,
            popular: true,
            userName: "@jenny",
            sales: 196,
            items: 2972,
            listed: 5,
            link: "0x4aD5..F89Aa"
        },
        {
            id: 2,
            personName: "Kevin Warren",
            color: "danger",
            online: false,
            popular: true,
            userName: "@wadeart",
            sales: 23,
            items: 82,
            listed: 2,
            link: "0x4aD5..b2b3D"
        },
        {
            id: 3,
            personName: "Guy Hawkins",
            icon: <img src={Jonathan} className="min-h-20 min-w-20" />,
            online: false,
            popular: true,
            userName: "@hawkinsnyc",
            sales: 2508,
            items: 27000,
            listed: 57,
            link: "0x3eF8..7gF9B"

        },
        {
            id: 4,
            personName: "Bessie Lane",
            color: "primary",
            online: true,
            popular: true,
            userName: "@booker777",
            sales: 4,
            items: 105,
            listed: 93,
            link: "0x1aC3..9kL2P"
        },

        {
            id: 5,
            personName: "Bessie Cooper",
            icon: <img src={Jennifer} className="min-h-20 min-w-20" />,
            online: true,
            popular: true,
            userName: "@bessie_c",
            sales: 196,
            items: 2972,
            listed: 5,
            link: "0x9bD4..6hN3M"
        },
        {
            id: 6,
            personName: "Jerome Bell",
            icon: <img src={Tyler} className="min-h-20 min-w-20" />,
            online: false,
            popular: true,
            userName: "@jerome",
            sales: 67,
            items: 904,
            listed: 46,
            link: "0x2gH5..4tR7U"
        },
        {
            id: 7,
            personName: "Floyd Miles",
            icon: <img src={Cody} className="min-h-20 min-w-20" />,
            online: true,
            popular: true,
            userName: "@milesandwales",
            sales: 205,
            items: 2979,
            listed: 11,
            link: "0x8jK6..3qV1Z"
        },
        {
            id: 8,
            personName: "Albert Flores",
            icon: <img src={Tyler} className="min-h-20 min-w-20" />,
            online: true,
            popular: true,
            userName: "@alberanstanton",
            sales: 2723,
            items: 306000,
            listed: 8,
            link: "0x7lM2..5xW8Y"
        },
        {
            id: 9,
            personName: "Jacob Jones",
            icon: <img src={Jonathan} className="min-h-20 min-w-20" />,
            online: false,
            popular: true,
            userName: "@jacobeth_99",
            sales: 2,
            items: 68,
            listed: 74,
            link: "0x5nB3..0sG9Q"
        }


    ];
    const [cards, setCards] = useState<Card[]>(originalCards);
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
                item.userName.toLowerCase().includes(lower)
            );
        }

        setCards(filtered);
    }, [status, searchTerm]);

    return (
        <div className="flex flex-col gap-10  ">

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px]">
                    <h1 className='text-gray-900 text-h-24-24-600'>NFT</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Upload CSV
                    </a>
                    <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border">
                        Add User
                    </a>
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

            <div className={`z-1 ${selectedCardView === "list" ? 'flex flex-col gap-[30px]' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'}`}>
                {
                    cards.map((card, index) =>
                    (
                        <React.Fragment key={index}>
                            <Card
                                dotStatus={false}
                                buttonStatus={false}
                                content={<>
                                    <div className={`flex relative gap-[30px] ${selectedCardView === "list" ? 'flex-col md:flex-row items-center justify-between p-[30px] ' : 'flex-col bg-layered-bg dark:bg-nft-dark bg-cover pt-10 '}`}>
                                        <div className={`flex gap-[10px] items-center ${selectedCardView === "list" ? ' flex-col md:flex-row  ' : 'flex-col justify-center'}`}>
                                            {
                                                card.icon ?

                                                    <div className="relative">
                                                        {card.icon}
                                                        <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${card.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-light-active`}></div>
                                                    </div>
                                                    :
                                                    <div className={`flex min-h-20 min-w-20 bg-${card.color}-light bg-opacity-15 rounded-full   border border-${card.color} border-opacity-20 items-center justify-center relative`}>
                                                        <span className={`text-h-26-26-600 text-${card.color}`}>{card.personName[0]}</span>
                                                        <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${card.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-light-active`}></div>

                                                    </div>
                                            }
                                            {selectedCardView === "card" && (
                                                <div className=" absolute top-2 right-2">
                                                    <button className="p-[7px]  hover:bg-gray-200 text-animation rounded-md">
                                                        <IoSettingsOutline className="size-[18px] text-gray-600" />
                                                    </button>
                                                </div>
                                            )}
                                            <div className={`flex gap-[14px] flex-col ${selectedCardView === "list" ? ' items-center md:items-start' : ' items-center '}`}>
                                                <div className="flex flex-row items-center gap-1 ">
                                                    <Link to={location} className="text-b-18-18-600 text-gray-900 hover:text-primary text-animation">{card.personName}</Link>
                                                    {card.popular && <img src={Verify} alt="" />}
                                                </div>
                                                <div className="flex flex-col md:flex-row items-center gap-[18px]">
                                                    <div className="flex flex-row items-center gap-[5px]">
                                                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary'>{card.userName}</Link>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-[5px]">
                                                        <span className='text-success text-b-12-12-400'>{card.link}</span>
                                                        <IoCopyOutline className='text-gray-400 text-b-14-14-500 cursor-pointer' />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className={`flex   ${selectedCardView === "list" ? 'flex flex-row md:justify-between items-center w-full max-w-[550px] gap-5 flex-wrap lg:flex-nowrap justify-center' : 'flex-col gap-[30px] items-center '}`}>
                                            <div className="flex flex-row items-center flex-wrap md:flex-nowrap gap-5 md:px-0 px-[30px]">
                                                <div className="border border-dotted rounded-md p-2.5 flex flex-col items-start justify-center gap-[7px]">
                                                    <span className="text-b-14-14-500 text-gray-900">{card.sales} ETH</span>
                                                    <span className="text-b-11-12-400 text-gray-700">Sales</span>
                                                </div>
                                                <div className="border border-dotted rounded-md p-2.5 flex flex-col items-start justify-center gap-[7px] ">
                                                    <span className="text-b-14-14-500 text-gray-900">{card.items > 9999 ? `${(card.items / 1000)}K` : card.items}</span>
                                                    <span className="text-b-11-12-400 text-gray-700">Items</span>
                                                </div>
                                                <div className="border border-dotted rounded-md p-2.5 flex flex-col items-start justify-center gap-[7px] ">
                                                    <span className="text-b-14-14-500 text-gray-900">{card.listed}%</span>
                                                    <span className="text-b-11-12-400 text-gray-700">Listed</span>
                                                </div>
                                            </div>
                                            <div className={`flex items-center justify-center ${selectedCardView == "list" ? '' : ' border-t w-full py-[14px]'}`}>
                                                <Link to={location} className="text-primary border-b border-b-dotted min-w-[80px]">View NFT's</Link>
                                            </div>
                                            {
                                                selectedCardView === "list" && (
                                                    <button className="p-[7px]  hover:bg-gray-200 text-animation rounded-md">
                                                        <IoSettingsOutline className="size-[18px]" />
                                                    </button>
                                                )
                                            }
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
export default NFT