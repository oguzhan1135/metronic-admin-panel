import { Routes, Route } from "react-router";
import Dashboard from "../pages/dashboards";
import Default from "../pages/user/publicProfiles/profiles/default"
import Creator from "../pages/user/publicProfiles/profiles/creator"
import Company from "../pages/user/publicProfiles/profiles/company"
import NFT from "../pages/user/publicProfiles/profiles/nft"
import Blogger from "../pages/user/publicProfiles/profiles/blogger"
import CRM from "../pages/user/publicProfiles/profiles/crm"
import Gamer from "../pages/user/publicProfiles/profiles/gamer"
import Feeds from "../pages/user/publicProfiles/profiles/feeds"
import Plain from "../pages/user/publicProfiles/profiles/plain"
import Modal from "../pages/user/publicProfiles/profiles/modal"
import Works from "../pages/user/publicProfiles/works"
import Teams from "../pages/user/publicProfiles/teams"
import Network from "../pages/user/publicProfiles/network"
import Activity from "../pages/user/publicProfiles/activity"
import Campaigns from "../pages/user/publicProfiles/campaigns"
import ThreeColumns from "../pages/user/publicProfiles/projects/threeColumns"
import TwoColumns from "../pages/user/publicProfiles/projects/twoColumns"
import Empty from '../pages/user/publicProfiles/empty'
import GetStarted from '../pages/user/myAccount/accountHome/started'
import UserProfile from '../pages/user/myAccount/accountHome/userProfile'
import CompanyProfile from '../pages/user/myAccount/accountHome/companyProfile'
import SettingSidebar from "../pages/user/myAccount/accountHome/settingSidebar";
import SettingEnterprise from "../pages/user/myAccount/accountHome/settingEnterprise";
import SettingPlain from "../pages/user/myAccount/accountHome/settingPlain";
import SettingModal from "../pages/user/myAccount/accountHome/settingModal";
import BillingBasic from "../pages/user/myAccount/billing/billingBasic";
import BillingEnterprise from "../pages/user/myAccount/billing/billingEnterprise";
import BillingPlan from "../pages/user/myAccount/billing/billingPlan";
import BillingHistory from "../pages/user/myAccount/billing/billingHistory";
import GetStartedSecurity from "../pages/user/myAccount/security/started";
import Overview from "../pages/user/myAccount/security/overview";
import AllowIpAddresses from "../pages/user/myAccount/security/allowIpAdrdresses";
import PrivacySetting from "../pages/user/myAccount/security/privacySetting";
import DeviceManagament from "../pages/user/myAccount/security/deviceManagement";
import BackupRecovery from "../pages/user/myAccount/security/backupRecovery";
import CurrentSessions from "../pages/user/myAccount/security/currentSessions";
import SecurityLog from "../pages/user/myAccount/security/securityLog";
import TeamStarter from "../pages/user/myAccount/membersRoles/teamStarter";
import TeamsMembers from "../pages/user/myAccount/membersRoles/teams";
import TeamInfo from "../pages/user/myAccount/membersRoles/teamInfo";
import MemberStarter from "../pages/user/myAccount/membersRoles/memberStarter";
import TeamMembers from "../pages/user/myAccount/membersRoles/teamMembers";
import ImportantMember from "../pages/user/myAccount/membersRoles/importantmember";
import Roles from "../pages/user/myAccount/membersRoles/roles";
import PermissionsCheck from "../pages/user/myAccount/membersRoles/permissonsCheck";
import PermissionsToggle from "../pages/user/myAccount/membersRoles/permissionsToggle";
import Integrations from "../pages/user/myAccount/integrations";
import Notifications from "../pages/user/myAccount/notifications";
import ApiKeys from "../pages/user/myAccount/apiKeys";
import Appearance from "../pages/user/myAccount/appearance";
import InviteFriend from "../pages/user/myAccount/inviteFriend";
import MyAccountActivity from "../pages/user/myAccount/activity";
import NetworkStarted from "../pages/user/network/started";
import MiniCards from "../pages/user/network/userCards/miniCards";
import TeamCrew from "../pages/user/network/userCards/teamCrew";
import Author from "../pages/user/network/userCards/author";
import Social from "../pages/user/network/userCards/social";

import '../globals.css'

const Router = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/user/publicProfiles/profiles/default' element={<Default />}></Route>
                <Route path='/user/publicProfiles/profiles/creator' element={<Creator />}></Route>
                <Route path='/user/publicProfiles/profiles/company' element={<Company />}></Route>
                <Route path='/user/publicProfiles/profiles/nft' element={<NFT />}></Route>
                <Route path='/user/publicProfiles/profiles/blogger' element={<Blogger />}></Route>
                <Route path='/user/publicProfiles/profiles/crm' element={<CRM />}></Route>
                <Route path='/user/publicProfiles/profiles/gamer' element={<Gamer />}></Route>
                <Route path='/user/publicProfiles/profiles/feeds' element={<Feeds />}></Route>
                <Route path='/user/publicProfiles/profiles/plain' element={<Plain />}></Route>
                <Route path='/user/publicProfiles/profiles/modal' element={<Modal />}></Route>
                <Route path='/user/publicProfiles/works' element={<Works />}></Route>
                <Route path='/user/publicProfiles/teams' element={<Teams />}></Route>
                <Route path='/user/publicProfiles/network' element={<Network />}></Route>
                <Route path='/user/publicProfiles/activity' element={<Activity />}></Route>
                <Route path='/user/publicProfiles/campaigns' element={<Campaigns />}></Route>
                <Route path='/user/publicProfiles/empty' element={<Empty />}></Route>
                <Route path='/user/publicProfiles/projects/threeColumns' element={<ThreeColumns />}></Route>
                <Route path='/user/publicProfiles/projects/twoColumns' element={<TwoColumns />}></Route>
                <Route path='/user/myAccount/accountHome/getStarted' element={<GetStarted />}></Route>
                <Route path='/user/myAccount/accountHome/userProfile' element={<UserProfile />}></Route>
                <Route path='/user/myAccount/accountHome/companyProfile' element={<CompanyProfile />}></Route>
                <Route path='/user/myAccount/accountHome/settingSidebar' element={<SettingSidebar />}></Route>
                <Route path='/user/myAccount/accountHome/settingEnterprise' element={<SettingEnterprise />}></Route>
                <Route path='/user/myAccount/accountHome/settingPlain' element={<SettingPlain />}></Route>
                <Route path='/user/myAccount/accountHome/settingModal' element={<SettingModal />}></Route>
                <Route path='/user/myAccount/billing/billingBasic' element={<BillingBasic />}></Route>
                <Route path='/user/myAccount/billing/billingEnterprise' element={<BillingEnterprise />}></Route>
                <Route path='/user/myAccount/billing/billingPlans' element={<BillingPlan />}></Route>
                <Route path='/user/myAccount/billing/billingHistory' element={<BillingHistory />}></Route>
                <Route path='/user/myAccount/security/getStarted' element={<GetStartedSecurity />}></Route>
                <Route path='/user/myAccount/security/overview' element={<Overview />}></Route>
                <Route path='/user/myAccount/security/allowedIpAddresses' element={<AllowIpAddresses />}></Route>
                <Route path='/user/myAccount/security/privacySetting' element={<PrivacySetting />}></Route>
                <Route path='/user/myAccount/security/deviceManagament' element={<DeviceManagament />}></Route>
                <Route path='/user/myAccount/security/backupRecovery' element={<BackupRecovery />}></Route>
                <Route path='/user/myAccount/security/currentSessions' element={<CurrentSessions />}></Route>
                <Route path='/user/myAccount/security/log' element={<SecurityLog />}></Route>
                <Route path='/user/myAccount/members/teamStarter' element={<TeamStarter />}></Route>
                <Route path='/user/myAccount/members/teams' element={<TeamsMembers />}></Route>
                <Route path='/user/myAccount/members/teamInfo' element={<TeamInfo />}></Route>
                <Route path='/user/myAccount/members/memberStarter' element={<MemberStarter />}></Route>
                <Route path='/user/myAccount/members/teamMembers' element={<TeamMembers />}></Route>
                <Route path='/user/myAccount/members/importantMember' element={<ImportantMember />}></Route>
                <Route path='/user/myAccount/members/roles' element={<Roles />}></Route>
                <Route path='/user/myAccount/members/permissionsToggle' element={<PermissionsToggle />}></Route>
                <Route path='/user/myAccount/members/permissionsCheck' element={<PermissionsCheck />}></Route>
                <Route path='/user/myAccount/integrations' element={<Integrations />}></Route>
                <Route path='/user/myAccount/notifications' element={<Notifications />}></Route>
                <Route path='/user/myAccount/apiKeys' element={<ApiKeys />}></Route>
                <Route path='/user/myAccount/appearance' element={<Appearance />}></Route>
                <Route path='/user/myAccount/inviteFriend' element={<InviteFriend />}></Route>
                <Route path='/user/myAccount/activity' element={<MyAccountActivity />}></Route>
                <Route path='/user/network/started' element={<NetworkStarted />}></Route>
                <Route path='/user/network/userCard/miniCards' element={<MiniCards />}></Route>
                <Route path='/user/network/userCard/teamCrew' element={<TeamCrew />}></Route>
                <Route path='/user/network/userCard/author' element={<Author />}></Route>
                <Route path='/user/network/userCard/social' element={<Social />}></Route>

            </Routes>
        </>
    );
}

export default Router;