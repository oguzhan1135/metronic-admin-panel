import Menu from "../../../../components/myAccount/hoverMenu"
import { FaCheck } from "react-icons/fa"
import { useState } from "react"
import Switch from "../../../../components/switch"
import FAQ from "../../../../components/myAccount/faq"
import Questions from "../../../../components/myAccount/questions"


const BillingPlan = () => {

    const [annual, setAnnual] = useState(true)
    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-col gap-[30px] relative">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-[14px] ">
                        <h1 className='text-gray-900 text-h-24-24-600'>Plans</h1>
                        <span className='text-b-14-14-400 text-gray-700'>Central Hub for Personal Customization</span>
                    </div>
                    <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        View BIlling
                    </button>
                </div>

                {/* Plans */}
                <div className="flex flex-col overflow-hidden">
                    <div className="flex flex-col overflow-x-auto">
                        <table className=" border-collapse  min-w-[700px]">
                            <thead>
                                <tr>
                                    <th className="px-[17px] py-[13px]  min-w-[220px] flex justify-start items-center mt-36">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <Switch setSwitch={() => setAnnual(!annual)} size="medium" status={annual} />
                                            <span className="text-b-13-14-500 text-gray-800">Annual Billing</span>
                                        </div>
                                    </th>
                                    <th className="px-[30px] py-[13px] text-left border bg-gray-100 min-w-[220px]">
                                        {/* <div className=" absolute bg-success-light border border-success rounded-md border-opacity-20 px-[6px] py-[5px] flex top-[70px] left-48 ">
                                            <span className="text-b-11-12-500 text-success">Current Plan</span>
                                        </div> */}
                                        <div className="flex flex-col  gap-5">
                                            <div className="flex flex-col gap-2.5">
                                                <span className="text-b-18-18-500 text-gray-900">Basic</span>
                                                <p className="text-b-13-20-400 text-gray-700 min-w-[190px]">Essential features for startups & individuals</p>
                                            </div>
                                            <div className="flex flex-row items-end gap-[6px]">
                                                <span className="text-h-24-24-600">Free</span>
                                            </div>
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer justify-center">
                                                Switch to Team
                                            </button>
                                        </div>
                                    </th>
                                    <th className="px-[30px] py-[13px] text-left border min-w-[220px]">
                                        <div className="flex flex-col  gap-5">
                                            <div className="flex flex-col gap-2.5">
                                                <span className="text-b-18-18-500 text-gray-900">Pro</span>
                                                <p className="text-b-13-20-400 text-gray-700 min-w-[190px]">Advanced tools for growing businesses</p>
                                            </div>
                                            <div className="flex flex-row items-end gap-[6px]">
                                                <span className="text-h-24-24-600">$99</span>
                                                <span className="text-b-11-12-400 text-gray-700">per month</span>
                                            </div>
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer justify-center" >
                                                Upgrade
                                            </button>
                                        </div>
                                    </th>
                                    <th className="px-[30px] py-[13px] text-left border">
                                        <div className="flex flex-col  gap-5">
                                            <div className="flex flex-col gap-2.5">
                                                <span className="text-b-18-18-500 text-gray-900">Premium</span>
                                                <p className="text-b-13-20-400 text-gray-700 min-w-[190px]">Comprehensive suite for large-scale operations</p>
                                            </div>
                                            <div className="flex flex-row items-end gap-[6px]">
                                                <span className="text-h-24-24-600">$199</span>
                                                <span className="text-b-11-12-400 text-gray-700">per month</span>
                                            </div>
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer justify-center" >
                                                Upgrade
                                            </button>
                                        </div>
                                    </th>
                                    <th className="px-[30px] py-[13px] text-left border" style={{borderRadius:"20px"}}>
                                        <div className="flex flex-col  gap-5">
                                            <div className="flex flex-col gap-2.5">
                                                <span className="text-b-18-18-500 text-gray-900">Enterprise</span>
                                                <p className="text-b-13-20-400 text-gray-700 min-w-[190px]">Tailored solutions for enterprise needs</p>
                                            </div>
                                            <div className="flex flex-row items-end gap-[6px]">
                                                <span className="text-h-24-24-600">$1,299</span>
                                                <span className="text-b-11-12-400 text-gray-700">per month</span>
                                            </div>
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer justify-center" >
                                                Upgrade
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900 ">User Accounts</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Up to 5</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Up to 20</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Up to 50</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Unlimited</span>
                                    </td>

                                </tr>

                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Data Storage</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">10 GB</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">50 GB</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">200 GB</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Custom</span>
                                    </td>

                                </tr>
                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">API Calls</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">1,000/month</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">10,000/month</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">50,000/month</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Unlimited</span>
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Support</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Email</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Email + Chat</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Priority</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">24/7 Live Support</span>
                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Data Backup</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Weekly</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Daily</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Hourly</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Real-time</span>
                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Analytics Tools</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Basic</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Advanced</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Comprehensive</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Custom</span>
                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Integration Options</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Limited</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Standard</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Extended</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">Full Suite</span>
                                    </td>
                                </tr>

                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Uptime Guarantee</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">99%</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">99.9%</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">99.99%</span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left">99.999%</span>
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Custom Reports</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"><FaCheck className="text-success size-[22px]" /></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"><FaCheck className="text-success size-[22px]" /></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"><FaCheck className="text-success size-[22px]" /></span>
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Mobile Access</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"><FaCheck className="text-success size-[22px]" /></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"><FaCheck className="text-success size-[22px]" /></span>
                                    </td>
                                </tr>
                                <tr className="border">
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-500 text-gray-900">Custom Branding</span>
                                    </td>
                                    <td className="bg-[#FCFCFC] py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"></span>
                                    </td>
                                    <td className="py-[17px] px-5 border">
                                        <span className="text-b-13-14-400 text-gray-800 text-left"><FaCheck className="text-success size-[22px]" /></span>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>





            {/* FAQ */}
            <FAQ/>                                    

           <Questions/>
        </div >
    )
}
export default BillingPlan