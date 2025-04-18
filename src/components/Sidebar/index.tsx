import MetronicLogo from '@assets/icon/metronic-logo.svg'
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
import Files from '@assets/icon/some-files.svg'
import Handcart from '@assets/icon/handcart.svg'
import SidebarLeft from '@assets/icon/black-left-line.svg'
import MLogo from '@assets/icon/M-logo.svg'
import { useState } from 'react'
import { metronicContext } from '../../context/layoutContet'
import { Link } from 'react-router'


interface MenuItem {
    category: string
    key: string;
    label: string;
    subItems?: MenuItem[];
    icon?: string;
    path?: string;
}
const menuData: MenuItem[] = [
    {
        category: "dashboards",
        key: "dashboards",
        label: "Dashboards",
        subItems: [
            {

                category: "dashboards", key: "light", label: "Light Sidebar", path: "/"
            },
            {
                category: "dashboards", key: "dark", label: "Dark Sidebar", path: "/"
            }
        ],
        icon: Dashboard_Icon,
    },
    {
        category: "user",
        key: "public",
        label: "Public Profile",
        subItems: [
            {
                category: "user",
                key: "profiles",
                label: "Profiles",
                subItems: [
                    {
                        category: "user", key: "default", label: "Default", path: "/user/publicProfiles/profiles/default"
                    },
                    {
                        category: "user", key: "creator", label: "Creator", path: "/user/publicProfiles/profiles/creator"
                    },
                    {
                        category: "user", key: "company", label: "Company", path: "/user/publicProfiles/profiles/company"
                    },
                    {
                        category: "user", key: "nft", label: "NFT", path: "/user/publicProfiles/profiles/nft"
                    },
                    {
                        category: "user", key: "blogger", label: "Blogger", path: "/user/publicProfiles/profiles/blogger"
                    },
                    {
                        category: "user", key: "crm", label: "CRM", path: "/user/publicProfiles/profiles/crm"
                    },
                    {
                        category: "user", key: "gamer", label: "Gamer", path: "/user/publicProfiles/profiles/gamer"
                    },
                    {
                        category: "user", key: "feeds", label: "Feeds", path: "/user/publicProfiles/profiles/feeds"
                    },
                    {
                        category: "user", key: "plain", label: "Plain", path: "/user/publicProfiles/profiles/plain"
                    },
                    {
                        category: "user", key: "modal", label: "Modal", path: "/user/publicProfiles/profiles/modal"
                    }
                ]

            },
            {
                category: "user",
                key: "projects",
                label: "Projects",
                subItems: [
                    {
                        category: "user", key: "column-3", label: "3 Columns", path: "/user/publicProfiles/projects/threeColumns"
                    },
                    {
                        category: "user", key: "column-2", label: "2 Columns", path: "/user/publicProfiles/projects/twoColumns"
                    }
                ]
            },
            {
                category: "user",
                key: "works",
                label: "Works",
                path: "/user/publicProfiles/works"
            },
            {
                category: "user",
                key: "teams",
                label: "Teams",
                path: "/user/publicProfiles/teams"
            },
            {
                category: "user",
                key: "network",
                label: "Network",
                path: "/user/publicProfiles/network"
            },
            {
                category: "user",
                key: "activity",
                label: "Activity",
                path: "/user/publicProfiles/activity"
            },
            {
                category: "user",
                key: "campaigns-card",
                label: "Campaigns",
                path: "/user/publicProfiles/campaigns"
            },
            {
                category: "user",
                key: "empty",
                label: "Empty",
                path: "/user/publicProfiles/empty"
            }
        ],
        icon: Profile_Circle
    },
    {
        category: "user",
        key: "my-account",
        label: "My Account",
        subItems: [
            {
                category: "user",
                key: "account-home",
                label: "Account Home",
                subItems: [
                    {
                        category: "user", key: "get-started", label: "Get Started", path: "/user/myAccount/accountHome/getStarted"
                    },
                    {
                        category: "user", key: "user-profile", label: "User Profile", path: "/user/myAccount/accountHome/userProfile"
                    },
                    {
                        category: "user", key: "company-profile", label: "Company Profile", path: "/user/myAccount/accountHome/companyProfile"
                    },
                    {
                        category: "user", key: "setting-with-sidebar", label: "Setting - With Sidebar", path: "/user/myAccount/accountHome/settingSidebar"
                    },
                    {
                        category: "user", key: "setting-enterprise", label: "Setting - Enterprise", path: "/user/myAccount/accountHome/settingEnterprise"
                    },
                    {
                        category: "user", key: "setting-plain", label: "Setting - Plain", path: "/user/myAccount/accountHome/settingPlain"
                    },
                    {
                        category: "user", key: "setting-with-modal", label: "Setting - Modal", path: "/user/myAccount/accountHome/settingModal"
                    }
                ]
            },
            {
                category: "user",
                key: "billing",
                label: "Billing",
                subItems: [
                    {
                        category: "user", key: "billing-basic", label: "Billing - Basic", path: "/user/myAccount/billing/billingBasic"
                    },
                    {
                        category: "user", key: "billing-enterprise", label: "billing - Enterprise", path: "/user/myAccount/billing/billingEnterprise"
                    },
                    {
                        category: "user", key: "plans", label: "Plans", path: "/user/myAccount/billing/billingPlans"
                    },
                    {
                        category: "user", key: "billing-history", label: "Billing History", path: "/user/myAccount/billing/billingHistory"
                    }
                ]
            },
            {
                category: "user",
                key: "security",
                label: "Security",
                subItems: [
                    {
                        category: "user", key: "get-started", label: "Get Started", path: "/user/myAccount/security/getStarted"
                    },
                    {
                        category: "user", key: "security-overview", label: "Security Overview", path: "/user/myAccount/security/overview"
                    },
                    {
                        category: "user", key: "allowed-ip-addresses", label: "Allowed IP Addresses", path: "/user/myAccount/security/allowedIpAddresses"
                    },
                    {
                        category: "user", key: "privacy-setting", label: "Privacy Setting", path: "/user/myAccount/security/privacySetting"
                    },
                    {
                        category: "user", key: "device-management", label: "Device Management", path: "/user/myAccount/security/deviceManagament"
                    },
                    {
                        category: "user", key: "backup-recovery", label: "Backup & Recovery", path: "/user/myAccount/security/backupRecovery"
                    },
                    {
                        category: "user", key: "current-sessions", label: "Current Sessions", path: "/user/myAccount/security/currentSessions"
                    },
                    {
                        category: "user", key: "security-log", label: "Security Log", path: "/user/myAccount/security/log"
                    }
                ]
            },
            {
                category: "user",
                key: "members-roles",
                label: "Members & Roles",
                subItems: [
                    {
                        category: "user", key: "teams-starter", label: "Teams Starter", path: "/user/myAccount/members/teamStarter"
                    },
                    {
                        category: "user", key: "teams", label: "Teams", path: "/user/myAccount/members/teams"
                    },
                    {
                        category: "user", key: "team-info", label: "Team Info", path: "/user/myAccount/members/teamInfo"
                    },
                    {
                        category: "user", key: "members-starter", label: "Members Starter"
                    },
                    {
                        category: "user", key: "team-members", label: "Team Members"
                    },
                    {
                        category: "user", key: "import-members", label: "Import Members"
                    },
                    {
                        category: "user", key: "roles", label: "Roles"
                    },
                    {
                        category: "user", key: "permissions-toggler", label: "Permissions - Toggler"
                    },
                    {
                        category: "user", key: "permissions-check", label: "Permissions - Check"
                    },
                ]
            },
            {
                category: "user",
                key: "integrations",
                label: "Integrations"
            },
            {
                category: "user",
                key: "notifications",
                label: "Notifications"
            },
            {
                category: "user",
                key: "api-keys",
                label: "API Keys"
            },
            {
                category: "user",
                key: "appearance",
                label: "Appearance"
            },
            {
                category: "user",
                key: "invite-a-friend",
                label: "Invite a Friend"
            },
            {
                category: "user",
                key: "activity",
                label: "Activity"
            },

        ],
        icon: Setting
    },
    {
        category: "user",
        key: "network",
        label: "Network",
        subItems: [
            {
                category: "user", key: "get-started", label: "Get Started"
            },
            {
                category: "user",
                key: "user-card",
                label: "User Card",
                subItems: [
                    {
                        category: "user", key: "mini-cards", label: "Mini Cards"
                    },
                    {
                        category: "user", key: "team-crew", label: "Team Crew"
                    },
                    {
                        category: "user", key: "author", label: "Author"
                    },
                    {
                        category: "user", key: "nft", label: "NFT"
                    },
                    {
                        category: "user", key: "social", label: "Social"
                    }
                ]

            },
            {
                category: "user",
                key: "user-table",
                label: "User Table",
                subItems: [
                    {
                        category: "user", key: "team-crew", label: "Team Crew"
                    },
                    {
                        category: "user", key: "app-roster", label: "App Roster"
                    },
                    {
                        category: "user", key: "market-authors", label: "Market Authors"
                    },
                    {
                        category: "user", key: "saas-user", label: "Saas Users"
                    },
                    {
                        category: "user", key: "store-clients", label: "Store Clients"
                    },
                    {
                        category: "user", key: "visitors", label: "Visitors"
                    }
                ]
            }
        ],
        icon: Community
    },
    {
        category: "user",
        key: "authentication",
        label: "Authentication",
        subItems: [
            {
                category: "user",
                key: "classic",
                label: "Classic",
                subItems: [
                    {
                        category: "user", key: "sign-in", label: "Sign In"
                    },
                    {
                        category: "user", key: "sign-up", label: "Sign Up"
                    },
                    {
                        category: "user", key: "2fa", label: "2FA"
                    },
                    {
                        category: "user", key: "check-email", label: "Check Email"
                    },
                    {
                        category: "user",
                        key: "reset-password",
                        label: "Reset Password",
                        subItems: [
                            {
                                category: "user", key: "enter-email", label: "Enter Email"
                            },
                            {
                                category: "user", key: "check-email", label: "Check Email"
                            },
                            {
                                category: "user", key: "change-password", label: "Change Password"
                            },
                            {
                                category: "user", key: "password-changed", label: "Password Changed"
                            }
                        ]
                    },
                ]
            },
            {
                category: "user",
                key: "branded",
                label: "Branded",
                subItems: [
                    {
                        category: "user", key: "sign-in", label: "Sign In"
                    },
                    {
                        category: "user", key: "sign-up", label: "Sign Up"
                    },
                    {
                        category: "user", key: "2fa", label: "2FA"
                    },
                    {
                        category: "user", key: "check-email", label: "Check Email"
                    },
                    {
                        category: "user",
                        key: "reset-password",
                        label: "Reset Password",
                        subItems: [
                            {
                                category: "user", key: "enter-email", label: "Enter Email"
                            },
                            {
                                category: "user", key: "check-email", label: "Check Email"
                            },
                            {
                                category: "user", key: "change-password", label: "Change Password"
                            },
                            {
                                category: "user", key: "password-changed", label: "Password Changed"
                            }
                        ]
                    },
                ]
            },
            {
                category: "user", key: "welcome-message", label: "Welcome Message"
            },
            {
                category: "user", key: "account-deactivated", label: "Account"
            },
            {
                category: "user", key: "error-404", label: "Error 404"
            },
            {
                category: "user", key: "error-500", label: "Error 500"
            }

        ],
        icon: Security_User
    },
    {
        category: "pages",
        key: "marketplace",
        label: "Marketplace",
        icon: Like_Tag
    },
    {
        category: "",
        key: "social",
        label: "Social",
        icon: Social,
    },
    {
        category: "pages",
        key: "company",
        label: "Company",
        icon: Company
    },
    {
        category: "pages",
        key: "blog",
        label: "Blog",
        icon: Files
    },
    {
        category: "apps",
        key: "projects",
        label: "Projects",
        icon: Edit_User

    },
    {
        category: "apps",
        key: "ecommerce",
        label: "eCommerce",
        icon: Handcart
    },



]


const Sidebar = () => {
    const [openMenuItems, setOpenMenuItems] = useState<string[]>(['dashboards']);
    const [activeSubItems, setActiveSubItems] = useState<string[]>(["light"]);
    const [childSub, setChildSub] = useState<string>("");
    const { sidebarIsOpen, setSidebarIsOpen, setSidebarWidth, sidebarWidth } = metronicContext();

    const toggleMenuItem = (key: string) => {
        setOpenMenuItems((prevState) =>
            prevState.includes(key)
                ? prevState.filter((item) => item !== key)
                : [...prevState, key]
        );
    };

    const toggleSubItems = (key: string) => {
        setActiveSubItems([]);
        setActiveSubItems((prevState) =>
            prevState.includes(key)
                ? prevState.filter((item) => item !== key)
                : [...prevState, key]
        );
        if (key === activeSubItems[0]) {
            setActiveSubItems([]);
        }
    };

    const childSubItemTrigger = (item: string) => {
        setChildSub(item)
    }

    const handleSideBar = () => {
        if (sidebarWidth === 280) {
            setSidebarWidth(70)
        }
        else if (sidebarWidth === 280) {
            setSidebarWidth(280)
        }

        console.log(sidebarWidth)
    }
    const hoverSidebar = () => {
        if (sidebarIsOpen === true) {
            if (sidebarWidth === 70) {
                setSidebarWidth(280)
                setSidebarIsOpen(!sidebarIsOpen)

            }
            else {
                setSidebarWidth(70)
            }
        }


    }
    const hoverDownSidebar = () => {
        if (sidebarIsOpen === false) {
            setSidebarWidth(280)

        } else {
            setSidebarWidth(70)

        }
    }
    const { modalOpen, settingModalOpen } = metronicContext();
    const location = window.location.pathname
    return (
        <div onMouseEnter={hoverSidebar} onMouseLeave={hoverDownSidebar} style={{ width: `${sidebarWidth}px` }} className={` flex-col transition-all w-full duration-500 ease-in-out max-h-screen fixed  border-r-grey-500 border-r-2 hidden h-screen lg:flex ${(modalOpen === true && location === "/user/publicProfiles/profiles/modal") || (settingModalOpen === true && location === "/user/myAccount/accountHome/settingModal") ? "-z-10" : "z-50"}

 `}>
            <div className="px-5 py-[30px] flex relative ">
                <div onClick={() => {
                    handleSideBar()
                    setSidebarIsOpen(!sidebarIsOpen)
                }} className="flex items-center justify-center  size-[30px] rounded-lg border border-gray-200 dark:border-gray-300 bg-light text-gray-500 hover:text-gray-700 toggle absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4 z-50 bg-white"
                    style={{ zIndex: 100000 }} >
                    <img src={SidebarLeft} className='size-5' alt="sidebaf-left-icon" />

                </div>
                {
                    sidebarWidth == 280 ?
                        <>
                            <img src={MetronicLogo} alt="Metronic-Logo" className='' />
                        </> :
                        <><img src={MLogo} alt="logo" /></>
                }
            </div>
            <div className="flex flex-col scrollbar-hidden ">
                <div className="flex flex-col pb-2.5">
                    <div className="flex flex-col gap-0 px-6.5 ">
                        {menuData.map((menuItem, index) => (
                            <div key={index} className="flex flex-col">
                                {/* Ana Menü Öğesi */}
                                <div
                                    onClick={() => toggleMenuItem(menuItem.key)}
                                    className="flex flex-row justify-between items-center py-3 pb-2 hover: group cursor-pointer"
                                >
                                    <div className="flex flex-row gap-2.5 items-center">
                                        <img src={menuItem.icon} alt="dashboard-icon" />
                                        {
                                            sidebarWidth == 280 ?
                                                <>
                                                    <span className="text-gray-800 text-b-14-22-500 group-hover:text-primary transition-colors">
                                                        {menuItem.label}
                                                    </span>
                                                </> : null
                                        }

                                    </div>

                                    {menuItem.subItems && sidebarWidth == 280 ? (
                                        <>
                                            {openMenuItems.includes(menuItem.key) ? (
                                                <img src={Minus} alt="minus-icon" />
                                            ) : (
                                                <img src={Plus} alt="plus-icon" />
                                            )}
                                        </>
                                    ) : null}
                                </div>


                                {/* SubItems */}
                                {menuItem.subItems && (
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openMenuItems.includes(menuItem.key) ? "max-h-[500px]" : "max-h-0"
                                        }`}>
                                        {menuItem.subItems.map((subMenuItem, key) => (
                                            <div key={key} className="flex flex-col">
                                                {
                                                    subMenuItem.path ?
                                                        <Link to={subMenuItem.path} onClick={() => toggleSubItems(subMenuItem.key)} className="flex flex-row justify-between items-center hover: group cursor-pointer">
                                                            <div

                                                                className={`subItem w-full ${activeSubItems.includes(subMenuItem.key) && !subMenuItem.subItems
                                                                    ? 'selectedItem'
                                                                    : 'unSelectedItem'
                                                                    }`}
                                                            >

                                                                <span
                                                                    className={`dot ${activeSubItems.includes(subMenuItem.key) && !subMenuItem.subItems
                                                                        ? 'dotActive'
                                                                        : 'dotInActive'
                                                                        }`}
                                                                ></span>

                                                                <span className="itemDotLine"></span>


                                                                <span className='group-hover:text-primary transition-colors'>{subMenuItem.label}</span>
                                                            </div>
                                                            {subMenuItem.subItems ? (
                                                                <>
                                                                    {activeSubItems.includes(subMenuItem.key) ? (
                                                                        <img src={Minus} alt="minus-icon" />
                                                                    ) : (
                                                                        <img src={Plus} alt="plus-icon" />
                                                                    )}
                                                                </>
                                                            ) : null}
                                                        </Link> :
                                                        <div onClick={() => toggleSubItems(subMenuItem.key)} className="flex flex-row justify-between items-center hover: group cursor-pointer">
                                                            <div

                                                                className={`subItem w-full ${activeSubItems.includes(subMenuItem.key) && !subMenuItem.subItems
                                                                    ? 'selectedItem'
                                                                    : 'unSelectedItem'
                                                                    }`}
                                                            >

                                                                <span
                                                                    className={`dot ${activeSubItems.includes(subMenuItem.key) && !subMenuItem.subItems
                                                                        ? 'dotActive'
                                                                        : 'dotInActive'
                                                                        }`}
                                                                ></span>

                                                                <span className="itemDotLine"></span>


                                                                <span className='group-hover:text-primary transition-colors'>{subMenuItem.label}</span>
                                                            </div>
                                                            {subMenuItem.subItems ? (
                                                                <>
                                                                    {activeSubItems.includes(subMenuItem.key) ? (
                                                                        <img src={Minus} alt="minus-icon" />
                                                                    ) : (
                                                                        <img src={Plus} alt="plus-icon" />
                                                                    )}
                                                                </>
                                                            ) : null}
                                                        </div>
                                                }


                                                {/* Small SubItem */}
                                                {subMenuItem.subItems &&
                                                    (
                                                        <div className={`overflow-hidden ml-[10.5px] relative transition-all duration-500 ease-in-out ${activeSubItems.includes(subMenuItem.key) ? "max-h-[500px]" : "max-h-0"
                                                            }`}>
                                                            {subMenuItem.subItems.map((childItem, index) => (

                                                                <div key={index}>
                                                                    {
                                                                        childItem.path ?
                                                                            <Link to={childItem.path} onClick={() => childSubItemTrigger(childItem.key)}
                                                                                className={`subItem gap-2 hover: group cursor-pointer ${activeSubItems.includes(subMenuItem.key) && childSub === childItem.key
                                                                                    ? 'selectedItem'
                                                                                    : 'unSelectedItem'
                                                                                    }`}>
                                                                                <span
                                                                                    className={`dot ${activeSubItems.includes(subMenuItem.key) && childSub === childItem.key
                                                                                        ? 'dotActive ml-[7px]'
                                                                                        : 'dotInActive ml-[7px]'
                                                                                        }`}
                                                                                ></span>
                                                                                <span className="itemDotLine left-[21.25px]"></span>
                                                                                <span className='group-hover:text-primary transition-colors'>{childItem.label}</span>
                                                                            </Link>
                                                                            :
                                                                            <>
                                                                                <div onClick={() => childSubItemTrigger(childItem.key)}
                                                                                    key={childItem.key} className={`subItem gap-2 hover: group cursor-pointer ${activeSubItems.includes(subMenuItem.key) && childSub === childItem.key
                                                                                        ? 'selectedItem'
                                                                                        : 'unSelectedItem'
                                                                                        }`}>
                                                                                    <span
                                                                                        className={`dot ${activeSubItems.includes(subMenuItem.key) && childSub === childItem.key
                                                                                            ? 'dotActive ml-[7px]'
                                                                                            : 'dotInActive ml-[7px]'
                                                                                            }`}
                                                                                    ></span>
                                                                                    <span className="itemDotLine left-[21.25px]"></span>
                                                                                    <span className='group-hover:text-primary transition-colors'>{childItem.label}</span>
                                                                                </div>
                                                                            </>
                                                                    }
                                                                </div>
                                                            ))}
                                                            <span className="itemDotLine  top-0 left-[0px]"></span>
                                                        </div>
                                                    )}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {menuItem.category === "dashboards" ? (
                                    <>
                                        {
                                            sidebarWidth === 280 ?
                                                <span className="text-gray-500 text-b-13-20-500">USER</span> :
                                                <span className='text-gray-500 text-b-13-20-500  text-center'>---</span>
                                        }

                                    </>
                                ) : menuItem.category === "user" &&
                                    menuData.findIndex((item) => item.category === "user") === index - 3 ? (
                                    <>
                                        {
                                            sidebarWidth === 280 ?
                                                <span className="text-gray-500 text-b-13-20-500">PAGES</span> :
                                                <span className='text-gray-500 text-b-13-20-500  text-center'>---</span>
                                        }

                                    </>) : menuItem.category === "pages" &&
                                        menuData.findIndex((item) => item.category === "pages") === index - 3 ? (
                                    <>
                                        {
                                            sidebarWidth === 280 ?
                                                <span className="text-gray-500 text-b-13-20-500">APPS</span> :
                                                <span className='text-gray-500 text-b-13-20-500  text-center'>---</span>
                                        }

                                    </>) : null
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Sidebar;