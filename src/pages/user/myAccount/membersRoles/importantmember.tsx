import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import Card from '@components/card/card'
import { useState } from "react"
import FAQ from "@components/myAccount/faq"
import Service from '@assets/service.svg'
import { FaUsers } from "react-icons/fa"
import { IoMdExit } from "react-icons/io"
import { LuSquareMousePointer } from "react-icons/lu"
import ServiceDark from '@assets/service-dark.svg'

const ImportantMember = () => {
    const location = window.location.pathname
    const [createNewUser, setCreateNewUser] = useState(true)
    const [updatedExistUser, setUpdatedExistUser] = useState(false)
    const [sendEmail, setSendEmail] = useState(true)
    const [includeEternalID, setIcludeEternalID] = useState(false)
    const [sendWelcome, setSendWelcome] = useState(false)



    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Import Members</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Overview of all team members and roles.</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Go to Teams
                </button>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">

                    {/* Start Import */}

                    <Card
                        title="Start Import"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-[30px] p-[30px]">
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <input type="checkbox" name="create" id="create" checked={createNewUser} onChange={() => setCreateNewUser(!createNewUser)} className="custom-checkbox" />
                                            <span className="text-b-13-14-500 text-gray-800">Create new users</span>
                                        </div>
                                        <p className="text-b-13-20-400 text-gray-800">Select this option to create new user accounts for individuals whose details are included in the import data but who do not have an existing account in the system.</p>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <input type="checkbox" name="create" id="create" checked={updatedExistUser} onChange={() => setUpdatedExistUser(!updatedExistUser)} className="custom-checkbox" />
                                            <span className="text-b-13-14-500 text-gray-800">Update existing users</span>
                                        </div>
                                        <p className="text-b-13-20-400 text-gray-800">When checked, the system will update the information for users already in the database with any new or altered details provided in the import file.</p>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <input type="checkbox" name="create" id="create" checked={sendEmail} onChange={() => setSendEmail(!sendEmail)} className="custom-checkbox" />
                                            <span className="text-b-13-14-500 text-gray-800">Send email notification on password change</span>
                                        </div>
                                        <p className="text-b-13-20-400 text-gray-800">This option ensures users are promptly notified via email in the event of a password change, enhancing security and keeping users informed of their account status.</p>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <input type="checkbox" name="create" id="create" checked={includeEternalID} onChange={() => setIcludeEternalID(!includeEternalID)} className="custom-checkbox" />
                                            <span className="text-b-13-14-500 text-gray-800">Include external IDs  in import results</span>
                                        </div>
                                        <p className="text-b-13-20-400 text-gray-800">By including external IDs in the import results, administrators can more easily reconcile and track user records across different systems and databases.</p>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                                Select CSV File
                                            </button>
                                            <button className="px-3 py-2.5 flex flex-row items-center text-b-12-12-500 text-gray-800 gap-1 cursor-pointer rounded-md">
                                                Choose File
                                            </button>
                                        </div>
                                        <p className="text-b-13-20-400 text-gray-800">Use the 'Choose file' button to locate and upload the CSV file that contains the user data.</p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <span className="text-b-13-14-500 text-gray-900">Custom welcome message</span>
                                        <textarea name="welcome" id="welcome" rows={5} placeholder="Your welcome message here" className="text-b-13-14-400 text-gray-800 border p-3 rounded-md outline-none bg-light"></textarea>
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <input type="checkbox" name="create" id="create" checked={sendWelcome} onChange={() => setSendWelcome(!sendWelcome)} className="custom-checkbox" />
                                            <span className="text-b-13-14-500 text-gray-800">Send welcome email to news users</span>
                                        </div>
                                    </div>
                                    <p className="text-b-13-20-400 text-gray-800"><span className="text-danger">WARNING:</span> An email will be sent to all users created unless the welcome message is disabled in settings. Ensure the correct communication preferences are set.</p>
                                    <div className="flex items-center justify-center">
                                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                            Import Member
                                        </button>
                                    </div>

                                </div>
                            </>
                        }
                    />
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

                    {/* FAQ */}
                    <FAQ />

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
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Streamlining Member Integration: Import Tools and Resources</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Dive into seamless member onboarding with our robust import tools. Leverage detailed walkthroughs, practical resources, and support to simplify the process.</p>
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
                                            <IoMdExit className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Simplifying Roster Management: Bulk Upload Features</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Manage your community efficiently with our bulk member import feature. Find step-by-step instructions, helpful tips, and best practices for a smooth update.</p>
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
                                            <LuSquareMousePointer className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Effortless Member Enrollment: Importation and Setup</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Initiate a hassle-free member import with our guided tools. Access comprehensive tutorials, insightful advice, and technical documentation for effortless setup.</p>
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
export default ImportantMember