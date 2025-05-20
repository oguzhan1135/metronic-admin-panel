import { Link } from "react-router"
import { metronicContext } from '@context/layoutContet';
import WelcomeKey from "@assets/welcome-key.svg"
import { BiSolidUserDetail } from 'react-icons/bi';
import { FaDropbox, FaUsers, FaKey, FaSwatchbook, FaChartLine } from 'react-icons/fa6';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { LuSquareMousePointer } from 'react-icons/lu';
import { MdOutlineSecurity, MdOutlinePayment, MdNotificationsActive } from 'react-icons/md';
import Menu from '@components/myAccount/hoverMenu';
import Card from '@components/card/card';
import React from "react";

interface ModalProps {
    children: React.ReactNode;
}

const ModalContent: React.FC<ModalProps> = ({ children }) => {
    const { modalOpen, setModalOpen } = metronicContext()

    if (!modalOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 "
            style={{ zIndex: 10000000000000 }}
            onClick={() => setModalOpen(false)}
        >
            <div
                className="relative bg-light rounded-lg shadow-lg w-[90%] max-w-[1200px] max-h-[800px] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600 z-20"
                    onClick={() => setModalOpen(false)}
                    style={{ zIndex: 9999 }}  // 
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

const WelcomeModal = () => {
    const location = window.location.pathname;
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
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10  ">
                {/* {Sub  menu} */}
                <Menu />
                <div className="flex flex-col gap-[14px]">
                    <h1 className='text-gray-900 text-h-24-24-600'>Account</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Jayson Tatum <a className='text-b-14-14-400 hover:text-primary text-animation'>jaytatum@ktstudio.com</a> <Link to={location} className='text-primary text-b-13-14-500 border-b border-b-primary border-dotted'>Personal Info</Link> </span>
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
                <div className="flex items-center justify-center">
                    <Link to={location} className="border-b-primary border-b border-dotted text-b-13-14-500 text-primary">More Account Options</Link>
                </div>
            </div >
            <ModalContent>
                <div className="flex flex-col gap-[30px] items-center py-10">
                    <img src={WelcomeKey} alt="welcome" />
                    <div className="flex flex-col gap-[14px] items-center">
                        <div className="flex items-center justify-center border rounded-[4px] bg-primary-light border-primary border-opacity-20 p-2">
                            <span className='text-b-11-12-500 text-primary'>500 Error</span>
                        </div>
                        <h3 className='text-h-26-26-600 text-gray-900'>Internal Server Error</h3>
                        <p className='text-b-13-20-400 text-gray-700 text-center'> We're thrilled to have you on board and excited for
                            the journey ahead together.</p>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                        <Link to={"/"} className="flex items-center justify-center rounded-md bg-primary text-white text-b-13-14-500 px-4 py-[13px] w-max">Back to Home</Link>
                        <Link to={"/"} className="flex items-center justify-center rounded-md text-gray-700 text-b-13-14-500 px-4 py-[13px] w-max">Ship the tour</Link>
                    </div>
                </div>
            </ModalContent>
        </div>
    );
};

export default WelcomeModal;
