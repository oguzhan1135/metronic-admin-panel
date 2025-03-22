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



            </Routes>
        </>
    );
}

export default Router;