import Card from "@components/card/card"
import { CiBasketball } from "react-icons/ci"
import { SlCalender, } from "react-icons/sl"
import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import { useState } from "react"
import AvatarGroup from '@assets/avatar-group.svg'
import { FaShareAlt } from "react-icons/fa"
import { FaLaptopCode, FaUsers } from "react-icons/fa6"
import { FiCoffee } from "react-icons/fi"
import { IoRocketOutline } from "react-icons/io5"
import Switch from "@components/switch"
import Digital from '@assets/daigital.svg'
import Multitasking from '@assets/multitasking.svg'
import MultitaskingDark from '@assets/multitasking-dark.svg'
import Raiting from '@assets/raiting.svg'
import { LuLogOut } from "react-icons/lu"
import { ImHappy } from "react-icons/im"
import Questions from "@components/myAccount/questions"

const Activity = () => {
    const location = window.location.pathname
    const [refresh, setRefresh] = useState(true)
    const [selectedYear, setSelectedYear] = useState(2024)

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Invite a Friend</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Privacy Settings
                </button>
            </div>
            <div className="flex flex-col gap-[30px] ">

                <div className="flex w-full md:flex-row flex-col gap-[30px]">
                    <div className="flex-1 flex flex-col gap-[30px]">
                        <Card
                            dotStatus={false}
                            buttonStatus={true}
                            buttonTitle="View earlier"
                            dotContentStatus={true}
                            title="Activity"
                            dotContent={
                                <div className="flex flex-row  items-center">
                                    <span className="pr-2 text-gray-700 text-b-14-14-500">Auto refresh : {refresh ? <>On</> : <>Off</>}</span>
                                    <Switch setSwitch={() => setRefresh(!refresh)} status={refresh} size={"medium"} />
                                </div>
                            }
                            content={

                                <div className="flex flex-col px-[30px] py-5 ">
                                    <div className="flex flex-col gap-[30px] relative overflow-hidden">
                                        <span className="w-[1px] absolute h-full bg-gray-300 left-5 -translate-x-1/2 z-0"></span>

                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <FaUsers className="text-gray-600" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    Posted a new article
                                                    <Link to={location} className="text-primary"> Top 10 Tech Trends</Link>
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">Today, 9:00 AM</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <LuLogOut className="text-gray-600" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    I had the privilege of interviewing an industry expert for an
                                                    <Link to={location} className="text-primary"> upcoming blog post</Link>
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">2 days ago, 4:07 PM</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 items-start justify-start">
                                            <div className="flex flex-row items-start gap-2.5 relative">
                                                <div className="flex flex-col items-center relative">
                                                    <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                        <ImHappy className="text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[6px]">
                                                    <span className="text-b-14-14-400 text-gray-900">
                                                        Jenny attended a Nature Photography Immersion workshop
                                                    </span>
                                                    <span className="text-b-12-12-400 text-gray-600">3 days ago, 11:45 AM</span>
                                                </div>

                                            </div>
                                            <div className="flex flex-row  items-center gap-5 pl-12">
                                                <div className="flex flex-col  rounded-lg border-[#D74E00] border-opacity-20  border-[2px] ">
                                                    <div className="py-2 px-3 bg-[#fff5ef] dark:bg-[#D74E00] dark:bg-opacity-20 rounded-t-lg flex items-center justify-center border-b-2 border-[#D74E00] border-opacity-20">
                                                        <span className="text-[#FF6F1E] text-b-13-14-500">Apr</span>
                                                    </div>
                                                    <div className="flex items-center justify-center py-[6px]">
                                                        <span className="text-gray-800 text-h-22-38-500 ">02</span>
                                                    </div>
                                                </div>
                                                <img src={Digital} alt="" />
                                                <div className="flex flex-col gap-2.5">
                                                    <Link to={location} className="text-[#FF6F1E] text-b-13-14-400 hover:text-primary text-animation">Photo Workshop</Link>
                                                    <Link to={location} className="text-gray-900 text-b-16-16-500 hover:text-primary text-animation">Nature Photography Immersion</Link>
                                                    <p className="text-b-14-22-400 text-gray-800">Enhance your nature photography skills in a hands-on workshop guided by experienced photographers.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <FaShareAlt className="text-gray-600" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    I couldn't resist sharing a sneak peek of our
                                                    <Link to={location} className="text-primary"> upcoming content</Link>
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">5 days ago, 4:07 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-row items-start gap-2.5 relative">
                                                <div className="flex flex-col items-center relative">
                                                    <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                        <SlCalender className="text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[6px] w-full ">
                                                    <span className="text-b-14-14-400 text-gray-900">
                                                        <div className="flex flex-col gap-3">
                                                            <div className="flex flex-row items-start gap-2.5 relative">

                                                                <div className="flex flex-col gap-[6px]">
                                                                    <span className="text-b-14-14-400 text-gray-900">
                                                                        Jenny attended a webinar on new product features.
                                                                    </span>
                                                                    <span className="text-b-12-12-400 text-gray-600">3 days ago, 11:45 AM</span>
                                                                </div>

                                                            </div>

                                                            <div className="flex p-4 border rounded-lg ">
                                                                <div className="flex flex-col md:flex-row items-start gap-2.5 md:justify-between justify-center w-full">
                                                                    <div className="flex flex-row items-start gap-2.5">
                                                                        <FaLaptopCode className="size-4 text-[#7239EA]" />
                                                                        <div className="flex flex-col gap-2">
                                                                            <span className="text-b-15-16-500 text-gray-900">Leadership Development Series: Part 1</span>
                                                                            <span className=" text-gray-600 text-b-12-12-400">The first installment of a leadership development series.</span>
                                                                            <div className="flex flex-row items-center gap-[30px] flex-wrap pt-3">
                                                                                <div className="flex flex-row items-center gap-[6px]">
                                                                                    <span className="text-b-13-14-400 text-gray-600" >Code:</span>
                                                                                    <Link to={location} className="text-primary">#leaderdev-1</Link>
                                                                                </div>
                                                                                <div className="flex flex-row items-center gap-[6px]">
                                                                                    <span className="text-b-13-14-400 text-gray-600" >Progress</span>
                                                                                    <div className="bg-success-light h-1 w-32 relative">
                                                                                        <span className=" absolute h-1 bg-success top-0 left-0 w-20"></span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex flex-row items-center gap-[6px]">
                                                                                    <span className="text-b-13-14-400 text-gray-600" >Guests:</span>
                                                                                    <img src={AvatarGroup} alt="avatare-group" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <Link to={location} className="text-primary border-b border-dotted border-b-primary text-b-13-14-500">View</Link>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <FiCoffee className="text-gray-600" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-[6px]">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    Reaching the milestone of
                                                    <Link to={location} className="text-primary">  10,000 followers </Link>
                                                    on the blog was a dream come true
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">5 days ago, 4:07 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <FaUsers className="text-gray-600" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    Completed phase one of client project ahead of schedule.
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">6 days ago, 10:45 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <FiCoffee className="text-gray-600" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px] w-full items">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    Email campaign sent to Jenny for a special promotion.
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">1 week ago, 11:45 AM</span>
                                                <div className="flex flex-col items-center justify-center gap-[6px] p-4 border rounded-lg">,
                                                    <img src={Multitasking} className="max-w-52 maw-h-52 dark:hidden" alt="multitasking" />
                                                    <img src={MultitaskingDark} className="max-w-52 maw-h-52 dark:flex hidden" alt="multitasking-dark" />
                                                    <span className="text-b-15-16-500 text-gray-900">Blogging Conference</span>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <span className="text-gray-700 text-b-13-14-400"><Link to={location} className="text-primary text-b-13-14-400">Axio new release </Link> email campaign</span>
                                                        <div className="px-[6px] py-[5px] bg-success-light border border-success-clarity flex rounded-md items-center justify-center ">
                                                            <span className="text-b-11-12-500 text-success">Public</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <IoRocketOutline className="text-gray-600" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    Onboarded a talented designer to our creative team, adding valuable expertise to upcoming projects.
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">2 weeks ago, 10:45 AM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-row items-start gap-2.5 relative">
                                                <div className="flex flex-col items-center relative">
                                                    <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                        <FaUsers className="text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[6px]">
                                                    <span className="text-b-14-14-400 text-gray-900">
                                                        A new team <Link to={location} className="text-b-14-14-600 hover:text-primary text-animation"> Market Mavericks</Link> joined community
                                                    </span>
                                                    <span className="text-b-12-12-400 text-gray-600">2 weeks ago, 10:45 AM</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-start md:justify-between gap-[30px] p-[30px]  flex-wrap md:flex-nowrap ">
                                                <div className="flex flex-row gap-5 items-center">
                                                    <div className="bg-gray-100 rounded-full border p-5 ">
                                                        <CiBasketball className="size-6 text-gray-600" />
                                                    </div>
                                                    <div className="flex flex-col gap-2 pb-4 items-start">
                                                        <Link to={location} className="text-b-16-16-500 text-gray-900 hover:text-primary text-animation">Market Mavericks</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">Navigating markets with strategic solutions</span>
                                                    </div>
                                                </div>
                                                <div className={`flex items-center justify-center "flex flex-row gap-5 flex-wrap md:flex-nowrap"}`}>

                                                    <div className={`flex flex-col gap-[14px] items-end`}>
                                                        <span className="text-b-11-12-400 text-gray-600">RAITING</span>
                                                        <img src={Raiting} alt="raiting" className="w-[84px] h-[30px]" />
                                                    </div>
                                                    <div className={`flex "flex-col gap-[14px] items-end`}>
                                                        <span className="text-b-11-12-400 text-gray-600">MEMBERS</span>
                                                        <img src={AvatarGroup} className="w-[93px] h-[30px]" />
                                                    </div>
                                                    <button className={`flex items-center justify-center flex-row p-2.5 rounded-md gap-1 mt-[14px] bg-primary w-max  text-white`}>
                                                        <FaUsers className="size-[14px]" />
                                                        <span className="text-b-12-12-500">Join</span>
                                                    </button>
                                                </div>



                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <IoRocketOutline className="text-gray-600" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-[6px]">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    Hosted a virtual
                                                    <Link to={location} className="text-primary"> team-building event </Link>
                                                    , fostering collaboration and strengthening bonds among team members.
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">1 month ago, 13:56 PM</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 relative">
                                            <div className="flex flex-col items-center relative">
                                                <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                    <IoRocketOutline className="text-gray-600" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-[6px]">
                                                <span className="text-b-14-14-400 text-gray-900">
                                                    We recently
                                                    <Link to={location} className="text-primary">  celebrated </Link>
                                                    the blog's 1-year anniversary
                                                </span>
                                                <span className="text-b-12-12-400 text-gray-600">1 month ago, 13:56 PM</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }
                        />
                        {/* Questions alanı */}
                        <Questions />
                    </div>

                    <div className="flex flex-col gap-2.5 flex-shrink">
                        <button onClick={() => setSelectedYear(2024)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2024 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2024 ? "text-primary" : "text-gray-700"}`}>2024</span>
                        </button>
                        <button onClick={() => setSelectedYear(2023)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2023 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2023 ? "text-primary" : "text-gray-700"}`}>2023</span>
                        </button>
                        <button onClick={() => setSelectedYear(2022)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2022 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2022 ? "text-primary" : "text-gray-700"}`}>2022</span>
                        </button>
                        <button onClick={() => setSelectedYear(2021)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2021 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2021 ? "text-primary" : "text-gray-700"}`}>2021</span>
                        </button>
                        <button onClick={() => setSelectedYear(2020)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2020 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2020 ? "text-primary" : "text-gray-700"}`}>2020</span>
                        </button>
                        <button onClick={() => setSelectedYear(2019)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2019 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2019 ? "text-primary" : "text-gray-700"}`}>2019</span>
                        </button>
                        <button onClick={() => setSelectedYear(2018)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2018 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2018 ? "text-primary" : "text-gray-700"}`}>2018</span>
                        </button>
                        <button onClick={() => setSelectedYear(2017)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2017 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2017 ? "text-primary" : "text-gray-700"}`}>2017</span>
                        </button>
                        <button onClick={() => setSelectedYear(2016)} className={`flex items-center justify-center rounded-lg py-2.5 px-[18px] hover:bg-[#F9F9F9] dark:bg-coal-300 text-animation group ${selectedYear === 2016 ? "bg-[#F9F9F9] dark:bg-coal-300" : "bg-transparent"}`}>
                            <span className={`text-b-13-14-500 group-hover:text-primary ${selectedYear === 2016 ? "text-primary" : "text-gray-700"}`}>2016</span>
                        </button>
                    </div>
                </div>


            </div>
        </div >
    )
}
export default Activity