import { useEffect, useRef, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { FaChevronRight } from "react-icons/fa"
import { FaChevronDown, FaUsers } from "react-icons/fa6"
import { IoIosRainy } from "react-icons/io"
import { IoChatbubblesOutline, IoShareSocial } from "react-icons/io5"
import { SlDislike } from "react-icons/sl"
import { TiMessages } from "react-icons/ti"
import { Link } from "react-router"
import Switch from "./switch"
import { HiRectangleGroup } from "react-icons/hi2"

const Menu = () => {
    let location = window.location.pathname
    const [isProfileOpen, setProfileOpen] = useState(false);
    const [isProjectOpen, setProjectOpen] = useState(false);
    const [isMoreOpen, setMoreOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [dotMore, setDotMore] = useState(false)
    const [dotSwitch, setDotSwtitch] = useState(false)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".dropdown-container")) {
                setDotMore(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

    }, [])
    const menuRef = useRef<HTMLDivElement | null>(null);
    const subMenuRef = useRef<HTMLDivElement | null>(null);

    const handleMouseEnter = () => {
        setProfileOpen(true);
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        // Close menu when mouse leaves both the menu and sub-menu
        if (!menuRef.current?.contains(e.relatedTarget as Node) && !subMenuRef.current?.contains(e.relatedTarget as Node)) {
            setProfileOpen(false);
            setSubMenuOpen(false);
        }
    };

    const handleSubMenuMouseEnter = () => {
        setSubMenuOpen(true);
    };

    const handleSubMenuMouseLeave = (e: React.MouseEvent) => {
        if (!subMenuRef.current?.contains(e.relatedTarget as Node)) {
            setSubMenuOpen(false);
        }
    };


    return (
        <div className="flex lg:flex-row flex-col items-center justify-between border-b relative">
            <div className="w-full overflow-x-auto flex xl:justify-between items-center">
                <div className="flex flex-row items-center gap-2.5 min-w-[250px]">
                    <div
                        className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/publicProfiles/profiles") ? "border-b-primary" : "border-none"} cursor-pointer`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        ref={menuRef}
                    >
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/publicProfiles/profiles") ? "text-primary" : "text-gray-700"} `}>Profiles</a>
                        <FaChevronDown className={`text-b-14-14-500 ${location.startsWith("/user/publicProfiles/profiles") ? "text-primary" : "text-gray-700"} `} />

                        {/* Profiles sub-menu */}
                        <div
                            className={`absolute top-[50px] left-0 px-1 py-2 bg-white shadow-md rounded-lg w-40 mt-1 z-50 transition-all duration-300 ease-in-out ${isProfileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link to="/" className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Default
                            </Link>
                            <Link to="/user/publicprofiles/profiles/creator" className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Creator
                            </Link>
                            <Link to="/" className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Company
                            </Link>
                            <Link to="/" className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                NFT
                            </Link>

                            {/* More sub-menu */}
                            <div
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer relative"
                                onMouseEnter={handleSubMenuMouseEnter}
                                onMouseLeave={handleSubMenuMouseLeave}
                                ref={subMenuRef}
                            >
                                <div className="flex flex-row items-center justify-between cursor-pointer rounded-md">
                                    <span className="text-b-13-14-500 text-gray-800">More</span>
                                    <FaChevronRight className="text-gray-500" />
                                </div>

                                <div
                                    className={`absolute left-[144px] top-0 bg-white shadow-md rounded-lg w-40 mt-0 ml-2 z-50 transition-all duration-300 ease-in-out ${isSubMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                >
                                    <Link to="/" className="px-4 py-2 hover:bg-gray-100 cursor-pointer block text-b-13-14-500 text-gray-800">
                                        Gamer
                                    </Link>
                                    <Link to="/" className="px-4 py-2 hover:bg-gray-100 cursor-pointer block text-b-13-14-500 text-gray-800">
                                        Feeds
                                    </Link>
                                    <Link to="/" className="px-4 py-2 hover:bg-gray-100 cursor-pointer block text-b-13-14-500 text-gray-800">
                                        Plain
                                    </Link>
                                    <Link to="/" className="px-4 py-2 hover:bg-gray-100 cursor-pointer block text-b-13-14-500 text-gray-800">
                                        Modal
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div
                        className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/publicProfiles/projects") ? "border-b-primary" : "border-none"} cursor-pointer`}
                        onMouseEnter={() => setProjectOpen(true)}
                        onMouseLeave={() => setProjectOpen(false)}
                    >
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/publicProfiles/projects") ? "text-primary" : "text-gray-700"} `}>Project</a>
                        <FaChevronDown className={`text-b-14-14-500 ${location.startsWith("/user/publicProfiles/projects") ? "text-primary" : "text-gray-700"} `} />

                        {/* Project menu */}
                        <div
                            className={`absolute top-[50px] left-240 px-1 py-2 bg-white shadow-md rounded-lg w-40 mt-1 z-50 transition-all duration-300 ease-in-out ${isProjectOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={() => setProjectOpen(true)}
                            onMouseLeave={() => setProjectOpen(false)}
                        >

                            <Link to={location} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                3 Columns
                            </Link>
                            <Link to={location} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                2 Columns
                            </Link>
                        </div>
                    </div>
                    <div className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/publicProfiles/works") ? "border-b-primary" : "border-none"} cursor-pointer`}>
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/publicProfiles/works") ? "text-primary" : "text-gray-700"} `}>Works</a>
                    </div>
                    <div className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/publicProfiles/teams") ? "border-b-primary" : "border-none"} cursor-pointer`}>
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/publicProfiles/teams") ? "text-primary" : "text-gray-700"} `}>Teams</a>
                    </div>
                    <div className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/publicProfiles/network") ? "border-b-primary" : "border-none"} cursor-pointer`}>
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/publicProfiles/network") ? "text-primary" : "text-gray-700"} `}>Network</a>
                    </div>
                    <div className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/publicProfiles/activity") ? "border-b-primary" : "border-none"} cursor-pointer`}>
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/publicProfiles/activity") ? "text-primary" : "text-gray-700"} `}>Activity</a>
                    </div>
                    <div
                        className=" flex flex-row items-center gap-1 py-5 px-2.5  cursor-pointer"
                        onMouseEnter={() => setMoreOpen(true)}
                        onMouseLeave={() => setMoreOpen(false)}
                    >
                        <a className="text-b-14-14-500 text-gray-700">More</a>
                        <FaChevronDown className="text-b-14-14-500 text-gray-700" />

                        {/* More menu */}
                        <div
                            className={`absolute top-[50px] left-240 px-1 py-2 bg-white shadow-md rounded-lg w-40 mt-1 z-50 transition-all duration-300 ease-in-out ${isMoreOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={() => setMoreOpen(true)}
                            onMouseLeave={() => setMoreOpen(false)}
                        >

                            <Link to={location} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Champaigns - Card
                            </Link>
                            <Link to={location} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Champaigns - List
                            </Link>
                            <Link to={location} className="px-5 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Empty
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-2.5 ml-auto lg:ml-0 relative">
                {
                    location === "/user/publicProfiles/profiles/creator" ?
                        <>
                            <Link to={location} className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                                <HiRectangleGroup />
                                Hire US
                            </Link>
                            <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                <FaUsers />
                                Connect
                            </a>
                        </> :
                        <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white gap-1 cursor-pointer">
                            <FaUsers />
                            Connect
                        </a>

                }

                <div className="p-2 rounded-md border flex items-center justify-center cursor-pointer">
                    <IoChatbubblesOutline className="text-gray-500" />
                </div>
                <div onClick={() => setDotMore(!dotMore)} className="p-2 rounded-md border flex items-center justify-center cursor-pointer">
                    <BsThreeDotsVertical className="text-gray-500" />
                </div>
                <div className={`absolute shadow-md top-12 left-0 ${dotMore ? '' : 'hidden'} dropdown-container z-50 bg-white rounded-lg w-48 `}>
                    <div className="border-b-2 py-2.5 z-50">
                        <Link onClick={() => setDotMore(false)} to={location} className="px-2 block">
                            <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                                <IoShareSocial className='dropdown-icon  group-hover:text-primary' />
                                <span className='text-gray-800 text-b-13-14-400 '>Share</span>
                            </div>
                        </Link>
                        <Link onClick={() => setDotMore(false)} to={location} className="relative px-2 block">
                            <div className="flex flex-row items-center px-3 py-3 cursor-pointer hover:bg-gray-100 rounded-md justify-between hover: group">
                                <div className="flex flex-row items-center gap-2.5 ">
                                    <IoIosRainy className="dropdown-icon group-hover:text-primary" />
                                    <span className="text-gray-800 text-b-13-14-400">Give Award</span>
                                </div>
                            </div>
                        </Link>


                        <Link to={location} className="px-2 block">
                            <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md justify-between">
                                <div className="flex flex-row *:items-center gap-2.5">
                                    <TiMessages className='dropdown-icon group-hover:text-primary' />
                                    <span className='text-gray-800 text-b-13-14-400'>Stay Updated</span>
                                </div>
                                <Switch setSwitch={() => setDotSwtitch(!dotSwitch)} size="medium" status={dotSwitch} />
                            </div>
                        </Link>

                        <Link onClick={() => setDotMore(false)} to={location} className="relative px-2 block">
                            <div className="flex flex-row items-center px-3 py-3 cursor-pointer hover:bg-gray-100 rounded-md justify-between hover: group">
                                <div className="flex flex-row items-center gap-2.5">
                                    <SlDislike className="dropdown-icon group-hover:text-primary" />
                                    <span className="text-gray-800 text-b-13-14-400">Report User</span>
                                </div>
                            </div>

                        </Link>

                    </div>
                </div>
            </div>
        </div>

    )

}
export default Menu