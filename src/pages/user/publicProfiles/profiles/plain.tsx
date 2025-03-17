import { CiMail } from "react-icons/ci"
import { FaFacebook, FaYoutube } from "react-icons/fa6"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import Menu from "../../../../components/publicProfile/hovermenu"
import Verify from '../../../../assets/icon/verify.svg'
import Card from "../../../../components/card/card"
import { Link } from "react-router"
import Jennifer from '../../../../assets/icon/jennifer.svg'
import AccountDeactiveted from '../../../../assets/icon/account-deactived.svg'
const Plain = () => {


    const location = window.location.pathname

    return (
        <div className="flex flex-col gap-10 z- ">
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
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] p-4 z-1">
                {/* Data */}
                <div className="xl:col-span-3 grid gap-[30px] ">
                    <div className="bg-white rounded-xl shadow-sm border">
                        <div className="flex items-center justify-center py-[30px] ">
                            <div className="flex sm:flex-row flex-col items-center gap-5 w-full">
                                <div className="flex flex-col gap-2.5 items-center flex-grow w-full relative after:content-[''] after:block after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <span className="text-h-26-26-600 text-gray-900">249</span>
                                    <span className="text-b-16-16-400 text-gray-700">Connections</span>
                                </div>

                                <div className="flex flex-col gap-2.5 items-center flex-grow w-full relative after:content-[''] after:block after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <span className="text-h-26-26-600 text-gray-900">1.2k</span>
                                    <span className="text-b-16-16-400 text-gray-700">Uploads</span>
                                </div>

                                <div className="flex flex-col gap-2.5 items-center flex-grow w-full relative after:content-[''] after:block after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <span className="text-h-26-26-600 text-gray-900">1M+</span>
                                    <span className="text-b-16-16-400 text-gray-700">Gross Sales</span>
                                </div>

                                <div className="flex flex-col gap-2.5 items-center flex-grow w-full">
                                    <span className="text-h-26-26-600 text-gray-900">27</span>
                                    <span className="text-b-16-16-400 text-gray-700">Author Rank</span>
                                </div>
                            </div>


                        </div>
                    </div>
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <div className="flex flex-col items-center gap-2.5 pb-10">
                                <img src={AccountDeactiveted} alt="account-deactiveted" />
                                <span className="text-b-18-18-500 text-gray-900">Upload Item to Get Started</span>
                                <span>Begin by crafting your inaugural list in minutes. <Link to={location} className="text-primary">Get Started!</Link></span>
                            </div>
                        }
                    />
                </div>


                <div className="xl:col-span-1 flex flex-col gap-[30px]">
                    {/* {Profile} */}
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="Profile"
                        content={
                            <div className="flex flex-col px-[30px] gap-5  py-5">
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
                    {/* Open to Work */}
                    <Card
                        title="Open to Work"
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="View details"
                        content={
                            <div className="flex  flex-col gap-5 py-5 px-[30px]">
                                <p className="text-b-14-22-400 text-gray-800">Experienced UI/UX designer seeking new opportunities.</p>
                            </div>
                        }
                    />
                </div>


                <div className="xl:col-span-2 flex flex-col gap-[30px]">
                    <Card
                        title="About me"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="flex flex-col gap-[30px] pb-2.5">
                                    <p className="text-b-14-22-400 text-gray-800">I am a passionate and dedicated individual with a flair for creativity and innovation. With a background in UI/UX design, I have a keen eye for detail and a strong understanding of user experience. My goal is to craft visually appealing and intuitive designs that not only meet clients' needs but also exceed their expectations.</p>
                                    <p className="text-b-14-22-400 text-gray-800">Over the years, I have honed my skills in various design tools and techniques, allowing me to bring ideas to life with precision and elegance. I thrive in collaborative environments, where I can work closely with clients and teams to achieve remarkable results.</p>
                                </div>


                            </div>
                        }
                    />
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
            </div>

        </div >
    )
}
export default Plain