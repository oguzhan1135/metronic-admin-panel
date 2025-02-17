import { CiMail } from "react-icons/ci"
import { FaFacebook, FaUsers, FaYoutube } from "react-icons/fa6"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Esther from '../../../../assets/icon/ester-hoeard.svg'
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Arlene from '../../../../assets/icon/arlene-mccoy.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import BadgeOne from '../../../../assets/icon/badge-1.svg'
import BadgeTwo from '../../../../assets/icon/badge-2.svg'
import BadgeThree from '../../../../assets/icon/badge-3.svg'
import BadgeFour from '../../../../assets/icon/badge-4.svg'
import Menu from "../../../../components/publicProfile/hovermenu"
import Verify from '../../../../assets/icon/verify.svg'
import Inferno from "../../../../assets/icon/inferno.svg"
import Card from "../../../../components/publicProfile/card"
import Arrow from '../../../../assets/icon/arrow.svg'
import CheckCircle from '../../../../assets/icon/check-circle.svg'
import Urban from '../../../../assets/icon/urban-dreams.svg'
import { FaComment, FaHeart, FaShareAlt } from "react-icons/fa"
import Timeless from '../../../../assets/icon/timeless-elegance.svg'
import Whispered from '../../../../assets/icon/whispared.svg'
import Golden from '../../../../assets/icon/golden.svg'
import WildBeautiy from '../../../../assets/icon/wild-beautiy.svg'
import Mystic from '../../../../assets/icon/mystic-shadows.svg'
import Digital from '../../../../assets/icon/daigital.svg'
import Future from '../../../../assets/icon/future.svg'
import Switch from "../../../../components/switch"
import { useState } from "react"
import { Link } from "react-router"
import { IoExitOutline, IoRocketOutline } from "react-icons/io5"
import VerifyEmail from '../../../../assets/icon/verify-email.svg'
import { TiPrinter } from "react-icons/ti"
import { FiCoffee } from "react-icons/fi"

const Creator = () => {
    const [refresh, setRefresh] = useState(true)
    const location = window.location.pathname
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="rounded-full border border-success">
                    <img src={Inferno} alt="" className='size-[100px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Inferno</span>
                    <img src={Verify} alt="" />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <div className="flex flex-row items-center gap-[5px]">
                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>inferno.com</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <SlLocationPin className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>SF, Bay Area</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <CiMail className='text-gray-600 text-b-14-14-500' />
                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary text-animation'>info@inferno.com</Link>
                    </div>
                </div>
            </div>
            {/* {Sub  menu} */}
            <Menu />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] p-4">
                <div className="xl:col-span-1 flex flex-col gap-[30px]">
                    {/* {Data} */}
                    <div className="bg-white  rounded-xl shadow-sm border">
                        <div className="flex items-center justify-center py-[30px] ">
                            <div className="flex flex-row items-center gap-5">
                                <div className="flex  flex-col gap-2.5 items-center pr-5 border-r">
                                    <span className="text-h-26-26-600 text-gray-900">397</span>
                                    <span className="text-b-16-16-400 text-gray-700">Releases</span>
                                </div>

                                <div className="flex  flex-col gap-2.5 items-center pr-5">
                                    <span className="text-h-26-26-600 text-gray-900">89k</span>
                                    <span className="text-b-16-16-400 text-gray-700">Earnings</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* {Members} */}
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="Join Our Team"
                        title="Members"
                        content={
                            <div className="flex flex-row items-center  flex-wrap  max-w-[320px] px-[30px] gap-2.5 py-5">
                                <img src={Jennifer} alt="" className="size-9" />
                                <img src={Tyler} alt="" className="size-9" />
                                <img src={Arlene} alt="" className="size-9" />
                                <img src={Cody} alt="" className="size-9" />
                                <img src={Arlene} alt="" className="size-9" />
                                <img src={Tyler} alt="" className="size-9" />
                                <img src={Esther} alt="" className="size-9" />
                                <img src={Cody} alt="" className="size-9" />


                            </div>

                        }
                    />
                    {/* {About} */}

                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="About"
                        content={
                            <div className="flex flex-col px-[30px] gap-5  py-5">
                                <p>Experienced and creative professional with a passion great as for problem-solving and a commitment to excellence.</p>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">KeenThemes</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">Author Level 100</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">UI/UX Desiger</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">jenny@kteam.com</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <CiMail className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">jenny@kteam.com</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaFacebook className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">keenthemes</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaYoutube className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">keenthemes</span>
                                </div>
                            </div>

                        }
                    />
                    {/* {Community Badges} */}

                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title='Community Badges'
                        content={
                            <div className="flex-col flex gap-5">

                                <div className="flex flex-row items-center justify-start px-[30px] py-5">
                                    <img src={BadgeOne} alt="" />
                                    <img src={BadgeTwo} alt="" />
                                    <img src={BadgeThree} alt="" />
                                    <img src={BadgeFour} alt="" />

                                </div>
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
                                <img src={Arrow} alt="" />

                            </div>
                        }
                    />



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">

                        <Card
                            dotStatus={false}
                            buttonStatus={false}
                            content={
                                <div className="flex flex-col gap-5">
                                    <img src={Urban} alt="" />
                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                        <Link to={location} className="text-b-18-25-500 text-gray-900 hover:text-primary text-animation">Urban Dreams</Link>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-[6px]">
                                                <img src={Cody} alt="" className="size-7" />
                                                <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">Cody Fisher</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaHeart className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">24</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaComment className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">5</span>
                                                </div>
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
                                <div className="flex flex-col gap-5">
                                    <img src={Timeless} alt="" />
                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                        <Link to={location} className="text-b-18-25-500 text-gray-900 hover:text-primary text-animation">Timeless Elegance</Link>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-[6px]">
                                                <img src={Arlene} alt="" className="size-7" />
                                                <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">Jenny Wilson</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaHeart className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">6</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaComment className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">1</span>
                                                </div>
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
                                <div className="flex flex-col gap-5">
                                    <img src={Whispered} alt="" />
                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                        <Link to={location} className="text-b-18-25-500 text-gray-900 hover:text-primary text-animation">Whispered Emotions</Link>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-[6px]">
                                                <img src={Tyler} alt="" className="size-7" />
                                                <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">Wade Warren</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaHeart className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">187</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaComment className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">49</span>
                                                </div>
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
                                <div className="flex flex-col gap-5">
                                    <img src={Golden} alt="" />
                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                        <Link to={location} className="text-b-18-25-500 text-gray-900 hover:text-primary text-animation">Golden Serenity</Link>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-[6px]">
                                                <img src={Cody} alt="" className="size-7" />
                                                <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">Albert Flores</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaHeart className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">60</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaComment className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">13</span>
                                                </div>
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
                                <div className="flex flex-col gap-5">
                                    <img src={WildBeautiy} alt="" />
                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                        <Link to={location} className="text-b-18-25-500 text-gray-900 hover:text-primary text-animation">Wild Beauty</Link>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-[6px]">
                                                <img src={Tyler} alt="" className="size-7 " />
                                                <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">Devon Lane</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaHeart className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">625</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaComment className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">129</span>
                                                </div>
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
                                <div className="flex flex-col gap-5">
                                    <img src={Mystic} alt="" />
                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                        <Link to={location} className="text-b-18-25-500 text-gray-900 hover:text-primary text-animation">Mystic Shadows</Link>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-[6px]">
                                                <div className="overflow-hidden size-7 rounded-full">
                                                    <img src={Jennifer} alt="" className="scale-110" />
                                                </div>

                                                <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">Kathryn Murphy</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-3">
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaHeart className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">60</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-[5px]">
                                                    <FaComment className="text-gray-500" />
                                                    <span className="text-b-13-14-400 text-gray-600">13</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />


                    </div>
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        dotContentStatus={true}
                        title="Upcoming Events"
                        dotContent={
                            <Link to={location} className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer">View All</Link>
                        }
                        content={

                            <div className="flex flex-col p-[30px] gap-[15px]">
                                <div className="flex flex-row flex-wrap items-center gap-5">
                                    <div className="flex flex-col  rounded-lg border-[#ffdac5] border-[2px] ">
                                        <div className="py-2 px-3 bg-[#fff5ef] rounded-t-lg flex items-center justify-center border-b-2 border-[#ffdac5]">
                                            <span className="text-[#FF6F1E] text-b-13-14-500">Feb</span>
                                        </div>
                                        <div className="flex items-center justify-center py-[6px]">
                                            <span className="text-gray-800 text-h-22-38-500 ">16</span>
                                        </div>

                                    </div>
                                    <img src={Digital} alt="" />
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-[#FF6F1E] text-b-13-14-400 hover:text-primary text-animation">Webinar Series</Link>
                                        <Link to={location} className="text-gray-900 text-b-16-16-500 hover:text-primary text-animation">Digital Marketing Mastery Series</Link>
                                        <p className="text-b-14-22-400 text-gray-800">Join our comprehensive webinars to master the art of digital marketing strategies.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap items-center gap-5">
                                    <div className="flex flex-col  rounded-lg border-[#ffdac5] border-[2px] ">
                                        <div className="py-2 px-3 bg-[#fff5ef] rounded-t-lg flex items-center justify-center border-b-2 border-[#ffdac5]">
                                            <span className="text-[#FF6F1E] text-b-13-14-500">Apr</span>
                                        </div>
                                        <div className="flex items-center justify-center py-[6px]">
                                            <span className="text-gray-800 text-h-22-38-500 ">02</span>
                                        </div>

                                    </div>
                                    <img src={Future} alt="" className="scale-" />
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-[#FF6F1E] text-b-13-14-400 hover:text-primary text-animation">Photo Workshop</Link>
                                        <Link to={location} className="text-gray-900 text-b-16-16-500 hover:text-primary text-animation">Nature Photography Immersion</Link>
                                        <p className="text-b-14-22-400 text-gray-800">Enhance your nature photography skills in a hands-on workshop guided by experienced photographers.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap items-center gap-5">
                                    <div className="flex flex-col  rounded-lg border-[#ffdac5] border-[2px] ">
                                        <div className="py-2 px-3 bg-[#fff5ef] rounded-t-lg flex items-center justify-center border-b-2 border-[#ffdac5]">
                                            <span className="text-[#FF6F1E] text-b-13-14-500">Aug</span>
                                        </div>
                                        <div className="flex items-center justify-center py-[6px]">
                                            <span className="text-gray-800 text-h-22-38-500 ">29</span>
                                        </div>

                                    </div>
                                    <img src={Future} alt="" />
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-[#FF6F1E] text-b-13-14-400 hover:text-primary text-animation">Tech Conference</Link>
                                        <Link to={location} className="text-gray-900 text-b-16-16-500 hover:text-primary text-animation">Future Tech Exploration</Link>
                                        <p className="text-b-14-22-400 text-gray-800">Join our comprehensive webinars to master the art of digital marketing strategies.</p>
                                    </div>
                                </div>

                            </div>
                        }
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
                                                <FaShareAlt  className="text-gray-600" />
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
                                                <img src={VerifyEmail} alt="" />
                                                <div className="flex flex-col gap-[6px]">
                                                    <span className="text-b-15-16-500">Blogging Conference</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-2.5 flex-wrap">
                                                    <span className="text-b-13-14-400">
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
export default Creator