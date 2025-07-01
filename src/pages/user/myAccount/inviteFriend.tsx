import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import Card from '@components/card/card'
import Service from '@assets/service.svg'
import ServiceDark from '@assets/service-dark.svg'
import { FaCopy, FaRegAddressBook } from "react-icons/fa6"
import InviteFriendTable from "@components/myAccount/tables/inviteFriendTable"
import { FaUsers } from "react-icons/fa"
import { BiMessageAdd } from "react-icons/bi"
import { IoMdAdd } from "react-icons/io"
import { RiResetLeftFill } from "react-icons/ri"

const InviteFriend = () => {
    const location = window.location.pathname

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Invite a Friend</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Privacy Settings
                </a>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">

                    {/* Invite People */}
                    <Card
                        title="Invite People"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col pt-[30px] gap-[30px]">
                                    <div className="flex flex-col gap-5  px-[30px]">
                                        <div className="flex md:flex-row flex-col md:gap-0 gap-3 items-start  md:items-center">
                                            <span className="text-b-13-14-400 text-gray-800 min-w-[120px]">Email</span>
                                            <div className="flex items-center gap-2 border rounded-md px-3 py-2 w-full bg-light-active border-gray-300">
                                                <input type="text" className="outline-none bg-transparent w-full text-b-13-14-400 text-gray-800 " placeholder="https://www.ktstudio.com/RSVP?c=12345XYZt" />
                                            </div>
                                        </div>
                                        <div className="flex md:flex-row flex-col md:gap-0 gap-3 items-start  md:items-center">
                                            <span className="text-b-13-14-400 text-gray-800 min-w-[120px]">Role</span>
                                            <select name="role" id="role" defaultValue={"Member"} className="border px-3 py-2 outline-none rounded-md text-b-13-14-400 text-gray-800 w-full  bg-light-active border-gray-300">
                                                <option value="Member">Member</option>
                                                <option value="Editor">Editor</option>
                                                <option value="Designer">Designer</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </div>
                                        <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer w-max md:ml-[120px] border-gray-300">
                                            <IoMdAdd className="text-gray-500 size-[14px]" />
                                            Add more
                                        </a>
                                    </div>
                                    <div className="flex items-center justify-center py-[14px] border-t">
                                        <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer w-max">
                                            Invite People
                                        </a>
                                    </div>
                                </div>
                            </>
                        }
                    />

                    {/* Invit Table  */}
                    <InviteFriendTable />

                    {/* Invite with Link */}
                    <Card
                        title="Invite with Link"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col pt-[30px] gap-[30px]">
                                    <div className="flex flex-col gap-5  px-[30px]">
                                        <div className="flex md:flex-row flex-col md:gap-0 gap-3 items-start  md:items-center">
                                            <span className="text-b-13-14-400 text-gray-800 min-w-[120px]">Link</span>
                                            <div className="flex flex-row items-center gap-2 border rounded-md px-3 py-2 w-full bg-light-active border-gray-300">
                                                <input type="text" className="outline-none bg-transparent w-full" placeholder="https://www.ktstudio.com/RSVP?c=12345XYZt" />
                                                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200">
                                                    <FaCopy className="text-gray-500 size-" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer w-max md:ml-[120px]">
                                            <RiResetLeftFill className="text-gray-500 size-[14px]" />
                                            Reset Link
                                        </button>
                                        <p className="text-b-13-20-400 text-gray-800">Click below to RSVP for our exclusive event. Limited spaces available, so don't miss out. Reserve your spot now with this special invitation link!</p>
                                    </div>
                                    <div className="flex items-center justify-center py-[14px] border-t">
                                        <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer w-max">
                                            Invite People
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
                                            </path>W
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <FaUsers className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Expand Your Network: Seamless Friend Invitation System</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Invite colleagues to join and collaborate with ease using our streamlined invitation process. Share the experience and grow your professional network effortlessly.</p>
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
                                            <BiMessageAdd className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Collaboration Growth: Refer Peers with Custom Invites</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Enhance your team's capabilities by inviting peers directly through personalized invitations. Strengthen your projects by collaborating with trusted professionals.</p>
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
                                            <FaRegAddressBook className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Team Building: Easy Referral of Professional Contacts</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Strengthen your team's dynamics by inviting industry friends to collaborate. Use our intuitive referral system to bring in expertise and foster collaboration.</p>
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
export default InviteFriend