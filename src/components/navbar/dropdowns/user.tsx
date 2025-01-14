import ExampleUser from '../../../assets/icon/example-user.svg'
import Profile from '../../../assets/icon/user-edit.svg'
import { FaChevronRight } from "react-icons/fa6";
import Profile_Circle from '@assets/icon/profile-circle.svg'
import Setting from '@assets/icon/setting.svg'
import { TbWorld } from "react-icons/tb";
import { IoIosNotifications, IoMdNotifications } from "react-icons/io";
import Switch from '../../switch';
import { useState } from 'react';
import { FaMoneyBill, FaMoon, FaRegUserCircle, FaRocket } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { GoCodeReview } from 'react-icons/go';
import Flag from '../../../assets/icon/united-states.svg'
import { BsPersonVcard } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';
import { RiShieldUserLine } from 'react-icons/ri';
import { CgScan } from 'react-icons/cg';
import { GiAbstract039 } from 'react-icons/gi';



const User = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [notification, setNotification] = useState(false)

    return (
        <div className="absolute top-12 right-0 w-64">
            <div className="flex bg-white rounded-xl border-gray-300 border  flex-col">
                <div className="border-b-2 ">
                    <div className="flex justify-between items-center p-5">

                        <div className="flex flex-row gap-2 items-center ">
                            <div className="w-9 h-9 rounded-full border-2 border-green-600 overflow-hidden">
                                <img src={ExampleUser} alt="ExampleUser" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className='text-b-13-14-500 text-gray-900'>Cody Fisher</span>
                                <span className='text-gray-700 text-b-11-12-400'>c.fisher@gmail.com</span>
                            </div>
                        </div>
                        <div className="w-7 h-5 bg-primary-clarity bg-opacity-20 flex items-center justify-center rounded">
                            <span className='text-b-10-10-500 text-primary'>Pro</span>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 pb-2 pt-2 px-2">
                    <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                        <BsPersonVcard className='dropdown-icon  group-hover:text-primary' />

                        <span className='text-gray-800 text-b-13-14-400 '>Public Profile</span>
                    </div>
                    <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md">
                        <FaRegUserCircle className='dropdown-icon group-hover:text-primary' />

                        <span className='text-gray-800 text-b-13-14-400'>My Profile</span>
                    </div>
                    <div className="flex flex-row items-center px-3 py-3 cursor-pointer hover:bg-gray-100 rounded-md hover: group justify-between relative">
                        <div className="flex flex-row items-center gap-2.5 hover: group">
                            <IoSettingsSharp className=' dropdown-icon group-hover:text-primary' />
                            <span className='text-gray-800 text-b-13-14-400 '>My Account</span>
                        </div>
                        <FaChevronRight className='dropdown-icon' />
                        <div className=" absolute w-56 hidden group-hover:flex right-[248px] -top-14 rounded-xl  bg-white border">
                            <div className="flex flex-col w-full ">
                                <div className="flex flex-col p-3 border-b w-full">
                                    <div className="flex flex-row items-center  px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <FaRocket className='dropdown-icon' />
                                        <span className='text-gray-800 text-b-13-14-400 '>Get Started</span>
                                    </div>
                                    <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <FaRegUserCircle className='dropdown-icon' />
                                        <span className='text-gray-800 text-b-13-14-400 '>My Profile</span>
                                    </div>
                                    <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <FaMoneyBill className='dropdown-icon' />
                                        <span className='text-gray-800 text-b-13-14-400 '>Billing</span>
                                    </div>
                                    <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <RiShieldUserLine className='dropdown-icon size-8' />
                                        <span className='text-gray-800 text-b-13-14-400 '>Security</span>
                                    </div>
                                    <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <CgScan className='dropdown-icon' />
                                        <span className='text-gray-800 text-b-13-14-400 '>Members & Roles</span>
                                    </div>
                                    <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                        <GiAbstract039 className='dropdown-icon ' />
                                        <span className='text-gray-800 text-b-13-14-400 '>Integrations</span>
                                    </div>

                                </div>
                                <div className="flex flex-row justify-between items-center px-5 py-4 hover:bg-gray-100 rounded-md ">
                                    <div className="flex flex-row items-center gap-2.5">
                                        <IoIosNotifications className='dropdown-icon' />
                                        <span className='text-gray-800 text-b-13-14-400 '>Notifications</span>
                                    </div>
                                    <Switch status={notification} setSwitch={() => setNotification(!notification)} size='small' />
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md ">
                        <GoCodeReview className='dropdown-icon group-hover:text-primary' />


                        <span className='text-gray-800 text-b-13-14-400'>Devs Forum</span>
                    </div>
                    <div className="flex flex-row justify-between items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md">
                        <div className="flex items-center gap-2.5">
                            <TbWorld className='dropdown-icon group-hover:text-primary' />
                            <span className='text-gray-800 text-b-13-14-400'>Language</span>
                        </div>

                        <div className="bg-gray-100 border border-gray-300 rounded-md p-2">
                            <div className="flex flex-row items-center gap-[6px]">
                                <span className='text-gray-600 text-b-10-10-500'>English</span>
                                <img src={Flag} alt="" />

                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-row justify-between items-center px-5 pt-5 ">
                    <div className="flex gap-2.5 items-center">
                        <FaMoon className='dropdown-icon' />
                        <span className='text-gray-800 text-b-13-14-400'>Dark Mode</span>
                    </div>
                    <Switch status={darkMode} setSwitch={() => setDarkMode(!darkMode)} size='small' />


                </div>

                <div className=" p-5">
                    <div className="flex border rounded-md border-gray-500 h-8 items-center justify-center cursor-pointer hover:bg-primary text-animation hover: group">
                        <span className='text-gray-700 text-b-12-12-500 group-hover:text-white text-animation'>Login out</span>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default User