import ExampleUser from '../../../assets/icon/example-user.svg'
import { FaChevronRight } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import Switch from '../../switch';
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaMoneyBill, FaMoon, FaRegUserCircle, FaRocket } from 'react-icons/fa';
import { GoCodeReview } from 'react-icons/go';
import FlagUSA from '../../../assets/icon/united-states.svg'
import { BsPersonVcard } from 'react-icons/bs';
import { IoSettingsSharp } from 'react-icons/io5';
import { RiShieldUserLine } from 'react-icons/ri';
import { CgScan } from 'react-icons/cg';
import { GiAbstract039 } from 'react-icons/gi';
import FlagFrench from '../../../assets/icon/france.svg'
import FlagSpanish from '../../../assets/icon/spain.svg'
import FlagJapan from '../../../assets/icon/japan.svg'
import FlagGerman from '../../../assets/icon/germany.svg'

const User = () => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });
    const [notification, setNotification] = useState(false)
    const [myAccountSubmenu, setMyAccountSubMenu] = useState(false)
    const [language, setLanguage] = useState([

        {
            language: "English",
            flag: <img className='size-[18px]' src={FlagUSA} />
        },
        {
            language: "Spanish",
            flag: <img src={FlagSpanish} />
        },
        {
            language: "German",
            flag: <img src={FlagGerman} />
        },
        {
            language: "Japan",
            flag: <img src={FlagJapan} />
        },
        {
            language: "French",
            flag: <img src={FlagFrench} />
        }
    ])
    const [selectedLanguage, setSelectedLanguage] = useState({
        language: "English",
        flag: <img className='size-[18px]' src={FlagUSA} />
    })
    const [languageSubMenu, setLanguageSubMenu] = useState(false)

    const toggleDarkMode = () => {
        const currentTheme = document.documentElement.classList.contains('dark');
        const newTheme = currentTheme ? 'light' : 'dark';

        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <div className="absolute top-12 right-0 w-64">
            <div className="flex bg-white dark:bg-coal-300 rounded-xl border-gray-300 border  flex-col">
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
                        <div className="w-7 h-5 bg-primary-light bg-opacity-20 flex items-center justify-center rounded">
                            <span className='text-b-10-10-500 text-primary'>Pro</span>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 pb-2 ">
                    <div className="px-2 pt-2">
                        <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                            <BsPersonVcard className='dropdown-icon  group-hover:text-primary' />

                            <span className='text-gray-800 text-b-13-14-400 '>Public Profile</span>
                        </div>
                    </div>

                    <div className="px-2">
                        <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md">
                            <FaRegUserCircle className='dropdown-icon group-hover:text-primary' />

                            <span className='text-gray-800 text-b-13-14-400'>My Profile</span>
                        </div>
                    </div>

                    <div
                        onMouseEnter={() => setMyAccountSubMenu(true)}
                        onMouseLeave={() => setMyAccountSubMenu(false)}
                        className="relative px-2"
                    >
                        <div className="flex flex-row items-center px-3 py-3 cursor-pointer hover:bg-gray-100 rounded-md justify-between">
                            <div className="flex flex-row items-center gap-2.5">
                                <IoSettingsSharp className="dropdown-icon group-hover:text-primary" />
                                <span className="text-gray-800 text-b-13-14-400">My Account</span>
                            </div>
                            <FaChevronRight className="dropdown-icon" />
                        </div>

                        {myAccountSubmenu && (
                            <div className="absolute w-56 flex right-[254px] -top-14 rounded-xl bg-white dark:bg-coal-300 border">
                                <div className="flex flex-col w-full">
                                    <div className="flex flex-col p-3 border-b w-full">
                                        <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                            <FaRocket className="dropdown-icon" />
                                            <span className="text-gray-800 text-b-13-14-400">Get Started</span>
                                        </div>
                                        <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                            <FaRegUserCircle className="dropdown-icon" />
                                            <span className="text-gray-800 text-b-13-14-400">My Profile</span>
                                        </div>
                                        <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                            <FaMoneyBill className="dropdown-icon" />
                                            <span className="text-gray-800 text-b-13-14-400">Billing</span>
                                        </div>
                                        <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                            <RiShieldUserLine className="dropdown-icon size-8" />
                                            <span className="text-gray-800 text-b-13-14-400">Security</span>
                                        </div>
                                        <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                            <CgScan className="dropdown-icon" />
                                            <span className="text-gray-800 text-b-13-14-400">Members & Roles</span>
                                        </div>
                                        <div className="flex flex-row items-center px-2 py-2 hover:bg-gray-100 rounded-md gap-2.5">
                                            <GiAbstract039 className="dropdown-icon" />
                                            <span className="text-gray-800 text-b-13-14-400">Integrations</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center px-5 py-4 hover:bg-gray-100 rounded-md">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <IoIosNotifications className="dropdown-icon" />
                                            <span className="text-gray-800 text-b-13-14-400">Notifications</span>
                                        </div>
                                        <Switch
                                            status={notification}
                                            setSwitch={() => setNotification(!notification)}
                                            size="small"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="px-2">
                        <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md ">
                            <GoCodeReview className='dropdown-icon group-hover:text-primary' />
                            <span className='text-gray-800 text-b-13-14-400'>Devs Forum</span>
                        </div>
                    </div>

                    <div className="px-2 relative" onMouseEnter={() => setLanguageSubMenu(true)}
                        onMouseLeave={() => setLanguageSubMenu(false)}>
                        <div className="flex flex-row justify-between items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md">
                            <div className="flex items-center gap-2.5">
                                <TbWorld className='dropdown-icon group-hover:text-primary' />
                                <span className='text-gray-800 text-b-13-14-400'>Language</span>
                            </div>

                            <div className="bg-gray-100 border border-gray-300 rounded-md p-2">
                                <div className="flex flex-row items-center gap-[6px]">
                                    <span className='text-gray-600 text-b-10-10-500'>{selectedLanguage.language}</span>
                                    <div className="size-[14px]">
                                        {selectedLanguage.flag}
                                    </div>


                                </div>
                            </div>
                        </div>
                        {
                            languageSubMenu && (
                                <div className="absolute w-44 flex  right-[254px] -top-0 rounded-xl bg-white dark:bg-coal-300 border flex-col py-2">
                                    {
                                        language.map((item, index) => (
                                            <div key={index} className="px-2 w-full" onClick={() => setSelectedLanguage({ language: item.language, flag: item.flag })}>
                                                <div className="rounded-md px-3 py-2 flex flex-row justify-between hover:bg-gray-100 cursor-pointer items-center">
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        {item.flag}
                                                        <span className='text-b-13-14-400 text-gray-800'>{item.language}</span>
                                                    </div>
                                                    {
                                                        selectedLanguage.language === item.language ?
                                                            <FaCheckCircle className='size-4 text-success' /> : null
                                                    }

                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            )
                        }

                    </div>


                </div>
                <div className="flex flex-row justify-between items-center px-5 pt-5 ">
                    <div className="flex gap-2.5 items-center">
                        <FaMoon className='dropdown-icon' />
                        <span className='text-gray-800 text-b-13-14-400'>Dark Mode</span>
                    </div>
                    <Switch status={darkMode} setSwitch={() => { setDarkMode(!darkMode); toggleDarkMode() }} size='small' />


                </div>

                <div className=" p-5">
                    <div className="flex border rounded-md border-gray-300 h-8 items-center justify-center cursor-pointer hover:bg-primary text-animation hover: group">
                        <span className='text-gray-700 text-b-12-12-500 group-hover:text-white text-animation'>Login out</span>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default User