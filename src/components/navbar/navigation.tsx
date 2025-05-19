import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const pathMapping: { [key: string]: string } = {
    user: "User",
    publicProfiles: "Public Profiles",
    profiles: "Profiles",
    creator: "Creator",
    default: "Default",
    company: "Company",
    nft: "NFT",
    blogger: "NFT",
    crm: "CRM",
    gamer: "Gamer",
    feeds: "Feeds",
    plain: "Plain",
    modal: "Modal",
    threeColumns: "3 Column",
    twoColumns: "2 Column ",
    works: "Works",
    teams: "Teams",
    network: "Network",
    activity: "Activity",
    campaigns: "Campaigns",
    empty: "Empty",
    getStarted: "Get Started",
    teamCrew: "Team Crew",
    userCard: "User Card",
    started: "Get Started",
    accountHome: "Account Home",
    userProfile: "User Profile",
    companyProfile: "Company Profile",
    settingSidebar: "Setting - With Sidebar",
    settingEnterprise: "Setting - Enterprise",
    settingPlain: "Setting - Plain",
    settingModal: "Setting - Modal",
    myAccount: "My Account",
    billing: "Billing",
    billingBasic: "Billing - Basic",
    billingEnterprise: "Billing - Enterprise",
    billingPlans: "Plans",
    billingHistory: "Billing - History",
    security: "Security",
    overview: "Overview",
    allowedIpAddresses: "Allowed IP Addresses",
    privacySetting: "Privacy Setting",
    deviceManagament: "Device Management",
    backupRecovery: "Backup & Recovery",
    currentSessions: "Current Sessions",
    log: "Log",
    members: "Members",
    teamStarter: "Team Starter",
    teamInfo: "Team Info",
    memberStarter: "Member Starter",
    teamMembers: "Team Members",
    importantMember: "Import Members",
    roles: "Roles",
    permissionsToggle: "Permission - Toggle",
    permissionsCheck: "Permission - Check",
    integrations: "Integrations",
    notifications: "Notifications",
    apiKeys: "API Keys",
    appearance: "Appearance",
    inviteFriend: "Invite a Friend",
    miniCards: "Mini Cards",
    author: "Author",
    social: "Social",
    userTable: "User Table",
    appRoster: "App Roster",
    marketAuthors: "Market Authors",
    saasUsers: "Saas Users",
    storeClients: "Store Clients",
    visitors: "Visitors",
    welcomeMessage: "Welcome Message",
    authentication: "Authentication",
    error404: "Error 404"
};

const Navigation = () => {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    useEffect(() => {
        const pathArray = location.pathname.split("/").filter((p) => p);
        const mappedBreadcrumbs = pathArray.map((segment) => pathMapping[segment] || segment);
        setBreadcrumbs(mappedBreadcrumbs);
    }, [location]);

    return (
        <nav className="text-b-14-14-500">
            {breadcrumbs.map((breadcrumb, index) => (
                <span
                    key={index}
                    className={index === breadcrumbs.length - 1 ? "text-gray-900 font-semibold text-b-14-14-500" : "text-gray-700 text-b-14-14-400"}
                >
                    {breadcrumb}
                    {index < breadcrumbs.length - 1 && <span className="mx-2">{">"}</span>}
                </span>
            ))}
        </nav>
    );
};

export default Navigation;
