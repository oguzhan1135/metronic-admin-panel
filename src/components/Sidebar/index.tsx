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
    category: string
    key: string;
    label: string;
    subItems?: MenuItem[];
}
const menuData: MenuItem[] = [
    {
        category: "dashboards",
        key: "dashboards",
        label: "Dashboards",
        subItems: [
            {

                category: "dashboards", key: "light", label: "Light Sidebar"
            },
            {
                category: "dashboards", key: "dark", label: "Dark Sidebar"
            }
        ]
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
                        category: "user", key: "default", label: "Default"
                    },
                    {
                        category: "user", key: "creator", label: "Creator"
                    },
                    {
                        category: "user", key: "company", label: "Company"
                    },
                    {
                        category: "user", key: "nft", label: "NFT"
                    },
                    {
                        category: "user", key: "blogger", label: "Blogger"
                    },
                    {
                        category: "user", key: "crm", label: "CRM"
                    },
                    {
                        category: "user", key: "gamer", label: "Gamer"
                    },
                    {
                        category: "user", key: "feeds", label: "Feeds"
                    },
                    {
                        category: "user", key: "plain", label: "PLain"
                    },
                    {
                        category: "user", key: "modal", label: "Modal"
                    }
                ]

            },
            {
                category: "user",
                key: "projects",
                label: "Projects",
                subItems: [
                    {
                        category: "user", key: "column-3", label: "3 Columns"
                    },
                    {
                        category: "user", key: "column-2", label: "2 Columns"
                    }
                ]
            },
            {
                category: "user",
                key: "works",
                label: "Works"
            },
            {
                category: "user",
                key: "teams",
                label: "Teams"
            },
            {
                category: "user",
                key: "network",
                label: "Network"
            },
            {
                category: "user",
                key: "activity",
                label: "Activity"
            },
            {
                category: "user",
                key: "chanpaigns-card",
                label: "Champaigns - Card"
            },
            {
                category: "user",
                key: "chanpaigns-list",
                label: "Champaigns - List"
            },
            {
                category: "user",
                key: "empty",
                label: "Empty"
            }
        ]
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
                        category: "user", key: "get-started", label: "Get Started"
                    },
                    {
                        category: "user", key: "user-profile", label: "User Profile"
                    },
                    {
                        category: "user", key: "company-profile", label: "Company Profile"
                    },
                    {
                        category: "user", key: "setting-with-sidebar", label: "Setting - With Sidebar"
                    },
                    {
                        category: "user", key: "setting-enterprise", label: "Setting - Enterprise"
                    },
                    {
                        category: "user", key: "setting-plain", label: "Setting - Plain"
                    },
                    {
                        category: "user", key: "setting-with-modal", label: "Setting - Modal"
                    }
                ]
            },
            {
                category: "user",
                key: "billing",
                label: "Billing",
                subItems: [
                    {
                        category: "user", key: "billing-basic", label: "Billing - Basic"
                    },
                    {
                        category: "user", key: "billing-enterprise", label: "billing - Enterprise"
                    },
                    {
                        category: "user", key: "plans", label: "Plans"
                    },
                    {
                        category: "user", key: "billing-history", label: "Billing History"
                    }
                ]
            },
            {
                category: "user",
                key: "security",
                label: "Security",
                subItems: [
                    {
                        category: "user", key: "get-started", label: "Get Started"
                    },
                    {
                        category: "user", key: "security-overview", label: "Security Overview"
                    },
                    {
                        category: "user", key: "allowed-ip-addresses", label: "Allowed IP Addresses"
                    },
                    {
                        category: "user", key: "privacy-setting", label: "Privacy Setting"
                    },
                    {
                        category: "user", key: "device-management", label: "Device Management"
                    },
                    {
                        category: "user", key: "backup-recovery", label: "Backup & Recovery"
                    },
                    {
                        category: "user", key: "current-sessions", label: "Current Sessions"
                    },
                    {
                        category: "user", key: "security-log", label: "Security Log"
                    }
                ]
            },
            {
                category: "user",
                key: "members-roles",
                label: "Members & Roles",
                subItems: [
                    {
                        category: "user", key: "teams-starter", label: "Teams Starter"
                    },
                    {
                        category: "user", key: "teams", label: "Teams"
                    },
                    {
                        category: "user", key: "team-info", label: "Team Info"
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

        ]
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
        ]
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

        ]
    },
    {
        category: "pages",
        key: "marketplace",
        label: "Marketplace"
    },
    {
        category: "pages",
        key: "social",
        label: "Social"
    },
    {
        category: "pages",
        key: "company",
        label: "Company"
    },
    {
        category: "pages",
        key: "blog",
        label: "Blog"
    },
    {
        category: "apps",
        key: "projects",
        label: "Projects"
    },
    {
        category: "apps",
        key: "ecommerce",
        label: "eCommerce"
    },



]


const Sidebar = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState({
        situation: false,
        selectedSidebarMenuItemCategory: "dashboards",
        selectedSidebarMenuItemKey: "light"
    });
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

                {
                    menuData.map((menuItem) => (
                        <div className="flex flex-col pb-2.5">
                            <div className="flex flex-col gap-0 px-6.5">
                                {/* Başlık */}
                                <div
                                    onClick={() => setSelectedMenuItem({ situation: !selectedMenuItem.situation, selectedSidebarMenuItemCategory: menuItem.category, selectedSidebarMenuItemKey: menuItem.key })}
                                    className="flex flex-row justify-between items-center py-3 pb-2 hover: group cursor-pointer"
                                >
                                    <div className="flex flex-row gap-2.5 items-center">
                                        <img src={Dashboard_Icon} alt="dashboard-icon" />
                                        <span className="text-gray-800 text-b-14-22-500 group-hover:text-primary transition-colors">
                                            {menuItem.label}
                                        </span>
                                    </div>

                                    {selectedMenuItem.situation && selectedMenuItem.selectedSidebarMenuItemCategory === menuItem.category && selectedMenuItem.selectedSidebarMenuItemKey === menuItem.key ? (
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
                                {
                                    menuItem.subItems ?
                                        <>
                                            {
                                                menuItem.subItems.map((subMenuItem) => (
                                                    <div
                                                        className={`overflow-hidden transition-all duration-300 ${selectedMenuItem.situation && selectedMenuItem.selectedSidebarMenuItemCategory === menuItem.category && selectedMenuItem.selectedSidebarMenuItemKey === menuItem.key ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'
                                                            }`}
                                                    >
                                                        <div className="flex flex-col gap-0">
                                                            <div onClick={() => selectedItemFunction(subMenuItem.key)} className={`subItem ${itemActive.subItemKey === subMenuItem.key ? 'selectedItem' : 'unSelectedItem'}`}>
                                                                <span className={`${itemActive.subItemKey === subMenuItem.key ? 'dotActive' : 'dotInActive'}`}></span>
                                                                <span className="itemDotLine"></span>
                                                                <span className={`${itemActive.subItemKey === subMenuItem.key ? 'selectedItem' : 'unSelectedItem'} `}>{subMenuItem.label}</span>
                                                            </div>

                                                            {
                                                                subMenuItem.subItems ?
                                                                    <>
                                                                        {
                                                                            subMenuItem.subItems.map((smallSubMenuItem) => (
                                                                                <div onClick={() => selectedItemFunction(subMenuItem.key)} className={` overflow-hidden transition-all duration-300 ${selectedMenuItem.situation && selectedMenuItem.selectedSidebarMenuItemCategory === menuItem.category && selectedMenuItem.selectedSidebarMenuItemKey === menuItem.key ? 'max-h-max opacity-100' : 'max-h-0 opacity-0'
                                                                                    }  subItem ml-10 ${itemActive.subItemKey === smallSubMenuItem.key ? 'selectedItem' : 'unSelectedItem'}`}>
                                                                                    <span className={`${itemActive.subItemKey === smallSubMenuItem.key ? 'dotActive' : 'dotInActive'}`}></span>
                                                                                    <span className="itemDotLine"></span>
                                                                                    <span className={`${itemActive.subItemKey === smallSubMenuItem.key ? 'selectedItem' : 'unSelectedItem'} `}>{smallSubMenuItem.label}</span>
                                                                                </div>
                                                                            ))
                                                                        }
                                                                    </> : null
                                                            }

                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </> : null

                                }

                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    );
}

export default Sidebar;