import { Link } from "react-router"
import Card from "../../../../components/card/card"
import Menu from "../../../../components/myAccount/hoverMenu"
import USerGuidelines from '../../../../assets/icon/user-guidelines.svg'
import Comprehensive from '../../../../assets/icon/comprehensive.svg'
import StayUpdated from '../../../../assets/icon/stay-updated.svg'
import { MdAddCircleOutline } from "react-icons/md"
import Visa from '../../../../assets/icon/visa.svg'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa"
import Ideal from '../../../../assets/icon/ideal.svg'
import Paypal from '../../../../assets/icon/paypal.svg'
import BillingTable from "../../../../components/myAccount/billingTable"

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
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
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
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
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
                                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
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
                    <BillingTable/>


                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={<>
                            <div className="flex flex-col px-[30px] ">
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <img src={USerGuidelines} alt="user-guidlines" className="size-[50px]" />
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Tailor-Made Plans Selection and Efficient Billing Systems</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Select the perfect plan for your needs, complemented by an efficient, user-friendly billing system for convenience.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <img src={Comprehensive} alt="comprehensive" className="size-[50px]" />
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Customized Plans and Simple Billing Solutions</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Offering an array of plans to suit diverse requirements, paired with straightforward, hassle-free billing processes.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <img src={StayUpdated} alt="stay-updated" className="size-[50px]" />
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