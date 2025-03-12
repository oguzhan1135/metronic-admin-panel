


import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from '../../../../components/publicProfile/card'
import { MdNotificationsActive, MdOutlinePayment, MdOutlineSecurity } from 'react-icons/md'
import { BiSolidUserDetail } from 'react-icons/bi'
import { FaChartLine, FaDropbox, FaKey, FaSwatchbook, FaUsers } from 'react-icons/fa'
import { LuSquareMousePointer } from 'react-icons/lu'
import { HiOutlineDesktopComputer } from 'react-icons/hi'


const GetStarted = () => {
    const location = window.location.pathname
    const accountCards = [
        {
            title: "Personal info",
            description: "We're open to partnerships, guest posts, promo banners and more.",
            icon: <BiSolidUserDetail className='text-primary size-6' />


        },
        {
            title: "Login & Security",
            description: "Safeguarding your information with strong authentication measures.",
            icon: <MdOutlineSecurity className='text-primary size-6' />

        },
        {
            title: "Billing & Payments",
            description: "Simplify payments today with secure, user-friendly transaction processes.",
            icon: <MdOutlinePayment className='text-primary size-6' />

        },
        {
            title: "Notifications",
            description: "Keep updated with important notices and event reminders.",
            icon: <MdNotificationsActive className='text-primary size-6' />,
        },
        {
            title: "Integrations",
            description: "Enhance Workflows with Advanced Integrations.",
            icon: <FaDropbox className='text-primary size-6' />,
        },
        {
            title: "Members, Teams & Roles",
            description: "Efficient management of members, teams, and roles.",
            icon: <FaUsers className='text-primary size-6' />,
        },
        {
            title: "API Keys",
            description: "Secure and manage your API Keys effectively and efficiently.",
            icon: <FaKey className='text-primary size-6' />,
        },
        {
            title: "Appearance",
            description: "Transforming your online presence with flawless appearance.",
            icon: <LuSquareMousePointer className='text-primary size-6' />,
        },
        {
            title: "Devices",
            description: "Stay ahead with the latest devices and innovations news.",
            icon: <HiOutlineDesktopComputer className='text-primary size-6' />,
        },
        {
            title: "Brand",
            description: "Trending brand designs, identities, and logos.",
            icon: <FaSwatchbook className='text-primary size-6' />,
        },
        {
            title: "Activity",
            description: "Central Hub for Personal Customization.",
            icon: <FaChartLine className='text-primary size-6' />,
        },
    ];
    return (
        <div className="flex flex-col gap-10  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-col gap-[14px]">
                <h1 className='text-gray-900 text-h-24-24-600'>Account</h1>
                <span className='text-b-14-14-500'>Jayson Tatum <a className='text-b-14-14-400 hover:text-primary text-animation'>jaytatum@ktstudio.com</a> <Link to={location} className='text-primary text-b-13-14-500 border-b border-b-primary border-dotted'>Personal Info</Link> </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1">
                {
                    accountCards.map((item) => (
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
                    ))
                }

            </div>
            <div className="flex items-center justify-center">
                <Link to={location} className="border-b-primary border-b border-dotted text-b-13-14-500 text-primary">More Account Options</Link>
            </div>
        </div >
    )
}
export default GetStarted