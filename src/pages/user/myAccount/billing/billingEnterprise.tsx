import { Link } from "react-router"
import Card from "../../../../components/card/card"
import Menu from "../../../../components/myAccount/hoverMenu"
import { MdAddCircleOutline } from "react-icons/md"
import Visa from '../../../../assets/icon/visa.svg'
import { FaCheckCircle, FaEdit, FaRegTrashAlt } from "react-icons/fa"
import Ideal from '../../../../assets/icon/ideal.svg'
import Paypal from '../../../../assets/icon/paypal.svg'
import BillingTable from "../../../../components/myAccount/tables/billingTable"
import PrimaryPoliygon from '../../../../assets/icon/primary-polygon.svg'
import Kanba from '../../../../assets/icon/kanba.svg'
import AvatarGroup from '../../../../assets/icon/avatar-group.svg'
import { FaDownload } from "react-icons/fa6"
import Welcome from '../../../../assets/icon/unlockCreative.svg'
import { CiCalendarDate } from "react-icons/ci"
import WelcomeDark from '../../../../assets/icon/unlock-creative-dark.svg'

const BillingEnterprise = () => {
    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Billing - Enterprise</h1>
                    <span className='text-b-14-14-400 text-gray-700'>Advanced Billing Solutions for Large Businesses</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Order History
                </button>
            </div>
            <div className="p-5 rounded-xl flex flex-rowe items-center justify-between border flex-wrap md:flex-nowrap bg-mask bg-left">
                <div className="flex flex-row items-center gap-4">
                    <img src={PrimaryPoliygon} alt="polygon" />
                    <div className="flex flex-col gap-2.5">
                        <div className="flex flex-row items-center gap-2.5">
                            <span className="text-gray-900 text-b-16-16-500">Upgrade your Components.io to Enterprise</span>
                            <div className="px-[6px] py-[5px] flex items-center justify-center border bg-danger-light border-danger border-opacity-20 rounded-md">
                                <span className="text-b-11-12-500 text-danger">Trial expires in 29 days</span>
                            </div>
                        </div>
                        <p className="text-b-13-20-400 text-gray-800">Enterprise Components.io is a website offering high-quality, advanced UI components designed for developers, enhancing efficiency and aesthetics in web and mobile app development.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <button className="py-2.5 px-3 flex items-center justify-center rounded-md ">
                        <span className="text-b-12-12-500 text-gray-700">Cancel Trial</span>
                    </button>
                    <button className="py-2.5 px-3 flex items-center justify-center rounded-md bg-black">
                        <span className="text-b-12-12-500 text-white">Upgrade Now</span>
                    </button>
                </div>
            </div>
            {/* Cloud One Enterprise */}
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <div className="flex flex-col gap-[30px] p-[30px]">
                            <div className="flex flex-col  md:flex-row items-start gap-[30px]">
                                <div className="flex flex-col items-center justify-center gap-4 p-5">
                                    <img src={Kanba} alt="kanba" />
                                    <span className="text-b-14-14-600 text-gray-900 min-w-[70px]">Cloud One</span>
                                </div>
                                <div className="flex flex-col gap-[30px] w-full">
                                    <div className="flex flex-row items-center flex-wrap justify-between gap-5">
                                        <div className="flex flex-col gap-[6px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <h1 className="text-h-24-24-600 text-gray-900">Cloud One Enterprise</h1>
                                                <div className="flex items-center justify-center rounded-[4px] border border-success border-opacity-20 bg-success-light px-[6px] py-[5px]">
                                                    <span className="text-b-11-12-500 text-success">Monthly</span>
                                                </div>
                                            </div>
                                            <span className="text-b-13-20-400 text-gray-700">Essential Features for Startups and Individuals</span>
                                        </div>
                                        <div className="flex flex-row items-center flex-wrap gap-2.5">
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                                Cancel Plan
                                            </button>
                                            <button className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                                                Upgrade Plan
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-wrap items-center gap-5">
                                        <div className="border-2 border-dotted py-2.5 px-[13px] flex flex-col gap-[6px] rounded-md items-start">
                                            <span className="text-gray-900 text-b-15-16-500">Trial</span>
                                            <span className="text-gray-700 text-b-13-14-400">Status</span>
                                        </div>
                                        <div className="border-2 border-dotted py-2.5 px-[13px] flex flex-col gap-[6px] rounded-md items-start">
                                            <span className="text-gray-900 text-b-15-16-500">10,000</span>
                                            <span className="text-gray-700 text-b-13-14-400">Query runs</span>
                                        </div>
                                        <div className="border-2 border-dotted py-2.5 px-[13px] flex flex-col gap-[6px] rounded-md items-start">
                                            <span className="text-gray-900 text-b-15-16-500">Unlimited</span>
                                            <span className="text-gray-700 text-b-13-14-400">API calls</span>
                                        </div>
                                        <div className="border-2 border-dotted py-2.5 px-[13px] flex flex-col gap-[6px] rounded-md items-start">
                                            <span className="text-gray-900 text-b-15-16-500">$99.00</span>
                                            <span className="text-gray-700 text-b-13-14-400">Price</span>
                                        </div>
                                        <div className="border-2 border-dotted py-2.5 px-[13px] flex flex-col gap-[6px] rounded-md items-start">
                                            <span className="text-gray-900 text-b-15-16-500">17 Aug, 2024</span>
                                            <span className="text-gray-700 text-b-13-14-400">Next bill date</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[14px]">
                                        <div className="flex flex-col md:flex-row gap-5 items-center">
                                            <div className="flex flex-col gap-[14px] w-full">
                                                <span className="text-b-13-14-400 text-gray-700">Query runs: <span className="text-b-13-14-500 text-gray-900">2239 of 10,000 used</span></span>
                                                <div className="bg-primary-light rounded-[4px] h-[6px] w-full relative">
                                                    <span className="absolute left-0 top-0 block bg-primary h-[6px] rounded-[4px] w-1/3"></span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-[14px]">
                                                <span className="text-b-13-14-400 text-gray-700 min-w-[130px]">Seats: <span className="text-b-13-14-500 text-gray-900 ">29 of 120 used </span></span>
                                                <img src={AvatarGroup} alt="avatar-group" />
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>


                        </div>
                    </>
                }
            />

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-[30px]">
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-[30px]">

                    {/* Latest Payment */}
                    <Card
                        title="Latest Patment"
                        dotContentStatus={true}
                        dotStatus={false}
                        dotContent={
                            <>
                                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                    <div className="flex flex-row items-center gap-1">
                                        <FaDownload className="text-gray-600 size-[14px]" />
                                        Download PDF
                                    </div>
                                </button>
                            </>
                        }
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-[25px] p-[30px]">
                                    <div className="flex flex-col md:flex-row gap-2.5">
                                        <span className="text-b-14-14-400 text-gray-600 md:min-w-[140px]">Type of Plan</span>
                                        <span className="text-b-14-14-400 text-gray-800">Cloud One Enterprise</span>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-2.5">
                                        <span className="text-b-14-14-400 text-gray-600 md:min-w-[140px]">Payment Date</span>
                                        <span className="text-b-14-14-400 text-gray-800">6 Aug, 2024</span>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-2.5 items-center">
                                        <span className="text-b-14-14-400 text-gray-600 md:min-w-[140px]">Card used to pay</span>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Visa} alt="visa" className="size-10" />
                                            <span className="text-b-14-14-400 text-gray-800">Ending 3604</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-2.5">
                                        <span className="text-b-14-14-400 text-gray-600 md:min-w-[140px]">Total Payment</span>
                                        <span className="text-b-14-14-400 text-gray-800">$24.00</span>
                                    </div>
                                </div>
                            </>
                        }
                    />

                    {/* Payment Method */}
                    <Card
                        title="Payment Method"
                        dotStatus={false}
                        dotContentStatus={true}
                        buttonStatus={false}
                        dotContent={
                            <>
                                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer dark:bg-gray-300">
                                    <div className="flex flex-row items-center gap-1">
                                        <MdAddCircleOutline className="text-gra-600 size-[14px]" />
                                        Add New
                                    </div>
                                </button>
                            </>
                        }
                        content={
                            <>
                                <div className="flex flex-col gap-5 p-[30px]">
                                    <div className="border rounded-xl p-4 ">
                                        <div className="flex flex-row items-center gap-5 flex-wrap justify-between">
                                            <div className="flex flex-row gap-[14px]">
                                                <img src={Visa} alt="visa" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className="text-gray-900 text-b-14-14-500 hover:text-primary text-animation">Jason Tatum</Link>
                                                    <span className="text-b-13-14-400 text-gray-700">Ending 3604 - Expires on 12/2026</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-4">
                                                <div className="flex items-center justify-center rounded-[4px] border border-success border-opacity-20 bg-success-light px-[6px] py-[5px]">
                                                    <span className="text-b-11-12-500 text-success">Primary</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-1">
                                                    <button className=" flex p-[6px] rounded-md  hover:bg-gray-200  items-center justify-center">
                                                        <FaEdit className="text-gray-600 size-4" />
                                                    </button>
                                                    <button className=" flex p-[6px] rounded-md  hover:bg-gray-200  items-center justify-center">
                                                        <FaRegTrashAlt className="text-gray-600 size-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded-xl p-4 ">
                                        <div className="flex flex-row items-center gap-5 flex-wrap justify-between">
                                            <div className="flex flex-row gap-[14px]">
                                                <img src={Ideal} alt="visa" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className="text-gray-900 text-b-14-14-500 hover:text-primary text-animation">Jason Tatum</Link>
                                                    <span className="text-b-13-14-400 text-gray-700">iDeal with ABN Ambro</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-4">
                                                <div className="flex flex-row items-center gap-1">
                                                    <div className=" flex p-[6px] rounded-md  hover:bg-gray-200  items-center justify-center">
                                                        <FaEdit className="text-gray-600 size-4" />
                                                    </div>
                                                    <div className=" flex p-[6px] rounded-md  hover:bg-gray-200  items-center justify-center">
                                                        <FaRegTrashAlt className="text-gray-600 size-4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border rounded-xl p-4 ">
                                        <div className="flex flex-row items-center gap-5 flex-wrap justify-between">
                                            <div className="flex flex-row gap-[14px]">
                                                <img src={Paypal} alt="visa" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className="text-gray-900 text-b-14-14-500 hover:text-primary text-animation">Jason Tatum</Link>
                                                    <span className="text-b-13-14-400 text-gray-700">iDeal with ABN Ambro</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-4">
                                                <div className="flex flex-row items-center gap-1">
                                                    <div className=" flex p-[6px] rounded-md  hover:bg-gray-200  items-center justify-center">
                                                        <FaEdit className="text-gray-600 size-4" />
                                                    </div>
                                                    <div className=" flex p-[6px] rounded-md  hover:bg-gray-200  items-center justify-center">
                                                        <FaRegTrashAlt className="text-gray-600 size-4" />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </>
                        }
                    />

                    {/* Questions? */}
                    <Card
                        buttonStatus={true}
                        buttonTitle="Go to Help Center"
                        dotStatus={false}
                        content={
                            <>
                                <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-b-20-30-500 text-gray-900 ">Questions?</span>
                                        <p className=" text-b-14-22-400 text-gray-800">Visit our Help Center for detailed assistance on billing, payments, and subscriptions. </p>
                                    </div>
                                    <img src={Welcome} alt="welcome" className="dark:hidden"/>
                                    <img src={WelcomeDark} alt="welcome-dark" className="dark:flex hidden" />
                                </div>
                            </>
                        }
                    />

                </div>
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-[30px]">
                    {/* right area */}

                    {/* Next Payment */}
                    <Card
                        title="Next Payment"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-[30px] p-[30px]">
                                    <div className="p-4 border rounded-xl flex flex-row items-center justify-between">
                                        <div className="flex flex-row items-center gap-[14px]">
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
                                                    <CiCalendarDate className="text-[#FF6F1E] size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-gray-900 text-b-14-14-500">on 17 Aug, 2024</span>
                                                <span className="text-b-13-14-400 text-gray-700 ">Due date</span>
                                            </div>
                                        </div>
                                        <FaCheckCircle className="text-success size-8" />

                                    </div>
                                </div>
                            </>
                        }
                    />
                    {/* Billing Table */}
                    <BillingTable />

                    {/* Contact Support */}
                    <Card
                        buttonStatus={true}
                        buttonTitle="Contact Support"
                        dotStatus={false}
                        content={
                            <>
                                <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-b-20-30-500 text-gray-900 ">Contact Support</span>
                                        <p className=" text-b-14-22-400 text-gray-800">Need assistance? Contact our support team for prompt, personalized help your queries & concerns.</p>
                                    </div>
                                    <img src={Welcome} alt="welcome" className="dark:hidden" />
                                    <img src={WelcomeDark} alt="welcome-dark" className="dark:flex hidden" />
                                </div>
                            </>
                        }
                    />


                </div>
            </div>
        </div >
    )
}
export default BillingEnterprise