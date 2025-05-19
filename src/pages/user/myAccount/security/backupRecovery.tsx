


import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from '../../../../components/card/card'
import { FaBook } from "react-icons/fa"
import FAQ from "../../../../components/myAccount/faq"
import BackupTable from "../../../../components/myAccount/tables/bacupsTable"
import { useState } from "react"
import Switch from "../../../../components/switch"
import { GoDatabase } from "react-icons/go"


const BackupRecovery = () => {
    const location = window.location.pathname
    const [automoticBackup, setAutomaticBackup] = useState(true)

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Backup Recovery</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Order History
                </button>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">

                    <BackupTable />

                    {/* FAQ */}
                    <FAQ />

                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}

                    {/* Backup Setting */}

                    <Card
                        title="Backup Setting"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col">
                                    <div className="px-[30px] py-5 flex flex-row items-center justify-between border-b">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-b-14-14-500 text-gray-900">Automatic Backup</span>
                                            <span className="text-b-13-14-400 text-gray-700">Scheduled Data Protection</span>
                                        </div>
                                        <Switch status={automoticBackup} size="medium" setSwitch={() => setAutomaticBackup(!automoticBackup)} />
                                    </div>
                                    <div className="px-[30px] py-5 flex flex-row items-center justify-between border-b">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-b-14-14-500 text-gray-900">Backup Frequency</span>
                                            <span className="text-b-13-14-400 text-gray-700">Select Preferred Backup</span>
                                        </div>
                                        <select name="frequency" id="frequency" defaultValue={"Weekly"} className="border px-2.5 py-[9px] rounded-md  text-b-11-12-400 outline-none dark:bg-[#1F212A] text-gray-800 border-gray-300">
                                            <option value="Weekly" className="text-gray-800 text-b-14-12-400">Weekly</option>
                                            <option value="Daily" className="text-gray-800 text-b-14-12-400">Daily</option>
                                            <option value="Monthly" className="text-gray-800 text-b-14-12-400">Monthly</option>

                                        </select>
                                    </div>
                                    <div className="px-[30px] py-5 flex flex-row items-center justify-between border-b">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-b-14-14-500 text-gray-900">Manual Backup</span>
                                            <span className="text-b-13-14-400 text-gray-700">Backup When Needed</span>
                                        </div>
                                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer dark:bg-gray-300 ">
                                            Start
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
                                            <FaBook className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Securing Data Integrity: Backup Recovery Systems</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Safeguard your data with our resilient backup recovery solutions. Detailed guides and expert strategies provide the roadmap to robust data protection and swift recovery.</p>
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
                                            <GoDatabase className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Restoration Assurance: Proactive Backup Resources</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Prepare for the unexpected with proactive backup plans. Access our extensive resources for establishing a reliable recovery protocol, ensuring continuity and peace of mind.</p>
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
export default BackupRecovery