import { useEffect, useState } from "react"
import { FaChevronDown, } from "react-icons/fa6"
import { IoIosRainy } from "react-icons/io"
import { IoShareSocial } from "react-icons/io5"
import { SlDislike } from "react-icons/sl"
import { TiMessages } from "react-icons/ti"
import { Link } from "react-router"
import Switch from "@components/switch"

const Menu = () => {
    let location = window.location.pathname
    const [isAccountHomeOpen, setAccountHomeOpen] = useState(false);
    const [isBillingOpen, setBillingOpen] = useState(false);
    const [isSecurityOpen, setSecurityOpen] = useState(false);
    const [isMembersOpen, setMembersOpen] = useState(false);

    const [isMoreOpen, setMoreOpen] = useState(false);
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

    return (
        <div className="flex lg:flex-row flex-col items-center justify-between border-b relative mb-2.5">
            <div className="w-full overflow-x-auto flex xl:justify-between items-center custom-scroll">
                <div className="flex flex-row items-center gap-2.5 min-w-[250px] ">
                    <div
                        className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/myAccount/accountHome") ? "border-b-primary" : "border-none"} cursor-pointer`}
                        onMouseEnter={() => setAccountHomeOpen(true)}
                        onMouseLeave={() => setAccountHomeOpen(false)}
                    >
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/accountHome") ? "text-primary" : "text-gray-700"} `}>Account Home</a>
                        <FaChevronDown className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/accountHome") ? "text-primary" : "text-gray-700"} `} />

                        {/* Account Home menu */}
                        <div
                            className={`absolute top-[50px] left-240 px-1 py-2 bg-white dark:bg-coal-300 shadow-md rounded-lg w-44 mt-1 z-50 transition-all duration-300 ease-in-out ${isAccountHomeOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={() => setAccountHomeOpen(true)}
                            onMouseLeave={() => setAccountHomeOpen(false)}
                        >


                            <Link to={"/user/myAccount/accountHome/get-started"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Get Started
                            </Link>
                            <Link to={"/user/myAccount/accountHome/user-profile"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                User Profile
                            </Link>
                            <Link to={"/user/myAccount/accountHome/company-profile"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Company Profile
                            </Link>
                            <Link to={"/user/myAccount/accountHome/setting-sidebar"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Setting - With Sidebar
                            </Link>
                            <Link to={"/user/myAccount/accountHome/setting-enterprise"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Setting - Enterprise
                            </Link>
                            <Link to={"/user/myAccount/accountHome/setting-plain"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Setting - Plain
                            </Link>
                            <Link to={"/user/myAccount/accountHome/setting-modal"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Setting - Modal
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/myAccount/billing") ? "border-b-primary" : "border-none"} cursor-pointer`}
                        onMouseEnter={() => setBillingOpen(true)}
                        onMouseLeave={() => setBillingOpen(false)}
                    >
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/billing") ? "text-primary" : "text-gray-700"} `}>Billing</a>
                        <FaChevronDown className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/billing") ? "text-primary" : "text-gray-700"} `} />

                        {/* Billing menu */}
                        <div
                            className={`absolute top-[50px] left-240 px-1 py-2 bg-white dark:bg-coal-300 shadow-md rounded-lg w-44 mt-1 z-50 transition-all duration-300 ease-in-out ${isBillingOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={() => setBillingOpen(true)}
                            onMouseLeave={() => setBillingOpen(false)}
                        >
                            <Link to={"/user/myAccount/billing/billing-basic"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Biiling - Basic
                            </Link>
                            <Link to={"/user/myAccount/billing/billing-enterprise"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Billing - Enterprise
                            </Link>
                            <Link to={"/user/myAccount/billing/billing-plans"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Plans
                            </Link>
                            <Link to={"/user/myAccount/billing/billing-history"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Billing History
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/myAccount/security") ? "border-b-primary" : "border-none"} cursor-pointer`}
                        onMouseEnter={() => setSecurityOpen(true)}
                        onMouseLeave={() => setSecurityOpen(false)}
                    >
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/security") ? "text-primary" : "text-gray-700"} `}>Security</a>
                        <FaChevronDown className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/security") ? "text-primary" : "text-gray-700"} `} />

                        {/* security menu */}
                        <div
                            className={`absolute top-[50px] px-1 py-2 bg-white dark:bg-coal-300 shadow-md rounded-lg w-44 mt-1 z-50 transition-all duration-300 ease-in-out ${isSecurityOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={() => setSecurityOpen(true)}
                            onMouseLeave={() => setSecurityOpen(false)}
                        >
                            <Link to={"/user/myAccount/security/get-started"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Get Started
                            </Link>
                            <Link to={"/user/myAccount/security/overview"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Security Overview
                            </Link>
                            <Link to={"/user/myAccount/security/allowed-ip-addresses"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Allowed IP Addresses
                            </Link>
                            <Link to={"/user/myAccount/security/privacy-setting"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Privacy Setting
                            </Link>
                            <Link to={"/user/myAccount/security/device-managament"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Devive Management
                            </Link>
                            <Link to={"/user/myAccount/security/backup-recovery"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Baackup & Recovery
                            </Link>
                            <Link to={"/user/myAccount/security/current-sessions"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Current Sessions
                            </Link>
                            <Link to={"/user/myAccount/security/log"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Security Logs
                            </Link>
                        </div>
                    </div>
                    <div
                        className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/myAccount/members") ? "border-b-primary" : "border-none"} cursor-pointer`}
                        onMouseEnter={() => setMembersOpen(true)}
                        onMouseLeave={() => setMembersOpen(false)}
                    >
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/members") ? "text-primary" : "text-gray-700"} `}>Members & Roles</a>
                        <FaChevronDown className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/members") ? "text-primary" : "text-gray-700"} `} />

                        {/* Account Home menu */}
                        <div
                            className={`absolute top-[50px] left-240 px-1 py-2 bg-white dark:bg-coal-300 shadow-md rounded-lg w-44 mt-1 z-50 transition-all duration-300 ease-in-out ${isMembersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={() => setMembersOpen(true)}
                            onMouseLeave={() => setMembersOpen(false)}
                        >


                            <Link to={"/user/myAccount/members/team-starter"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Team Starter
                            </Link>
                            <Link to={"/user/myAccount/members/teams"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Teams
                            </Link>
                            <Link to={"/user/myAccount/members/team-info"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Team Info
                            </Link>
                            <Link to={"/user/myAccount/members/member-starter"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Members Starter
                            </Link>
                            <Link to={"/user/myAccount/members/team-members"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Team Members
                            </Link>
                            <Link to={"/user/myAccount/members/import-member"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Import Members
                            </Link>
                            <Link to={"/user/myAccount/members/roles"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Roles
                            </Link>
                            <Link to={"/user/myAccount/members/permissions-toggle"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Permissions - Toggler
                            </Link>
                            <Link to={"/user/myAccount/members/permissions-check"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Permissions - Check
                            </Link>
                        </div>
                    </div>
                    <div className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/myAccount/integrations") ? "border-b-primary" : "border-none"} cursor-pointer`}>
                        <Link to={"/user/myAccount/integrations"} className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/integrations") ? "text-primary" : "text-gray-700"} `}>Integrations</Link>
                    </div>
                    <div className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/myAccount/apiKeys") ? "border-b-primary" : "border-none"} cursor-pointer`}>
                        <Link to={"/user/myAccount/api-keys"} className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/apiKeys") ? "text-primary" : "text-gray-700"} `}>API Keys</Link>
                    </div>
                    <div className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/myAccount/notifications") ? "border-b-primary" : "border-none"} cursor-pointer`}>
                        <Link to={"/user/myAccount/notifications"} className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/notifications") ? "text-primary" : "text-gray-700"} `}>Notificaions</Link>
                    </div>

                    <div
                        className={`flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 ${location.startsWith("/user/publicProfiles/campaigns") || location.startsWith("/user/publicProfiles/empty") ? "border-b-primary" : "border-none"} cursor-pointer`}
                        onMouseEnter={() => setMoreOpen(true)}
                        onMouseLeave={() => setMoreOpen(false)}
                    >
                        <a className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/appearance") || location.startsWith("/user/myAccount/inviteFriend") || location.startsWith("/user/myAccount/activity") ? "text-primary" : "text-gray-700"} `}>More</a>
                        <FaChevronDown className={`text-b-14-14-500 ${location.startsWith("/user/myAccount/appearance") || location.startsWith("/user/myAccount/inviteFriend") || location.startsWith("/user/myAccount/activity") ? "text-primary" : "text-gray-700"} `} />

                        {/* More menu */}
                        <div
                            className={`absolute top-[50px] left-240 px-1 py-2 bg-white dark:bg-coal-300 shadow-md rounded-lg w-40 mt-1 z-50 transition-all duration-300 ease-in-out ${isMoreOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            onMouseEnter={() => setMoreOpen(true)}
                            onMouseLeave={() => setMoreOpen(false)}
                        >

                            <Link to={"/user/myAccount/appearance"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Appearance
                            </Link>

                            <Link to={"/user/myAccount/invite-friend"} className="px-5 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Invite a Friend
                            </Link>
                            <Link to={"/user/myAccount/activity"} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md block text-b-13-14-500 text-gray-800">
                                Activity
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-2.5 ml-auto lg:ml-0 relative">
                <div className={`absolute shadow-md top-12 left-0 ${dotMore ? '' : 'hidden'} dropdown-container z-50 bg-white dark:bg-coal-300 rounded-lg w-48 `}>
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