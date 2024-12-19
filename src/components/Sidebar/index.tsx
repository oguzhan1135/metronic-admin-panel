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
import Bookmark from '@assets/icon/bookmark.svg'
import Tablet from '@assets/icon/questionnaire-tablet.svg'
import Handcart from '@assets/icon/handcart.svg'



const Sidebar = () => {
    return (
        <div className="flex flex-col w-70 min-h-screen">
            <div className="px-[30px] py-[30px]">
                <img src={MetronicLogo} alt="Metronic-Logo" />
            </div>
            <div className="flex flex-col pb-2.5">
                <div className="flex flex-col gap-0  px-6.5">
                    <div className="flex flex-row justify-between items-center py-3 pb-2">
                        <div className="flex flex-row gap-2.5 items-center">
                            <img src={Dashboard_Icon} alt="dashboard-icon" />
                            <span className="text-gray-800 text-b-14-22-500">Dashboards</span>
                        </div>
                        <img src={Minus} alt="minus-icon" />
                    </div>

                    <div className="flex items-center gap-4 bg-gray-100 rounded-md pl-3 py-2 relative z-10">
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500 ml-[-4px]"></span>
                        <span className='absolute w-[1px] h-full left-[10.5px] z-[-1] bg-gray-200'></span>
                        <span className="text-blue-500  text-b-13-14-400">Light Sidebar</span>
                    </div>

                    <div className="flex items-center gap-4 pl-3 py-2 relative z-10">
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500 ml-[-4px] bg-transparent"></span>
                        <span className='absolute w-[1px] h-full left-[10.5px] z-[-1] bg-gray-200'></span>
                        <span className="text-gray-800  text-b-13-14-400">Light Sidebar</span>
                    </div>

                    <div className="flex items-center gap-4 pl-3 py-2 relative z-10">
                        <span className="w-[6px] h-[6px] rounded-full bg-blue-500 ml-[-4px] bg-transparent"></span>
                        <span className='absolute w-[1px] h-full left-[10.5px] z-[-1] bg-gray-200'></span>
                        <span className="text-gray-800  text-b-13-14-400">Emty Dashboard</span>
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
    );
}

export default Sidebar;