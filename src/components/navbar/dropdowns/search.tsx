import { metronicContext } from '@context/layoutContet';
import React, { useEffect, useState } from "react";
import { IoSearchOutline, IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";
import SearchImage from '@assets/search.svg'
import SearchImageDark from '@assets/search-dark.svg'
import { GoCodeReview } from 'react-icons/go';
import { BsPersonVcard } from 'react-icons/bs';
import Jira from '@assets/jira-work.svg'
import Inferno from '@assets/inferno.svg'
import AvatarGroup from '@assets/avatar-group.svg'
import { Link } from 'react-router';
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdDeleteOutline, MdHomeFilled, MdModeEdit, MdOutlineSms } from 'react-icons/md';
import { FaAngleRight, FaCircleUser } from 'react-icons/fa6';
import Evernote from '@assets/evernote.svg'
import Gitlab from '@assets/gitlab.svg'
import GoogleWeb from '@assets/google-webdev.svg'
import Jonathan from '@assets/jonathan-taylor.svg'
import Cody from '@assets/cody-fisher.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import PDF from '@assets/pdf.svg'
import DOC from '@assets/doc.svg'
import AI from '@assets/illustrator.svg'
import JS from '@assets/javascript.svg'
import PHP from '@assets/php.svg'
import { CiMail, CiViewList } from 'react-icons/ci';
import { TbTableExport } from 'react-icons/tb';


interface ModalProps {
    children: React.ReactNode;
}
interface SearchItems {
    category: string;
    itemName: string;
    content: React.ReactElement;
}

const ModalContent: React.FC<ModalProps> = ({ children }) => {
    const { setSearchModal } = metronicContext()

    return (
        <div
            className="fixed inset-0 flex items-center justify-center"
            style={{ zIndex: 10000000000000 }}
            onClick={() => setSearchModal(false)}
        >
            <div
                className="relative bg-light shadow-lg w-[90%] max-w-[550px] max-h-[500px] overflow-hidden rounded-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600 z-20"
                    onClick={() => setSearchModal(false)}
                    style={{ zIndex: 9999 }}
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

const Search = () => {

    const [selectedTab, setSelectedTab] = useState("Mixed")
    const [more, setMore] = useState(false)
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;



            if (!target.closest(".morea-area")) {
                setMore(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMore(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [more]);

    const [Items, setItems] = useState<SearchItems[]>([
        {
            category: "settings",
            itemName: "dashboards",
            content:
                <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                    <MdHomeFilled className='dropdown-icon  group-hover:text-primary' />
                    <span className='text-gray-800 text-b-13-14-400 '>Go to Dashboard</span>
                </div>
        },
        {
            category: "settings",
            itemName: "publicProfile",
            content:
                <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                    <BsPersonVcard className='dropdown-icon  group-hover:text-primary' />
                    <span className='text-gray-800 text-b-13-14-400 '>Public Profile</span>
                </div>
        },
        {
            category: "settings",
            itemName: "myAccount",
            content:
                <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                    <IoSettingsSharp className='dropdown-icon  group-hover:text-primary' />
                    <span className='text-gray-800 text-b-13-14-400 '>My Account</span>
                </div>
        },
        {
            category: "settings",
            itemName: "devForums",
            content:
                <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md ">
                    <GoCodeReview className='dropdown-icon group-hover:text-primary' />
                    <span className='text-gray-800 text-b-13-14-400'>Devs Forum</span>
                </div>
        },
        {
            category: "integrations",
            itemName: "jira",
            content:
                <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                    <div className="flex flex-row items-center gap-2.5">
                        <div className="flex items-center justify-center p-2.5 border rounded-full">
                            <img src={Jira} alt="jira" className='size-6' />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Jira</Link>
                            <span className='text-b-11-12-400 text-gray-700'>Project management</span>
                        </div>
                    </div>
                    <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                </div>
        },
        {
            category: "integrations",
            itemName: "inferno",
            content:
                <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                    <div className="flex flex-row items-center gap-2.5">
                        <div className="flex items-center justify-center p-2.5 border rounded-full">
                            <img src={Inferno} alt="inferno" className='size-6' />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Inferno</Link>
                            <span className='text-b-11-12-400 text-gray-700'>Ensures healthcare app</span>
                        </div>
                    </div>
                    <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                </div>
        },
        {
            category: "integrations",
            itemName: "evernote",
            content:
                <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                    <div className="flex flex-row items-center gap-2.5">
                        <div className="flex items-center justify-center p-2.5 border rounded-full">
                            <img src={Evernote} alt="Evernote" className='size-6' />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Evernote</Link>
                            <span className='text-b-11-12-400 text-gray-700'>Notes management app</span>
                        </div>
                    </div>
                    <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                </div>
        },
        {
            category: "integrations",
            itemName: "gitlab",
            content:
                <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                    <div className="flex flex-row items-center gap-2.5">
                        <div className="flex items-center justify-center p-2.5 border rounded-full">
                            <img src={Gitlab} alt="Gitlab" className='size-6' />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Gitlab</Link>
                            <span className='text-b-11-12-400 text-gray-700'>DevOps platform</span>
                        </div>
                    </div>
                    <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                </div>
        },
        {
            category: "integrations",
            itemName: "webDev",
            content:
                <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                    <div className="flex flex-row items-center gap-2.5">
                        <div className="flex items-center justify-center p-2.5 border rounded-full">
                            <img src={GoogleWeb} alt="GoogleWeb" className='size-6' />
                        </div>
                        <div className="flex flex-col gap-[6px]">
                            <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Google webdev</Link>
                            <span className='text-b-11-12-400 text-gray-700'>Building web expierences</span>
                        </div>
                    </div>
                    <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                </div>
        },


    ])
    // Verilerden devam et
    return (
        <div className="flex flex-col gap-10">
            <ModalContent>
                <div className="flex flex-col  bg-white dark:bg-coal-500 max-w-[550px] max-h-[500px] rounded-xl">
                    <div className="flex flex-row items-center gap-2 min-w-[300p] p-5">
                        <IoSearchOutline className="size-5 text-gray-700" />
                        <input type="text" className="outline-none bg-transparent text-13-14-400 text-gray-800 w-full" placeholder="Tap to start search.." />
                    </div>
                    <div className="flex flex-row items-center px-5 border-y justify-between relative">
                        <div className="flex flex-row items-center gap-5">
                            <div onClick={() => setSelectedTab("Mixed")} className={`py-4 cursor-pointer border-b ${selectedTab === "Mixed" ? "border-primary" : ""} group`}>
                                <span className={`${selectedTab === "Mixed" ? "text-b-13-14-500 text-primary" : "text-b-13-14-500 text-gray-800"} group-hover:text-primary text-animation`}>Mixed</span>
                            </div>
                            <div onClick={() => setSelectedTab("Settings")} className={`py-4 cursor-pointer border-b ${selectedTab === "Settings" ? "border-primary" : ""} group`}>
                                <span className={`${selectedTab === "Settings" ? "text-b-13-14-500 text-primary" : "text-b-13-14-500 text-gray-800"} group-hover:text-primary text-animation `}>Settings</span>
                            </div>
                            <div onClick={() => setSelectedTab("Integrations")} className={`py-4 cursor-pointer border-b ${selectedTab === "Integrations" ? "border-primary" : ""}group `}>
                                <span className={`${selectedTab === "Integrations" ? "text-b-13-14-500 text-primary" : "text-b-13-14-500 text-gray-800"} group-hover:text-primary text-animation`}>Integrations</span>
                            </div>
                            <div onClick={() => setSelectedTab("Users")} className={`py-4 cursor-pointer border-b ${selectedTab === "Users" ? "border-primary" : ""} group `}>
                                <span className={`${selectedTab === "Users" ? "text-b-13-14-500 text-primary" : "text-b-13-14-500 text-gray-800"} group-hover:text-primary text-animation`}>Users</span>
                            </div>
                            <div onClick={() => setSelectedTab("Docs")} className={`py-4 cursor-pointer border-b ${selectedTab === "Docs" ? "border-primary" : ""} group `}>
                                <span className={`${selectedTab === "Docs" ? "text-b-13-14-500 text-primary" : "text-b-13-14-500 text-gray-800"} group-hover:text-primary text-animation`}>Docs</span>
                            </div>
                            <div onClick={() => setSelectedTab("Empty")} className={`py-4 cursor-pointer border-b ${selectedTab === "Empty" ? "border-primary" : ""} group `}>
                                <span className={`${selectedTab === "Empty" ? "text-b-13-14-500 text-primary" : "text-b-13-14-500 text-gray-800"} group-hover:text-primary text-animation`}>Empty</span>
                            </div>
                            <div onClick={() => setSelectedTab("No Results")} className={`py-4 cursor-pointer border-b ${selectedTab === "No Results" ? "border-primary" : ""} group `}>
                                <span className={`${selectedTab === "No Results" ? "text-b-13-14-500 text-primary" : "text-b-13-14-500 text-gray-800"} group-hover:text-primary text-animation`}>No Results</span>
                            </div>
                        </div>
                        <button className="p-[7px] rounded-md hover:bg-light" onClick={() => setMore(!more)}>
                            <IoSettingsOutline className="text-gray-600 size-[18px]" />
                        </button>
                        {
                            more &&
                            <div className="absolute more-area bg-white dark:bg-coal-300 p-1.5 min-w-[150px] top-14 right-7 rounded-md">
                                <div className="flex flex-col w-full">
                                    <Link to={location} className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <CiViewList className="dropdown-icon" />
                                        <span className="text-gray-800 text-b-13-14-400">View</span>
                                    </Link>

                                    <div
                                        className="relative flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5 justify-between"
                                        onMouseEnter={() => setIsSubMenuOpen(true)}
                                        onMouseLeave={() => setIsSubMenuOpen(false)}
                                    >
                                        <Link to={location} className="flex flex-row items-center gap-2.5">
                                            < TbTableExport className="dropdown-icon" />
                                            <span className="text-gray-800 text-b-13-14-400">Export</span>
                                        </Link>
                                        <FaAngleRight className="size-[14px] text-gray-600" />

                                        {isSubMenuOpen && (
                                            <div
                                                className="absolute top-0 right-[140px] min-w-[120px] bg-white dark:bg-coal-300 border rounded-md p-1.5 shadow-lg "
                                                onMouseEnter={() => setIsSubMenuOpen(true)}
                                                onMouseLeave={() => setIsSubMenuOpen(false)}
                                            >
                                                <Link to={location} className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                                    <CiMail className="dropdown-icon" />
                                                    <span className="text-gray-800 text-b-13-14-400">Gmail</span>
                                                </Link>
                                                <Link to={location} className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                                    <MdOutlineSms className="dropdown-icon" />
                                                    <span className="text-gray-800 text-b-13-14-400">SMS</span>
                                                </Link>
                                                <Link to={location} className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                                    <TbTableExport className="dropdown-icon" />
                                                    <span className="text-gray-800 text-b-13-14-400">Push</span>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <Link to={location} className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <MdModeEdit className="dropdown-icon" />
                                        <span className="text-gray-800 text-b-13-14-400">Edit</span>
                                    </Link>
                                    <Link to={location} className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <MdDeleteOutline className="dropdown-icon" />
                                        <span className="text-gray-800 text-b-13-14-400">Delete</span>
                                    </Link>

                                </div>
                            </div>
                        }

                    </div>


                    <div className="flex flex-col overflow-y-auto custom-scroll max-h-[500px]">

                        {selectedTab === "Mixed" && (
                            <div className="flex flex-col">
                                <div className="p-2.5 flex flex-col gap-[6px] border-b">
                                    <span className='text-b-12-12-400 text-gray-700'>Settings</span>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <BsPersonVcard className='dropdown-icon  group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400 '>Public Profile</span>
                                        </div>
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <IoSettingsSharp className='dropdown-icon  group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400 '>My Account</span>
                                        </div>
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md ">
                                            <GoCodeReview className='dropdown-icon group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400'>Devs Forum</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2.5 flex flex-col gap-[6px] border-b">
                                    <span className='text-b-12-12-400 text-gray-700'>Integrations</span>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <div className="flex items-center justify-center p-2.5 border rounded-full">
                                                    <img src={Jira} alt="jira" className='size-6' />
                                                </div>
                                                <div className="flex flex-col gap-[6px]">
                                                    <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Jira</Link>
                                                    <span className='text-b-11-12-400 text-gray-700'>Project management</span>
                                                </div>
                                            </div>
                                            <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                                        </div>
                                        <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <div className="flex items-center justify-center p-2.5 border rounded-full">
                                                    <img src={Inferno} alt="inferno" className='size-6' />
                                                </div>
                                                <div className="flex flex-col gap-[6px]">
                                                    <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Inferno</Link>
                                                    <span className='text-b-11-12-400 text-gray-700'>Ensures healthcare app</span>
                                                </div>
                                            </div>
                                            <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2.5 py flex flex-col gap-[6px] border-b">
                                    <span className='text-b-12-12-400 text-gray-700'>Users</span>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Tyler} alt="tyler" className='size-9' />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Tyler Hero</Link>
                                                    <span className='text-b-11-12-400 text-gray-700'>tyler.hero@gmail.com</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <div className="px-2.5 py-2 bg-success-light border border-success border-opacity-20 rounded-full flex justify-center items-center w-max">
                                                    <span className="h-3 w-3 rounded-full bg-success mr-2"></span>
                                                    <span className="text-success text-b-11-12-500">In Office</span>
                                                </div>
                                                <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                    <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Esther} alt="Esther" className='size-9' />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Esther Howard</Link>
                                                    <span className='text-b-11-12-400 text-gray-700'>esther.howard@gmail.com</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <div className="px-2.5 py-2 bg-danger-light border border-danger border-opacity-20 rounded-full flex justify-center items-center w-max">
                                                    <span className="h-3 w-3 rounded-full bg-danger mr-2"></span>
                                                    <span className="text-danger text-b-11-12-500">On Leave</span>
                                                </div>
                                                <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                    <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                        {selectedTab === "Settings" && (
                            <div className="flex flex-col gap-2.5">
                                <div className="px-5 pt-5 flex flex-col gap-[6px]">
                                    <span className='text-b-12-12-400 text-gray-700'>Shortcuts</span>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <MdHomeFilled className='dropdown-icon  group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400 '>Go to Dashboard</span>
                                        </div>
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <BsPersonVcard className='dropdown-icon  group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400 '>Public Profile</span>
                                        </div>
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <IoSettingsSharp className='dropdown-icon  group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400 '>My Account</span>
                                        </div>
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md ">
                                            <GoCodeReview className='dropdown-icon group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400'>Devs Forum</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-5 flex flex-col gap-[6px] border-b">
                                    <span className='text-b-12-12-400 text-gray-700'>Actions</span>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <FaCircleUser className='dropdown-icon  group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400 '>Create User</span>
                                        </div>
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <BsPersonVcard className='dropdown-icon  group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400 '>Create Team</span>
                                        </div>
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                            <IoSettingsSharp className='dropdown-icon  group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400 '>Change Plan</span>
                                        </div>
                                        <div className="flex flex-row items-center p-2.5 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md ">
                                            <GoCodeReview className='dropdown-icon group-hover:text-primary' />
                                            <span className='text-gray-800 text-b-13-14-400'>Setup Branding</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )}
                        {selectedTab === "Integrations" && (
                            <div className="px-2.5 pt-2.5 flex flex-col gap-[6px] border-b">
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="flex items-center justify-center p-2.5 border rounded-full">
                                                <img src={Jira} alt="jira" className='size-6' />
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Jira</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>Project management</span>
                                            </div>
                                        </div>
                                        <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="flex items-center justify-center p-2.5 border rounded-full">
                                                <img src={Inferno} alt="inferno" className='size-6' />
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Inferno</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>Ensures healthcare app</span>
                                            </div>
                                        </div>
                                        <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="flex items-center justify-center p-2.5 border rounded-full">
                                                <img src={Evernote} alt="Evernote" className='size-6' />
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Evernote</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>Notes management app</span>
                                            </div>
                                        </div>
                                        <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="flex items-center justify-center p-2.5 border rounded-full">
                                                <img src={Gitlab} alt="Gitlab" className='size-6' />
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Gitlab</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>DevOps platform</span>
                                            </div>
                                        </div>
                                        <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="flex items-center justify-center p-2.5 border rounded-full">
                                                <img src={GoogleWeb} alt="GoogleWeb" className='size-6' />
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <Link to={location.pathname} className='text-gray-900 text-b-13-14-500 hover:text-primary text-animation'>Google webdev</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>Building web expierences</span>
                                            </div>
                                        </div>
                                        <img src={AvatarGroup} alt="avatar-group" className='w-16 h-6' />
                                    </div>
                                </div>
                                <button className='flex py-2.5 my-2 items-center justify-center w-full rounded-md bg-light border border-gray-300'>
                                    <span className='text-b-12-12-500 text-gray-700'>Go to Apps</span>
                                </button>
                            </div>
                        )}
                        {selectedTab === "Users" && (
                            <div className="px-2.5 pt-2.5 flex flex-col border-b">
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Tyler} alt="tyler" className='size-9' />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Tyler Hero</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>tyler.hero@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="px-2.5 py-2 bg-success-light border border-success border-opacity-20 rounded-full flex justify-center items-center w-max">
                                                <span className="h-3 w-3 rounded-full bg-success mr-2"></span>
                                                <span className="text-success text-b-11-12-500">In Office</span>
                                            </div>
                                            <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Esther} alt="Esther" className='size-9' />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Esther Howard</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>esther.howard@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="px-2.5 py-2 bg-danger-light border border-danger border-opacity-20 rounded-full flex justify-center items-center w-max">
                                                <span className="h-3 w-3 rounded-full bg-danger mr-2"></span>
                                                <span className="text-danger text-b-11-12-500">On Leave</span>
                                            </div>
                                            <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Jonathan} alt="Jonathan" className='size-9' />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Jacob Jones</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>jacob.jones@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="px-2.5 py-2 bg-primary-light border border-primary border-opacity-20 rounded-full flex justify-center items-center w-max">
                                                <span className="h-3 w-3 rounded-full bg-primary mr-2"></span>
                                                <span className="text-primary text-b-11-12-500">Remote</span>
                                            </div>
                                            <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Arlene} alt="Arlene" className='size-9' />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Leslie Alexander</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>leslie.alexander@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="px-2.5 py-2 bg-success-light border border-success border-opacity-20 rounded-full flex justify-center items-center w-max">
                                                <span className="h-3 w-3 rounded-full bg-success mr-2"></span>
                                                <span className="text-success text-b-11-12-500">In Office</span>
                                            </div>
                                            <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Cody} alt="Cody" className='size-9' />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Cody Fisher</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>cody.fisher@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="px-2.5 py-2 bg-primary-light border border-primary border-opacity-20 rounded-full flex justify-center items-center w-max">
                                                <span className="h-3 w-3 rounded-full bg-primary mr-2"></span>
                                                <span className="text-primary text-b-11-12-500">Remote</span>
                                            </div>
                                            <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className='flex py-2.5 my-2 items-center justify-center w-full rounded-md bg-light border border-gray-300'>
                                    <span className='text-b-12-12-500 text-gray-700'>Go to Users</span>
                                </button>
                            </div>
                        )}
                        {selectedTab === "Docs" && (
                            <div className="px-2.5 pt-2.5 flex flex-col border-b">
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={PDF} alt="PDF" />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Project-pitch.pdf</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>4.7 MB - 26 Sep 2024 3:20 PM</span>
                                            </div>
                                        </div>
                                        <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                            <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={DOC} alt="DOC" />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Report-v1.docx</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>2.3 MB - 1 Oct 2024 12:00 PM</span>
                                            </div>
                                        </div>
                                        <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                            <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={JS} alt="JS" />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Framework-App.js</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>0.8 MB - 17 Oct 2024 6:46 PM</span>
                                            </div>
                                        </div>
                                        <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                            <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={AI} alt="AI" />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>Mobile-logo.ai</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>0.2 MB - 4 Nov 2024 11:30 AM</span>
                                            </div>
                                        </div>
                                        <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                            <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                        </button>
                                    </div>
                                    <div className="flex flex-row items-center px-2.5 py-3 justify-between cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={PHP} alt="PHP" />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location.pathname} className='text-gray-900 text-b-14-14-500 hover:text-primary text-animation'>appController.js</Link>
                                                <span className='text-b-11-12-400 text-gray-700'>0.1 MB - 21 Nov 2024 3:20 PM</span>
                                            </div>
                                        </div>
                                        <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                            <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                        </button>
                                    </div>
                                </div>
                                <button className='flex py-2.5 my-2 items-center justify-center w-full rounded-md bg-light border border-gray-300'>
                                    <span className='text-b-12-12-500 text-gray-700'>Go to Users</span>
                                </button>
                            </div>
                        )}
                        {selectedTab === "Empty" && (
                            <div className="flex items-center justify-center py-[50px] flex-col gap-5">
                                <img src={SearchImage} alt="search" className='dark:hidden' />
                                <img src={SearchImageDark} alt="search-dark" className='dark:flex hidden' />
                                <div className="flex flex-col gap-2.5 items-center">
                                    <h3 className='text-b-16-16-500 text-gray-900'>Looking for something..</h3>
                                    <span className='text-b-13-20-400 text-gray-700 text-center max-w-[215px]'>Initiate your digital experience with our intuitive dashboard</span>
                                </div>
                                <a className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                    View Profile
                                </a>
                            </div>
                        )}
                        {selectedTab === "No Results" && (
                            <div className="flex items-center justify-center py-[50px] flex-col gap-5">
                                <img src={SearchImage} alt="search" className='dark:hidden' />
                                <img src={SearchImageDark} alt="search-dark" className='dark:flex hidden' />
                                <div className="flex flex-col gap-2.5 items-center">
                                    <h3 className='text-b-16-16-500 text-gray-900'>No Results Found</h3>
                                    <span className='text-b-13-20-400 text-gray-700 text-center max-w-[215px]'>Refine your query to discover relevant items</span>
                                </div>
                                <a className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                    View Profile
                                </a>
                            </div>
                        )}
                    </div>


                </div>
            </ModalContent>
        </div>
    );
};

export default Search;
