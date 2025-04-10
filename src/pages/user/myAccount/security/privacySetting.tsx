


import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from '../../../../components/card/card'
import { CiCircleCheck } from "react-icons/ci"
import PasswordChange from '../../../../assets/icon/password-change.svg'
import { FaChalkboardUser, FaFacebook, FaUsers } from "react-icons/fa6"
import { GiAbstract092 } from "react-icons/gi"
import { useState } from "react"
import Switch from "../../../../components/switch"
import { IoLocationOutline, IoSettingsOutline, IoShieldCheckmark, IoTrashOutline } from "react-icons/io5"
import { FaRegCheckCircle, FaToggleOn } from "react-icons/fa"
import { BsApple } from "react-icons/bs"
import { FcAndroidOs, FcGoogle } from "react-icons/fc"
import { MdOutlineEditNote } from "react-icons/md"
import { IoIosLogOut } from "react-icons/io"
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Esther from '../../../../assets/icon/ester-hoeard.svg'
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Arlene from '../../../../assets/icon/arlene-mccoy.svg'
import { HiOutlineDotsVertical } from "react-icons/hi"
import Chrome from '../../../../assets/icon/chrome.svg'
import Spain from '../../../../assets/icon/spain.svg'
import France from '../../../../assets/icon/france.svg'
import { GoShieldSlash } from "react-icons/go"
import { CgPassword } from "react-icons/cg"
import { TbShieldSearch } from "react-icons/tb"
import FAQ from "../../../../components/myAccount/faq"
const PrivacySetting = () => {
    const location = window.location.pathname
    const [members, setMembers] = useState(false)
    const [integration, setIntegration] = useState(false)
    const [locations, setLocations] = useState(true)
    const [profile, setProfile] = useState(true)
    const [recovery, setRecovery] = useState(false)
    const [autoData, setAutoData] = useState(false)


    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Security PrivacySetting</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization </span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Order History
                </button>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">


                    {/* Switch Area */}
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        content={
                            <>
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center justify-between gap-2 px-[30px] py-4 border-b">
                                        <div className="flex flex-row items-center gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <FaUsers className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Prevent members from inviting others</span>
                                                    <div className="flex items-center justify-center px-[5px] py-1 border border-primary border-opacity-20 bg-primary-light rounded-[4px]">
                                                        <span className="text-primary text-b-10-10-500"> Pro</span>
                                                    </div>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Restrict members from sending invites to new potential members.</span>
                                            </div>
                                        </div>
                                        <Switch setSwitch={() => setMembers(!members)} size="medium" status={members} />
                                    </div>
                                    <div className="flex flex-row items-center justify-between gap-2 px-[30px] py-4 border-b">
                                        <div className="flex flex-row items-center gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <GiAbstract092 className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Prevent members from installing third-party integrations</span>
                                                    <div className="flex items-center justify-center px-[5px] py-1 border border-primary border-opacity-20 bg-primary-light rounded-[4px]">
                                                        <span className="text-primary text-b-10-10-500"> Pro</span>
                                                    </div>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Prohibit the installation of external apps or integrations by members.</span>
                                            </div>
                                        </div>
                                        <Switch setSwitch={() => setIntegration(!integration)} size="medium" status={integration} />
                                    </div>
                                    <div className="flex flex-row items-center justify-between gap-2 px-[30px] py-4 border-b">
                                        <div className="flex flex-row items-center gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <IoLocationOutline className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Allow use location</span>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Enable feature to use and share the user's location.</span>
                                            </div>
                                        </div>
                                        <Switch setSwitch={() => setLocations(!locations)} size="medium" status={locations} />
                                    </div>
                                    <div className="flex flex-row items-center justify-between gap-2 px-[30px] py-4 border-b">
                                        <div className="flex flex-row items-center gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <GiAbstract092 className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Push protection for yourself</span>
                                                    <div className="flex items-center justify-center px-[5px] py-1 border border-info border-opacity-20 bg-info-light rounded-[4px]">
                                                        <span className="text-info text-b-10-10-500"> Beta</span>
                                                    </div>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Enable users to create and display a profile publicly.</span>
                                            </div>
                                        </div>
                                        <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                            Setup
                                        </button>
                                    </div>
                                    <div className="flex flex-row items-center justify-between gap-2 px-[30px] py-4 border-b">
                                        <div className="flex flex-row items-center gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <FaChalkboardUser className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Allow public profile</span>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Enable users to create and display a profile publicly.</span>
                                            </div>
                                        </div>
                                        <Switch setSwitch={() => setProfile(!profile)} size="medium" status={profile} />
                                    </div>
                                    <div className="flex flex-row items-center justify-between gap-2 px-[30px] py-4 border-b">
                                        <div className="flex flex-row items-center gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <FaRegCheckCircle className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Account recovery</span>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Facilitate a secure process for recovering lost user accounts.</span>
                                            </div>
                                        </div>
                                        <Switch setSwitch={() => setRecovery(!recovery)} size="medium" status={recovery} />
                                    </div>
                                    <div className="flex flex-row items-center justify-between gap-2 px-[30px] py-4 border-b">
                                        <div className="flex flex-row items-center gap-[14px]">
                                            <div className="relative size-[50px] shrink-0">
                                                <svg className="w-full h-full stroke-gray-300 fill-gray-100" fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                                    </path>
                                                    <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                                    </path>
                                                </svg>
                                                <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                                    <GiAbstract092 className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Push protection for yourself</span>
                                                    <div className="flex items-center justify-center px-[5px] py-1 border border-info border-opacity-20 bg-info-light rounded-[4px]">
                                                        <span className="text-info text-b-10-10-500"> Beta</span>
                                                    </div>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Enable users to create and display a profile publicly.</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-danger-light text-b-12-12-500 text-danger border border-danger border-opacity-20 gap-1 cursor-pointer">
                                                Disable all
                                            </button>
                                            <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                                Enable all
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </>
                        }
                    />
                    <div className="grid grid-cols-2 gap-[30px]">
                        {/* Report Sharing Settings */}

                        <div className="col-span-1">
                            <Card
                                title="Report Sharing Settings"
                                dotStatus={false}
                                buttonStatus={false}
                                content={
                                    <>
                                        <div className="flex flex-col">
                                            <div className="px-[30px] py-5 border-b flex flex-row items-center justify-between">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-900 text-b-14-14-500">Ony invited People</span>
                                                    <span className="text-b-13-14-400 text-gray-700">Invite selected people via email.</span>
                                                </div>
                                                <input type="radio" name="only" id="only" className="size-[22px]" />
                                            </div>
                                            <div className="px-[30px] py-5 border-b flex flex-row items-center justify-between">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-900 text-b-14-14-500">People with the link</span>
                                                    <span className="text-b-13-14-400 text-gray-700">Create a pubic link for your report.</span>
                                                </div>
                                                <input type="radio" name="only" id="only" className="size-[22px]" />
                                            </div>
                                            <div className="px-[30px] py-5 border-b flex flex-row items-center justify-between">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-900 text-b-14-14-500">No one</span>
                                                    <span className="text-b-13-14-400 text-gray-700">Reports will be visible only for you..</span>
                                                </div>
                                                <input type="radio" name="only" id="only" className="size-[22px]" />
                                            </div>
                                        </div>
                                    </>
                                }
                            />
                        </div>

                        {/* Manage your Data */}
                        <div className="col-span-1">
                            <Card
                                title="Manage your Data"
                                dotStatus={false}
                                buttonStatus={false}
                                content={
                                    <>
                                        <div className="flex flex-col">
                                            <div className="px-[30px] py-5 border-b flex flex-row items-center justify-between">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-900 text-b-14-14-500">Download your data</span>
                                                    <span className="text-b-13-14-400 text-gray-700">Add an extra layer of security.</span>
                                                </div>
                                                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                                    Start
                                                </button>
                                            </div>
                                            <div className="px-[30px] py-5 border-b flex flex-row items-center justify-between">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-900 text-b-14-14-500">Delete all of your data</span>
                                                    <span className="text-b-13-14-400 text-gray-700">Instantly sign out all services.</span>
                                                </div>
                                                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                                    Delete
                                                </button>
                                            </div>
                                            <div className="px-[30px] py-5 border-b flex flex-row items-center justify-between">
                                                <div className="flex flex-col gap-2">
                                                    <span className="text-gray-900 text-b-14-14-500">Auto Data Purge</span>
                                                    <span className="text-b-13-14-400 text-gray-700">Toggle automatic deletion of old data.</span>
                                                </div>
                                                <Switch status={autoData} setSwitch={() => setAutoData(!autoData)} size="medium" />
                                            </div>
                                        </div>
                                    </>
                                }
                            />
                        </div>

                    </div>

                    {/* FAQ */}
                    <FAQ />

                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}

                    {/* Block List */}

                    <Card
                        title="Block list"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-5 px-[30px] py-5">
                                    <p className="text-b-14-22-400 text-gray-800">Users on the block list are unable to send chat requests or messages to you.</p>
                                    <div className="flex flex-row items-center ">
                                        <input type="text" className=" rounded-l-md outline-none text-13-14-400 w-full border-t border-l border-b px-3 py-[10px] text-gray-800" placeholder="Block new user" />
                                        <button className="bg-primary rounded-tr-md rounded-br-md py-[13px] px-[14px] text-white text-b-13-14-500">Add</button>
                                    </div>
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Arlene} alt="arlene" className="size-9 grayscale" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className="text-gray-900 hover:text-primary text-animation text-b-14-14-500">Esther Howard</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">6 commits</span>
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-gray-200 rounded-md">
                                                <IoTrashOutline className="size-4 text-gray-600" />
                                            </button>
                                        </div>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Tyler} alt="tyler" className="size-9 grayscale" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className="text-gray-900 hover:text-primary text-animation text-b-14-14-500">Tyler Hero</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">29 commits</span>
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-gray-200 rounded-md">
                                                <IoTrashOutline className="size-4 text-gray-600" />
                                            </button>
                                        </div>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Esther} alt="esther" className="size-9 grayscale" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className="text-gray-900 hover:text-primary text-animation text-b-14-14-500">Arlene McCoy</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">34 commits</span>
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-gray-200 rounded-md">
                                                <IoTrashOutline className="size-4 text-gray-600" />
                                            </button>
                                        </div>
                                        <div className="flex flex-row items-center justify-between">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Cody} alt="cody" className="size-9 grayscale" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className="text-gray-900 hover:text-primary text-animation text-b-14-14-500">Cody Fisher</Link>
                                                    <span className="text-b-12-12-400 text-gray-700">1 commits</span>
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-gray-200 rounded-md">
                                                <IoTrashOutline className="size-4 text-gray-600" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    />

                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={<>
                            <div className="flex flex-col px-[30px] ">
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-[#ffdac5]  fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <FaToggleOn  className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Fortifying Privacy Controls: Customization and Guidelines</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Enhance your privacy framework with customizable settings. Understand and apply robust controls with our comprehensive guidelines to protect member data.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">

                                    <div className="relative size-[50px] shrink-0">
                                    <svg className="w-full h-full stroke-[#ffdac5]  fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
            18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
            39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
            18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
            39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <IoSettingsOutline  className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Navigating Privacy Preferences: Secure Configuration Tools</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Take command of your privacy settings with our secure configuration tools. Detailed resources and expert insights ensure your preferences are set for maximum protection.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div >
    )
}
export default PrivacySetting