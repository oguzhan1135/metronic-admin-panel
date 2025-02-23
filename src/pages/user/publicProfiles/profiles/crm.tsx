import { CiMail } from "react-icons/ci"
import { FaUsers, } from "react-icons/fa6"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import Menu from "../../../../components/publicProfile/hovermenu"
import Verify from '../../../../assets/icon/verify.svg'
import Card from "../../../../components/publicProfile/card"
import { FaLaptopCode, FaShareAlt } from "react-icons/fa"
import { Link } from "react-router"
import DonutChart from "../../../../components/charts/donutChart"
import Contributors from "../../../../components/publicProfile/contributors"
import Jennifer from '../../../../assets/icon/jennifer.svg'
import { IoCopyOutline, IoKeyOutline, IoReceiptOutline, IoRocketOutline } from "react-icons/io5"
import DealTable from "../../../../components/publicProfile/dealTable"
import { FiCoffee } from "react-icons/fi"
import { TiPrinter } from "react-icons/ti"
import Switch from "../../../../components/switch"
import VerifyEmail from '../../../../assets/icon/verify-email.svg'
import { useState } from "react"
import AvatarGroup from "../../../../assets/icon/avatar-group.svg"
import { HiOutlineDotsVertical } from "react-icons/hi"


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
                        title="Recent Activity"
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
                                                Jenny sent an
                                                <Link to={location} className="text-primary"> inquiry </Link>
                                                about a <Link to={location} className="text-primary"> new product</Link>.
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">Today, 9:00 AM</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-start gap-2.5 relative w-full">
                                        <div className="flex flex-col items-center relative ">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <FaUsers className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Jenny attended a webinar on new product features.
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">3 days ago, 11:45 AM</span>
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
                                    </div>

                                    <div className="flex flex-row items-start gap-2.5 relative">
                                        <div className="flex flex-col items-center relative">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <FaShareAlt className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Jenny's last login to the
                                                <Link to={location} className="text-primary"> Customer Portal.</Link>
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">5 days ago, 4:07 PM</span>
                                        </div>
                                    </div>



                                    <div className="flex flex-row items-start gap-2.5 relative">
                                        <div className="flex flex-col items-center relative">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <FiCoffee className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Email campaign sent to Jenny for a special promotion.
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">1 week ago, 11:45 AM</span>
                                            <div className="flex flex-col items-center justify-center gap-[6px] p-4 border rounded-lg">
                                                <span className="text-b-15-16-500 text-gray-900">First Camping Created</span>
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
                                                Explored niche demo ideas for product-specific solutions.
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
                        {/* {Recent Invoices} */}
                        <Card
                            dotStatus={true}
                            buttonStatus={false}
                            title='Recent Invoices'
                            content={
                                <>
                                    <div className="flex flex-col py-5 gap-5">
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <div className="p-2 bg-gray-100 rounded-md flex items-center justify-center border">
                                                    <IoReceiptOutline className="text-gray-600" />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>INV-2023-001</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">15 Nov, 2023</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <span className="text-b-14-14-400 text-gray-800">$500.00</span>
                                                <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                    <HiOutlineDotsVertical className="text-gray-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <div className="p-2 bg-gray-100 rounded-md flex items-center justify-center border">
                                                    <IoReceiptOutline className="text-gray-600" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>INV-2023-002</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">30 Nov, 2023</span>

                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <span className="text-b-14-14-400 text-gray-800">$750.00</span>
                                                <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                    <HiOutlineDotsVertical className="text-gray-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">

                                                <div className="p-2 bg-gray-100 rounded-md flex items-center justify-center border">
                                                    <IoReceiptOutline className="text-gray-600" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>INV-2023-003</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">10 Dec, 2023</span>

                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <span className="text-b-14-14-400 text-gray-800">$1,200.00</span>
                                                <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                    <HiOutlineDotsVertical className="text-gray-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">

                                                <div className="p-2 bg-gray-100 rounded-md flex items-center justify-center border">
                                                    <IoReceiptOutline className="text-gray-600" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>INV-2023-004</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">05 Dec, 2023</span>

                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <span className="text-b-14-14-400 text-gray-800">$300.00</span>
                                                <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                    <HiOutlineDotsVertical className="text-gray-600" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">

                                                <div className="p-2 bg-gray-100 rounded-md flex items-center justify-center border">
                                                    <IoReceiptOutline className="text-gray-600" />
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>INV-2023-005</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">20 Nov, 2023</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <span className="text-b-14-14-400 text-gray-800">$950.00</span>
                                                <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                    <HiOutlineDotsVertical className="text-gray-600" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </>
                            }
                        />

                    </div>
                </div>
            </div>

        </div >
    )
}
export default CRM