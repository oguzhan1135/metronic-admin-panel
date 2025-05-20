import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import Card from '@components/card/card'
import { FaChartLine, FaRegEye } from 'react-icons/fa'
import { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { TbFaceId } from "react-icons/tb"
import { Ri24HoursLine } from "react-icons/ri"
import { FaRocket } from "react-icons/fa6"
import React from "react"

interface Role {
    id: number;
    iconColor: string;
    icon: React.ReactElement;
    role: string;
    roleType: string;
    description: string;
    memberCount: number;
}
const getFillClass = (color: string) => {
    switch (color) {
        case "primary":
            return "fill-primary-light stroke-[#97c8ff] stroke-opacity-20 "
        case "success":
            return "fill-success-light stroke-[#94e6b0] stroke-opacity-20"
        case "danger":
            return "fill-danger-light stroke-[#fca8bd] stroke-opacity-20"
        case "info":
            return "fill-info-light stroke-[#c0a8f6] stroke-opacity-20"
        case "[#FF6F1E]":
            return "fill-[#D74E00] dark:opacity-20 stroke-[#ffe2d2] stroke-opacity-20"
        default:
            return "fill-gray-100 stroke-gray-300 stroke-opacity-20"
    }
}

const Roles = () => {
    const location = window.location.pathname


    const [roles, setroles] = useState<Role[]>([
        {
            id: 1,
            role: "Administrator",
            roleType: "Default Role",
            description: "Manages system settings and user access, ensures system stability.",
            memberCount: 1,
            iconColor: "primary",
            icon: <IoSettingsOutline className="size-5 text-primary" />
        },
        {
            id: 2,
            role: "Viewer",
            roleType: "Default Role",
            description: "Can view data but doesn't have editing privileges.",
            memberCount: 32,
            iconColor: "[#FF6F1E]",
            icon: <FaRegEye className="size-5 text-[#FF6F1E]" />
        },
        {
            id: 3,
            role: "Remote Developer",
            roleType: "Remote Role",
            description: "Codes and develops software from a remote location.",
            memberCount: 6,
            iconColor: "success",
            icon: <TbFaceId className="size-5 text-success" />
        },
        {
            id: 4,
            role: "Customer Support",
            roleType: "Default Role",
            description: "Provides assistance and resolves customer inquiries and issues.",
            memberCount: 32,
            iconColor: "danger",
            icon: <Ri24HoursLine className="size-5 text-danger" />
        },
        {
            id: 5,
            role: "Project Manager",
            roleType: "Default Role",
            description: "Oversees projects, ensures they're on time and within budget.",
            memberCount: 6,
            iconColor: "info",
            icon: <FaChartLine className="size-5 text-info" />
        },
        {
            id: 6,
            role: "Remote Designer",
            roleType: "Remote Role",
            description: "Creates visual designs remotely for various projects.",
            memberCount: 6,
            iconColor: "gray-300",
            icon: <IoSettingsOutline className="size-5 text-gray-600" />
        },
        {
            id: 7,
            role: "HR Manager",
            roleType: "Default Role",
            description: "Manages human resources, recruitment, and employee relations.",
            memberCount: 1,
            iconColor: "success",
            icon: <IoSettingsOutline className="size-5 text-success" />
        },

    ])

    return (
        <div className="flex flex-col gap-10  ">
            {/* {Sub  menu} */}
            <Menu />

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Roles</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Overview of all team members and roles.</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    New Role
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1">
                {
                    roles.map((item) => (
                        <React.Fragment key={item.id}>
                            <Card
                                dotStatus={true}
                                titleContent={
                                    <>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="relative size-[44px] shrink-0">
                                                <svg className={`w-full h-full ${getFillClass(item.iconColor)}`} fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
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
                                                    {item.icon}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-[6px]">
                                                <Link to={location} className='text-b-16-16-500 text-gray-900 hover:text-primary text-animation'>{item.role}</Link>
                                                <p className='text-b-13-14-400 text-gray-700'>{item.roleType}</p>
                                            </div>
                                        </div>
                                    </>
                                }
                                content={
                                    <div className="flex flex-col gap-5 px-[30px] pb-[30px] pt-5">
                                        <p className='text-b-13-20-400 text-gray-700'>{item.description}</p>
                                        <span className="text-b-13-14-400 text-gray-800">{item.memberCount} person</span>
                                    </div>
                                }
                                buttonStatus={false}
                            />
                        </React.Fragment>
                    ))
                }

                <button className="flex border-[3px] border-dotted border-orange-500 bg-mask justify-center items-center flex-col gap-5 h-full p-10 rounded-xl border-opacity-20">
                    <div className="flex flex-col gap-2.5 items-center">
                        <div className="relative size-[60px] shrink-0">
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
                                <FaRocket className="text-[#FF6F1E] size-[22px]" />
                            </div>
                        </div>
                        <span className="text-h-22-22-600 text-gray-900">Add New Role</span>
                        <span className="text-b-14-14-400 text-gray-700">Ignite Professional Adventures</span>
                    </div>
                </button>

            </div>
        </div >
    )
}
export default Roles