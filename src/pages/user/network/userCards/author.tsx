import { Link } from "react-router"
import { useEffect, useState } from "react";
import React from "react";
import Card from "../../../../components/card/card";
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Verify from '../../../../assets/icon/verify.svg'
import { LuSettings2 } from "react-icons/lu";
import { CiGrid2H, CiGrid41, CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import GeometricPatern from '../../../../assets/icon/geometric-patterns.svg'
import ArtisticExpression from '../../../../assets/icon/artistic-expression.svg'
import Arlene from '../../../../assets/icon/arlene-mccoy.svg'
import GoogleDeepMind from '../../../../assets/icon/google-deepmind.svg'
import DynamicWang from '../../../../assets/icon/dynamic-wang.svg'
import Seo from '../../../../assets/icon/seo.svg'
import RadeonKutsaiev from '../../../../assets/icon/rodion-kutsaiev.svg'
import RodionHeart from '../../../../assets/icon/radeon--heart.svg'
import DynamicRobo from '../../../../assets/icon/dynamic-wang-robo.svg'

interface AuthorCard {
    id: number;
    icon?: React.ReactElement;
    personName: string;
    mail: string;
    color?: string;
    online: boolean;
    popular: boolean;
    bg: string;
    works: Work[]
}
interface Work {
    title: string;
    tokenID: number;
    icon: string;
}
const Author = () => {
    const location = window.location.pathname
    const [selectedCardView, setSelectedCardView] = useState("card");


    const originalCards: AuthorCard[] = [
        {
            id: 1,
            personName: "Jenny Klabber",
            icon: <img src={Jennifer} className={`${selectedCardView == "card" ? "size-[120px]" : "size-[80px]"}`} />,
            mail: "starlight.eth",
            online: true,
            popular: true,
            bg: "bg-author-bg-1",
            works: [
                {
                    title: "Geometric Pattern",
                    tokenID: 81023,
                    icon: GeometricPatern
                },
                {
                    title: "Artistic Expression",
                    tokenID: 81023,
                    icon: ArtisticExpression
                },
                {
                    title: "GeometricPattern",
                    tokenID: 81023,
                    icon: DynamicRobo
                },
                {
                    title: "Digital Harmony",
                    tokenID: 81023,
                    icon: RadeonKutsaiev
                },
            ]
        },
        {
            id: 2,
            personName: "Ralph Edwards",
            icon: <img src={Cody} className={`${selectedCardView == "card" ? "size-[120px]" : "size-[80px]"}`} />,
            mail: "amartnes.eth",
            online: true,
            popular: true,
            bg: "bg-author-bg-4",
            works: [
                {
                    title: "Geometric Pattern",
                    tokenID: 81023,
                    icon: GoogleDeepMind
                },
                {
                    title: "Artistic Expression",
                    tokenID: 81023,
                    icon: ArtisticExpression
                },
                {
                    title: "GeometricPattern",
                    tokenID: 81023,
                    icon: DynamicRobo
                },
                {
                    title: "Digital Harmony",
                    tokenID: 81023,
                    icon: RadeonKutsaiev
                },
            ]
        },
        {
            id: 3,
            personName: "Jacob Jones Johnson",
            mail: "sarahjohnson.eth",
            icon: <img src={Tyler} className={`${selectedCardView == "card" ? "size-[120px]" : "size-[80px]"}`} />,
            online: true,
            popular: false,
            bg: "bg-author-bg-2",
            works: [
                {
                    title: "Geometric Pattern",
                    tokenID: 81023,
                    icon: RodionHeart
                },
                {
                    title: "Artistic Expression",
                    tokenID: 81023,
                    icon: RadeonKutsaiev
                },
                {
                    title: "GeometricPattern",
                    tokenID: 81023,
                    icon: Seo
                },
                {
                    title: "Digital Harmony",
                    tokenID: 81023,
                    icon: DynamicWang
                },
            ]
        },
        {
            id: 4,
            personName: "Kristin Watson",
            mail: "megantaylor.eth",
            icon: <img src={Arlene} className={`${selectedCardView == "card" ? "size-[120px]" : "size-[80px]"}`} />,
            online: false,
            popular: true,
            bg: "bg-author-bg-3",
            works: [
                {
                    title: "Geometric Pattern",
                    tokenID: 81023,
                    icon: DynamicWang
                },
                {
                    title: "Artistic Expression",
                    tokenID: 81023,
                    icon: ArtisticExpression
                },
                {
                    title: "GeometricPattern",
                    tokenID: 81023,
                    icon: DynamicRobo
                },
                {
                    title: "Digital Harmony",
                    tokenID: 81023,
                    icon: Seo
                },
            ]
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

            <div className="flex flex-col md:flex-row items-center justify-between flex-wrap md:gap-0 gap-5">
                <span className="text-b-15-16-500 text-gray-900">Showing {cards.length} Users</span>
                <div className="flex flex-wrap items-center gap-5 ">
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
                    <div className="rounded-lg border p-[3px] bg-gray-200 flex flex-row items-center gap-1">
                        <div onClick={() => setSelectedCardView("card")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "card" ? " border-gray-200 bg-white" : "border-transparent"} cursor-pointer hover:bg-white text-animation`}>
                            <CiGrid41 className="text-gray-600 size-[14px]" />
                        </div>
                        <div onClick={() => setSelectedCardView("list")} className={`p-[9px] flex items-center justify-centerr rounded-lg border ${selectedCardView === "list" ? "border-gray-200 bg-white" : "border-transparent"} cursor-pointer hover:bg-white text-animation`}>
                            <CiGrid2H className="text-gray-600 size-[14px]" />
                        </div>
                    </div>
                </div>
            </div>
            {
                selectedCardView === "card" ?
                    <div className="grid grid-cols-1  md:grid-cols-2 gap-[30px] z-1">

                        {
                            cards.map((author) => (
                                <div className="">
                                    <Card
                                        dotStatus={false}
                                        buttonStatus={true}
                                        buttonTitle="View Profile"
                                        content={
                                            <>
                                                <div className="flex flex-col  relative ">
                                                    <div className={`${author.bg} bg-cover h-full min-h-[200px] w-full  rounded-t-xl`}>

                                                    </div>
                                                    <div className=" absolute top-[130px] left-[30px]   ">
                                                        <div className=" flex flex-row items-end gap-10 justify-between w-full flex-wrap ">
                                                            <div className="flex flex-row items-end gap-2.5">
                                                                <div className="relative">
                                                                    {author.icon}
                                                                    <div className={`absolute bottom-[4px] right-2 w-3 h-3 rounded-full ${author.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-white`}></div>
                                                                </div>
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
                                                        <div className="w-full  overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                                            <div className="flex flex-row  items-center gap-5 ">

                                                                {
                                                                    author.works.map((item) => (
                                                                        <Card
                                                                            dotStatus={false}
                                                                            buttonStatus={false}
                                                                            content={
                                                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                                                    <img src={item.icon} alt={item.title} className="rounded-t-xl w-full" />
                                                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">

                                                                                        <div className="flex flex-col gap-2">
                                                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">{item.title}</Link>
                                                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                                                <span className="text-b-13-14-400 text-gray-700">Token ID:</span>
                                                                                                <span className="text-b-13-14-500 text-gray-800">{item.tokenID}</span>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            }
                                                                        />

                                                                    ))
                                                                }
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
                    :
                    <div className="flex flex-col gap-[30px]">
                        {
                            cards.map((author) => (
                                <div className="flex flex-col md:flex-row gap-5 justify-between a items-center border p-[30px] rounded-xl">
                                    <div className="flex flex-row items-center gap-2.5">
                                        <div className="relative">
                                            {author.icon}
                                            <div className={`absolute bottom-[4px] right-2 w-3 h-3 rounded-full ${author.online ? 'bg-success' : 'bg-gray-400'} border-[2px] border-white`}></div>
                                        </div>
                                        <div className="flex flex-col gap-[7px]">
                                            <div className="flex flex-row items-center gap-1 ">
                                                <Link to={location} className="text-b-18-18-600 text-gray-900 hover:text-primary text-animation">{author.personName}</Link>
                                                <img src={Verify} alt="" />
                                            </div>
                                            <span className="text-b-12-12-400 text-gray-700">Houston, Texas</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-center md:justify-betweens w-full max-w-[600px] gap-5 flex-wrap">
                                        <div className="flex flex-col gap-5 max-w-[300px] ">
                                            <div className="w-full  overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                                <div className="flex flex-row  items-center gap-5 ">

                                                    {
                                                        author.works.map((item) => (
                                                            <Card
                                                                dotStatus={false}
                                                                buttonStatus={false}
                                                                content={
                                                                    <div className="flex flex-row gap-5 w-max pb-5">
                                                                        <img src={item.icon} alt={item.title} className="rounded-xl max-w-[100px] max-h-[73px]" />
                                                                        <div className="px-[14px] flex flex-row items-center gap-2.5">

                                                                            <div className="flex flex-col gap-2">
                                                                                <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">{item.title}</Link>
                                                                                <div className="flex flex-row items-center gap-[6px]">
                                                                                    <span className="text-b-13-14-400 text-gray-700">Token ID:</span>
                                                                                    <span className="text-b-13-14-500 text-gray-800">81023</span>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                }
                                                            />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={location} className="text-primary text-13-14-500 border-b border-b-primary border-dotted">View Profile</Link>
                                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                            <IoSettingsOutline className="text-gray-500 size-[14px]" />
                                            Work with me
                                        </button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
            }




            <div className="flex items-center justify-center">
                <Link to={location} className="text-primary border-b border-dotted border-primary text-b-13-14-500">Show more Users</Link>
            </div>

        </div >
    )
}
export default Author