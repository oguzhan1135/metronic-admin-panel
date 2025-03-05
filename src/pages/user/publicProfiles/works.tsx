import Card from "../../../components/publicProfile/card"
import Verify from '../../../assets/icon/verify.svg'
import Jennifer from '../../../assets/icon/jennifer.svg'
import { CiGrid2H, CiGrid41, CiHeart, CiMail } from "react-icons/ci"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router"
import Menu from "../../../components/hovermenu"
import { useState } from "react"
import { HiOutlineDotsVertical } from "react-icons/hi"
import CardMore from "../../../components/more/cardMore"
import Cody from '../../../assets/icon/cody-fisher.svg'
import Tyler from '../../../assets/icon/tyler-hero.svg'
import Floyd from '../../../assets/icon/floyed.svg'
import UrbanDreams from '../../../assets/icon/fachrizal-maulana.svg'
import { FaCommentAlt, FaHeart } from "react-icons/fa"
import Whispered from '../../../assets/icon/work-whispered.svg'
import Godlen from '../../../assets/icon/hor.svg'
import Mystic from '../../../assets/icon/work-mystic.svg'
import Wild from '../../../assets/icon/work-wild.svg'
import Beuity from '../../../assets/icon/wild-beautiy.svg'
import Timeless from '../../../assets/icon/work-timeless.svg'

interface Work {
    id: number;
    image: string;
    workName: string;
    authorName: string;
    authorIcon: React.ReactElement;
    like: number;
    comment: number;

}

const Works = () => {


    const location = window.location.pathname
    const [selectedCardView, setSelectedCardView] = useState("card");
    const [more, setMore] = useState(false)
    const [works, setWorks] = useState<Work[]>([
        {
            id: 1,
            image: UrbanDreams,
            workName: "Urban Dreams",
            authorName: "Cody Fisher",
            authorIcon: <img src={Cody} className="size-7" />,
            like: 24,
            comment: 5
        },
        {
            id: 2,
            image: Whispered,
            workName: "Whispered Emotions",
            authorName: "Wade Warren",
            authorIcon: <img src={Tyler} className="size-7" />,
            like: 187,
            comment: 49
        },
        {
            id: 3,
            image: UrbanDreams,
            workName: "Golden Serenity",
            authorName: "Albert Flores",
            authorIcon: <img src={Cody} className="size-7" />,
            like: 60,
            comment: 13
        },
        {
            id: 4,
            image: Mystic,
            workName: "Mystic Shadows",
            authorName: "Kathryn Murphy",
            authorIcon: <img src={Jennifer} className="size-7" />,
            like: 37,
            comment: 16
        },
        {
            id: 5,
            image: Wild,
            workName: "Wild Beauty",
            authorName: "Devon Lane",
            authorIcon: <img src={Cody} className="size-7" />,
            like: 625,
            comment: 109
        },
        {
            id: 6,
            image: Timeless,
            workName: "Timeless Elegance",
            authorName: "Jenny Wilson",
            authorIcon: <img src={Cody} className="size-7" />,
            like: 6,
            comment: 1
        },
        {
            id: 7,
            image: Beuity,
            workName: "Wild Beauty",
            authorName: "Devon Lane",
            authorIcon: <img src={Cody} className="size-7" />,
            like: 625,
            comment:109
        },
        {
            id: 8,
            image: UrbanDreams,
            workName: "Golden Serenity",
            authorName: "Albert Flores",
            authorIcon: <img src={Cody} className="size-7" />,
            like: 60,
            comment: 13
        },
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
                <h1 className="text-b-18-18-600 text-gray-900">12 Projects</h1>
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
                    works.map((item) => (
                        <>


                            <Card buttonStatus={false} dotStatus={true}

                                content={
                                    <div className={`${selectedCardView === "card" ? "flex flex-col gap-5 pb-5  rounded-xl z-10 overflow-hidden" : "flex flex-col md:flex-row items-start md:items-center w-full justify-start md:justify-between gap-[30px] p-[30px]"}`}>



                                        <div className={`${selectedCardView === "list" ? "flex flex-col sm:flex-row gap-5 items-center" : "flex flex-col gap-5 items-start"}`}>
                                            <img src={item.image} className={`h-full ${selectedCardView === "list" ? "w-fit rounded-xl max-w-[140px]" : "w-full"}`} />
                                            <div className="flex flex-col gap-2.5">
                                                <Link to={location} className={`text-b-18-25-500 text-gray-900 hover:text-primary text-animation ${selectedCardView === "card" ? "px-5" : ""}`}>{item.workName}</Link>
                                                <span className={`${selectedCardView === "list" ? "text-b-14-14-400 text-gray-700" : "hidden"}`}>Cloud storage and file sharing</span>
                                            </div>


                                        </div>
                                        <div className={`${selectedCardView === "card" ? "flex flex-row  justify-between px-5" : "flex flex-row gap-5 items-center flex-wrap md:flex-nowrap"}`}>
                                            <div className="flex flex-row items-center gap-[7px]">
                                                {item.authorIcon}
                                                <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">{item.authorName}</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-3  flex-wrap md:flex-nowrap">
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaHeart className="size-4 text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-800">{item.like} <span className={` ${selectedCardView === "list" ? "text-b-13-14-400 text-gray-800" : "hidden"}`}>Comments</span></span>
                                                </div>
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaCommentAlt className="size-4 text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-800">{item.comment} <span className={` ${selectedCardView === "list" ? "text-b-13-14-400 text-gray-800" : "hidden"}`}>Comments</span></span>
                                                </div>
                                            </div>
                                            <div className={`${selectedCardView === "list" ? "relative" : "hidden"}`}>
                                                <div
                                                    onClick={() => setMore((prev) => !prev)}
                                                    className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
                                                >
                                                    <HiOutlineDotsVertical />
                                                </div>

                                                {more && <CardMore setMore={setMore} more={more} />}
                                            </div>
                                        </div>

                                    </div>
                                }
                            />


                        </>
                    ))
                }
            </div>


            <div className="flex items-center justify-center">
                <Link to={location} className="border-b-primary border-b border-dotted text-b-13-14-500 text-primary">Show more works</Link>
            </div>
        </div >
    )
}
export default Works