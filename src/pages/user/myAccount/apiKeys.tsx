import { Link } from "react-router"
import Menu from "../../../components/myAccount/hoverMenu"
import Card from '../../../components/card/card'
import { useState } from "react"
import FAQ from "../../../components/myAccount/faq"
import Service from '../../../assets/icon/service.svg'
import ServiceDark from '../../../assets/icon/service-dark.svg'
import Switch from "../../../components/switch"
import { MdOutlineSubtitles } from "react-icons/md"
import { FaRegCopy, FaRegStickyNote, FaRegUserCircle } from "react-icons/fa"
import ApiIntebrationTable from "../../../components/myAccount/tables/apiIntegrationsTable"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { TbWorld } from "react-icons/tb"

const ApiKeys = () => {
    const location = window.location.pathname
    const [apiPause, setApiPause] = useState(false)
    const [customHeader, setCustomHeader] = useState(true)


    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>API Settings</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Privacy Settings
                </button>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">

                    {/* Public API Key Area */}
                    <Card
                        title={"Public API Key"}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-13-14-500 text-gray-700">Pause</span>
                                    <Switch status={apiPause} size="medium" setSwitch={() => setApiPause(!apiPause)} />
                                </div>
                            </>

                        }
                        content={
                            <>
                                <div className="flex flex-col gap-[30px] p-[30px]">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-0 md:justify-between">
                                        <span className="text-b-13-14-400 text-gray-800 min-w-[220px]">API Key</span>
                                        <div className="w-full border rounded-md flex flex-row items-center p-3">
                                            <input type="text" className="outline-none bg-transparent text-b-13-14-400 text-gray-800 w-full" placeholder="abc123xyz456sample789key000" />
                                            <FaRegCopy className="size-4 cursor-pointer hover:text-primary" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-3 items-center justify-between p-5 border rounded-xl">
                                        <div className="flex flex-col md:flex-row items-center gap-4">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <FaRegUserCircle className="text-[#FF6F1E] size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[11px]">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <Link to={location} className="text-gray-900 text-b-16-16-500 hover:text-primary text-animation">User Access</Link>
                                                    <div className="bg-gray-100 border rounded-[3px] px-[6px] py-[5px] flex items-center justify-center">
                                                        <span className="text-b-11-12-500 text-gray-600">16 days left</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:items-start items-center gap-1">
                                                    <span className="text-b-13-20-400 text-gray-800">This API key can only access <Link to={location} className="text-primary">@keenthemes</Link> </span>
                                                    <span className="text-b-13-20-400 text-gray-800">Secure access with a unique API key for enhanced functionality.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center flex-wrap gap-2.5">
                                            <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-black dark:bg-light text-b-12-12-500 text-white">
                                                Renew Plan
                                            </button>
                                            <button className="px-3 py-2.5 flex items-center text-b-12-12-500 text-gray-800">
                                                Docs
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-b-13-20-400 text-gray-800">Unlock the full potential of your application with our API, a secure gateway facilitating seamless integration, empowering developers to create innovative and dynamic experiences effortlessly. </p>
                                </div>
                            </>
                        }
                        buttonStatus={false}

                    />
                    {/* API Integration Table */}
                    <ApiIntebrationTable />

                    {/* Webhooks */}
                    <Card
                        title={"Webhooks"}
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-5 p-[30px]">
                                    <p className="text-b-13-20-400 text-gray-800">Set up Webhooks to trigger actions on external services in real-time. Stay informed on updates and changes to ensure seamless integration.</p>
                                    <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                        <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Webhook URL</span>
                                        <div className="bg-light-active rounded-md p-3 border w-full">
                                            <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Enter URL" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                        <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Webhook Name</span>
                                        <div className="bg-light-active rounded-md p-3 border w-full">
                                            <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="CostaRicaHook" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                        <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Event Type</span>
                                        <div className="bg-light-active rounded-md p-3 border w-full">
                                            <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="All Events" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                        <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Custom Headers</span>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <span className="text-b-14-14-500 text-gray-700">Use Custom Header</span>
                                            <Switch setSwitch={() => setCustomHeader(!customHeader)} size="medium" status={customHeader} />
                                        </div>
                                    </div>
                                    <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 text-white border mt-2.5 w-max ml-auto">
                                        Save Changes
                                    </button>

                                </div>
                            </>
                        }
                    />

                    {/* FAQ */}
                    <FAQ />

                    {/* Question */}
                    <Card
                        buttonStatus={true}
                        buttonTitle="Contact Support"
                        dotStatus={false}
                        content={
                            <>
                                <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-b-20-30-500 text-gray-900 ">Questions?</span>
                                        <p className=" text-b-14-22-400 text-gray-800">Need assistance? Contact our support team for prompt, personalized help your queries & concerns.</p>
                                    </div>
                                    <img src={Service} alt="service" className="dark:hidden" />
                                    <img src={ServiceDark} alt="service-dark" className="dark:flex hidden" />
                                </div>
                            </>
                        }
                    />

                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}

                    {/* Project API keys area*/}

                    <Card
                        title={"Project API Keys"}
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2.5 px-[30px] pt-[30px]">
                                        <p className="text-b-13-20-400 text-gray-800">Activate 'Do Not Disturb' to silence all notifications and focus without interruptions during specified hours or tasks.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                    <div className="border-t py-[14px] flex items-center justify-center">
                                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                            <FaRegStickyNote className="size-[14px] text-gray-500" />
                                            Client Docs
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    />


                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={<>
                            <div className="flex flex-col px-[30px] ">
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <AiOutlineCloudUpload className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Streamlining API Integration: Robust API Configuration Tools</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Easily integrate and manage your APIs with our suite of configuration tools. Gain access to extensive instructions, expert support, and in-depth documentation to keep your API interactions efficient and up-to-date.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">

                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <TbWorld className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Enhancing Connectivity: Tools for API Expansion</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Leverage the full potential of your APIs with our advanced expansion tools. We provide all the necessary resources for easy setup, information exchange, and maintaining high-performance API connectivity.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <MdOutlineSubtitles className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Organizing Team Data: Efficient Roster Solutions</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Organize your API data more with our detailed interface solutions. From quick setup guides to management, our tools are designed to streamline every step of your API data organization.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div >
    )
}
export default ApiKeys