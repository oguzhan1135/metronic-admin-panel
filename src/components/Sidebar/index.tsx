import MetronicLogo from '@assets/metronic-logo.svg'
import MetronicDarkLogo from '@assets/metronic-dark-logo.svg'
import Plus from '@assets/plus.svg'
import Minus from '@assets/minus.svg'
import Profile_Circle from '@assets/profile-circle.svg'
import Setting from '@assets/setting.svg'
import Community from '@assets/users.svg'
import Security_User from '@assets/security-user.svg'
import Dashboard_Icon from '@assets/dashboard.svg'
import SidebarLeft from '@assets/black-left-line.svg'
import MLogo from '@assets/M-logo.svg'
import { useEffect, useState } from 'react'
import { metronicContext } from '../../context/layoutContet'
import { Link, useLocation } from 'react-router'


interface MenuItem {
    category: string
    key: string
    label: string
    subItems?: MenuItem[]
    icon?: string
    path?: string
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
                        category: "user", key: "column-3", label: "3 Columns", path: "/user/publicProfiles/projects/column-3"
                    },
                    {
                        category: "user", key: "column-2", label: "2 Columns", path: "/user/publicProfiles/projects/column-2"
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
                        category: "user", key: "get-started", label: "Get Started", path: "/user/myAccount/accountHome/get-started"
                    },
                    {
                        category: "user", key: "user-profile", label: "User Profile", path: "/user/myAccount/accountHome/user-profile"
                    },
                    {
                        category: "user", key: "company-profile", label: "Company Profile", path: "/user/myAccount/accountHome/company-profile"
                    },
                    {
                        category: "user", key: "setting-sidebar", label: "Setting - With Sidebar", path: "/user/myAccount/accountHome/setting-sidebar"
                    },
                    {
                        category: "user", key: "setting-enterprise", label: "Setting - Enterprise", path: "/user/myAccount/accountHome/setting-enterprise"
                    },
                    {
                        category: "user", key: "setting-plain", label: "Setting - Plain", path: "/user/myAccount/accountHome/setting-plain"
                    },
                    {
                        category: "user", key: "setting-modal", label: "Setting - Modal", path: "/user/myAccount/accountHome/setting-modal"
                    }
                ]
            },
            {
                category: "user",
                key: "billing",
                label: "Billing",
                subItems: [
                    {
                        category: "user", key: "billing-basic", label: "Billing - Basic", path: "/user/myAccount/billing/billing-basic"
                    },
                    {
                        category: "user", key: "billing-enterprise", label: "Billing - Enterprise", path: "/user/myAccount/billing/billing-enterprise"
                    },
                    {
                        category: "user", key: "billing-plans", label: "Plans", path: "/user/myAccount/billing/billing-plans"
                    },
                    {
                        category: "user", key: "billing-history", label: "Billing History", path: "/user/myAccount/billing/billing-history"
                    }
                ]
            },
            {
                category: "user",
                key: "security",
                label: "Security",
                subItems: [
                    {
                        category: "user", key: "get-started", label: "Get Started", path: "/user/myAccount/security/get-started"
                    },
                    {
                        category: "user", key: "overview", label: "Security Overview", path: "/user/myAccount/security/overview"
                    },
                    {
                        category: "user", key: "allowed-ip-addresses", label: "Allowed IP Addresses", path: "/user/myAccount/security/allowed-ip-addresses"
                    },
                    {
                        category: "user", key: "privacy-setting", label: "Privacy Setting", path: "/user/myAccount/security/privacy-setting"
                    },
                    {
                        category: "user", key: "device-management", label: "Device Management", path: "/user/myAccount/security/device-managament"
                    },
                    {
                        category: "user", key: "backup-recovery", label: "Backup & Recovery", path: "/user/myAccount/security/backup-recovery"
                    },
                    {
                        category: "user", key: "current-sessions", label: "Current Sessions", path: "/user/myAccount/security/current-sessions"
                    },
                    {
                        category: "user", key: "log", label: "Security Log", path: "/user/myAccount/security/log"
                    }
                ]
            },
            {
                category: "user",
                key: "members-roles",
                label: "Members & Roles",
                subItems: [
                    {
                        category: "user", key: "teams-starter", label: "Teams Starter", path: "/user/myAccount/members/team-starter"
                    },
                    {
                        category: "user", key: "teams", label: "Teams", path: "/user/myAccount/members/teams"
                    },
                    {
                        category: "user", key: "team-info", label: "Team Info", path: "/user/myAccount/members/team-info"
                    },
                    {
                        category: "user", key: "member-starter", label: "Members Starter", path: "/user/myAccount/members/member-starter"
                    },
                    {
                        category: "user", key: "team-members", label: "Team Members", path: "/user/myAccount/members/team-members"
                    },
                    {
                        category: "user", key: "import-members", label: "Import Members", path: "/user/myAccount/members/import-member"
                    },
                    {
                        category: "user", key: "roles", label: "Roles", path: "/user/myAccount/members/roles"
                    },
                    {
                        category: "user", key: "permissions-toggle", label: "Permissions - Toggler", path: "/user/myAccount/members/permissions-toggle"
                    },
                    {
                        category: "user", key: "permissions-check", label: "Permissions - Check", path: "/user/myAccount/members/permissions-check"
                    },
                ]
            },
            {
                category: "user",
                key: "integrations",
                label: "Integrations",
                path: "/user/myAccount/integrations"
            },
            {
                category: "user",
                key: "notifications",
                label: "Notifications",
                path: "/user/myAccount/notifications"

            },
            {
                category: "user",
                key: "api-keys",
                label: "API Keys",
                path: "/user/myAccount/api-keys"
            },
            {
                category: "user",
                key: "appearance",
                label: "Appearance",
                path: "/user/myAccount/appearance"
            },
            {
                category: "user",
                key: "invite-friend",
                label: "Invite a Friend",
                path: "/user/myAccount/invite-friend"

            },
            {
                category: "user",
                key: "activity",
                label: "Activity",
                path: "/user/myAccount/activity"
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
                category: "user", key: "started", label: "Get Started", path: "/user/network/started"
            },
            {
                category: "user",
                key: "user-card",
                label: "User Card",
                subItems: [
                    {
                        category: "user", key: "mini-cards", label: "Mini Cards", path: "/user/network/userCard/mini-cards"
                    },
                    {
                        category: "user", key: "team-crew", label: "Team Crew", path: "/user/network/userCard/team-crew"
                    },
                    {
                        category: "user", key: "author", label: "Author", path: "/user/network/userCard/author"
                    },
                    {
                        category: "user", key: "nft", label: "NFT", path: "/user/network/userCard/nft"
                    },
                    {
                        category: "user", key: "social", label: "Social", path: "/user/network/userCard/social"
                    }
                ]

            },
            {
                category: "user",
                key: "user-table",
                label: "User Table",
                subItems: [
                    {
                        category: "user", key: "team-crew", label: "Team Crew", path: "/user/network/userTable/team-crew"
                    },
                    {
                        category: "user", key: "app-roster", label: "App Roster", path: "/user/network/userTable/app-roster"
                    },
                    {
                        category: "user", key: "market-authors", label: "Market Authors", path: "/user/network/userTable/market-authors"
                    },
                    {
                        category: "user", key: "saas-user", label: "Saas Users", path: "/user/network/userTable/saas-users"
                    },
                    {
                        category: "user", key: "store-clients", label: "Store Clients", path: "/user/network/userTable/store-clients"
                    },
                    {
                        category: "user", key: "visitors", label: "Visitors", path: "/user/network/userTable/visitors"
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
                        category: "user", key: "sign-in", label: "Sign In", path: "/user/authentication/classic/sign-in"
                    },
                    {
                        category: "user", key: "sign-up", label: "Sign Up", path: "/user/authentication/classic/sign-up"
                    },
                    {
                        category: "user", key: "2-FA", label: "2FA", path: "/user/authentication/classic/2-FA"
                    },
                    {
                        category: "user", key: "check-email", label: "Check Email", path: "/user/authentication/classic/check-mail"
                    },
                    {
                        category: "user",
                        key: "reset-password",
                        label: "Reset Password",
                        subItems: [
                            {
                                category: "user", key: "enter-email", label: "Enter Email", path: "/user/authentication/classic/resetPassword/enter-email"
                            },
                            {
                                category: "user", key: "check-email", label: "Check Email", path: "/user/authentication/classic/resetPassword/check-email"
                            },
                            {
                                category: "user", key: "change-password", label: "Change Password", path: "/user/authentication/classic/resetPassword/change-password"
                            },
                            {
                                category: "user", key: "password-changed", label: "Password Changed", path: "/user/authentication/classic/resetPassword/password-changed"
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
                        category: "user", key: "sign-in", label: "Sign In", path: "/user/authentication/branded/sign-in"
                    },
                    {
                        category: "user", key: "sign-up", label: "Sign Up", path: "/user/authentication/branded/sign-up"
                    },
                    {
                        category: "user", key: "2-FA", label: "2FA", path: "/user/authentication/branded/2-FA"
                    },
                    {
                        category: "user", key: "check-email", label: "Check Email", path: "/user/authentication/branded/check-email"
                    },
                    {
                        category: "user",
                        key: "reset-password",
                        label: "Reset Password",
                        subItems: [
                            {
                                category: "user", key: "enter-email", label: "Enter Email", path: "/user/authentication/branded/resetPassword/enter-email"
                            },
                            {
                                category: "user", key: "check-email", label: "Check Email", path: "/user/authentication/branded/resetPassword/check-email"
                            },
                            {
                                category: "user", key: "change-password", label: "Change Password", path: "/user/authentication/branded/resetPassword/change-password"
                            },
                            {
                                category: "user", key: "password-changed", label: "Password Changed", path: "/user/authentication/branded/resetPassword/password-changed"
                            }
                        ]
                    },
                ]
            },
            {
                category: "user", key: "welcome-message", label: "Welcome Message", path: "/user/authentication/welcome-message"
            },
            {
                category: "user", key: "account-deactivated", label: "Account", path: "/user/authentication/account-deactivated"
            },
            {
                category: "user", key: "error-404", label: "Error 404", path: "/user/authentication/error-404"
            },
            {
                category: "user", key: "error-500", label: "Error 500", path: "/user/authentication/error-500"
            }

        ],
        icon: Security_User
    },
]


const Sidebar = () => {

    const { sidebarIsOpen, setSidebarIsOpen, setSidebarWidth, sidebarWidth, giveModal, reportModal, searchModal, shareModal, theme, modalOpen } = metronicContext()
    const [openMenuItems, setOpenMenuItems] = useState<string[]>([])
    const [activeSubItems, setActiveSubItems] = useState<string[]>([])
    const [childSub, setChildSub] = useState<string>("")
    const [activeGrandChildItems, setActiveGrandChildItems] = useState<string[]>([])

const location = useLocation()
useEffect(() => {
    const pathname = location.pathname
    const pathParts = pathname.split("/").filter(Boolean)

    const newOpenMenuItems: string[] = []
    const newActiveSubItems: string[] = []
    let newChildSub = ""
    const newGrandChildItems: string[] = []
    let deepestItem = ""

    const fullPath = "/" + pathParts.join("/")

    if (pathname === "/") {
        newOpenMenuItems.push("dashboards")

        if (theme === "light") {
            newActiveSubItems.push("light")
            deepestItem = "light"
        } else {
            newActiveSubItems.push("dark")
            deepestItem = "dark"
        }

        setOpenMenuItems([...new Set(newOpenMenuItems)])
        setActiveSubItems([...new Set(newActiveSubItems)])
        setChildSub("")
        setActiveGrandChildItems([])

        return
    }

    menuData.forEach((menuItem) => {
        if (menuItem.path === fullPath || fullPath.startsWith(`/${menuItem.key}`)) {
            newOpenMenuItems.push(menuItem.key)
            deepestItem = menuItem.key
        }

        if (menuItem.subItems) {
            menuItem.subItems.forEach((subItem) => {
                if (subItem.path === fullPath) {
                    newOpenMenuItems.push(menuItem.key)
                    newActiveSubItems.push(subItem.key)
                    deepestItem = subItem.key
                }

                if (subItem.subItems) {
                    subItem.subItems.forEach((childItem) => {
                        if (childItem.path === fullPath) {
                            newOpenMenuItems.push(menuItem.key)
                            newActiveSubItems.push(subItem.key)
                            newChildSub = childItem.key
                            deepestItem = childItem.key
                        }

                        if (childItem.subItems) {
                            childItem.subItems.forEach((grandChild) => {
                                if (grandChild.path === fullPath) {
                                    newOpenMenuItems.push(menuItem.key)
                                    newActiveSubItems.push(subItem.key)
                                    newChildSub = childItem.key
                                    newGrandChildItems.push(grandChild.key)
                                    deepestItem = grandChild.key
                                }
                            })
                        }
                    })
                }
            })
        }
    })

    setOpenMenuItems([...new Set(newOpenMenuItems)])
    setActiveSubItems([...new Set(newActiveSubItems)])
    setChildSub(newChildSub)
    setActiveGrandChildItems([...new Set(newGrandChildItems)])

    if (deepestItem) {
        setActiveGrandChildItems((prev) =>
            prev.includes(deepestItem) ? prev : [...prev, deepestItem]
        )
    }

}, [location.pathname, menuData, theme])


const toggleMenuItem = (key: string) => {
    setOpenMenuItems((prev) =>
        prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    )
}

const toggleSubItems = (key: string) => {
    setActiveSubItems((prev) =>
        prev.includes(key) ? prev.filter((item) => item !== key) : [key]
    )
}

const childSubItemTrigger = (item: string) => {
    setChildSub(item)
}

const toggleGrandChildItems = (key: string) => {
    setActiveGrandChildItems((prev) =>
        prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    )
}

const handleSideBar = () => {
    setSidebarWidth((prev) => (prev === 280 ? 70 : 280))
}

const hoverSidebar = () => {
    if (sidebarIsOpen && sidebarWidth === 70) {
        setSidebarWidth(280)
        setSidebarIsOpen(false)
    } else if (sidebarIsOpen && sidebarWidth === 280) {
        setSidebarWidth(70)
    }
}

const hoverDownSidebar = () => {
    if (!sidebarIsOpen) {
        setSidebarWidth(280)
    } else {
        setSidebarWidth(70)
    }
}

    return (
        <div onMouseEnter={hoverSidebar} onMouseLeave={hoverDownSidebar} style={{ width: `${sidebarWidth}px` }} className={` flex-col transition-all w-full duration-500 ease-in-out max-h-screen fixed dark:bg-coal-600  border-r-grey-500 dark:border-gray-100 border-r-2 hidden h-screen lg:flex ${modalOpen || searchModal || giveModal || reportModal || shareModal ? "-z-10" : "z-50"}

 `}>
            <div className="px-5 py-[30px] flex relative ">
                <div onClick={() => {
                    handleSideBar()
                    setSidebarIsOpen(!sidebarIsOpen)
                }} className="flex items-center justify-center cursor-pointer  size-[30px] rounded-lg border border-gray-200 dark:border-gray-100 bg-light text-gray-500 hover:text-gray-700 toggle absolute start-full top-2/4 -translate-x-2/4 -translate-y-2/4 rtl:translate-x-2/4 z-50 bg-white dark:bg-coal-500"
                    style={{ zIndex: 100000 }} >
                    <img src={SidebarLeft} className='size-5' alt="sidebaf-left-icon" />

                </div>
                {
                    sidebarWidth == 280 ?
                        <>
                            {
                                localStorage.getItem("theme") === "dark" ?
                                    <Link to={'/'}><img src={MetronicDarkLogo} alt="Metronic-Logo" className='' /></Link> :
                                    <Link to={'/'}><img src={MetronicLogo} alt="Metronic-Logo" className='' /></Link>
                            }

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
                                    {
                                        menuItem.subItems ?
                                            <>
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
                                            </> :
                                            <Link to={location} className="flex flex-row gap-2.5 items-center group w-full">
                                                <img src={menuItem.icon} alt="dashboard-icon" />
                                                {
                                                    sidebarWidth == 280 ?
                                                        <>
                                                            <span className="text-gray-800 text-b-14-22-500 group-hover:text-primary transition-colors">
                                                                {menuItem.label}
                                                            </span>
                                                        </> : null
                                                }

                                            </Link>
                                    }

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
                                                {subMenuItem.subItems && (
                                                    <div className={`overflow-hidden ml-[10.5px] relative transition-all duration-500 ease-in-out ${activeSubItems.includes(subMenuItem.key) ? "max-h-[500px]" : "max-h-0"}`}>
                                                        {subMenuItem.subItems.map((childItem, index) => (
                                                            <div key={index}>

                                                                {/* Child Items */}
                                                                {childItem.path ? (
                                                                    <Link
                                                                        to={childItem.path}
                                                                        onClick={() => childSubItemTrigger(childItem.key)}
                                                                        className={`subItem gap-2 hover:group cursor-pointer ${activeSubItems.includes(subMenuItem.key) && childSub === childItem.key ? 'selectedItem' : 'unSelectedItem'}`}
                                                                    >
                                                                        <span className={`dot ${activeSubItems.includes(subMenuItem.key) && childSub === childItem.key ? 'dotActive ml-[7px]' : 'dotInActive ml-[7px]'}`}></span>
                                                                        <span className="itemDotLine left-[21.25px]"></span>
                                                                        <span className="group-hover:text-primary transition-colors">{childItem.label}</span>
                                                                    </Link>
                                                                ) : (
                                                                    <div
                                                                        onClick={() => {
                                                                            childSubItemTrigger(childItem.key)
                                                                            toggleGrandChildItems(childItem.key)
                                                                        }}
                                                                        className={`subItem flex flex-row items-center justify-between gap-2 hover:group cursor-pointer ${activeSubItems.includes(subMenuItem.key) && childSub === childItem.key ? 'selectedItem' : 'unSelectedItem'}`}
                                                                    >
                                                                        <div className="flex flex-row items-center gap-2">
                                                                            <span className={`dot ${activeSubItems.includes(subMenuItem.key) && childSub === childItem.key ? 'dotActive ml-[7px]' : 'dotInActive ml-[7px]'}`}></span>
                                                                            <span className="itemDotLine left-[21.25px]"></span>
                                                                            <span className="group-hover:text-primary transition-colors">{childItem.label}</span>
                                                                        </div>
                                                                        {childItem.subItems && (
                                                                            <img src={activeGrandChildItems.includes(childItem.key) ? Minus : Plus} alt="toggle-icon" />
                                                                        )}
                                                                    </div>
                                                                )}

                                                                {/* GrandChild Items */}
                                                                {childItem.subItems && (
                                                                    <div className={`overflow-hidden ml-[10.5px] relative transition-all duration-500 ease-in-out ${activeGrandChildItems.includes(childItem.key) ? "max-h-[500px]" : "max-h-0"}`}>
                                                                        {childItem.subItems.map((grandChild) => (
                                                                            <div key={grandChild.key}>
                                                                                {
                                                                                    grandChild.path ? (
                                                                                        <Link
                                                                                            key={grandChild.key}
                                                                                            to={grandChild.path}
                                                                                            className="flex flex-row justify-between items-center hover:group cursor-pointer"
                                                                                        >
                                                                                            <div className={`subItem w-full ${activeSubItems.includes(grandChild.key) ? 'selectedItem' : 'unSelectedItem'}`}>
                                                                                                <span className={`dot ${activeSubItems.includes(grandChild.key) ? 'dotActive' : 'dotInActive'}`}></span>
                                                                                                <span className="itemDotLine"></span>
                                                                                                <span className="group-hover:text-primary transition-colors">{grandChild.label}</span>
                                                                                            </div>
                                                                                        </Link>
                                                                                    ) : (
                                                                                        <div
                                                                                            key={grandChild.key}
                                                                                            className="flex flex-row justify-between items-center cursor-not-allowed opacity-50"
                                                                                        >
                                                                                            <div className={`subItem w-full unSelectedItem`}>
                                                                                                <span className="dot dotInActive"></span>
                                                                                                <span className="itemDotLine"></span>
                                                                                                <span>{grandChild.label}</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            </div>


                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                        <span className="itemDotLine top-0 left-[0px]"></span>
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
                                )  : menuItem.category === "pages" &&
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
    )
}


export default Sidebar