import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from '../../../../components/card/card'
import Switch from "../../../../components/switch"
import { useState } from "react"
import { TbCategory } from "react-icons/tb"
import { LuSquareMousePointer } from "react-icons/lu"
import { FaRegMap, FaToggleOff } from "react-icons/fa6"
import { FaRegUserCircle } from "react-icons/fa"
import { IoKeyOutline, IoShieldCheckmarkOutline } from "react-icons/io5"
import { BsCreditCard2Back } from "react-icons/bs"
import { CiExport, CiShop } from "react-icons/ci"
import PermissionTable from "../../../../components/myAccount/tables/permissionToggleTable"
import FAQ from "../../../../components/myAccount/faq"
import Questions from "../../../../components/myAccount/questions"


const PermissionsToggle = () => {
    const location = window.location.pathname

    const [workSpaceSetting, setWorkSpaceSetting] = useState(true)
    const [integrationSetup, setIntegrationSetup] = useState(true)
    const [mapCreation, setMapCreation] = useState(false)
    const [userRoles, setUserRoles] = useState(true)
    const [insightsAccess, setInsghtsAccess] = useState(false)
    const [billingManagament, setBillingManagament] = useState(false)
    const [permissionsControl, setPermissionsControl] = useState(false)
    const [dataExport, setDataExport] = useState(true)
    const [securitySetting, setSecuritySetting] = useState(true)
    const [merchantList, setMerchantList] = useState(false)


    return (
        <div className="flex flex-col gap-10  ">
            {/* {Sub  menu} */}
            <Menu />

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Permissions -Toggle</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Overview of all team members and roles.</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    View Roles
                </button>
            </div>
            <div className="flex flex-col gap-[30px]">

                {/* Switch area */}

                <Card
                    title={<span className="text-b-16-16-600 text-gray-900">Role Permissions for <Link to={location} className="text-primary text-b-16-16-600">Project Manager</Link> </span>}
                    dotStatus={false}
                    buttonStatus={false}
                    content={
                        <>
                            <div className="flex flex-col">
                                <div className="grid grid-cols-1 md:grid-cols-2  gap-[30px] ">
                                    <div className="col-span-1  py-[30px] md:pl-[30px] px-[30px] md:px-0">
                                        <div className="flex flex-col gap-5">
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
                                                            <TbCategory className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Workspace Settings</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Users may view and update the settings of the workspace.</span>
                                                    </div>
                                                </div>
                                                <Switch setSwitch={() => setWorkSpaceSetting(!workSpaceSetting)} size="medium" status={workSpaceSetting} />
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
                                                            <LuSquareMousePointer className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Integration Setup</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Manage user integrations and associated tags.</span>
                                                    </div>
                                                </div>
                                                <Switch setSwitch={() => setIntegrationSetup(!integrationSetup)} size="medium" status={integrationSetup} />
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
                                                            <FaRegMap className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Map Creation</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Initiate new mapping projects within workspace.</span>
                                                    </div>
                                                </div>
                                                <Switch size="medium" status={mapCreation} setSwitch={() => setMapCreation(!mapCreation)} />
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
                                                            <FaRegUserCircle className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">User Roles</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Update roles and permissions for map users.</span>
                                                    </div>
                                                </div>
                                                <Switch size="medium" status={userRoles} setSwitch={() => setUserRoles(!userRoles)} />
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
                                                            <IoKeyOutline className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Insights Access</span>
                                                        <span className="text-b-13-14-400 text-gray-700">View workspace analytics and performance data.</span>
                                                    </div>
                                                </div>
                                                <Switch size="medium" status={insightsAccess} setSwitch={() => setInsghtsAccess(!insightsAccess)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1  py-[30px] md:pr-[30px] px-[30px] md:px-0">
                                        <div className="flex flex-col gap-5">
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
                                                            <BsCreditCard2Back className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Billing Management</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Users are authorized to review, update subscriptions.</span>
                                                    </div>
                                                </div>
                                                <Switch size="medium" status={billingManagament} setSwitch={() => setBillingManagament(!billingManagament)} />
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
                                                            <FaToggleOff className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Permissions Control</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Grant or revoke user access and tags.</span>
                                                    </div>
                                                </div>
                                                <Switch size="medium" status={permissionsControl} setSwitch={() => setPermissionsControl(!permissionsControl)} />
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
                                                            <CiExport className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Data Export</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Allow extraction of workspace data for analysis.</span>
                                                    </div>
                                                </div>
                                                <Switch size="medium" status={dataExport} setSwitch={() => setDataExport(!dataExport)} />
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
                                                            <IoShieldCheckmarkOutline className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Security Settings</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Adjust workspace security protocols and measures.</span>
                                                    </div>
                                                </div>
                                                <Switch size="medium" status={securitySetting} setSwitch={() => setSecuritySetting(!securitySetting)} />
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
                                                            <CiShop className="text-gray-500 size-[22px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:items-start items-center gap-[6px]">
                                                        <span className="text-b-14-14-500 text-gray-900">Merchant List</span>
                                                        <span className="text-b-13-14-400 text-gray-700">Update and manage merchant associations.</span>
                                                    </div>
                                                </div>
                                                <Switch size="medium" status={merchantList} setSwitch={() => setMerchantList(!merchantList)} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="border-b border-t py-[14px] flex items-center justify-center">
                                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                        New Permission
                                    </button>
                                </div>
                            </div>

                        </>
                    }
                />

                {/* Team Members Table */}

                <PermissionTable />

                {/* FAQ area */}
                <FAQ />

                {/* Questions area */}
                <Questions />


            </div>


        </div >
    )
}
export default PermissionsToggle