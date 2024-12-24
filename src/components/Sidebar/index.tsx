import MetronicLogo from '@assets/icon/metronic-logo.svg'
import Rocket from '@assets/icon/rocket.svg'
import Plus from '@assets/icon/plus.svg'
import Minus from '@assets/icon/minus.svg'
import Profile_Circle from '@assets/icon/profile-circle.svg'
import Setting from '@assets/icon/setting.svg'
import Edit_User from '@assets/icon/user-edit.svg'
import Community from '@assets/icon/users.svg'
import Security_User from '@assets/icon/security-user.svg'
import Dashboard_Icon from '@assets/icon/dashboard.svg'
import Like_Tag from '@assets/icon/like-tag.svg'
import Social from '@assets/icon/social-media.svg'
import Company from '@assets/icon/company.svg'
import Search from '@assets/icon/magnifier.svg'
import Files from '@assets/icon/some-files.svg'
import Note from '@assets/icon/note-2.svg'
import Tablet from '@assets/icon/questionnaire-tablet.svg'
import Handcart from '@assets/icon/handcart.svg'
import { useState } from 'react'


interface MenuItem {
    key: string;
    label: string;
    subItems?: MenuItem[];
}
const menuData: MenuItem[] = [
    {
        key: "dashboards",
        label: "Dashboards",
        subItems: [
            {
                key: "light", label: "Light Sidebar"
            },
            {
                key: "dark", label: "Dark Sidebar"
            }
        ]
    },
    {
        key: "public",
        label: "Public Profile",
        subItems: [
            {
                key: "profiles",
                label: "Profiles",
                subItems: [
                    {
                        key: "default", label: "Default"
                    },
                    {
                        key: "creator", label: "Creator"
                    },
                    {
                        key: "company", label: "Company"
                    },
                    {
                        key: "nft", label: "NFT"
                    },
                    {
                        key: "blogger", label: "Blogger"
                    },
                    {
                        key: "crm", label: "CRM"
                    },
                    {
                        key: "gamer", label: "Gamer"
                    },
                    {
                        key: "feeds", label: "Feeds"
                    },
                    {
                        key: "plain", label: "PLain"
                    },
                    {
                        key: "modal", label: "Modal"
                    }
                ]

            },
            {
                key: "projects",
                label: "Projects",
                subItems: [
                    {
                        key: "column-3", label: "3 Columns"
                    },
                    {
                        key: "column-2", label: "2 Columns"
                    }
                ]
            },
            {
                key: "works",
                label: "Works"
            },
            {
                key: "teams",
                label: "Teams"
            },
            {
                key: "network",
                label: "Network"
            },
            {
                key: "activity",
                label: "Activity"
            },
            {
                key: "chanpaigns-card",
                label: "Champaigns - Card"
            },
            {
                key: "chanpaigns-list",
                label: "Champaigns - List"
            },
            {
                key: "empty",
                label: "Empty"
            }
        ]
    },
    {
        key:"my-account",
        label:"My Account",
        subItems:[
            {
                key:"account-home", 
                label:"Account Home",
                subItems:[
                    {
                        key:"get-started",label:"Get Started"
                    },
                    {
                        key:"user-profile", label:"User Profile"
                    },
                    {
                        key:"company-profile", label:"Company Profile"
                    },
                    {
                        key:"setting-with-sidebar", label:"Setting - With Sidebar"
                    },
                    {
                        key:"setting-enterprise", label:"Setting - Enterprise"
                    },
                    {
                        key:"setting-plain", label:"Setting - Plain"
                    },
                    {
                        key:"setting-with-modal", label:"Setting - Modal"
                    }
                ]
            },
            {
                key:"billing",
                label:"Billing",
                subItems:[
                    {
                        key:"billing-basic", label:"Billing - Basic"
                    },
                    {
                        key:"billing-enterprise", label:"billing - Enterprise"
                    },
                    {
                        key:"plans", label:"Plans"
                    },
                    {
                        key:"billing-history", label:"Billing History"
                    }
                ]
            },
            {
                key:"security",
                label:"Security",
                subItems:[
                    {
                        key:"get-started", label:"Get Started"
                    },
                    {
                        key:"security-overview", label:"Security Overview"
                    },
                    {
                        key:"allowed-ip-addresses", label:"Allowed IP Addresses"
                    },
                    {
                        key:"privacy-setting", label:"Privacy Setting"
                    },
                    {
                        key:"device-management", label:"Device Management"
                    },
                    {
                        key:"backup-recovery", label:"Backup & Recovery"
                    },
                    {
                        key:"current-sessions", label:"Current Sessions"
                    },
                    {
                        key:"security-log", label:"Security Log"
                    }
                ]
            },
            {
                key:"members-roles",
                label:"Members & Roles"
            }
        ]
    }


]


const Sidebar = () => {
    const [menuItem, setMenuItem] = useState(true);
    const [itemActive, setItemActive] = useState({
        subItemKey: "light"
    })
    const selectedItemFunction = (subItemKey: string) => {
        setItemActive({ subItemKey: subItemKey })
    }



    return (

        <div className="flex flex-col w-70 max-h-screen bg-white fixed">
            <div className="px-6.5 py-[30px]">
                <img src={MetronicLogo} alt="Metronic-Logo" />
            </div>
            <div className="flex flex-col scrollbar-hidden ">
                <div className="flex flex-col pb-2.5">
                    <div className="flex flex-col gap-0 px-6.5">
                        {/* Başlık */}
                        <div
                            onClick={() => setMenuItem(!menuItem)}
                            className="flex flex-row justify-between items-center py-3 pb-2 hover: group cursor-pointer"
                        >
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Dashboard_Icon} alt="dashboard-icon" />
                                <span className="text-gray-800 text-b-14-22-500 group-hover:text-primary transition-colors">
                                    Dashboards
                                </span>
                            </div>

                            {menuItem ? (
                                <>
                                    <img src={Minus} alt="minus-icon" />
                                </>
                            ) : (
                                <>
                                    <img src={Plus} alt="Plus-icon" />
                                </>
                            )}
                        </div>


                        {/* Submenu items */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${menuItem ? 'max-h-[150px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="flex flex-col gap-0">
                                <div onClick={() => selectedItemFunction("light")} className={`subItem ${itemActive.subItemKey === "light" ? 'selectedItem' : 'unSelectedItem'}`}>
                                    <span className={`${itemActive.subItemKey === "light" ? 'dotActive' : 'dotInActive'}`}></span>
                                    <span className="itemDotLine"></span>
                                    <span className={`${itemActive.subItemKey === "light" ? 'selectedItem' : 'unSelectedItem'} `}>Light Sidebar</span>
                                </div>

                                <div onClick={() => selectedItemFunction("dark")} className={`subItem ${itemActive.subItemKey === "dark" ? 'selectedItem' : 'unSelectedItem'}`}>
                                    <span className={`${itemActive.subItemKey === "dark" ? 'dotActive' : 'dotInActive'}`}></span>
                                    <span className="itemDotLine"></span>
                                    <span className={`${itemActive.subItemKey === "dark" ? 'selectedItem' : 'unSelectedItem'}`}>Dark Sidebar</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <>{/* User */}
                    <div className="flex flex-row justify-between items-center pb-2 px-6.5">
                        <span className='text-b-13-20-500 text-gray-500'>USER</span>
                        <img src={Minus} alt="minus-icon" />
                    </div>
                    <div className="flex flex-col px-6.5">
                        <div className="flex flex-row justify-between items-center py-3">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Rocket} alt="rocket-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Onboarding</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Profile_Circle} alt="profile-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Public Profile</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Setting} alt="setting-icon" />
                                <span className="text-gray-800 text-b-14-22-500">My Account</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Community} alt="community-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Community</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Edit_User} alt="edit-user-icon" />
                                <span className="text-gray-800 text-b-14-22-500">User Management</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Security_User} alt="security-user-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Authentication</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                    </div>
                </>
                <>{/* Pages */}
                    <div className="flex flex-row justify-between items-center pb-2 px-6.5 pt-2.5">
                        <span className='text-b-13-20-500 text-gray-500'>PAGES</span>
                        <img src={Minus} alt="minus-icon" />
                    </div>
                    <div className="flex flex-col px-6.5">
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Like_Tag} alt="like-tag-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Marketplace</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Social} alt="social-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Social</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Company} alt="company-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Company</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Search} alt="search-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Blog</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                    </div>
                </>
                <>{/* Miscellenaus */}
                    <div className="flex flex-row justify-between items-center pb-2 px-6.5 pt-2.5">
                        <span className='text-b-13-20-500 text-gray-500'>MISCELLANEOUS</span>
                        <img src={Minus} alt="minus-icon" />
                    </div>
                    <div className="flex flex-col px-6.5">
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Files} alt="files-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Modals</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Note} alt="note-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Wizards</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Search} alt="search-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Search</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                    </div>
                </>
                <>{/* Apps */}
                    <div className="flex flex-row justify-between items-center pb-2 px-6.5 pt-2.5">
                        <span className='text-b-13-20-500 text-gray-500'>APPS</span>
                        <img src={Minus} alt="minus-icon" />
                    </div>
                    <div className="flex flex-col px-6.5">
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Tablet} alt="tablet-icon" />
                                <span className="text-gray-800 text-b-14-22-500">Projects</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                        <div className="flex flex-row justify-between items-center py-3 ">
                            <div className="flex flex-row gap-2.5 items-center">
                                <img src={Handcart} alt="handcart-icon" />
                                <span className="text-gray-800 text-b-14-22-500">eCommerce</span>
                            </div>
                            <img src={Plus} alt="plus-icon" />
                        </div>
                    </div>
                </>
            </div>


        </div>
    );
}

export default Sidebar;