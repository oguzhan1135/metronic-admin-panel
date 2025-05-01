import { Link } from "react-router"
import { useEffect, useState } from "react";
import React from "react";
import Card from "../../../../components/card/card";
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Jonathan from '../../../../assets/icon/jonathan-taylor.svg'
import Verify from '../../../../assets/icon/verify.svg'
import { LuSettings2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import GeometricPatern from '../../../../assets/icon/geometric-patterns.svg'
import ArticticExpression from '../../../../assets/icon/artistic-expression.svg'


interface AuthorCard {
    id: number;
    icon?: React.ReactElement;
    personName: string;
    mail: string;
    color?: string;
    online: boolean;
    popular: boolean;
}

const Author = () => {
    const location = window.location.pathname
    const originalCards: AuthorCard[] = [
        {
            id: 1,
            personName: "Jenny Klabber",
            icon: <img src={Jennifer} className="size-[120px]" />,
            mail: "starlight.eth",
            online: true,
            popular: true
        },
        {
            id: 2,
            personName: "Sarah Johnson",
            mail: "sarahjohnson.eth",
            icon: <img src={Jonathan} className="size-[120px]" />,
            online: true,
            popular: false
        },
        {
            id: 3,
            personName: "Megan Taylor",
            mail: "megantaylor.eth",
            icon: <img src={Tyler} className="size-[120px]" />,
            online: false,
            popular: true
        },

        {
            id: 4,
            personName: "Alex Martinez",
            icon: <img src={Cody} className="size-[120px]" />,
            mail: "amartnes.eth",
            online: true,
            popular: true
        },

    ];
    const [cards, setCards] = useState<AuthorCard[]>(originalCards);
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
                    <h1 className='text-gray-900 text-h-24-24-600'>Authors</h1>
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

            <div className="flex flex-row items-center justify-between">
                <span className="text-b-15-16-500 text-gray-900">Showing {cards.length} Users</span>
                <div className="flex flex-row items-center gap-5">
                    <div className="flex flex-row items-center gap-2.5">
                        <select className="border px-3 py-2 rounded-md text-b-12-12-500 text-gray-900 outline-none" onChange={(e) => setStatus(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Online">Online</option>
                            <option value="Offline">Offline</option>
                        </select>
                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary-light text-b-12-12-500 text-primary border border-primary border-opacity-20 gap-[6px]">
                            <LuSettings2 className="size-[14px] text-primary" />
                            Filters
                        </button>
                    </div>
                    <div className="p-2.5 border rounded-md flex flex-row items-center gap-1 bg-[#FCFCFC]">
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
            <div className="grid grid-cols-1  md:grid-cols-2 gap-[30px] z-1">

                {
                    cards.map((author) => (
                        <div className="w-max">
                            <Card
                                dotStatus={false}
                                buttonStatus={true}
                                buttonTitle="View Profile"
                                content={
                                    <>
                                        <div className="flex flex-col  relative ">
                                            <div className="bg-gray-600 h-full min-h-[200px] w-full max-w-[555px] rounded-xl">

                                            </div>
                                            <div className=" absolute top-[130px] left-[30px]   ">
                                                <div className=" flex flex-row items-end gap-10 justify-between w-full ">
                                                    <div className="flex flex-row items-end gap-2.5">
                                                       {author.icon}
                                                        <div className="flex flex-col gap-[7px]">
                                                            <div className="flex flex-row items-center gap-1 ">
                                                                <Link to={location} className="text-b-18-18-600 text-gray-900 hover:text-primary text-animation">{author.personName}</Link>
                                                                <img src={Verify} alt="" />
                                                            </div>
                                                            <span className="text-b-12-12-400 text-gray-700">Houston, Texas</span>
                                                        </div>
                                                    </div>
                                                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                                        <IoSettingsOutline className="text-gray-500 size-[14px]" />
                                                        Work with me
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-5 pl-[30px] pt-20 pb-[30px]">
                                                <div className="w-full max-w-[450px] overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                                    <div className="flex flex-row  items-center gap-5 ">
                                                        <Card
                                                            dotStatus={false}
                                                            buttonStatus={false}
                                                            content={
                                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                                    <img src={GeometricPatern} alt="geometric" className="rounded-t-xl w-full" />
                                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">

                                                                        <div className="flex flex-col gap-2">
                                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">Geometric Patterns</Link>
                                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                                <span className="text-b-13-14-400 text-gray-700">Token ID:</span>
                                                                                <span className="text-b-13-14-500 text-gray-800">81023</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            }
                                                        />
                                                        <Card
                                                            dotStatus={false}
                                                            buttonStatus={false}
                                                            content={
                                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                                    <img src={ArticticExpression} alt="Artistic" className="rounded-t-xl w-full" />
                                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">

                                                                        <div className="flex flex-col gap-2">
                                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">Artistic Expressions</Link>
                                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                                <span className="text-b-13-14-400 text-gray-700">Token ID:</span>
                                                                                <span className="text-b-13-14-500 text-gray-800">67890</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            }
                                                        />
                                                        <Card
                                                            dotStatus={false}
                                                            buttonStatus={false}
                                                            content={
                                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                                    <img src={GeometricPatern} alt="polina" className="rounded-t-xl w-full" />
                                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">

                                                                        <div className="flex flex-col gap-2">
                                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">Digital Harmony</Link>
                                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                                <span className="text-b-13-14-400 text-gray-700">Token ID:</span>
                                                                                <span className="text-b-13-14-500 text-gray-800">81023</span>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            }
                                                        />


                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                }
                            />
                        </div>
                    ))
                }
            </div >



            <div className="flex items-center justify-center">
                <Link to={location} className="text-primary border-b border-dotted border-primary text-b-13-14-500">Show more Users</Link>
            </div>

        </div >
    )
}
export default Author