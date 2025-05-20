


import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import Card from '@components/card/card'
import { MdDevices, MdOutlineSubtitles } from 'react-icons/md'
import { IoCloudOutline, IoKeyOutline, IoSettingsOutline } from "react-icons/io5"
import { TiWorldOutline } from "react-icons/ti"
import { FiShieldOff } from "react-icons/fi"
import React from "react"


const GetStarted = () => {
    const location = window.location.pathname
    const accountCards = [
        {
            title: "Overview",
            description: "A Broad Perspective on Our Comprehensive Security Features and Policies.",
            icon: <MdOutlineSubtitles className='text-primary size-6' />

        },
        {
            title: "Allowed IP Addresses",
            description: "Specify and Restrict Access Through Authorized IP Address Filtering.",
            icon: <TiWorldOutline className='text-primary size-6' />
        },
        {
            title: "Privacy Settings",
            description: "Customize Your Privacy with User-Controlled Settings and Preferences.",
            icon: <IoSettingsOutline className='text-primary size-6' />
        },
        {
            title: "Trusted Devices",
            description: "Track and Manage Active User Sessions for Security Purposes.",
            icon: <MdDevices className='text-primary size-6' />,
        },
        {
            title: "Backup & Recovery",
            description: "Secure and Efficient Backup Solutions with Reliable Recovery Options.",
            icon: <IoCloudOutline className='text-primary size-6' />,
        },

        {
            title: "Login Sessions",
            description: "Enhance Workflows with Advanced Integrations.",
            icon: <IoKeyOutline className='text-primary size-6' />,
        },
        {
            title: "Security Log",
            description: "Detailed Records of Security Events and Activities for Monitoring.",
            icon: <FiShieldOff className='text-primary size-6' />,
        },

    ];
    return (
        <div className="flex flex-col gap-10  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-col gap-[14px]">
                <h1 className='text-gray-900 text-h-24-24-600'>Security</h1>
                <span className='text-b-14-14-500 text-gray-700'>19 issues need your attention <Link to={location} className='text-primary text-b-13-14-500 border-b border-b-primary border-dotted'>Personal Info</Link> </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1">
                {
                    accountCards.map((item, index) => (
                        <React.Fragment key={index}>
                            <Card
                                dotStatus={true}
                                titleContent={item.icon}
                                content={
                                    <div className="flex flex-col gap-2.5 px-[30px] pb-[30px] pt-5">
                                        <Link to={location} className='text-b-16-16-500 text-gray-900 hover:text-primary text-animation'>{item.title}</Link>
                                        <p className='text-b-13-14-400 text-gray-700'>{item.description}</p>
                                    </div>
                                }
                                buttonStatus={false}
                            />
                        </React.Fragment>
                    ))
                }

            </div>

        </div >
    )
}
export default GetStarted