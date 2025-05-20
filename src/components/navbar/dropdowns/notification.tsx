import { useState } from "react";
import { IoMdClose } from "react-icons/io"
import { IoClose, IoCloudUploadOutline, IoSettingsOutline } from "react-icons/io5";
import Tyler from '@assets/tyler-hero.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import Cody from '@assets/cody-fisher.svg'
import Esther from '@assets/ester-hoeard.svg'
import Jonathan from '@assets/jonathan-taylor.svg'
import PDF from '@assets/pdf.svg'
import Figma from '@assets/figma.svg'
import XLS from '@assets/xls.svg'
import { Link, useLocation } from "react-router";
import { FaCheck, FaImage } from "react-icons/fa6";
import AvatarGroup from '@assets/twice-avatar-group.svg'
import AvatarGroupThird from '@assets/avatar-group.svg'
import DOC from '@assets/doc.svg'
import SVG from '@assets/svg.svg'
import DeepMind from '@assets/google-deepmind.svg'
import Artistic from '@assets/artistic-expression.svg'
import Jira from '@assets/jira-work.svg'
import { FaCheckCircle } from "react-icons/fa";

interface NotificationProps {
    closeDropdowns: () => void;
}
const Notification = ({ closeDropdowns }: NotificationProps) => {

    const [selectedTab, setSelectedTab] = useState("All")
    let location = useLocation();
    return (
        <div className="absolute  top-12 md:right-0 right-[-40px] w-[420px]">
            <div className="flex bg-white dark:bg-coal-500 rounded-xl border-gray-200 border  flex-col">
                <div className=" pl-5 pr-2.5 py-3 border-b border-b-gray-200">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-gray-900 text-b-14-14-600">Notification</span>
                        <div onClick={() => closeDropdowns()} className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md cursor-pointer duration-200">
                            <IoMdClose className=" text-gray-600 size-5" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center px-5 border-b justify-between">
                    <div className="flex flex-row items-center gap-5">
                        <div onClick={() => setSelectedTab("All")} className={`py-4 cursor-pointer border-b ${selectedTab === "All" ? "border-primary" : ""} group`}>
                            <span className={`${selectedTab === "All" ? "text-b-13-14-500 text-primary" : "text-b-13-14-400 text-gray-800"} group-hover:text-primary text-animation`}>All</span>
                        </div>
                        <div onClick={() => setSelectedTab("Inbox")} className={`py-4 cursor-pointer border-b ${selectedTab === "Inbox" ? "border-primary" : ""} group`}>
                            <span className={`${selectedTab === "Inbox" ? "text-b-13-14-500 text-primary" : "text-b-13-14-400 text-gray-800"} group-hover:text-primary text-animation `}>Inbox</span>
                        </div>
                        <div onClick={() => setSelectedTab("Team")} className={`py-4 cursor-pointer border-b ${selectedTab === "Team" ? "border-primary" : ""}group `}>
                            <span className={`${selectedTab === "Team" ? "text-b-13-14-500 text-primary" : "text-b-13-14-400 text-gray-800"} group-hover:text-primary text-animation`}>Team</span>
                        </div>
                        <div onClick={() => setSelectedTab("Following")} className={`py-4 cursor-pointer border-b ${selectedTab === "Following" ? "border-primary" : ""} group `}>
                            <span className={`${selectedTab === "Following" ? "text-b-13-14-500 text-primary" : "text-b-13-14-400 text-gray-800"} group-hover:text-primary text-animation`}>Following</span>
                        </div>
                    </div>
                    <button className="p-[7px] rounded-md hover:bg-light">
                        <IoSettingsOutline className="text-gray-600 size-[18px]" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col overflow-auto max-h-[500px] custom-scroll">
                        {
                            selectedTab === "All" ?
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                        <div className="relative">
                                            <img src={Tyler} alt="tyler" className="size-8" />
                                            <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[14px] w-full">
                                            <div className="flex flex-col gap-[7px]">
                                                <span className="text-gray-800 text-b-13-14-400">
                                                    <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Joe Lincoln </Link>
                                                    mentioned you in<Link to={location.pathname} className="text-primary"> Latest Trends topic</Link>
                                                </span>
                                                <span className="text-b-11-12-400 text-gray-600">18 mins ago - Web Design 2024</span>
                                            </div>
                                            <div className="flex flex-col bg-light rounded-lg gap-2.5 p-[14px] border border-gray-200">
                                                <span className="text-b-13-20-400 text-gray-800"><Link to={location.pathname} className="text-b-13-14-500 text-gray-900 hover:text-primary text-animation">@Cody </Link>For an expert opinion, check out what Mike has to say on this topic!</span>
                                                <div className="flex flex-row items-center gap-2 border rounded-md p-2.5 border-gray-300">
                                                    <input type="text" className="outline-none bg-transparent text-b-11-12-400 text-gray-800 w-full" placeholder="Replace" />
                                                    <FaImage className="text-gray-600 size-[14px] cursor-pointer" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                        <div className="relative">
                                            <img src={Arlene} alt="arlene" className="size-8" />
                                            <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[14px] w-full">
                                            <div className="flex flex-col gap-[7px]">
                                                <span className="text-gray-800 text-b-13-14-400">
                                                    <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Leslie Alexander </Link>
                                                    added new tags to<Link to={location.pathname} className="text-primary"> Web Redesign 2024</Link>
                                                </span>
                                                <span className="text-b-11-12-400 text-gray-600">53 mins ago - ACME</span>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <div className="flex items-center justify-center px-[6px] py-[5px] rounded-[4px] bg-info-light border border-info-clarity border-opacity-20 ">
                                                    <span className="text-info text-b-11-12-500">Client - Request</span>
                                                </div>
                                                <div className="flex items-center justify-center px-[6px] py-[5px] rounded-[4px] bg-warning-light border border-warning-clarity border-opacity-20">
                                                    <span className="text-warning text-b-11-12-500">Figma</span>
                                                </div>
                                                <div className="flex items-center justify-center px-[6px] py-[5px] rounded-[4px] bg-gray-100 border border-gray-300">
                                                    <span className="text-gray-600 text-b-11-12-500">Redesign</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                        <div className="relative">
                                            <img src={Cody} alt="cody" className="size-8" />
                                            <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-gray-400 border border-light`}>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[14px] w-full">
                                            <div className="flex flex-col gap-[7px]">
                                                <span className="text-gray-800 text-b-13-14-400">
                                                    <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Guy Hawkins </Link>
                                                    requested access to<Link to={location.pathname} className="text-primary"> AirSpace</Link> project
                                                </span>
                                                <span className="text-b-11-12-400 text-gray-600">14 hours ago - Dev Team</span>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                    <span className="text-gray-700 text-b-11-12-500">Decline</span>
                                                </button>
                                                <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                    <span className="text-gray-900 text-b-11-12-500">Accept</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                        <div className="relative">
                                            <img src={Esther} alt="esther" className="size-8" />
                                            <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[14px] w-full">
                                            <div className="flex flex-col gap-[7px]">
                                                <span className="text-gray-800 text-b-13-14-400">
                                                    <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Jane Perez </Link>
                                                    invites you to review a file.
                                                </span>
                                                <span className="text-b-11-12-400 text-gray-600">3 hours ago - 742kb</span>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5 bg-light p-2.5 rounded-lg">
                                                <img src={PDF} alt="pdf" />
                                                <Link to={location.pathname} className="text-b-13-14-600 text-gray-800 hover:text-primary text-animation">Launch_nov24.pptx</Link>
                                                <span className="text-gray-600 text-b-11-12-400">Edited 39 mins ago</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                        <div className="relative">
                                            <img src={Jonathan} alt="jonathan" className="size-8" />
                                            <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[14px] w-full">
                                            <div className="flex flex-col gap-[7px]">
                                                <span className="text-gray-800 text-b-13-14-400">
                                                    <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Raymond Pawell </Link>
                                                    posted a new article<Link to={location.pathname} className="text-primary"> 2024 Roadmap</Link>
                                                </span>
                                                <span className="text-b-11-12-400 text-gray-600">1 hour ago - Roadmap</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                        <div className="relative">
                                            <img src={Esther} alt="esther" className="size-8" />
                                            <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[14px] w-full">
                                            <div className="flex flex-col gap-[7px]">
                                                <span className="text-gray-800 text-b-13-14-400">
                                                    <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Jane Perez </Link>
                                                    invites you to review a file.
                                                </span>
                                                <span className="text-b-11-12-400 text-gray-600">1 day ago - Metronic Launcher mockups</span>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5 bg-light p-2.5 rounded-lg">
                                                <img src={Figma} alt="Figma" />
                                                <Link to={location.pathname} className="text-b-13-14-600 text-gray-800 hover:text-primary text-animation">Launcher-UIkit.fig</Link>
                                                <span className="text-gray-600 text-b-11-12-400">Edited 2 mins ago</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                : selectedTab === "Inbox" ?
                                    <div className="flex flex-col">
                                        <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                            <div className="relative">
                                                <img src={Tyler} alt="tyler" className="size-8" />
                                                <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[14px] w-full">
                                                <div className="flex flex-col gap-[7px]">
                                                    <span className="text-gray-800 text-b-13-14-400">
                                                        <Link className="text-b-13-14-500 text-gray-900 hover:text-primary text-animation" to={location.pathname}>Samuel Lee </Link>
                                                        requested to add user to <Link className="text-b-13-14-400 text-primary text-animation" to={location.pathname}>TechSynergy</Link>
                                                    </span>
                                                    <span className="text-b-11-12-400 text-gray-600">22 hours ago - Dev Team</span>
                                                </div>
                                                <div className="flex flex-row items-center justify-between bg-light p-2.5 rounded-lg">
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link className="text-b-12-14-400 text-gray-900 hover:text-primary text-animation" to={location.pathname}>Ronald Richards</Link>
                                                        <Link className="text-b-10-10-400 text-gray-600 hover:text-primary text-animation" to={location.pathname}>ronald.richards@gmail.com</Link>
                                                    </div>
                                                    <Link className="text-b-12-12-500 text-gray-700 hover:text-primary text-animation" to={location.pathname}>Go to profile </Link>

                                                </div>
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                        <span className="text-gray-700 text-b-11-12-500">Decline</span>
                                                    </button>
                                                    <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                        <span className="text-gray-900 text-b-11-12-500">Accept</span>
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                            <div className="relative">
                                                <div className="size-8 flex items-center justify-center rounded-full bg-success-light border-[#c0f4d2] border dark:border-[#183e2f]">
                                                    <FaCheck className="text-success size-5" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[14px] w-full">
                                                <div className="flex flex-col gap-[7px]">
                                                    <span className="text-gray-800 text-b-13-14-400">
                                                        You have succesfully verified your account
                                                    </span>
                                                    <span className="text-b-11-12-400 text-gray-600">2 days ago</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                            <div className="relative">
                                                <img src={Esther} alt="esther" className="size-8" />
                                                <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[14px] w-full">
                                                <div className="flex flex-col gap-[7px]">
                                                    <span className="text-gray-800 text-b-13-14-400">
                                                        <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Ava Peterson </Link>
                                                        uploaded attachment
                                                    </span>
                                                    <span className="text-b-11-12-400 text-gray-600">3 days ago - ACME</span>
                                                </div>
                                                <div className="flex flex-row items-center justify-between  bg-light p-2.5 rounded-lg">
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <img src={XLS} alt="XLS" />
                                                        <div className="flex flex-col gap-1">
                                                            <Link to={location.pathname} className="text-b-12-12-400 text-gray-800 hover:text-primary text-animation">Redesign-2024.xls</Link>
                                                            <span className="text-gray-600 text-b-11-12-400">2.6 MB</span>
                                                        </div>
                                                    </div>
                                                    <IoCloudUploadOutline className="cursor-pointer size-[14px] text-gray-500" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                            <div className="relative">
                                                <img src={Jonathan} alt="jonathan" className="size-8" />
                                                <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[14px] w-full">
                                                <div className="flex flex-col gap-[7px]">
                                                    <span className="text-gray-800 text-b-13-14-400">
                                                        <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Ethan Parker </Link>
                                                        created a new tasks to <Link className="text-b-13-14-400 text-primary" to={location.pathname}>Site Sculpt </Link> project
                                                    </span>
                                                    <span className="text-b-11-12-400 text-gray-600">3 days ago - Web Designer</span>
                                                </div>
                                                <div className="flex flex-col bg-light p-2.5 rounded-lg gap-[14px]">
                                                    <div className="flex flex-row items-center justify-between">
                                                        <div className="flex flex-col gap-[6px]">
                                                            <span className="text-b-12-12-400 text-gray-900">Location history is erased after Logging In</span>
                                                            <span className="text-b-10-10-400 text-gray-600">Due Datete: 15 May, 2024</span>
                                                        </div>
                                                        <img src={AvatarGroup} alt="avatar-hroup" />
                                                    </div>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <div className="flex px-[6px] py-[5px] bg-success-light border border-success-clarity border-opacity-20 rounded-[4px]">
                                                            <span className="text-success text-b-11-12-500">Improvement</span>
                                                        </div>
                                                        <div className="flex px-[6px] py-[5px] bg-danger-light border border-danger-clarity border-opacity-20 rounded-[4px]">
                                                            <span className="text-danger text-b-11-12-500">Bug</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                            <div className="relative">
                                                <img src={Cody} alt="cody" className="size-8" />
                                                <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-gray-400 border border-light`}>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[14px] w-full">
                                                <div className="flex flex-col gap-[7px]">
                                                    <span className="text-gray-800 text-b-13-14-400">
                                                        <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Benjamin Harris </Link>
                                                        requested to upgrade plan
                                                    </span>
                                                    <span className="text-b-11-12-400 text-gray-600">4 days ago - Marketing</span>
                                                </div>
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                        <span className="text-gray-700 text-b-11-12-500">Decline</span>
                                                    </button>
                                                    <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                        <span className="text-gray-900 text-b-11-12-500">Accept</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                            <div className="relative">
                                                <img src={Jonathan} alt="Jonathan" className="size-8" />
                                                <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-gray-400 border border-light`}>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[14px] w-full">
                                                <div className="flex flex-col gap-[7px]">
                                                    <span className="text-gray-800 text-b-13-14-400">
                                                        <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Isaac Morgan </Link>
                                                        mentioned you in  <Link className="text-b-13-14-400 text-primary" to={location.pathname}>Data Transmission </Link> topic
                                                    </span>
                                                    <span className="text-b-11-12-400 text-gray-600">4 days ago - Marketing</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    : selectedTab === "Team" ?
                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Arlene} alt="Arlene" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-gray-400 border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Nova Hawthorne  </Link>
                                                            sent you an meeting invation
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">2 days ago - Dev Team</span>
                                                    </div>
                                                    <div className="flex flex-col bg-light p-2.5 rounded-lg gap-[14px]">
                                                        <div className="flex flex-row items-center justify-between">
                                                            <div className="flex flex-row items-center gap-2.5">
                                                                <div className="flex flex-col  rounded-lg border-[#D74E00] border-opacity-20  border-[2px] ">
                                                                    <div className="py-2 px-3 bg-[#fff5ef] dark:bg-[#D74E00] dark:bg-opacity-20 rounded-t-lg flex items-center justify-center border-b-2 border-[#D74E00] border-opacity-20">
                                                                        <span className="text-[#FF6F1E] text-b-13-14-500">Apr</span>
                                                                    </div>
                                                                    <div className="flex items-center justify-center py-[6px]">
                                                                        <span className="text-gray-800 text-h-22-38-500 ">12</span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col gap-[6px]">
                                                                    <span className="text-b-12-12-400 text-gray-900">Peparation For Release</span>
                                                                    <span className="text-b-10-10-400 text-gray-600">9:00 PM - 10:00 PM</span>
                                                                </div>
                                                            </div>

                                                            <img src={AvatarGroupThird} alt="avatar-hroup" className="w-16 h-6" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                            <span className="text-gray-700 text-b-11-12-500">Decline</span>
                                                        </button>
                                                        <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                            <span className="text-gray-900 text-b-11-12-500">Accept</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Jonathan} alt="Jonathan" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-gray-400 border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Adrian Vale </Link>
                                                            change the due date of <Link className="text-b-13-14-400 text-primary" to={location.pathname}>Marketing </Link> to 13 May
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">2 days ago - Marketing</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Tyler} alt="Tyler" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Skylar Frost </Link>
                                                            uploaded 2 attachments
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">3 days ago - Web Design</span>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  bg-light p-2.5 rounded-lg">
                                                        <div className="flex flex-row items-center gap-2.5">
                                                            <img src={DOC} alt="DOC" />
                                                            <div className="flex flex-col gap-1">
                                                                <Link to={location.pathname} className="text-b-12-12-400 text-gray-800 hover:text-primary text-animation">Landing-page.docx</Link>
                                                                <span className="text-gray-600 text-b-11-12-400">1.9 MB</span>
                                                            </div>
                                                        </div>
                                                        <IoCloudUploadOutline className="cursor-pointer size-[14px] text-gray-500" />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  bg-light p-2.5 rounded-lg">
                                                        <div className="flex flex-row items-center gap-2.5">
                                                            <img src={SVG} alt="SVG" />
                                                            <div className="flex flex-col gap-1">
                                                                <Link to={location.pathname} className="text-b-12-12-400 text-gray-800 hover:text-primary text-animation">New-icon.svg</Link>
                                                                <span className="text-gray-600 text-b-11-12-400">2.3 MB</span>
                                                            </div>
                                                        </div>
                                                        <IoCloudUploadOutline className="cursor-pointer size-[14px] text-gray-500" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Tyler} alt="tyler" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Selene Silverleaf </Link>
                                                            commented on<Link to={location.pathname} className="text-primary"> SiteSculpt</Link>
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">4 days ago - Manager</span>
                                                    </div>
                                                    <div className="flex flex-col bg-light rounded-lg gap-2.5 p-[14px] border border-gray-200">
                                                        <span className="text-b-13-20-400 text-gray-800"><Link to={location.pathname} className="text-b-13-14-500 text-gray-900 hover:text-primary text-animation">@Cody </Link> This design  is simply stunning! From layout to color, it's a work of art!</span>
                                                        <div className="flex flex-row items-center gap-2 border rounded-md p-2.5 border-gray-300">
                                                            <input type="text" className="outline-none bg-transparent text-b-11-12-400 text-gray-800 w-full" placeholder="Replace" />
                                                            <FaImage className="text-gray-600 size-[14px] cursor-pointer" />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Tyler} alt="tyler" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Thalia Fox </Link>
                                                            has invited you to join<Link to={location.pathname} className="text-primary"> Design Research </Link>
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">4 days ago - Dev Team</span>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                            <span className="text-gray-700 text-b-11-12-500">Decline</span>
                                                        </button>
                                                        <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                            <span className="text-gray-900 text-b-11-12-500">Accept</span>
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                        : <div className="flex flex-col">
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Esther} alt="Esther" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Jane Perez </Link>
                                                            added 2 new works to<Link to={location.pathname} className="text-primary"> Inspirations 2024</Link>
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">23 hours ago - Craftwork Design</span>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <div className="bg-light flex flex-col rounded-xl gap-[14px]">
                                                            <img src={DeepMind} alt="deepmind" className="rounded-t-xl max-w-[130px] max-h-[96px]" />
                                                            <div className="flex flex-col gap-[6px] px-2.5 pb-2.5">
                                                                <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Geometric Pattern</Link>
                                                                <span className="text-b-11-12-400 text-gray-600">Token ID: <span className="text-gray-800"></span>81023</span>
                                                            </div>
                                                        </div>
                                                        <div className="bg-light flex flex-col rounded-xl gap-[14px]">
                                                            <img src={Artistic} alt="artistic" className="rounded-t-xl max-w-[130px] max-h-[96px]" />
                                                            <div className="flex flex-col gap-[6px] px-2.5 pb-2.5">
                                                                <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Artistic Expressions</Link>
                                                                <span className="text-b-11-12-400 text-gray-600">Token ID: <span className="text-gray-800"></span>67890</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Arlene} alt="Arlene" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Natalie Wood </Link>
                                                            wants to edit marketing project
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">1 days ago - Designer</span>
                                                    </div>
                                                    <div className="flex flex-row bg-light rounded-lg gap-2.5 p-[14px] border border-gray-200">
                                                        <img src={Jira} alt="jira" className="size-[18px]" />
                                                        <Link className="text-b-12-12-400 text-gray-800 hover:text-primary" to={location.pathname}>User-feedback.jira</Link>
                                                        <span className="text-gray-600 text-b-11-12-400">Edited 1 hour ago</span>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                            <span className="text-gray-700 text-b-11-12-500">Decline</span>
                                                        </button>
                                                        <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                            <span className="text-gray-900 text-b-11-12-500">Accept</span>
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Cody} alt="Cody" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Aaron Foster </Link>
                                                            requested to view <Link className="text-b-13-14-400 text-primary" to={location.pathname}>Your Profile </Link>
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">1 days ago - Larsen Ltd</span>
                                                    </div>

                                                    <div className="flex flex-row justify-between items-center bg-light p-[14px] rounded-md">
                                                        <div className="flex flex-row gap-2.5 items-center">
                                                            <FaCheckCircle className="size-[18px] text-success" />
                                                            <div className="flex flex-col gap-[6px]">
                                                                <span className="text-b-12-12-400 text-gray-900">You allowed Aaron to view</span>
                                                                <span className="text-b-10-10-400 text-gray-600">Enhancing User Engagement and Privacy Control</span>
                                                            </div>
                                                        </div>
                                                        <button className="p-[6px] rounded-md hover:bg-gray-200">
                                                            <IoClose className="text-gray-600 size-[18px]" />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Esther} alt="esther" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-success border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Chloe Morgan </Link>
                                                            posted a new article <Link className="text-b-13-14-400 text-primary" to={location.pathname}>User Experience </Link>
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">1 days ago - Nexus</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-start gap-2.5 p-5 border-b">
                                                <div className="relative">
                                                    <img src={Jonathan} alt="Jonathan" className="size-8" />
                                                    <div className={`absolute bottom-1 right-0 size-[6px] rounded-full bg-gray-400 border border-light`}>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[14px] w-full">
                                                    <div className="flex flex-col gap-[7px]">
                                                        <span className="text-gray-800 text-b-13-14-400">
                                                            <Link className="text-b-13-14-500 text-gray-900 hover:text-primary" to={location.pathname}>Gabriel Bennett </Link>
                                                            started connect you
                                                        </span>
                                                        <span className="text-b-11-12-400 text-gray-600">3 days ago - Development</span>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex flex-row items-center gap-1">
                                                            <FaCheckCircle className="text-gray-500 size-3" />
                                                            <span className="text-gray-700 text-b-11-12-500">Decline</span>
                                                        </button>
                                                        <button className="px-2.5 py-2 rounded-md bg-light border border-gray-300 flex">
                                                            <span className="text-gray-900 text-b-11-12-500">Go to profile</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                        }
                    </div>
                    <div className="flex flex-row items-center p-5 gap-2.5 border-t">
                        <button className="w-full flex items-center justify-center py-2.5 border bg-light rounded-md border-gray-300">
                            <span className="text-b-12-12-500 text-gray-700">Archive all</span>
                        </button>
                        <button className="w-full flex items-center justify-center py-2.5 border bg-light rounded-md border-gray-300">
                            <span className="text-b-12-12-500 text-gray-700">Mark all</span>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Notification