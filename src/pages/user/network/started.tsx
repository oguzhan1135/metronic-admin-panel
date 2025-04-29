


import { Link } from "react-router"
import Card from '../../../components/card/card'
import { useState } from "react";
import { Network } from "inspector/promises";
import { FaRegUser } from "react-icons/fa6";
import { PiSubtitlesLight } from "react-icons/pi";
import React from "react";
import { IoKeyOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

interface Network {
    id: number;
    icon: React.ReactElement;
    title: string;
    description: string;
    keyWords: string[];
}

const GetStarted = () => {
    const location = window.location.pathname

    const [networkCards, setNetworkcards] = useState<Network[]>([
        {
            id: 1,
            title: "User Cards",
            icon: <FaRegUser className="size-6 text-primary" />,
            description: "A Broad Perspective on Our Comprehensive Security Features and Policies.",
            keyWords: ["Mini Cards", "Team Members", "Athor", "NFT", "Social"]
        },
        {
            id: 2,
            title: "User Base",
            icon: <PiSubtitlesLight className="size-6 text-primary" />,
            description: "A Broad Perspective on Our Comprehensive Security Features and Policies.",
            keyWords: ["Team Crew", "App Roster", "Visitor", "Authors", "SaaS Users", " Store Clients  "]
        },
        {
            id: 3,
            title: "Cooperators",
            icon: <IoKeyOutline className="size-6 text-primary" />,
            description: "A Broad Perspective on Our Comprehensive Security Features and Policies.",
            keyWords: ["Contacts", "Employee", "Vendors", "Companies", "Service", "Agents", "Applicants"]
        },
        {
            id: 4,
            title: "User Cards",
            icon: <PiSubtitlesLight className="size-6 text-primary" />,
            description: "A Broad Perspective on Our Comprehensive Security Features and Policies.",
            keyWords: ["Contacts", "Employee", "Vendors", "Companies", "Service", "Agents", "Applicants"]
        },
        {
            id: 5,
            title: "User Cards",
            icon: <CiCalendarDate className="size-6 text-primary" />,
            description: "A Broad Perspective on Our Comprehensive Security Features and Policies.",
            keyWords: ["Contacts", "Employee", "Vendors", "Companies", "Service", "Agents", "Applicants"]
        },

    ])

    return (
        <div className="flex flex-col gap-10  ">
            <div className="flex flex-col gap-[14px]">
                <h1 className='text-gray-900 text-h-24-24-600'>Get Started</h1>
                <span className='text-b-14-14-500 text-gray-700'>19 issues need your attention <Link to={"/user/myAccount/security/log"} className='text-primary text-b-13-14-500 border-b border-b-primary border-dotted'>Security Log</Link> </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1">
                {
                    networkCards.map((item) => (
                        <React.Fragment key={item.id}>
                            <Card
                                dotStatus={true}
                                titleContent={item.icon}
                                content={
                                    <div className="flex flex-col gap-2.5 px-[30px] pb-[30px] pt-5">
                                        <Link to={location} className='text-b-16-16-500 text-gray-900 hover:text-primary text-animation'>{item.title}</Link>
                                        <p className='text-b-13-14-400 text-gray-700'>{item.description}</p>
                                        <div className="flex flex-row items-center flex-wrap gap-2">
                                            {
                                                item.keyWords.map((keys, index) => (
                                                    <Link
                                                        className="text-b-13-14-500 text-primary"
                                                        to={location}
                                                        key={keys}
                                                    >
                                                        {keys}{index !== item.keyWords.length - 1 && ' |'}
                                                    </Link>
                                                ))
                                            }
                                        </div>

                                    </div>
                                }
                                buttonStatus={false}
                            />
                        </React.Fragment>

                    ))
                }

            </div>

        </div >
    )
}
export default GetStarted