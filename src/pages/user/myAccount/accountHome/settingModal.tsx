import { GiAbstract080 } from 'react-icons/gi';
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Verify from '../../../../assets/icon/verify.svg'
import { SlLocationPin } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import Card from '../../../../components/card/card';
import { metronicContext } from '../../../../context/layoutContet';
import { FaTrashCan, FaLinkedin, FaApple, FaFacebook, FaCopy } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { IoIosClose } from 'react-icons/io';
import Switch from '../../../../components/switch';
import { useState, useEffect } from 'react';
import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import ExampleUser from '../../../../assets/icon/example-user.svg'
import Camera from '../../../../assets/icon/camera.svg'
import Microsoft from '../../../../assets/icon/microsoft-icon.svg'
import Azure from '../../../../assets/icon/azure.svg'
import OpenID from '../../../../assets/icon/openID.svg'
import DarkBg from '../../../../assets/icon/dark-bg.svg'
import LightTheme from '../../../../assets/icon/light-theme.svg'
import Systemtheme from '../../../../assets/icon/system-theme.svg'
import Slack from '../../../../assets/icon/slack.svg'
import Mail from '../../../../assets/icon/mail.svg'
import UserAccess from '../../../../assets/icon/user-access.svg'
import GoogleDev from '../../../../assets/icon/google-webdev.svg'
import Inferno from '../../../../assets/icon/inferno.svg'
import Equacoin from '../../../../assets/icon/equacoin.svg'
import Evernote from '../../../../assets/icon/evernote.svg'
import Jira from '../../../../assets/icon/jira-work.svg'
import { CiSettings } from "react-icons/ci"
import { IoShieldCheckmark } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';
interface ModalProps {
    children: React.ReactNode;
}

const ModalContent: React.FC<ModalProps> = ({ children }) => {
    const { settingModalOpen, setSettingModalOpen } = metronicContext()

    if (!settingModalOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90  "
            style={{ zIndex: 10000000000000 }}
            onClick={() => setSettingModalOpen(false)}
        >
            <div
                className="relative bg-white dark:bg-coal-300 rounded-lg shadow-lg w-[90%] max-w-[1200px] max-h-[800px] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 text-gray-600 z-20"
                    onClick={() => setSettingModalOpen(false)}
                    style={{ zIndex: 9999 }}  // 
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

const Modal = () => {
    const location = window.location.pathname;
    const [activeSelection, setActiveSelection] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState("");
    const [active, setActive] = useState(true)
    const [primary, setPrimary] = useState(false)
    const [google, setGoogle] = useState(true)
    const [linkedin, setLinkedin] = useState(false)
    const [textMessage, setTextMessage] = useState(true)
    const [authenticator, setAuthenticator] = useState(false)
    const [visible, setVisible] = useState(true)
    const [selectionIntegration, setSelectionIntegration] = useState("Google");
    const [selectionTheme, setSelectionTheme] = useState("Light");
    const [tranparentSidebar, setTransparentSidebar] = useState(true)
    const [slack, setSlack] = useState(true)
    const [mail, setMail] = useState(true)
    const [googleWeb, setGoogleWeb] = useState(true)
    const [equaCoin, setEquaCoin] = useState(false)
    const [evernote, setEvernote] = useState(true)
    const [inferno, setInferno] = useState(true)
    const [jira, setJira] = useState(false)
    const [selectedImage, setSelectedImage] = useState<string>(ExampleUser);
    const [avaibality, setAvaibality] = useState(true)
    const [newMessage, setNewMessage] = useState(true)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(imageUrl);
        }
    };
    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);
    const menuItems = [
        { id: "basic-setting", label: "Basic Setting", hasDot: true },
        { id: "authentication", label: "Authentication" },
        { id: "email", label: "Email", hasDot: true },
        { id: "Password", label: "Password", hasDot: true },
        { id: "social-sign-in", label: "Social Sign in", hasDot: true },
        { id: "single-sign-on", label: "Single Sign On(SSO)", hasDot: true },
        { id: "two-factor", label: "Two-Factor auth(2FA)", hasDot: true },
        { id: "advanced-settings", label: "Advanced Settings" },
        { id: "preferences", label: "Preferences", hasDot: true },
        { id: "appearance", label: "Appearance", hasDot: true },
        { id: "notifications", label: "Notifications", hasDot: true },
        { id: "address", label: "Address", hasDot: true },
        { id: "external-services", label: "External Services" },
        { id: "manage-api", label: "Manage API", hasDot: true },
        { id: "integrations", label: "Integrations", hasDot: true },
        { id: "delete-account", label: "Delete Account", hasDot: true },
    ];
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-10 ">
                <div className="flex py-10 flex-col gap-3 items-center justify-center relative bg-map bg-cover z-10">
                    <div className="rounded-full border border-success">
                        <img src={Jennifer} alt="" className="size-[100px]" />
                    </div>
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-b-18-18-600 text-gray-900">Jennifer Klabber</span>
                        <img src={Verify} alt="" />
                    </div>
                    <div className="flex md:flex-row flex-col items-center gap-5">
                        <div className="flex flex-row items-center gap-[5px]">
                            <GiAbstract080 className="text-gray-600 text-b-14-14-500" />
                            <span className="text-gray-600 text-b-14-14-500">KeenThemes</span>
                        </div>
                        <div className="flex flex-row items-center gap-[5px]">
                            <SlLocationPin className="text-gray-600 text-b-14-14-500" />
                            <span className="text-gray-600 text-b-14-14-500">SF, Bay Area</span>
                        </div>
                        <div className="flex flex-row items-center gap-[5px]">
                            <CiMail className="text-gray-600 text-b-14-14-500" />
                            <Link to={location} className="text-gray-600 text-b-14-14-500 hover:text-primary text-animation">
                                jenny@kteam.com
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Sub menu */}
                <Menu />

            </div>
            <ModalContent>
                <div className="flex flex-col px-10 py-[30px] gap-[30px] dark:bg-coal-300">
                    <div className="md:flex flex-row items-center justify-between hidden">
                        <div className="flex flex-col gap-[14px] ">
                            <h1 className='text-gray-900 text-h-24-24-600'>Settings - With Sidebar</h1>
                            <span className='text-b-14-14-400 text-gray-700'>Intuitive Access to In-Depth Customization</span>
                        </div>
                        <div className="flex flex-row items-center gap-2.5">

                            <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                                Public Profile
                            </a>
                            <Link to={location} className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row items-start gap-[30px]">
                        <div className="md:flex flex-col hidden min-w-[230px]">
                            {menuItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`subItem hover:bg-gray-100 ${activeSelection === item.id ? "selectedItem" : ""} pl-5`}
                                    onClick={() => setActiveSelection(item.id)}
                                >
                                    {item.hasDot && (
                                        <span className={`dot ${activeSelection === item.id ? "dotActive" : "dotInActive"}`}></span>
                                    )}
                                    <span className={`text-b-13-14-400 text-gray-800 ${item.hasDot ? "pl-3" : " pl-4 text-gray-900 text-b-13-14-500"}`}>
                                        {item.label}
                                    </span>
                                    <span className="itemDotLine left-[18.3px] bg-gray-300"></span>
                                </a>

                            ))}
                        </div>

                        {/* right area */}
                        <div className=" flex flex-col w-full flex-1 gap-[30px] max-h-screen overflow-y-scroll scroll-smooth scrollbar-hidden ">
                            {/* Basic Setting */}
                            <section id="basic-setting" className="section">
                                <Card
                                    title="Basic Setting"
                                    buttonStatus={false}
                                    dotContentStatus={false}
                                    dotStatus={false}
                                    content={

                                        <div className="flex flex-col px-[30px] pt-5">
                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5 justify-between">
                                                <div className="flex flex-row items-center ">
                                                    <span className="text-b-14-14-400 text-gray-600 min-w-[220px]">Profile</span>
                                                    <span className="text-b-13-14-400 text-gray-700">150x150px JPEG, PNG Image</span>
                                                </div>
                                                <div className="relative p-1">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="hidden"
                                                        id="fileInput"
                                                        onChange={handleImageChange}
                                                    />
                                                    <div
                                                        onClick={() => document.getElementById("fileInput")?.click()}
                                                        className="size-[60px] rounded-full border-2 border-success overflow-hidden relative cursor-pointer"
                                                    >
                                                        <img
                                                            src={selectedImage}
                                                            className="w-full h-full object-cover"
                                                            alt="user"
                                                        />
                                                        <img src={Camera} alt="camera" className="absolute bottom-0" />
                                                    </div>
                                                    <div className=" absolute rounded-full border-2 bg-white top-1 right-1 flex justify-center items-center  "> <IoIosClose className="text-gray-500 size-[14px]" /></div>

                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Name</span>
                                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Jason Tatum" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Company</span>
                                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="KeenThemes" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Phone Number</span>
                                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Phone number" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800">Visibility</span>
                                                <select defaultValue="Public" className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full outline-none text-gray-800">
                                                    <option value="Public">Public</option>
                                                    <option value="Option-2">Option-2</option>
                                                    <option value="Option-3">Option-3</option>
                                                </select>

                                            </div>
                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Avaibality</span>
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <span className="text-gray-800">Available to hire</span>
                                                    <Switch size="medium" status={avaibality} setSwitch={() => setAvaibality(!avaibality)} />
                                                </div>
                                            </div>

                                            <div className="flex ml-auto py-[30px]">
                                                <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    }
                                />
                            </section>

                            {/* Email */}
                            <section id="email" className="section">
                                <Card
                                    title="Email"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col px-[30px] pt-5">
                                                <div className="flex flex-col md:flex-row py-2.5 md:gap-0 gap-4">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 pt-0 md:pt-[10px] ">Email</span>
                                                    <div className="flex flex-col gap-[30px]">
                                                        <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                            <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="KeenThemes" />
                                                        </div>
                                                        <div className="flex flex-row items-center gap-5">
                                                            <div className="flex flex-row items-center gap-2.5">
                                                                <span className="text-gray-700 text-b-14-14-500">Active</span>
                                                                <Switch
                                                                    status={active}
                                                                    setSwitch={() => setActive(!active)}
                                                                    size="medium"
                                                                />
                                                            </div>
                                                            <div className="flex flex-row items-center gap-2.5">
                                                                <span className="text-gray-700 text-b-14-14-500">Primary</span>
                                                                <Switch
                                                                    status={primary}
                                                                    setSwitch={() => setPrimary(!primary)}
                                                                    size="medium"
                                                                />
                                                            </div>
                                                        </div>
                                                        <p className="text-b-13-20-400 text-gray-800">Input your email, designate as primary for priority updates. Toggle to seamlessly customize your communication preferences</p>
                                                        <div className="flex ml-auto pb-2.5">
                                                            <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                                Save Changes
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </>
                                    }
                                />
                            </section>

                            {/* Social sign in */}
                            <section id="social-sign-in" className="section">
                                <Card
                                    title="Social Sign in"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col p-[30px] gap-[30px]">
                                                <div className="flex flex-col gap-5">
                                                    <div className="flex flex-row items-center justify-between rounded-xl border p-4">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <FcGoogle className="size-6" />
                                                            <div className="flex flex-col gap-1">
                                                                <Link to={location} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">Google</Link>
                                                                <span className="text-gray-700 text-b-13-14-400">jasontatum@ktstudio.io</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-5">
                                                            <Switch status={google} setSwitch={() => setGoogle(!google)} size="medium" />
                                                            <button className="p-[6px] hover:bg-gray-100 rounded-md">
                                                                <FaTrashCan className="size-4 text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between rounded-xl border p-4">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <FaLinkedin className="size-6 text-[#3C5A9A]" />
                                                            <div className="flex flex-col gap-1">
                                                                <Link to={location} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">Linkedin</Link>
                                                                <span className="text-gray-700 text-b-13-14-400">jasontatum@ktstudio.io</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-5">
                                                            <Switch status={linkedin} setSwitch={() => setLinkedin(!linkedin)} size="medium" />
                                                            <button className="p-[6px] hover:bg-gray-100 rounded-md">
                                                                <FaTrashCan className="size-4 text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-5">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-b-15-16-500 text-gray-900">More Social Sign in options</span>
                                                        <span className="text-b-13-20-400 text-gray-800">Effortless access awaits! Connect seamlessly with your preferred social account.</span>
                                                    </div>
                                                    <div className="flex flex-row flez-wrap items-center gap-2.5">
                                                        <Link to={location} className="flex flez-row items-center gap-[5px] border rounded-md p-3">
                                                            <FaApple className="size-[18px] dark:text-white" />
                                                            <span className="text-b-13-14-500 text-gray-700">Sign in with Apple</span>
                                                        </Link>
                                                        <Link to={location} className="flex flez-row items-center gap-[5px] border rounded-md p-3">
                                                            <img src={Microsoft} alt="microsoft" />
                                                            <span className="text-b-13-14-500 text-gray-700">Sign in with Microsoft</span>
                                                        </Link>
                                                        <Link to={location} className="flex flez-row items-center gap-[5px] border rounded-md p-3">
                                                            <FaFacebook className="size-[18px] text-[#3C5A9A]" />
                                                            <span className="text-b-13-14-500 text-gray-700">Sign in with Facebook</span>
                                                        </Link>

                                                    </div>
                                                </div>
                                                <div className="flex ml-auto">
                                                    <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                            {/* 2FA */}
                            <section id="two-factor" className="section">
                                <Card
                                    title="Two-Factor authentication(2FA)"
                                    dotStatus={true}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col p-[30px] gap-[30px]">
                                                <div className="flex flex-col gap-5">
                                                    <div className="flex flex-row items-center justify-between rounded-xl border p-4">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <div className="relative size-[50px] shrink-0">
                                                                <svg className="w-full h-full stroke-gray-300 opacity-80 dark:opacity-50 fill-gray-100 " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
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
                                                                    <MdOutlineMessage className="text-gray-600 size-[22px]" />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <Link to={location} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">Text Message (SMS)</Link>
                                                                <span className="text-gray-700 text-b-13-14-500">Instant codes for secure account verification.</span>
                                                            </div>
                                                        </div>
                                                        <Switch setSwitch={() => setTextMessage(!textMessage)} status={textMessage} size="medium" />
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between rounded-xl border p-4">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <div className="relative size-[50px] shrink-0">
                                                                <svg className="w-full h-full stroke-gray-300 opacity-80 dark:opacity-50 fill-gray-100 " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
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
                                                                    <IoShieldCheckmark className="text-gray-600 size-[22px]" />
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <Link to={location} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">Authenticator App (TOTP)</Link>
                                                                <span className="text-gray-700 text-b-13-14-500">Elevate protection with an authenticator app for
                                                                    two-factor authentication.</span>
                                                            </div>
                                                        </div>
                                                        <Switch setSwitch={() => setAuthenticator(!authenticator)} status={authenticator} size="medium" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col md:flex-row py-2.5 md:gap-0 gap-4">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 pt-0 md:pt-[10px] ">Password</span>
                                                    <div className="flex flex-col  w-full">
                                                        <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                            <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Enter pasword" />
                                                        </div>
                                                        <span className="text-b-13-20-400 text-gray-800">Enter your password to setup Two-Factor authentication</span>
                                                    </div>
                                                </div>

                                                <div className="flex ml-auto">
                                                    <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                            {/* Single Sign On(SSO) */}
                            <section id="single-sign-on" className="section">
                                <Card
                                    title="Single Sign On(SSO)"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col gap-[30px] p-[30px]">
                                                <div className="flex flex-col gap-[30px] border-b pb-[30px]">
                                                    <span className="text-gray-900 text-b-15-16-600">1. Select SSO integration Type</span>
                                                    <div className="flex flex-row flex-wrap gap-[30px]">
                                                        <div onClick={() => setSelectionIntegration("Azure")} className={`${selectionIntegration === "Azure" ? "bg-primary-light border-primary border-opacity-50" : ""} cursor-pointer rounded-xl border border-dotted flex items-center justify-center flex-col gap-3 min-w-[260px] min-h-[160px] bg-mask bg-cover`}>
                                                            <img src={Azure} alt="azure" />
                                                            <span className="text-gray-900 text-b-15-16-500">Micrsoft Azure</span>
                                                        </div>
                                                        <div onClick={() => setSelectionIntegration("Google")} className={`${selectionIntegration === "Google" ? "bg-primary-light border-primary border-opacity-50" : ""} cursor-pointer rounded-xl border border-dotted flex items-center justify-center flex-col gap-3 min-w-[260px] min-h-[160px] bg-mask bg-cover`}>
                                                            <FcGoogle className="size-10" />

                                                            <span className="text-gray-900 text-b-15-16-500">Google</span>
                                                        </div>
                                                        <div onClick={() => setSelectionIntegration("openID")} className={`${selectionIntegration === "openID" ? "bg-primary-light border-primary border-opacity-50" : ""} cursor-pointer rounded-xl border border-dotted flex items-center justify-center flex-col gap-3 min-w-[260px] min-h-[160px] bg-mask bg-cover`}>
                                                            <img src={OpenID} alt="openID" />
                                                            <span className="text-gray-900 text-b-15-16-500">OpenID Connect</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[30px] border-b pb-[30px]">
                                                    <span className="text-gray-900 text-b-15-16-600">2. Configure Google authentication</span>
                                                    <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                        <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Client ID</span>
                                                        <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                            <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="02874374-367145773" />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                        <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Client Secret</span>
                                                        <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                            <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="23djfn784957f8022we2232307822-cey2442" />
                                                        </div>
                                                    </div>
                                                    <div className="flex ml-auto ">
                                                        <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                            Save Changes
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-[30px] border-b pb-[30px]">
                                                    <span className="text-gray-900 text-b-15-16-600">3. Note down custom URL for Google SSO authentication</span>
                                                    <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                        <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Custom Login UTL</span>
                                                        <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md  border w-full flex flex-row items-center">
                                                            <input type="text" className="w-full outline-none bg-transparent p-3 text-13-14-400 text-gray-800" placeholder="https://devs.keenthemes.com/rl/AirMikeStudios" />
                                                            <button className="p-4 flex items-center justify-center bg-primary rounded-r-md">
                                                                <span className=" text-white text-b-13-14-500">Copy</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-b-14-22-400 text-gray-800">Single Sign-On (SSO) authentication streamlines access across multiple platforms. Users log in once, gaining seamless entry
                                                    to various systems without repetitive credentials. </p>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                            {/* Password */}
                            <section id="password" className="section">
                                <Card
                                    title="Password"
                                    buttonStatus={false}
                                    dotContentStatus={false}
                                    dotStatus={false}
                                    content={

                                        <div className="flex flex-col px-[30px] pt-5">

                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Current Password</span>
                                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Your current password" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">New Password</span>
                                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="New Password" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Confirm new password</span>
                                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Confirm new password" />
                                                </div>
                                            </div>

                                            <div className="flex ml-auto py-[30px]">
                                                <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                    Reset Password
                                                </button>
                                            </div>
                                        </div>
                                    }
                                />
                            </section>

                            {/* Preferences */}
                            <section id="preferences" className="section">
                                <Card
                                    title="Preferences"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col p-[30px]">
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Language</span>
                                                    <select defaultValue={"American English"} className="bg-[#FCFCFC] dark:bg-coal-300 text-gray-800 rounded-md p-3 border w-full outline-none ">
                                                        <option value="American English">American English</option>
                                                        <option value="Option-2">Option-2</option>
                                                        <option value="Option-3">Option-3</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Time zone</span>
                                                    <select defaultValue={"American English"} className="bg-[#FCFCFC] dark:bg-coal-300 text-gray-800 rounded-md p-3 border w-full outline-none ">
                                                        <option value="American English">American English</option>
                                                        <option value="Option-2">Option-2</option>
                                                        <option value="Option-3">Option-3</option>
                                                    </select>
                                                </div>
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Currency</span>
                                                    <select defaultValue={"United States Dollar (USD)"} className="bg-[#FCFCFC] dark:bg-coal-300 text-gray-800 rounded-md p-3 border w-full outline-none ">
                                                        <option value="United States Dollar (USD)">United States Dollar (USD)</option>
                                                        <option value="Option-2">Option-2</option>
                                                        <option value="Option-3">Option-3</option>
                                                    </select>
                                                </div>


                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Open tasks as...</span>
                                                    <div className="flex flex-row gap-5">
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="radio" name="modal" id="modal" className="size-[22px]" defaultChecked />
                                                            <span className="text-b-14-14-500 text-gray-800">Modal</span>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="radio" name="modal" id="modal" className="size-[22px]" />
                                                            <span className="text-b-14-14-500 text-gray-800">Fullscreen</span>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div className="flex flex-col md:flex-row py-2.5 md:gap-0 gap-4">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Attributes</span>
                                                    <div className="flex flex-col gap-5  w-full">
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="checkbox" name="list" id="list" className="size-[22px]" />
                                                            <span className="text-b-14-14-500 text-gray-800">Show linked list names</span>
                                                        </div>
                                                        <span className="text-b-12-12-400 text-gray-700">See the name next to each icon</span>
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="checkbox" name="list" id="list" className="size-[22px]" />
                                                            <span className="text-b-14-14-500 text-gray-800">Show linked task names</span>
                                                        </div>
                                                        <span className="text-b-12-12-400 text-gray-700">Show task names next to ids for linked project tasks.</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Email visibility</span>
                                                    <Switch status={visible} setSwitch={() => setVisible(!visible)} size="medium" />
                                                </div>
                                                <div className="flex ml-auto pt-[30px]">
                                                    <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                        Reset Password
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                            {/* Appreance */}
                            <section id="appearance" className="section">
                                <Card
                                    title="Appearance"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col p-[30px] gap-[30px]">
                                                <div className="flex flex-col gap-5">
                                                    <div className="flex flex-col gap-1">
                                                        <span className="text-b-15-16-500 text-gray-900">Them Mode</span>
                                                        <span className="text-gray-700 text-b-13-20-400">Select or customize your ui theme</span>
                                                    </div>
                                                    <div className="flex flex-row flex-wrap gap-[30px] border-b pb-[30px]">
                                                        <div className="flex flex-col gap-2.5">
                                                            <div onClick={() => setSelectionTheme("dark")} className={`overflow-hidden rounded-xl ${selectionTheme === "Dark" ? "border-4 border-success" : "border-4"} cursor-pointer`}>
                                                                <img src={DarkBg} alt="dark-bg" className="scale-[1.05]" />
                                                            </div>
                                                            <span className="text-gray-900 text-b-14-14-500">Dark</span>
                                                        </div>

                                                        <div className="flex flex-col gap-2.5">
                                                            <div onClick={() => setSelectionTheme("light")} className={`overflow-hidden rounded-xl ${selectionTheme === "Light" ? "border-4 border-success" : "border-4"} cursor-pointer`}>
                                                                <img src={LightTheme} alt="light-theme" className="scale-[1.05]" />
                                                            </div>
                                                            <span className="text-gray-900 text-b-14-14-500">Light</span>
                                                        </div>
                                                        <div className="flex flex-col gap-2.5">
                                                            <div onClick={() => setSelectionTheme("system")} className={`overflow-hidden rounded-xl ${selectionTheme === "System" ? "border-4 border-success" : "border-4"} cursor-pointer`}>
                                                                <img src={Systemtheme} alt="system-theme" className="scale-[1.05]" />
                                                            </div>
                                                            <span className="text-gray-900 text-b-14-14-500">System</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col md:flex-row py-2.5 md:gap-0 gap-4">
                                                        <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Transparent sidebar</span>
                                                        <div className="flex flex-col md:flex-row gap-5  w-full">
                                                            <div className="flex flex-row items-center gap-2.5">
                                                                <span className="text-b-14-14-500 text-gray-700">Active</span>
                                                                <Switch status={tranparentSidebar} setSwitch={() => setTransparentSidebar(!tranparentSidebar)} size="medium" />
                                                            </div>
                                                            <p className="text-b-13-20-400 text-gray-800">Toggle the transparent sidebar for a sleek interface. Switch it on for transparency or off for a solid background.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex ml-auto ">
                                                    <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </section>


                            {/* Notifications */}
                            <section id="notifications" className="section">
                                <Card
                                    title="Notifications"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col p-[30px] gap-[30px]">
                                                <div className="flex flex-col md:flex-row md:items-center gap-5">
                                                    <div className="p-4 rounded-xl border w-full">
                                                        <div className="flex flex-row justify-between items-center">
                                                            <div className="flex flex-row items-center gap-2.5">
                                                                <img src={Slack} alt="slack" />
                                                                <div className="flex flex-col gap-1">
                                                                    <span className="text-b-14-14-500 text-gray-900">Slack</span>
                                                                    <span className="text-b-13-14-400 text-gray-700">Stay Updated on Slack..</span>
                                                                </div>
                                                            </div>
                                                            <Switch status={slack} setSwitch={() => setSlack(!slack)} size="medium" />
                                                        </div>
                                                    </div>
                                                    <div className="p-4 rounded-xl border w-full">
                                                        <div className="flex flex-row justify-between items-center">
                                                            <div className="flex flex-row items-center gap-2.5">
                                                                <img src={Mail} alt="slack" />
                                                                <div className="flex flex-col gap-1">
                                                                    <span className="text-b-14-14-500 text-gray-900">Email</span>
                                                                    <span className="text-b-13-14-400 text-gray-700">Tailor Your Email Preferences.</span>
                                                                </div>
                                                            </div>
                                                            <Switch status={mail} setSwitch={() => setMail(!mail)} size="medium" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-5">
                                                    <span className="text-b-15-16-500 text-gray-900">Desktop notifications</span>
                                                    <div className="flex flex-col gap-[14px]">
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="radio" className="size-[18px]" />
                                                            <span className="text-b-13-14-500 text-gray-800">All new messages (Recommended)</span>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="radio" className="size-[18px]" />
                                                            <span className="text-b-13-14-500 text-gray-800">Direct @mentions</span>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="radio" className="size-[18px]" defaultChecked />
                                                            <span className="text-b-13-14-500 text-gray-800">Disabled</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-5">
                                                    <span className="text-b-15-16-500 text-gray-900">Email notifications</span>
                                                    <div className="flex flex-col gap-[14px]">
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="radio" className="size-[18px]" />
                                                            <span className="text-b-13-14-500 text-gray-800">All new messages and statuses</span>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="radio" className="size-[18px]" defaultChecked />
                                                            <span className="text-b-13-14-500 text-gray-800">Unread messages and statuses () Recommended</span>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-[6px]">
                                                            <input type="radio" className="size-[18px]" />
                                                            <span className="text-b-13-14-500 text-gray-800">Disabled</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-5">
                                                    <span className="text-b-15-16-500 text-gray-900">Subscriptions</span>
                                                    <div className="flex flex-row items-center gap-[6px]">
                                                        <input type="checkbox" className="size-[18px]" checked={newMessage} onChange={() => setNewMessage(!newMessage)} />
                                                        <span className="text-b-13-14-500 text-gray-800">All new messages and statuses</span>
                                                    </div>


                                                </div>
                                                <div className="flex ml-auto ">
                                                    <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                            {/* Address */}
                            <section id="address" className="section">
                                <Card
                                    title="Address"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col gap-[30px] p-[30px]">
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Address</span>
                                                    <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                        <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Avinguda Imaginària, 789" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Country</span>
                                                    <select defaultValue={"Spain"} className="bg-[#FCFCFC] dark:bg-coal-300 text-gray-800 rounded-md p-3 border w-full outline-none ">
                                                        <option value="Public">Spain</option>
                                                        <option value="Option-2">Option-2</option>
                                                        <option value="Option-3">Option-3</option>

                                                    </select>
                                                </div>
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">State</span>
                                                    <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                        <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="State" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">City</span>
                                                    <select defaultValue={"Barcelona"} className="bg-[#FCFCFC] dark:bg-coal-300 text-gray-800 rounded-md p-3 border w-full outline-none ">
                                                        <option value="Public">Barcelona</option>
                                                        <option value="Option-2">Option-2</option>
                                                        <option value="Option-3">Option-3</option>

                                                    </select>
                                                </div>
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Postcode</span>
                                                    <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                                        <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="08012" />
                                                    </div>
                                                </div>
                                                <div className="flex ml-auto ">
                                                    <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                            {/* Manage API */}
                            <section id="manage-api" className="section">
                                <Card
                                    title="Manage API"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col p-[30px] gap-[30px]">
                                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">API Key</span>
                                                    <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md  border w-full flex flex-row items-center">
                                                        <input type="text" className="w-full outline-none bg-transparent p-3 text-13-14-400 text-gray-800" placeholder="abc123xyz456sample789key000" />
                                                        <button className="p-2 hover:bg-gray-200 rounded-md mr-2.5 flex items-center justify-center">
                                                            <FaCopy className="size-4 text-gray-600" />

                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="p-5 rounded-xl flex flex-rowe items-center justify-between border flex-wrap md:flex-nowrap bg-mask bg-left">
                                                    <div className="flex flex-row items-center gap-4">
                                                        <img src={UserAccess} alt="user-access" />
                                                        <div className="flex flex-col gap-2.5">
                                                            <div className="flex flex-row items-center gap-2.5">
                                                                <span className="text-gray-900 text-b-16-16-500">User Access</span>
                                                                <div className="px-[6px] py-[5px] flex items-center justify-center border bg-gray-100 rounded-md">
                                                                    <span className="text-b-11-12-500 text-gray-600">16 days left</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-1">
                                                                <span className="text-gray-800 text-b-13-20-400">This API key can only access <Link to={location} className="text-primary">@keenthemes</Link></span>
                                                                <span className="text-gray-800 text-b-13-20-400"> Secure access with a unique API key for enhanced functionality.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center gap-2.5">
                                                        <button className="py-2.5 px-3 flex items-center justify-center rounded-md bg-black">
                                                            <span className="text-b-12-12-500 text-white">Renew Plan</span>
                                                        </button>
                                                        <button className="py-2.5 px-3 flex items-center justify-center rounded-md ">
                                                            <span className="text-b-12-12-500 text-gray-700">Docs</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <p className="text-b-13-20-400 text-gray-800">Unlock the full potential of your application with our API, a secure gateway facilitating seamless integration, empowering developers to create innovative and dynamic experiences effortlessly.</p>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                            {/* Integrations */}
                            <section id="integrations" className="section">
                                <Card
                                    title="Integrations"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col gap-[30px] p-[30px]">
                                                <div className="flex flex-col gap-5">
                                                    <div className="p-4 rounded-xl flex flex-row justify-between items-center border">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <img src={GoogleDev} alt="google-dev" className="size-8" />
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <Link to={location} className="text-b-14-14-500 text-gray-900 text-animation hover:text-primary">Google web.dev</Link>
                                                                    <span className="text-b-13-14-400 text-gray-700">webdev@webdevmail.com</span>
                                                                </div>
                                                                <span className="text-b-13-14-400 text-gray-700">Integrate for enhanced collaboration in web development.</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-5">
                                                            <Switch status={googleWeb} setSwitch={() => setGoogleWeb(!googleWeb)} size="medium" />
                                                            <button className="p-[7px] rounded-md hover:bg-gray-100">
                                                                <CiSettings className="size-[18px] text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 rounded-xl flex flex-row justify-between items-center border">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <img src={Equacoin} alt="equa-coin" className="size-8" />
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <Link to={location} className="text-b-14-14-500 text-gray-900 text-animation hover:text-primary">Equacoin</Link>
                                                                    <span className="text-b-13-14-400 text-gray-700">equacoin@cryptoemail.com</span>
                                                                </div>
                                                                <span className="text-b-13-14-400 text-gray-700">Streamline cryptocurrency transactions securely and efficiently.</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-5">
                                                            <Switch status={equaCoin} setSwitch={() => setEquaCoin(!equaCoin)} size="medium" />
                                                            <button className="p-[7px] rounded-md hover:bg-gray-100">
                                                                <CiSettings className="size-[18px] text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 rounded-xl flex flex-row justify-between items-center border">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <img src={Evernote} alt="evernote" className="size-8" />
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <Link to={location} className="text-b-14-14-500 text-gray-900 text-animation hover:text-primary">Evernote</Link>
                                                                    <span className="text-b-13-14-400 text-gray-700">evernote@noteexample.com</span>
                                                                </div>
                                                                <span className="text-b-13-14-400 text-gray-700">Enhance workflow, capture ideas seamlessly.</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-5">
                                                            <Switch status={evernote} setSwitch={() => setEvernote(!evernote)} size="medium" />
                                                            <button className="p-[7px] rounded-md hover:bg-gray-100">
                                                                <CiSettings className="size-[18px] text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 rounded-xl flex flex-row justify-between items-center border">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <img src={Inferno} alt="inferno" className="size-8" />
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <Link to={location} className="text-b-14-14-500 text-gray-900 text-animation hover:text-primary">Inferno</Link>
                                                                    <span className="text-b-13-14-400 text-gray-700">inferno@dataexample.com</span>
                                                                </div>
                                                                <span className="text-b-13-14-400 text-gray-700">Robust email integration for data management.</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-5">
                                                            <Switch status={inferno} setSwitch={() => setInferno(!inferno)} size="medium" />
                                                            <button className="p-[7px] rounded-md hover:bg-gray-100">
                                                                <CiSettings className="size-[18px] text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 rounded-xl flex flex-row justify-between items-center border">
                                                        <div className="flex flex-row items-center gap-[14px]">
                                                            <img src={Jira} alt="jira" className="size-8" />
                                                            <div className="flex flex-col gap-1">
                                                                <div className="flex flex-row gap-2 items-center">
                                                                    <Link to={location} className="text-b-14-14-500 text-gray-900 text-animation hover:text-primary">Jira</Link>
                                                                    <span className="text-b-13-14-400 text-gray-700">jira@projectmail.com</span>
                                                                </div>
                                                                <span className="text-b-13-14-400 text-gray-700">Streamline project management, enhance collaboration.</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row items-center gap-5">
                                                            <Switch status={jira} setSwitch={() => setJira(!jira)} size="medium" />
                                                            <button className="p-[7px] rounded-md hover:bg-gray-100">
                                                                <CiSettings className="size-[18px] text-gray-600" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                            {/* Delete Account */}
                            <section id="delete-account" className="section pb-[150px]">
                                <Card
                                    title="Delete Account"
                                    dotStatus={false}
                                    buttonStatus={false}
                                    content={
                                        <>
                                            <div className="flex flex-col gap-[30px] p-[30px]">
                                                <div className="flex flex-col gap-5">
                                                    <p className="text-b-13-20-400 text-gray-800">We regret to see you leave. Confirm account deletion below. Your data will be permanently removed. Thank you for being part of our community. Please check our Setup Guidelines if you still wish continue.</p>
                                                    <div className="flex flex-row items-center gap-[6px]">
                                                        <input type="checkbox" name="confirm" id="confirm" className="size-[18px]" />
                                                        <span className="text-b-13-14-500 text-gray-800">Confirm deleting account</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row items-center gap-2.5 ml-auto">
                                                    <button className="px-4 py-[13px] border rounded-md flex items-center justify-center">
                                                        <span className="text-b-13-14-500 text-gray-700">Deactivate Instead</span>
                                                    </button>
                                                    <button className="px-4 py-[13px] border rounded-md flex items-center justify-center bg-danger">
                                                        <span className="text-b-13-14-500 text-white">Deactivate Instead</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                />
                            </section>

                        </div>

                    </div>
                </div>



            </ModalContent>
        </div>
    );
};

export default Modal;
