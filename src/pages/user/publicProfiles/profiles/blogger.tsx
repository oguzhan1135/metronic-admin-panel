import { CiClock2, CiHeart, CiMail } from "react-icons/ci"
import { FaShareAlt } from "react-icons/fa"
import { FaFacebook, FaYoutube, FaUsers } from "react-icons/fa6"
import { FiCoffee } from "react-icons/fi"
import { GiAbstract080 } from "react-icons/gi"
import { IoRocketOutline } from "react-icons/io5"
import { SlLocationPin } from "react-icons/sl"
import { TiPrinter } from "react-icons/ti"
import { Link } from "react-router"
import Card from "../../../../components/card/card"
import Menu from "../../../../components/publicProfile/hovermenu"
import Switch from "../../../../components/switch"
import Badges from "../../../../components/publicProfile/badges"
import CheckCircle from '../../../../assets/icon/check-circle.svg'
import Arrow from '../../../../assets/icon/arrow.svg'
import Verify from '../../../../assets/icon/verify.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import ModernSoftware from '../../../../assets/icon/modernSoftware.svg'
import Balancing from '../../../../assets/icon/blancingWork.svg'
import VerifyEmail from '../../../../assets/icon/verify-email.svg'
import { useState } from "react"
import VerifyEmailDark from '../../../../assets/icon/verify-email-dark.svg'
import ArrowDark from '../../../../assets/icon/arrow-dark.svg'

const Blogger = () => {
    const location = window.location.pathname
    const [refresh, setRefresh] = useState(true)

    return (
        <div className="flex flex-col gap-10">
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

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] p-4">
                <div className="xl:col-span-1 flex flex-col gap-[30px]">
                    {/* {Data} */}
                    <div className="bg-light rounded-xl shadow-sm border">
                        <div className="flex items-center justify-center py-[30px] ">
                            <div className="flex flex-row items-center gap-5">
                                <div className="flex  flex-col gap-2.5 items-center pr-5 border-r">
                                    <span className="text-h-26-26-600 text-gray-900">397</span>
                                    <span className="text-b-16-16-400 text-gray-700">Topics</span>
                                </div>

                                <div className="flex  flex-col gap-2.5 items-center pr-5">
                                    <span className="text-h-26-26-600 text-gray-900">8.2k</span>
                                    <span className="text-b-16-16-400 text-gray-700">Upvotes</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* {Members} */}

                    {/* {About} */}

                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="Profile"
                        content={
                            <div className="flex flex-col px-[30px] gap-5  py-5">
                                <p>Experienced and creative professional with a passion great as for problem-solving and a commitment to excellence.</p>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">KeenThemes</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">Author Level 100</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">UI/UX Desiger</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">jenny@kteam.com</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <CiMail className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">jenny@kteam.com</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaFacebook className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">keenthemes</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaYoutube className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">keenthemes</Link>
                                </div>
                            </div>

                        }
                    />
                    {/* {Community Badges} */}

                    <Badges title={"Community Badges"} />
                    {/* Collaborate */}
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        title="Collaborate"
                        buttonTitle="View details"
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <p className="text-b-14-22-400 text-gray-800 ">Experienced UI/UX designer seeking new opportunities.</p>
                            </div>
                        }
                    />

                    {/* {Skills} */}

                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title='Skills'
                        content={
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-row items-center flex-wrap gap-[10px] px-[30px] py-5">
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Web Design</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Code Review</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Figma</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Product Development</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Webflow</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>AI</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>noCode</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Management</span>
                                    </div>

                                </div>
                            </div>
                        }
                    />
                </div>

                <div className="lg:col-span-2 flex flex-col gap-[30px]">
                    {/* Restyle Your Space */}
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="Get Started"
                        content={

                            <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-10 py-[50px]">
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-1">
                                        <span className='text-gray-900 text-h-22-22-600 max-w-[280px]'>Restyle Your Space:
                                        </span>
                                        <span className='text-gray-900 text-h-22-22-600'>Soft Goods Makeover Ideas</span>
                                    </div>

                                    <p className='max-w-[437px] text-b-14-22-400 text-gray-700'>
                                        Transform your living space beautifully with our 'Restyle Your Space: Soft Goods Makeover Ideas' tutorial.
                                    </p>
                                    <div className="flex flex-row items-center gap-11 pt-1">
                                        <div className="flex flex-col  gap-[15px]">
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <img src={CheckCircle} alt="" />
                                                <span className="text-b-14-14-400 text-gray-900">Time-Saving</span>
                                            </div>
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <img src={CheckCircle} alt="" />
                                                <span className="text-b-14-14-400 text-gray-900">Budget-Friendly</span>

                                            </div>

                                        </div>
                                        <div className="flex flex-col  gap-[15px]">
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <img src={CheckCircle} alt="" />
                                                <span className="text-b-14-14-400 text-gray-900">Easy Revamp</span>

                                            </div>
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <img src={CheckCircle} alt="" />
                                                <span className="text-b-14-14-400 text-gray-900">Fresh Look</span>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                                <img src={Arrow} alt="arrow-light" className="dark:hidden" />
                                <img src={ArrowDark} alt="arrow-dark" className="dark:flex hidden" />

                            </div>
                        }
                    />
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <Link
                                to={location}
                                className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer"
                            >
                                View All
                            </Link>
                        }
                        content={
                            <div className="flex flex-col gap-5 pl-[30px] py-5">
                                <div className="w-full overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                    <div className="flex flex-row  items-center gap-5 ">
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-full pb-5">
                                                    <img src={ModernSoftware} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-5 flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-orange-500 hover:text-primary text-animation">Software</Link>
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Maximizing Efficiency with
                                                            Modern Software
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <CiClock2 className="text-gray-500 size-[18px]" />
                                                            <span className='text-gray-700 text-b-13-14-400'>4 hours ago</span>

                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-full pb-5">
                                                    <img src={Balancing} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-5 flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-orange-500 hover:text-primary text-animation">Work-Life</Link>
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Balancing Work and Life:
                                                            Strategies for Success
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <CiClock2 className="text-gray-500 size-[18px]" />
                                                            <span className='text-gray-700 text-b-13-14-400'>2 days ago</span>

                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-full pb-5">
                                                    <img src={ModernSoftware} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-5 flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-orange-500 hover:text-primary text-animation">Technology</Link>
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Exploring the Latest
                                                            Technological Advancements
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <CiClock2 className="text-gray-500 size-[18px]" />
                                                            <span className='text-gray-700 text-b-13-14-400'>A week ago</span>

                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                        />

                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-full pb-5">
                                                    <img src={Balancing} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-5 flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-orange-500 hover:text-primary text-animation">Work-Life</Link>
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Balancing Work and Life:
                                                            Strategies for Success
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <CiClock2 className="text-gray-500 size-[18px]" />
                                                            <span className='text-gray-700 text-b-13-14-400'>2 days ago</span>

                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                        />

                                    </div>
                                </div>
                            </div>
                        }
                        title="Jenny’s Posts"

                    />
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <Link
                                to={location}
                                className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer"
                            >
                                View All
                            </Link>
                        }
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="flex flex-col gap-[7px] px-3 border-l-2 border-l-danger">
                                    <div className="flex flex-row items-center gap-2.5 ">
                                        <span className="text-b-13-14-400 text-gray-600">10 Jan, 24</span>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "500px" }} className="size-[6px] bg-gray-300 rounded-full block"></span>
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <CiHeart className="size-[18px] text-gray-500" />
                                            <span className="text-b-13-14-400 text-gray-700">24</span>
                                        </div>

                                    </div>
                                    <span className="text-b-14-22-400 text-gray-800">Experienced UI/UX designer seeking new opportunities.</span>
                                </div>
                                <div className="flex flex-col gap-[7px] px-3 border-l-2 border-l-primary">
                                    <div className="flex flex-row items-center gap-2.5 ">
                                        <span className="text-b-13-14-400 text-gray-600">23 Jan, 24</span>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "500px" }} className="size-[6px] bg-gray-300 rounded-full block"></span>
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <CiHeart className="size-[18px] text-gray-500" />
                                            <span className="text-b-13-14-400 text-gray-700">3</span>
                                        </div>

                                    </div>
                                    <span className="text-b-14-22-400 text-gray-800">Include the name of the author of the blog post. This helps to build trust and credibility with readers.</span>
                                </div>
                                <div className="flex flex-col gap-[7px] px-3 border-l-2 border-l-warning">
                                    <div className="flex flex-row items-center gap-2.5 ">
                                        <span className="text-b-13-14-400 text-gray-600">4 Feb, 24</span>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "500px" }} className="size-[6px] bg-gray-300 rounded-full block"></span>
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <CiHeart className="size-[18px] text-gray-500" />
                                            <span className="text-b-13-14-400 text-gray-700">89</span>
                                        </div>

                                    </div>
                                    <span className="text-b-14-22-400 text-gray-800">Avoid using all caps or excessive punctuation.</span>
                                </div>

                                <div className="flex flex-col gap-[7px] px-3 border-l-2 border-l-success">
                                    <div className="flex flex-row items-center gap-2.5 ">
                                        <span className="text-b-13-14-400 text-gray-600">17 Mar, 24</span>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "500px" }} className="size-[6px] bg-gray-300 rounded-full block"></span>
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <CiHeart className="size-[18px] text-gray-500" />
                                            <span className="text-b-13-14-400 text-gray-700">32</span>
                                        </div>

                                    </div>
                                    <span className="text-b-14-22-400 text-gray-800">You can use this example as a starting point to design your own blog post cards. Be sure to experiment with different layouts, fonts, and colors both visually appealing and informative.</span>
                                </div>
                                <div className="flex flex-col gap-[7px] px-3 border-l-2 border-l-warning">
                                    <div className="flex flex-row items-center gap-2.5 ">
                                        <span className="text-b-13-14-400 text-gray-600">9 Apr, 24</span>
                                        <span style={{ width: "6px", height: "6px", borderRadius: "500px" }} className="size-[6px] bg-gray-300 rounded-full block"></span>
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <CiHeart className="size-[18px] text-gray-500" />
                                            <span className="text-b-13-14-400 text-gray-700">57</span>
                                        </div>

                                    </div>
                                    <span className="text-b-14-22-400 text-gray-800">Use high-quality images and graphics to capture the visual appeal of your cards.</span>
                                </div>
                            </div>
                        }
                        title="Jenny’s Replies"

                    />
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="All-time Activity"
                        dotContentStatus={true}
                        title="Activity"
                        dotContent={
                            <div className="flex flex-row  items-center">
                                <span className="pr-2 text-gray-700 text-b-14-14-500">Auto refresh : {refresh ? <>On</> : <>Off</>}</span>
                                <Switch setSwitch={() => setRefresh(!refresh)} status={refresh} size={"medium"} />
                            </div>
                        }
                        content={

                            <div className="flex flex-col px-[30px] py-5">
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
                                                <FaUsers className="text-gray-600" />
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

                                    <div className="flex flex-row items-start gap-2.5 relative">
                                        <div className="flex flex-col items-center relative">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <TiPrinter className="text-gray-600" />
                                            </div>
                                            <span className="w-[1px] absolute h-full bg-gray-300 left-5 -translate-x-1/2 z-0"></span>
                                        </div>
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Attending the virtual blogging conference was an enriching experience
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">1 week ago, 11:45 AM</span>
                                            <div className="flex flex-col items-center justify-center">

                                                <img src={VerifyEmail} alt="verify-light" className="dark:hidden" />
                                                <img src={VerifyEmailDark} alt="verify-dark" className="dark:flex hidden" />

                                                <div className="flex flex-col gap-[6px]">
                                                    <span className="text-b-15-16-500">Blogging Conference</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-2.5 flex-wrap">
                                                    <span className="text-b-13-14-400 text-gray-600">
                                                        <Link to={location} className="text-primary"> Axio new release </Link>
                                                        email campaign
                                                    </span>
                                                    <div className="px-[6px] py-[5px] bg-success-light border border-success-clarity rounded-md items-center justify-center flex">
                                                        <span className="text-b-11-12-500 text-success">Public</span>
                                                    </div>
                                                </div>
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
                                                <Link to={location} className="text-primary"> 10,000 followers </Link>
                                                on the blog was a dream come true
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">5 days ago, 4:07 PM</span>
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
                                                <Link to={location} className="text-primary"> celebrated </Link>
                                                the blog's 1-year anniversary
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">3 weeks ago, 4:07 PM</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                    />


                </div>
            </div>
        </div>
    )
}
export default Blogger