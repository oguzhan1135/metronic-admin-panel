import { FaCopy } from "react-icons/fa"
import Card from "@components/card/card"
import FAQ from "@components/myAccount/faq"
import Menu from "@components/myAccount/hoverMenu"
import Questions from "@components/myAccount/questions"
import MemberRole from '@components/myAccount/tables/memberRoleTable'
import { IoMdAdd } from "react-icons/io"
import { RiResetLeftFill } from "react-icons/ri"

const TeamMembers = () => {

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Team Members(14)</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Overview of all team members and roles.</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Import Members
                    </button>
                    <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                        Add Member
                    </button>
                </div>
            </div>
            {/* Member role table */}
            <MemberRole />

            {/* Invite people and link area */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <div className=" col-span-1">
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
                                            <div className="flex flex-row items-center gap-2 border rounded-md px-3 py-2 w-full">
                                                <input type="text" className="outline-none bg-transparent w-full text-b-13-14-400 text-gray-800" placeholder="https://www.ktstudio.com/RSVP?c=12345XYZt" />
                                                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200">
                                                    <FaCopy className="text-gray-500 size-4" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex md:flex-row flex-col md:gap-0 gap-3 items-start  md:items-center">
                                            <span className="text-b-13-14-400 text-gray-800 min-w-[120px]">Role</span>
                                            <select name="role" id="role" defaultValue={"Member"} className="border px-3 py-2 outline-none rounded-md text-b-13-14-400 text-gray-800 w-full bg-light border-gray-300">
                                                <option value="Member">Member</option>
                                                <option value="Editor">Editor</option>
                                                <option value="Designer">Designer</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </div>
                                        <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer w-max md:ml-[120px] border-gray-300">
                                            <IoMdAdd className="text-gray-500 size-[14px]" />
                                            Add more
                                        </button>
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
                </div>
                <div className=" col-span-1">
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
                                            <div className="flex flex-row items-center gap-2 border rounded-md px-3 py-2 w-full">
                                                <input type="text" className="outline-none bg-transparent w-full" placeholder="https://www.ktstudio.com/RSVP?c=12345XYZt" />
                                                <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200">
                                                    <FaCopy className="text-gray-500 size-" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer w-max md:ml-[120px] border-gray-300">
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
                </div>
            </div>
            {/* FAQ */}

            <FAQ />

            {/* Qustions Area */}

            <Questions />

        </div >
    )
}
export default TeamMembers