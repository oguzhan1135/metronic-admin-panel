import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import Card from '@components/card/card'
import { CiCircleCheck } from "react-icons/ci"
import PasswordChange from '@assets/password-change.svg'
import { FaChalkboardUser, FaFacebook, FaUsers } from "react-icons/fa6"
import { GiAbstract092 } from "react-icons/gi"
import { useState } from "react"
import Switch from "@components/switch"
import { IoLocationOutline, IoShieldCheckmark } from "react-icons/io5"
import { FaRegCheckCircle } from "react-icons/fa"
import { BsApple } from "react-icons/bs"
import { FcAndroidOs, FcGoogle } from "react-icons/fc"
import { MdOutlineEditNote } from "react-icons/md"
import { IoIosLogOut } from "react-icons/io"
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Cody from '@assets/cody-fisher.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import { HiOutlineDotsVertical } from "react-icons/hi"
import Chrome from '@assets/chrome.svg'
import Spain from '@assets/spain.svg'
import France from '@assets/france.svg'
import { GoShieldSlash } from "react-icons/go"
import { CgPassword } from "react-icons/cg"
import { TbShieldSearch } from "react-icons/tb"
import PasswordChangeDark from '@assets/password-change-dark.svg'

const Overview = () => {
    const location = window.location.pathname
    const [members, setMembers] = useState(false)
    const [integration, setIntegration] = useState(false)
    const [locations, setLocations] = useState(true)
    const [profile, setProfile] = useState(true)
    const [recovery, setRecovery] = useState(false)
    const [verification, setVerification] = useState(true)


    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Security Overview</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization </span>
                </div>
                <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-coal-300 text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Order History
                </a>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">
                    {/* Password Change */}
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="Review Security Tips"
                        content={

                            <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-10 py-[50px]">
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-1 max-w-[280px]">
                                        <span className='text-gray-900 text-h-22-22-600'>Essential Personal Security Tips
                                            for Enhanced Safety</span>
                                    </div>

                                    <p className='max-w-[437px] text-b-14-22-400 text-gray-700'>
                                        Strengthen digital security with simple, effective, user-friendly strategies for enhanced online protection.
                                    </p>
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-11 pt-1">
                                        <div className="flex flex-col  gap-[15px]">
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <CiCircleCheck className="size-4 text-success" />
                                                <span className="text-b-14-14-400 text-gray-900">Strong Passwords</span>
                                            </div>
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <CiCircleCheck className="size-4 text-success" />
                                                <span className="text-b-14-14-400 text-gray-900">Budget-Friendly</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col  gap-[15px]">
                                            <div className="flex flex-row items-center gap-[5px] ">
                                                <CiCircleCheck className="size-4 text-success" />
                                                <span className="text-b-14-14-400 text-gray-900">Two-Factor Authentication</span>
                                            </div>
                                            <div className="flex flex-row items-center gap-[5px]">
                                                <CiCircleCheck className="size-4 text-success" />
                                                <span className="text-b-14-14-400 text-gray-900">Fresh Look</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <img src={PasswordChange} alt="password-change" className="dark:hidden" />
                                <img src={PasswordChangeDark} alt="password-change" className="dark:flex hidden" />
                            </div>
                        }
                    />

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
                                        <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-coal-300 text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer dark:bg-gray-300">
                                            Setup
                                        </a>
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
                                            <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-danger-light text-b-12-12-500 text-danger border border-danger border-opacity-20 gap-1 cursor-pointer">
                                                Disable all
                                            </a>
                                            <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-coal-300 text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer dark:bg-gray-300">
                                                Enable all
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </>
                        }
                    />

                    {/* Authentication */}

                    <Card
                        title="Authentication"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col">



                                    <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                        <div className="flex flex-row items-center ">
                                            <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Password</span>
                                            <span className="text-b-13-14-400 text-gray-700">Password last changed 2 months ago</span>
                                        </div>
                                        <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                            <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                        <div className="flex flex-row items-center ">
                                            <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">2FA</span>
                                            <span className="text-b-13-14-400 text-gray-700">To be set</span>
                                        </div>
                                        <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 mr-1">Setup</Link>
                                    </div>
                                    <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                        <div className="flex flex-row items-center ">
                                            <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Sign-in with</span>

                                            <div className="flex flex-row items-center gap-2.5">
                                                <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                    <FcGoogle />
                                                </div>
                                                <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                    <FaFacebook className="text-[#3C5A9A]" />
                                                </div>
                                                <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                    <BsApple className="dark:text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                            <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }

                    />
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
                                                    <IoShieldCheckmark className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Enforce two-step verification</span>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Add an extra layer of security with two-step verification.</span>
                                            </div>
                                        </div>
                                        <Switch setSwitch={() => setVerification(!verification)} size="medium" status={verification} />
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
                                                    <IoIosLogOut className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <div className="flex flex-row items-center gap-[6px]">
                                                    <span className="text-b-14-14-500 text-gray-900">Logout everyone</span>
                                                </div>
                                                <span className="text-b-13-14-400 text-gray-700">Instantly sign out all users from all devices.</span>
                                            </div>
                                        </div>
                                        <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-coal-300 text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer dark:bg-gray-300">
                                            Logout everyone
                                        </a>
                                    </div>

                                </div>
                            </>
                        }
                    />

                    {/* Login Sessions */}
                    <Card
                        title="Login Sessions"
                        dotStatus={true}
                        buttonStatus={true}
                        buttonTitle="View 64 more"
                        content={
                            <>
                                <div className="flex flex-col overflow-hidden ">

                                    <div className="flex flex-col overflow-x-auto">
                                        <table className=" border-collapse  min-w-[600px]">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="px-[30px] py-[13px] text-left">
                                                        <span className="text-b-13-14-400 text-gray-700">Name</span>
                                                    </th>
                                                    <th className="px-[30px] py-[13px] text-right">
                                                        <span className="text-b-13-14-400 text-gray-700">Location</span>
                                                    </th>
                                                    <th className="px-[30px] py-[13px] text-right">
                                                        <span className="text-b-13-14-400 text-gray-700">Recent activity</span>
                                                    </th>

                                                    <th className="px-[30px] py-[13px] text-right">

                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b">
                                                    <td className="py-4 pl-[30px] pr-5">
                                                        <div className="flex flex-row gap-2.5 items-center">
                                                            <img src={Tyler} alt="" className='' />
                                                            <div className="flex flex-col gap-2">
                                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Tyler Hero</Link>
                                                                <span className='text-b-12-12-400 text-gray-700'>26 connections</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">New Zealand</td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">Current session</td>
                                                    <td className="">
                                                        <button className="p-2 hover:bg-gray-200 w-max rounded-md">
                                                            <HiOutlineDotsVertical className="text-gray-600" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-4 pl-[30px] pr-5">
                                                        <div className="flex flex-row gap-2.5 items-center">
                                                            <img src={Esther} alt="" className='' />
                                                            <div className="flex flex-col gap-2">
                                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Esther Howard</Link>
                                                                <span className='text-b-12-12-400 text-gray-700'>639 connections</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">Canada</td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">Week ago</td>
                                                    <td className="">
                                                        <button className="p-2 hover:bg-gray-200 w-max rounded-md">
                                                            <HiOutlineDotsVertical className="text-gray-600" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-4 pl-[30px] pr-5">
                                                        <div className="flex flex-row gap-2.5 items-center">
                                                            <img src={Cody} alt="" className='' />
                                                            <div className="flex flex-col gap-2">
                                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Jacob Jones</Link>
                                                                <span className='text-b-12-12-400 text-gray-700'>125 connections</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">Malaysia</td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">Today, 9:53 am</td>
                                                    <td className="">
                                                        <button className="p-2 hover:bg-gray-200 w-max rounded-md">
                                                            <HiOutlineDotsVertical className="text-gray-600" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-4 pl-[30px] pr-5">
                                                        <div className="flex flex-row gap-2.5 items-center">
                                                            <img src={Tyler} alt="" className='' />
                                                            <div className="flex flex-col gap-2">
                                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Cody Fisher</Link>
                                                                <span className='text-b-12-12-400 text-gray-700'>81 connections</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">Turkey</td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">Current session</td>
                                                    <td className="">
                                                        <button className="p-2 hover:bg-gray-200 w-max rounded-md">
                                                            <HiOutlineDotsVertical className="text-gray-600" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-4 pl-[30px] pr-5">
                                                        <div className="flex flex-row gap-2.5 items-center">
                                                            <img src={Arlene} alt="" className='' />
                                                            <div className="flex flex-col gap-2">
                                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Leslie Alexander</Link>
                                                                <span className='text-b-12-12-400 text-gray-700'>1203 connections</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">United States</td>
                                                    <td className="text-right pr-10 text-b-14-14-400 text-gray-800">Month ago</td>
                                                    <td className="">
                                                        <button className="p-2 hover:bg-gray-200 w-max rounded-md">
                                                            <HiOutlineDotsVertical className="text-gray-600" />
                                                        </button>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </>
                        }
                    />
                    {/* Trusted Device */}
                    <Card
                        title="Trusted Device"
                        dotStatus={true}
                        buttonStatus={true}
                        buttonTitle="Manage Trusted Device"
                        content={
                            <>
                                <div className="flex flex-col">
                                    <div className="flex flex-row justify-between items-center px-[30px] py-5 border-b">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Chrome} alt="chrome" />
                                            <div className="flex flex-col gap-1">
                                                <a href="#" className="hover:text-primary text-animation text-gray-900 text-b-14-14-500">Chrome</a>
                                                <div className="flex flex-row items-center gap-1">
                                                    <span className="text-b-13-14-400 text-gray-700">Seville, Spain</span>
                                                    <img src={Spain} alt="spain" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <span className="text-b-13-14-400 text-gray-700">MacOS 12.19.6</span>
                                            <span className="text-b-13-14-400 text-gray-700">Active: Today at 9:03 AM</span>
                                        </div>
                                        <a href="#" className="p-[7px] hover:bg-gray-100 rounded-md">
                                            <IoIosLogOut className="size-[18px] text-gray-600" />
                                        </a>
                                    </div>
                                    <div className="flex flex-row justify-between items-center px-[30px] py-5 ">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Chrome} alt="chrome" />
                                            <div className="flex flex-col gap-1">
                                                <a href="#" className="hover:text-primary text-animation text-gray-900 text-b-14-14-500">Chrome</a>
                                                <div className="flex flex-row items-center gap-1">
                                                    <span className="text-b-13-14-400 text-gray-700">Lyon, France</span>
                                                    <img src={France} alt="france" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <span className="text-b-13-14-400 text-gray-700">Android 14.35</span>
                                            <span className="text-b-13-14-400 text-gray-700">Active: Mar 18 at 9:03 AM</span>
                                        </div>
                                        <a href="#" className="p-[7px] hover:bg-gray-100 rounded-md">
                                            <IoIosLogOut className="size-[18px] text-gray-600" />
                                        </a>
                                    </div>
                                </div>
                            </>
                        }
                    />

                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}

                    {/* IOS */}
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="px-[30px] py-5 flex flex-row items-center justify-between">
                                    <div className="flex flex-row items-center gap-2.5">
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
                                                <BsApple className="dark:text-white text-black size-[22px]" />
                                            </div>

                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-gray-900 text-b-16-16-500" >IOS</span>
                                            <span className="text-b-13-14-400 text-gray-700">Active Sessions</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-800 text-h-24-24-600">24</span>
                                </div>
                            </>
                        }
                    />
                    {/* Android */}
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="px-[30px] py-5 flex flex-row items-center justify-between">
                                    <div className="flex flex-row items-center gap-2.5">
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
                                                <FcAndroidOs className="size-[22px]" />
                                            </div>

                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-gray-900 text-b-16-16-500" >Android</span>
                                            <span className="text-b-13-14-400 text-gray-700">Active Sessions</span>
                                        </div>
                                    </div>
                                    <span className="text-gray-800 text-h-24-24-600">35</span>
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
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
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
                                            <GoShieldSlash className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Enhancing Security Knowledge: Guides, Tips, and Documentation</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Explore comprehensive resources to strengthen security understanding through detailed guides, expert tips, and documentation.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">

                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
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
                                            <CgPassword className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Customized Plans and Simple Billing Solutions</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Offering an array of plans to suit diverse requirements, paired with straightforward, hassle-free billing processes.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
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
                                            <TbShieldSearch className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Comprehensive Plan Options with Streamlined Billing</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Our plans are crafted to cater to various user demands, accompanied by streamlined billing for maximum efficiency and clarity.</p>
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
export default Overview