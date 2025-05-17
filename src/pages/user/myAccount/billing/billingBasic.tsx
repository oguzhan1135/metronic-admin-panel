import { Link } from "react-router"
import Card from "../../../../components/card/card"
import Menu from "../../../../components/myAccount/hoverMenu"
import { MdAddCircleOutline } from "react-icons/md"
import Visa from '../../../../assets/icon/visa.svg'
import { FaEdit, FaRegCompass, FaRegTrashAlt, FaUsers } from "react-icons/fa"
import Ideal from '../../../../assets/icon/ideal.svg'
import Paypal from '../../../../assets/icon/paypal.svg'
import BillingTable from "../../../../components/myAccount/tables/billingTable"
import { GoGraph } from "react-icons/go"

const BillingBasic = () => {
    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Billing - Basic</h1>
                    <span className='text-b-14-14-400 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-coal-300 text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Order History
                </button>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">
                    {/* Basic Plan */}
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-[30px] p-[30px]">
                                    <div className="flex flex-row items-center flex-wrap justify-between gap-5">
                                        <div className="flex flex-col gap-[6px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <h1 className="text-h-24-24-600 text-gray-900">Basic Plan</h1>
                                                <div className="flex items-center justify-center rounded-[4px] border border-success border-opacity-20 bg-success-light px-[6px] py-[5px]">
                                                    <span className="text-b-11-12-500 text-success">Monthly</span>
                                                </div>
                                            </div>
                                            <span className="text-b-13-20-400 text-gray-700">Essential Features for Startups and Individuals</span>
                                        </div>
                                        <div className="flex flex-row items-center flex-wrap gap-2.5">
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-coal-300 text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                                Cancel Plan
                                            </button>
                                            <button className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                                                Upgrade Plan
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row flex-wrap items-center gap-5">
                                        <div className="border-2 border-dotted py-2.5 px-[13px] flex flex-col gap-[6px] rounded-md items-start">
                                            <span className="text-gray-900 text-b-15-16-500">$769.00</span>
                                            <span className="text-gray-700 text-b-13-14-400">Annual Total</span>
                                        </div>
                                        <div className="border-2 border-dotted py-2.5 px-[13px] flex flex-col gap-[6px] rounded-md items-start">
                                            <span className="text-gray-900 text-b-15-16-500">$69.00</span>
                                            <span className="text-gray-700 text-b-13-14-400">Next Bill Amount</span>
                                        </div>
                                        <div className="border-2 border-dotted py-2.5 px-[13px] flex flex-col gap-[6px] rounded-md items-start">
                                            <span className="text-gray-900 text-b-15-16-500">23 Aug, 24</span>
                                            <span className="text-gray-700 text-b-13-14-400">Next Billing Date</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[14px]">
                                        <span className="text-b-13-14-400 text-gray-700">Usage (32 of 40 users)</span>
                                        <div className="bg-primary-light rounded-[4px] h-[6px] w-full relative">
                                            <span className="absolute left-0 top-0 block bg-primary h-[6px] rounded-[4px] w-4/5"></span>
                                        </div>
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
                                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-coal-300 text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
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
                    {/* Billing Details */}
                    <BillingTable />


                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}
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
                                            <FaUsers className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Tailor-Made Plans Selection and Efficient Billing Systems</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Select the perfect plan for your needs, complemented by an efficient, user-friendly billing system for convenience.</p>
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
                                            <FaRegCompass className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Customized Plans and Simple Billing Solutions</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Offering an array of plans to suit diverse requirements, paired with straightforward, hassle-free billing processes.</p>
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
                                            <GoGraph className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Comprehensive Plan Options with Streamlined Billing</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Our plans are crafted to cater to various user demands, accompanied by streamlined billing for maximum efficiency and clarity.</p>
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
export default BillingBasic