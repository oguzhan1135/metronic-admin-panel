import { Link } from "react-router"
import Menu from "../../../components/myAccount/hoverMenu"
import Card from '../../../components/card/card'
import { useState } from "react"
import FAQ from "../../../components/myAccount/faq"
import Service from '../../../assets/icon/service.svg'
import ServiceDark from '../../../assets/icon/service-dark.svg'
import { FaEdit } from "react-icons/fa"
import { IoIosNotificationsOutline } from "react-icons/io"
import Switch from "../../../components/switch"
import { MdOutlineEmail, MdOutlineMessage } from "react-icons/md"
import { CiDesktop, CiDollar, CiMobile1 } from "react-icons/ci"
import { BiReceipt } from "react-icons/bi"
import { GiAbstract080 } from "react-icons/gi"
import { PiUsersFourThin } from "react-icons/pi"
import { FaListCheck } from "react-icons/fa6"

const Notifications = () => {
    const location = window.location.pathname

    const [teamWideAlert, setTeamWideAlert] = useState(false)
    const [mail, setMail] = useState(true)
    const [mobile, setMobile] = useState(false)
    const [desctop, setDesctop] = useState(true)
    const [teamWideAlertOther, setTeamWideAlertOther] = useState(false)
    const [taskAlert, setTaskAlert] = useState(true)
    const [budgetWarning, setBudgetWarning] = useState(true)
    const [feedBackAlert, setFeedBackAlert] = useState(true)
    const [collaborationRequest, setCollaborationRequest] = useState(true)
    const [statusChange, setStatusChange] = useState(true)

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Notifications</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Privacy Settings
                </button>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">

                    {/* Notifications Channels area */}

                    <Card
                        title="Notification Channels"
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-13-14-500 text-gray-700">Team-Wide Alerts</span>
                                    <Switch status={teamWideAlert} setSwitch={() => setTeamWideAlert(!teamWideAlert)} size="medium" />
                                </div>
                            </>
                        }
                        content={
                            <>
                                <div className="flex flex-col">
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <MdOutlineEmail className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Email</span>
                                                <span className="text-b-13-14-400 text-gray-700">jamescollins@ktstudio.com</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-5">
                                            <div className="p-[6px] hover:bg-gray-200 text-animation rounded-md">
                                                <FaEdit className="text-primary size-4" />
                                            </div>
                                            <Switch size="medium" status={mail} setSwitch={() => setMail(!mail)} />
                                        </div>

                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <CiMobile1 className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Mobile</span>
                                                <span className="text-b-13-14-400 text-gray-700">(225) 555-0118</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-5">
                                            <div className="p-[6px] hover:bg-gray-200 text-animation rounded-md">
                                                <FaEdit className="text-primary size-4" />
                                            </div>
                                            <Switch size="medium" status={mobile} setSwitch={() => setMobile(!mobile)} />
                                        </div>

                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <CiMobile1 className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px] md:items-start items-center">
                                                <span className="text-b-14-14-500 text-gray-900">Slack</span>
                                                <span className="text-b-13-14-400 text-gray-700">Receive instant alerts for messages and updates directly in Slack.</span>
                                            </div>
                                        </div>
                                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                            Connect Slack
                                        </button>

                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <CiDesktop className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Desktop</span>
                                                <span className="text-b-13-14-400 text-gray-700">Enable notifications for real-time desktop alerts.</span>
                                            </div>
                                        </div>
                                        <Switch size="medium" status={desctop} setSwitch={() => setDesctop(!desctop)} />
                                    </div>
                                </div>
                            </>
                        }
                        buttonStatus={false}
                    />

                    {/* Other Notification */}

                    <Card
                        title="Other Notification"
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-13-14-500 text-gray-700">Team-Wide Alerts</span>
                                    <Switch status={teamWideAlertOther} setSwitch={() => setTeamWideAlertOther(!teamWideAlertOther)} size="medium" />
                                </div>
                            </>
                        }
                        content={
                            <>
                                <div className="flex flex-col">
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <FaEdit className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Task Alert</span>
                                                <span className="text-b-13-14-400 text-gray-700">Notification when a task is assigned to you.</span>
                                            </div>
                                        </div>
                                        <Switch size="medium" status={taskAlert} setSwitch={() => setTaskAlert(!taskAlert)} />
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <CiDollar className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Budget Warning</span>
                                                <span className="text-b-13-14-400 text-gray-700">Get notified if nearing budget limit.</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-5">
                                            <div className="p-[6px] hover:bg-gray-200 text-animation rounded-md">
                                                <FaEdit className="text-primary size-4" />
                                            </div>
                                            <Switch size="medium" status={budgetWarning} setSwitch={() => setBudgetWarning(!budgetWarning)} />
                                        </div>

                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <BiReceipt className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px] md:items-start items-center">
                                                <span className="text-b-14-14-500 text-gray-900">Invoice Alert</span>
                                                <span className="text-b-13-14-400 text-gray-700">Alert for new and unpaid invoices.</span>
                                            </div>
                                        </div>
                                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                            View Invoices
                                        </button>

                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <MdOutlineMessage className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Feedback Alert</span>
                                                <span className="text-b-13-14-400 text-gray-700">When a client submits new feedback.</span>
                                            </div>
                                        </div>
                                        <Switch size="medium" status={feedBackAlert} setSwitch={() => setFeedBackAlert(!feedBackAlert)} />
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <PiUsersFourThin className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Collaboration Request</span>
                                                <span className="text-b-13-14-400 text-gray-700">Reminder of scheduled meetings for the day.</span>
                                            </div>
                                        </div>
                                        <Switch size="medium" status={collaborationRequest} setSwitch={() => setCollaborationRequest(!collaborationRequest)} />
                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <GiAbstract080 className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px] md:items-start items-center">
                                                <span className="text-b-14-14-500 text-gray-900">Meeting Reminder</span>
                                                <span className="text-b-13-14-400 text-gray-700">Reminder of scheduled meetings for the day.</span>
                                            </div>
                                        </div>
                                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                            Show Meetings
                                        </button>

                                    </div>
                                    <div className="flex md:flex-row flex-col items-center justify-between gap-2 px-[30px] py-4 border">
                                        <div className="flex md:flex-row items-center flex-col gap-[14px]">
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
                                                    <FaListCheck className="text-gray-500 size-[22px]" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                <span className="text-b-14-14-500 text-gray-900">Status Change</span>
                                                <span className="text-b-13-14-400 text-gray-700">Notifies changes in project or task status.</span>
                                            </div>
                                        </div>
                                        <Switch size="medium" status={statusChange} setSwitch={() => setStatusChange(!statusChange)} />
                                    </div>
                                </div>
                            </>
                        }
                        buttonStatus={false}
                    />

                    {/* FAQ */}
                    <FAQ />

                    {/* Question */}
                    <Card
                        buttonStatus={true}
                        buttonTitle="Contact Support"
                        dotStatus={false}
                        content={
                            <>
                                <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-b-20-30-500 text-gray-900 ">Questions?</span>
                                        <p className=" text-b-14-22-400 text-gray-800">Need assistance? Contact our support team for prompt, personalized help your queries & concerns.</p>
                                    </div>
                                    <img src={Service} alt="service" className="dark:hidden" />
                                    <img src={ServiceDark} alt="service-dark" className="dark:flex hidden" />
                                </div>
                            </>
                        }
                    />

                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}

                    {/* Do not disturb area */}

                    <Card
                        title={"Do Not Disturb"}
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2.5 px-[30px] pt-[30px]">
                                        <p className="text-b-13-20-400 text-gray-800">Activate 'Do Not Disturb' to silence all notifications and focus without interruptions during specified hours or tasks.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                    <div className="border-t py-[14px] flex items-center justify-center">
                                        <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                            <IoIosNotificationsOutline className="size-[14px] text-gray-500" />
                                            Pause Notification
                                        </button>
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
                                            <IoIosNotificationsOutline className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Streamlined Alerts Setup: Custom Notification Preferences</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Tailor your alert preferences with our streamlined setup. Stay informed with notifications that matter to you most.</p>
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
                                            <MdOutlineMessage className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Effective Communication: Instant Notification Tools</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Ensure timely communication with our instant notification tools. Customize alerts to stay ahead in real-time collaboration.</p>
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
                                            <FaListCheck className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Personalized Updates: Smart Alert System</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Control how you receive updates with our smart alert system. Personalize notifications for a more efficient workflow.</p>
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
export default Notifications