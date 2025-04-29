


import { Link } from "react-router"
import { useState } from "react";
import { Network } from "inspector/promises";
import React from "react";

import Card from "../../../../components/card/card";
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Esther from '../../../../assets/icon/ester-hoeard.svg'
import Jonathan from '../../../../assets/icon/jonathan-taylor.svg'
import Arlene from '../../../../assets/icon/arlene-mccoy.svg'
import Verify from '../../../../assets/icon/verify.svg'


interface Network {
    id: number;
    icon?: React.ReactElement;
    personName: string;
    mail: string;
    color?: string;
    online: boolean
}

const MiniCards = () => {
    const location = window.location.pathname
    const [cards, setCards] = useState<Network[]>([
        {
            id: 1,
            personName: "Jenny Klabber",
            icon: <img src={Jennifer} className="min-h-20 min-w-20" />,
            mail: "starlight.eth",
            online: true
        },
        {
            id: 2,
            personName: "Sarah Johnson",
            mail: "sarahjohnson.eth",
            color: "info",
            online: true
        },
        {
            id: 3,
            personName: "Kevin Wang",
            mail: "kevinwong.eth",
            color: "danger",
            online: true

        },
        {
            id: 4,
            personName: "Brian Davis",
            icon: <img src={Jonathan} className="min-h-20 min-w-20" />,
            mail: "briandavis.eth",
            online: false
        },
        {
            id: 5,
            personName: "Megan Taylor",
            mail: "megantaylor.eth",
            color: "success",
            online: false
        },
        {
            id: 6,
            personName: "Alex Martinez",
            icon: <img src={Cody} className="min-h-20 min-w-20" />,
            mail: "alex@pixelarts.com",
            online: true
        },
        {
            id: 6,
            personName: "Devon Lane",
            icon: <img src={Tyler} className="min-h-20 min-w-20" />,
            mail: "notabooker.eth",
            online: true
        }
    ]);


    return (
        <div className="flex flex-col gap-10  ">

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px]">
                    <h1 className='text-gray-900 text-h-24-24-600'>Mini Cards</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Upload CSV
                    </button>
                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border">
                        Add User
                    </button>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] z-1">
                {
                    cards.map((card) =>
                    (
                        <Card
                            dotStatus={false}
                            buttonStatus={false}
                            content={<>
                                <div className="flex flex-col gap-[14px] items-center justify-center p-10">
                                    {
                                        card.icon ?

                                            <div className="relative">
                                                {card.icon}
                                                <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${card.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-white`}></div>
                                            </div>
                                            :
                                            <div className={`flex min-h-20 min-w-20 bg-${card.color} bg-opacity-10 rounded-full  border border-${card.color} items-center justify-center relative`}>
                                                <span className={`text-h-26-26-600 text-${card.color}`}>{card.personName[0]}</span>
                                                <div className={`absolute bottom-1 right-2 w-3 h-3 rounded-full ${card.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-white`}></div>

                                            </div>
                                    }
                                    <div className="flex flex-row items-center gap-1 ">
                                        <Link to={location} className="text-b-18-18-600 text-gray-900 hover:text-primary text-animation">{card.personName}</Link>
                                        <img src={Verify} alt="" />
                                    </div>
                                    <span className="text-b-14-14-400 text-gray-700">{card.mail}</span>

                                </div>
                            </>}
                        />
                    ))
                }


            </div>

        </div >
    )
}
export default MiniCards