import {  CiMail } from "react-icons/ci"
import { FaUsers, } from "react-icons/fa6"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import Menu from "../../../../components/publicProfile/hovermenu"
import Verify from '../../../../assets/icon/verify.svg'
import Card from "../../../../components/publicProfile/card"
import {  FaShareAlt } from "react-icons/fa"
import { Link } from "react-router"
import DonutChart from "../../../../components/charts/donutChart"
import Contributors from "../../../../components/publicProfile/contributors"
import Jennifer from '../../../../assets/icon/jennifer.svg'
import { IoCopyOutline, IoKeyOutline, IoRocketOutline } from "react-icons/io5"
import DealTable from "../../../../components/publicProfile/dealTable"
import { FiCoffee } from "react-icons/fi"
import { TiPrinter } from "react-icons/ti"
import Switch from "../../../../components/switch"
import VerifyEmail from '../../../../assets/icon/verify-email.svg'
import { useState } from "react"


const CRM = () => {
    const location = window.location.pathname
    const [refresh, setRefresh] = useState(true)
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center">
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
                    {/* Genaral Info */}
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        title="General Info"
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Phone:</span>
                                    <span className="text-b-14-14-400 text-gray-900">+31 6 12345678</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Email:</span>
                                    <span className="text-b-14-14-400 text-gray-900">jenny@studio.com</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Status:</span>
                                    <div className="px-[6px] py-[5px] bg-success-light border border-success-clarity flex rounded-md items-center justify-center ">
                                        <span className="text-b-11-12-500 text-success">Subscribed</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Type:</span>
                                    <span className="text-b-14-14-400 text-gray-900">Wholesale</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Encryption:</span>
                                    <span className="text-b-14-14-400 text-gray-900">Strong</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Last Order:</span>
                                    <span className="text-b-14-14-400 text-gray-900">Today at 13:06</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Signed Up:</span>
                                    <span className="text-b-14-14-400 text-gray-900">2 months ago</span>
                                </div>
                            </div>

                        }
                    />
                    {/* Attiributes */}
                    <Card
                        buttonStatus={true}
                        buttonTitle="All Attiributes"
                        dotStatus={false}
                        title="Attributes"
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">customer_id:</span>
                                    <span className="text-b-14-14-400 text-gray-900">CUST567</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">c_name:</span>
                                    <span className="text-b-14-14-400 text-gray-900">jenny</span>
                                </div>

                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">license_id:</span>
                                    <span className="text-b-14-14-400 text-gray-900">LIC123</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">log_id:</span>
                                    <span className="text-b-14-14-400 text-gray-900">CUST567</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">resv_code:</span>
                                    <span className="text-b-14-14-400 text-gray-900">CS345</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">orders_io:</span>
                                    <span className="text-b-14-14-400 text-gray-900">JENNYTIME</span>
                                </div>
                            </div>

                        }
                    />

                    <Card
                        title="API Credentials"
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="Check API’s"
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <p className="text-b-14-22-400 text-gray-800">
                                    The granted credentials serve a twofold function, enabling <Link to={location} className="text-primary">API authentication</Link> and governing JavaScript customization
                                </p>
                                <div className="flex flex-row items-center px-2.5 py-[3px] border rounded-md gap-2.5">
                                    <input type="text" className="outline-none text-b-11-12-400 text-gray-800 flex-grow" placeholder="exp. hwewe4654fdd5sdfh" />
                                    <div className="p-2 hover:bg-gray-200 rounded-lg cursor-pointer">
                                        <IoCopyOutline className="text-gray-600 size-[14px]" />

                                    </div>
                                </div>
                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white w-max border gap-1 cursor-pointer">

                                    <IoKeyOutline className="text-white size-[14px]" />
                                    Access Tokens                                </a>
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


                <div className="xl:col-span-2 flex flex-col gap-[30px]">
                    <DealTable />
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
export default CRM