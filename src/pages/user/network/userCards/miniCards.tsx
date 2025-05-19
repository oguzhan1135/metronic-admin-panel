import { Link } from "react-router"
import { useEffect, useState } from "react";
import { Network } from "inspector/promises";
import React from "react";
import Card from "../../../../components/card/card";
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Jonathan from '../../../../assets/icon/jonathan-taylor.svg'
import Arlene from '../../../../assets/icon/arlene-mccoy.svg'
import Verify from '../../../../assets/icon/verify.svg'
import { LuSettings2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";


interface Network {
    id: number;
    icon?: React.ReactElement;
    personName: string;
    mail: string;
    color?: string;
    online: boolean;
    popular: boolean;
}

const MiniCards = () => {
    const location = window.location.pathname
    const originalCards: Network[] = [
        {
            id: 1,
            personName: "Jenny Klabber",
            icon: <img src={Jennifer} className="min-h-20 min-w-20" />,
            mail: "starlight.eth",
            online: true,
            popular: true
        },
        {
            id: 2,
            personName: "Sarah Johnson",
            mail: "sarahjohnson.eth",
            color: "info",
            online: true,
            popular: false
        },
        {
            id: 3,
            personName: "Megan Taylor",
            mail: "megantaylor.eth",
            color: "success",
            online: false,
            popular: true
        },


        {
            id: 4,
            personName: "Alex Martinez",
            icon: <img src={Cody} className="min-h-20 min-w-20" />,
            mail: "amartnes.eth",
            online: true,
            popular: true
        },
        {
            id: 5,
            personName: "Brian Devis",
            icon: <img src={Jonathan} className="min-h-20 min-w-20" />,
            mail: "briandavis.eth",
            online: false,
            popular: true
        },
        {
            id: 6,
            personName: "Kevin Wong",
            mail: "kevinwong.eth",
            color: "danger",
            online: true,
            popular: true
        },
        {
            id: 7,
            personName: "Jenny Wilson",
            icon: <img src={Arlene} className="min-h-20 min-w-20" />,
            mail: "jennyklabber.eth",
            online: true,
            popular: false
        },
        {
            id: 8,
            personName: "Robert Fox",
            icon: <img src={Tyler} className="min-h-20 min-w-20" />,
            mail: "roberfox.eth",
            online: true,
            popular: false
        },
        {
            id: 9,
            personName: "Bessie Cooper",
            mail: "bscoop.eth",
            color: "primary",
            online: true,
            popular: true
        },
        {
            id: 10,
            personName: "Eleanor Pena",
            icon: <img src={Jennifer} className="min-h-20 min-w-20" />,
            mail: "pena_707.eth",
            online: false,
            popular: false
        },
        {
            id: 11,
            personName: "Darlene Robertson",
            icon: <img src={Arlene} className="min-h-20 min-w-20" />,
            mail: "msfoxy.eth",
            online: true,
            popular: true
        },
        {
            id: 12,
            personName: "Jerome Bell",
            mail: "nbatrends.eth",
            color: "warning",
            online: true,
            popular: true
        },
        {
            id: 13,
            personName: "Devon Lane",
            icon: <img src={Cody} className="min-h-20 min-w-20" />,
            mail: "notabooker.eth",
            online: false,
            popular: true
        },
        {
            id: 14,
            personName: "Ralph Edwards",
            icon: <img src={Tyler} className="min-h-20 min-w-20" />,
            mail: "lorenstore.eth",
            online: true,
            popular: true
        },
        {
            id: 15,
            personName: "Theresa Webb",
            mail: "betterthanvettel.eth",
            color: "success",
            online: true,
            popular: false
        },
    ];
    const [cards, setCards] = useState<Network[]>(originalCards);
    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState("All");

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
                item.mail.toLowerCase().includes(lower)
            );
        }

        setCards(filtered);
    }, [status, searchTerm]);

    return (
        <div className="flex flex-col gap-10  ">

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px]">
                    <h1 className='text-gray-900 text-h-24-24-600'>Mini Cards</h1>
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

            <div className="flex flex-row items-center justify-between">
                <span className="text-b-15-16-500 text-gray-900">Showing {cards.length} Users</span>
                <div className="flex flex-row items-center gap-5">
                    <div className="flex flex-row items-center gap-2.5">
                        <select className="border px-3 py-2 rounded-md text-b-12-12-500 text-gray-900 outline-none bg-light-active" onChange={(e) => setStatus(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary-light text-b-12-12-500 text-primary border border-primary border-opacity-20 gap-[6px]">
                            <LuSettings2 className="size-[14px] text-primary" />
                            Filters
                        </button>
                    </div>
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
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] z-1">
                {
                    cards.map((card) =>
                    (
                        <React.Fragment key={card.id}>
                            <Card
                                dotStatus={false}
                                buttonStatus={false}
                                content={<>
                                    <div className="flex flex-col gap-[14px] items-center justify-center p-10">
                                        {
                                            card.icon ?

                                                <div className="relative">
                                                    {card.icon}
                                                    <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${card.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-light`}></div>
                                                </div>
                                                :
                                                <div className={`flex min-h-20 min-w-20 bg-${card.color}-light bg-opacity-10 rounded-full  border border-${card.color} items-center justify-center relative`}>
                                                    <span className={`text-h-26-26-600 text-${card.color}`}>{card.personName[0]}</span>
                                                    <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${card.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-light`}></div>

                                                </div>
                                        }
                                        <div className="flex flex-row items-center gap-1 ">
                                            <Link to={location} className="text-b-18-18-600 text-gray-900 hover:text-primary text-animation">{card.personName}</Link>
                                            {card.popular && <img src={Verify} alt="" />}
                                        </div>
                                        <span className="text-b-14-14-400 text-gray-700">{card.mail}</span>

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
export default MiniCards