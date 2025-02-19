import { CiLocationOn, CiMail } from "react-icons/ci"
import { FaChartLine, FaFacebook, FaRocket, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import Menu from "../../../../components/publicProfile/hovermenu"
import Verify from '../../../../assets/icon/verify.svg'
import Card from "../../../../components/publicProfile/card"
import { FaMapMarkedAlt } from "react-icons/fa"
import { Link } from "react-router"
import Duolingo from '../../../../assets/icon/duolingo.svg'
import { TbBottleFilled, TbWorld } from "react-icons/tb"
import Map from '../../../../assets/icon/map.svg'
import { HiOutlineDotsVertical } from "react-icons/hi"
import DonutChart from "../../../../components/charts/donutChart"
import Contributors from "../../../../components/publicProfile/contributors"
import TechHub from '../../../../assets/icon/techHub.svg'
import LanguageHub from '../../../../assets/icon/languageHub.svg'
import ProjectTable from "../../../../components/publicProfile/projectTable"


const Company = () => {
    const location = window.location.pathname

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="rounded-full border border-success p-[25px]">
                    <img src={Duolingo} alt="duolingo" className='size-[50px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Duolingo</span>
                    <img src={Verify} alt="" />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <div className="flex flex-row items-center gap-[5px]">
                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>Public Company</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <SlLocationPin className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>Pittsburgh, KS</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <CiMail className='text-gray-600 text-b-14-14-500' />
                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary text-animation'>info@duolingo.com</Link>
                    </div>
                </div>
            </div>
            {/* {Sub  menu} */}
            <Menu />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] p-4">
                {/* Data */}
                <div className="xl:col-span-3 ">
                    <div className="bg-white rounded-xl shadow-sm border">
                        <div className="flex items-center justify-center py-[30px] ">
                            <div className="flex sm:flex-row flex-col items-center gap-5 w-full">
                                <div className="flex flex-col gap-2.5 items-center flex-grow w-full relative after:content-[''] after:block after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <span className="text-h-26-26-600 text-gray-900">624</span>
                                    <span className="text-b-16-16-400 text-gray-700">Employees</span>
                                </div>

                                <div className="flex flex-col gap-2.5 items-center flex-grow w-full relative after:content-[''] after:block after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <span className="text-h-26-26-600 text-gray-900">60.7M</span>
                                    <span className="text-b-16-16-400 text-gray-700">Users</span>
                                </div>

                                <div className="flex flex-col gap-2.5 items-center flex-grow w-full relative after:content-[''] after:block after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <span className="text-h-26-26-600 text-gray-900">369M</span>
                                    <span className="text-b-16-16-400 text-gray-700">Revenue</span>
                                </div>

                                <div className="flex flex-col gap-2.5 items-center flex-grow w-full">
                                    <span className="text-h-26-26-600 text-gray-900">27</span>
                                    <span className="text-b-16-16-400 text-gray-700">Company Rank</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <div className="xl:col-span-1 flex flex-col gap-[30px]">

                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        title="Highlights"
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Locations:</span>
                                    <span className="text-b-14-14-400 text-gray-900">79</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Founded:</span>
                                    <span className="text-b-14-14-400 text-gray-900">2011</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Status:</span>
                                    <div className="px-[6px] py-[5px] bg-success-light border border-success-clarity flex rounded-md items-center justify-center ">
                                        <span className="text-b-11-12-500 text-success">Subscribed</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Area:</span>
                                    <span className="text-b-14-14-400 text-gray-900">Worldwide</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">CEO:</span>
                                    <Link to={location} className="text-b-14-14-400  text-primary">Luis von Ahn</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Sector:</span>
                                    <span className="text-b-14-14-400 text-gray-900">Online Education</span>
                                </div>
                            </div>

                        }
                    />

                    <Card
                        buttonStatus={true}
                        dotStatus={false}
                        title="Open Jobs"
                        buttonTitle="View & Apply"
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="flex flex-row items-start gap-[14px]">
                                    <div className="p-[7px] border rounded-lg bg-gray-100">
                                        <FaChartLine className="size-4 text-gray-600" />
                                    </div>
                                    <div className="flex flex-col gap-[7px]">
                                        <Link to={location} className="text-b-14-14-500 text-primary">Data Science</Link>
                                        <span className="text-b-14-14-500 text-gray-900">Data Science Ninja</span>
                                        <span className="text-b-12-12-400 text-gray-700">$80,000 - $110,000</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-[14px]">
                                    <div className="p-[7px] border rounded-lg bg-gray-100">
                                        <FaRocket className="size-4 text-gray-600" />
                                    </div>
                                    <div className="flex flex-col gap-[7px]">
                                        <Link to={location} className="text-b-14-14-500 text-primary">Travel and Exploration</Link>
                                        <span className="text-b-14-14-500 text-gray-900">Galactic Guide Writer</span>
                                        <span className="text-b-12-12-400 text-gray-700">$45,000 - $60,000</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-[14px]">
                                    <div className="p-[7px] border rounded-lg bg-gray-100">
                                        <FaChartLine className="size-4 text-gray-600" />
                                    </div>
                                    <div className="flex flex-col gap-[7px]">
                                        <Link to={location} className="text-b-14-14-500 text-primary">Drinking Arts</Link>
                                        <span className="text-b-14-14-500 text-gray-900">Chocolate Taste Tester</span>
                                        <span className="text-b-12-12-400 text-gray-700">Chocolate Taste Tester</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-[14px]">
                                    <div className="p-[5px] border rounded-lg bg-gray-100">
                                        <TbBottleFilled className="size-5 text-gray-600" />
                                    </div>
                                    <div className="flex flex-col gap-[7px]">
                                        <Link to={location} className="text-b-14-14-500 text-primary">Film Production</Link>
                                        <span className="text-b-14-14-500 text-gray-900">Zombie Makeup Artist</span>
                                        <span className="text-b-12-12-400 text-gray-700"> $55,000 - $75,000</span>
                                    </div>
                                </div>

                            </div>

                        }
                    />
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="Network"
                        content={
                            <div className="flex flex-col px-[30px] gap-5  py-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <TbWorld className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">https://duolingo.com</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <CiMail className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">info@duolingo.com</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaFacebook className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">duolingo</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaTwitter className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">duolingo-news</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaYoutube className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">duolingo-tuts</Link>
                                </div>
                            </div>

                        }
                    />
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title='Tags'
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


                <div className="xl:col-span-2 flex flex-col gap-[30px]">
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="Company Profle"
                        content={
                            <div className="flex flex-col px-[30px] py-5 ">
                                <div className="flex flex-col gap-5 pb-[30px]">
                                    <span className="text-b-15-16-600 text-gray-900">Headquarter</span>
                                    <div className="flex md:flex-row flex-col md:items-center items-start gap-5">
                                        <img src={Map} alt="map" />
                                        <div className="flex flex-col gap-5">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <TbWorld className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                                <Link to={location} className="text-b-14-14-400 text-primary">https://duolingo.com</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <FaFacebook className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                                <Link to={location} className="text-b-14-14-400 text-primary">duolingo</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <FaYoutube className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                                <Link to={location} className="text-b-14-14-400 text-primary">duolingo-tuts</Link>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <FaWhatsapp className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                                <span className="text-b-14-14-400 text-gray-900">(31) 6-1235-4567</span>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <FaMapMarkedAlt className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                                <span className="text-b-14-14-400 text-gray-900">Herengracht 501, 1017 BV Amsterdam, NL</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 pb-[30px]">
                                    <span className="text-b-15-16-600 text-gray-900">About</span>
                                    <p className="text-b-14-22-400 text-gray-800">Now that I’m done thoroughly mangling that vague metaphor, let’s get down to business. You know you need to start blogging to grow your business, but you don’t know how. In this post, I’ll show you how to write a great blog post in five simple steps that people will actually want to read. </p>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <span className="text-b-15-16-600 text-gray-900">Products</span>
                                    <div className="flex flex-row items-center flex-wrap gap-[10px] ">
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Lingo Kids</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Lingo Express</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Fun Learning</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Lingo Espanol</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Speaking Masteryw</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Grammar Guru</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Lingo Quest</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>History Lessons</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Global Explorer</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Translator</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Webflow</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Language Lab</span>
                                        </div>
                                        <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-100 border">
                                            <span className='text-b-11-12-500 text-gray-600'>Lingo Plus</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    />
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <div className="rounded-md bg-success p-2.5 cursor-pointer">
                                <div className="flex flex-row items-center gap-1">
                                    <CiLocationOn className="text-white size-[14px]" />
                                    <span className="text-white text-b-12-12-500">Offer Location</span>

                                </div>
                            </div>
                        }
                        content={
                            <div className="flex flex-col gap-5 pl-[30px] py-5">
                                <div className="w-full overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                    <div className="flex flex-row  items-center gap-5 ">
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={TechHub} alt="tech-hub" className="rounded-t-xl max-w-[280px] max-h-[187px]" />
                                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Duolingo Tech Hub
                                                        </Link>
                                                        <p className="text-b-13-20-400 text-gray-700 max-w-[240px]">456 Innovation Street, Floor 6, Techland, New York 54321</p>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={LanguageHub} alt="language-hub" className="rounded-t-xl max-w-[280px] max-h-[187px]" />
                                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Duolingo Language Lab
                                                        </Link>
                                                        <p className="text-b-13-20-400 text-gray-700 max-w-[240px]">789 Learning Lane, 3rd Floor, Lingoville, Texas 98765</p>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={LanguageHub} alt="language-hub" className="rounded-t-xl max-w-[280px] max-h-[187px]" />
                                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Duolingo Research Institute
                                                        </Link>
                                                        <p className="text-b-13-20-400 text-gray-700 max-w-[240px]">246 Innovation Road, Research Wing, Innovacity, Arizona 13579</p>
                                                    </div>
                                                </div>
                                            }
                                        /><Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={TechHub} alt="tech-hub" className="rounded-t-xl" />
                                                    <div className="px-5 flex flex-col gap-4 pb-5">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Duolingo Tech Hub
                                                        </Link>
                                                        <p className="text-b-13-20-400 text-gray-700 max-w-[240px]">456 Innovation Street, Floor 6, Techland, New York 54321</p>
                                                    </div>
                                                </div>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                        }
                        title="Locaitons"

                    />
                    <ProjectTable />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {/* {Contributors} */}
                        <Card
                            dotStatus={true}
                            buttonStatus={true}
                            title='Contributors'
                            buttonTitle='All Contributors'
                            content={<Contributors />}
                        />
                        {/* {Assistance} */}
                        <Card
                            title='Assistance'
                            buttonStatus={false}
                            dotStatus={true}
                            content={<DonutChart />}
                        />
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Company