import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import { BsApple } from "react-icons/bs"
import { CiBasketball } from "react-icons/ci"
import { FaCalendarDay, FaCopy, FaEllipsisVertical, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { IoIosClose, IoIosLogOut, IoLogoTwitch } from "react-icons/io"
import { MdOutlineEditNote, MdOutlineMessage } from "react-icons/md"
import Card from "@components/card/card"
import Switch from "@components/switch"
import { useState } from "react"
import ExampleUser from '@assets/example-user.svg'
import Camera from '@assets/camera.svg'
import { FaCheckCircle, FaInfo, FaInfoCircle, FaRegTrashAlt } from "react-icons/fa"
import GoogleCalendar from '@assets/google-calendar.svg'
import Monday from '@assets/monday.svg'
import Chrome from '@assets/chrome.svg'
import Spain from '@assets/spain.svg'
import France from '@assets/france.svg'
import Premium from '@assets/premium-plan.svg'
import { HiOutlineDotsVertical } from "react-icons/hi"
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Cody from '@assets/cody-fisher.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import { IoShieldCheckmark } from "react-icons/io5"

const SettingEnterprise = () => {
    const [account, setAccount] = useState(true)
    const [selectedImage, setSelectedImage] = useState<string>(ExampleUser);
    const [textMessage, setTextMessage] = useState(true)
    const [authenticator, setAuthenticator] = useState(false)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(imageUrl);
        }
    };
    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Settings - With Enterprise</h1>
                    <span className='text-b-14-14-400 text-gray-700'>Tailored Tools for Business Scalability</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">

                    <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Public Profile
                    </a>
                    <Link to={location} className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                        My profile
                    </Link>
                </div>
            </div>

            <div className="p-5 rounded-xl flex flex-rowe items-center justify-between border flex-wrap md:flex-nowrap bg-mask bg-left">
                <div className="flex flex-row items-center gap-4">
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
                            <FaInfo className="text-[#FF6F1E] size-[22px]" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <div className="flex flex-row items-center gap-2.5">
                            <span className="text-gray-900 text-b-16-16-500">Upgrade your business info</span>
                            <div className="px-[6px] py-[5px] flex items-center justify-center border bg-gray-100 rounded-md">
                                <span className="text-b-11-12-500 text-gray-600">16 days left</span>
                            </div>
                        </div>
                        <p className="text-b-13-20-400 text-gray-800">Elevate business information for a standout profile. Utilize premium features, ensuring success with enhanced details.
                            Upgrade now for heightened visibility and broader impact.</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <button className="py-2.5 px-3 flex items-center justify-center rounded-md bg-black">
                        <span className="text-b-12-12-500 text-white">Start</span>
                    </button>
                    <button className="py-2.5 px-3 flex items-center justify-center rounded-md ">
                        <span className="text-b-12-12-500 text-gray-700">Skip</span>
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-[30px]">
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-[30px]">
                    {/* Account */}
                    <Card
                        title="Account"
                        buttonStatus={false}
                        dotContentStatus={true}
                        dotContent={<>
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Public Profile</span>
                                <Switch status={account} setSwitch={() => setAccount(!account)} size={"medium"} />
                            </div>
                        </>}
                        dotStatus={false}
                        content={

                            <div className="flex flex-col">
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Photo</span>
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
                                        <div className=" absolute rounded-full border-2 bg-white dark:bg-coal-300 top-1 right-1 flex justify-center items-center  "> <IoIosClose className="text-gray-500 size-[14px]" /></div>

                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Name</span>
                                        <span className="text-b-13-14-400 text-gray-800">Jason Tatum</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Availability</span>
                                        <div className="p-2 rounded-[4px] bg-success-light border-success border-opacity-10 border flex items-center justify-center">
                                            <span className="text-success text-b-11-12-500">Avaliable now</span>
                                        </div>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Email</span>
                                        <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">jasontt@studio.co</Link>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>

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
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Sign-in with</span>

                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <FcGoogle />
                                            </div>
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <FaFacebook className="text-[#3C5A9A]" />
                                            </div>
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <BsApple />
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Team Account</span>
                                        <span className="text-b-13-14-400 text-gray-700">To be set</span>
                                    </div>
                                    <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 mr-1">Setup</Link>
                                </div>

                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Social Profiles</span>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <FaLinkedin className="size-4 text-[#2489BE]" />
                                            </div>
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <IoLogoTwitch className="text-[#65459B]" />
                                            </div>
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <FaXTwitter />
                                            </div>
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <CiBasketball className="text-[#B2215A] bg-[#E74D89] rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Referral Link</span>
                                        <div className="flex flex-row items-center gap-1">
                                            <span className="text-b-13-14-400 text-gray-800">https://hexlab.co/W3gvQOI35dt</span>
                                            <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200">
                                                <FaCopy className="text-gray-500 size-4" />
                                            </button>
                                        </div>

                                    </div>
                                    <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 ">Re-create</Link>
                                </div>
                            </div>
                        }
                    />

                    {/* 2FA */}
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
                    {/* Calendar area */}
                    <Card
                        dotStatus={true}
                        buttonStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <>
                                <button className="flex items-center justify-center flex-row gap-1 p-2.5 rounded-md border dark:bg-gray-300">
                                    <FaCalendarDay className="size-[14px] text-gray-500" />
                                    <span className="text-gray-700 text-b-12-12-500">Add New</span>
                                </button>
                            </>
                        }
                        titleContent={
                            <>
                                <div className="flex items-center flex-row gap-[6px]">
                                    <span className="text-gray-900 text-b-16-16-600">Calendar Accounts</span>
                                    <span className="text-b-13-14-500 text-gray-600">1/5</span>
                                </div>
                            </>
                        }
                        content={<>
                            <div className="flex flex-col py-5 pr-5 pl-[30px] gap-5">
                                <div className="flex flex-row items-center justify-between p-4 border rounded-xl">
                                    <div className="flex flex-row items-center gap-[14px]">
                                        <img src={GoogleCalendar} alt="google-calendar" />
                                        <div className="flex flex-col gap-1">
                                            <Link to={location} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">Google</Link>
                                            <Link to={location} className="text-b-13-14-400 text-gray-700 hover:text-primary text-animation">jasont@studio.co</Link>

                                        </div>
                                    </div>
                                    <div className="p-2 rounded-md hover:bg-gray-100">
                                        <FaRegTrashAlt className="text-gray-600" />
                                    </div>
                                </div>
                                <div className="flex flex-row items-center justify-between p-4 border rounded-xl">
                                    <div className="flex flex-row items-center gap-[14px]">
                                        <img src={Monday} alt="monday" />
                                        <div className="flex flex-col gap-1">
                                            <Link to={location} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">Monday</Link>
                                            <Link to={location} className="text-b-13-14-400 text-gray-700 hover:text-primary text-animation">jasontatum@keenthemes.com</Link>

                                        </div>
                                    </div>
                                    <div className="p-2 rounded-md hover:bg-gray-100">
                                        <FaRegTrashAlt className="text-gray-600" />
                                    </div>
                                </div>
                            </div>
                        </>}
                    />
                    {/* Data import */}
                    <Card
                        title="Data import from Google Analytics"
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={<>
                            <FaInfoCircle className="text-gray-600 size-[18px]" />
                        </>}
                        content={
                            <>
                                <div className="flex flex-col gap-4 p-[30px]">
                                    <span className="text-b-13-20-400 text-gray-800">Define aspirations, outline the path. Set a goal to transform dreams into measurable achievements.</span>
                                    <button className="flex flex-row gap-1 items-center border p-2.5 rounded-md w-max">
                                        <FcGoogle className="size-[14px]" />
                                        <span className="text-b-12-12-500 text-gray-700">Continue with Google</span>
                                    </button>
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
                                        <button className="p-[7px] hover:bg-gray-100 rounded-md">
                                            <IoIosLogOut className="size-[18px] text-gray-600" />
                                        </button>
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
                                        <button className="p-[7px] hover:bg-gray-100 rounded-md">
                                            <IoIosLogOut className="size-[18px] text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    />
                </div>
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-[30px]">
                    {/* right area */}
                    <Card
                        title="Your Current Plan"
                        dotStatus={true}
                        buttonStatus={true}
                        buttonTitle="Go to Billing"
                        content={
                            <>
                                <div className="flex flex-col md:flex-row  items-start gap-[30px] p-[30px]">
                                    <div className="border rounded-xl overflow-hidden flex flex-col gap-5 pb-5">
                                        <img src={Premium} alt="premium" />
                                        <div className="flex flex-col gap-2.5 px-5">
                                            <Link to={location} className="text-b-16-16-500 text-gray-900 hover:text-primary text-animation">Premium Plan</Link>
                                            <div className="flex flex-col gap-4 max-w-[200px]">
                                                <span className="text-b-13-20-400 text-gray-700">Access premium perks through our exclusive Premium Plan</span>
                                                <button className="border rounded-md px-3 py-2.5 flex items-center justify-center w-max">
                                                    <span className="text-b-12-12-500 text-gray-700">Change Plan</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-[30px]">
                                        <div className="flex flex-col gap-2.5">
                                            <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">DevOps Integration</Link>
                                            <span className="text-b-13-20-400 text-gray-700">Achieve faster releases, continuous integration & deployment</span>
                                            <Link to={location} className="text-b-12-12-500 text-primary border-b border-b-primary border-dotted w-max ">DevOps Features</Link>
                                        </div>
                                        <div className="flex flex-col gap-2.5">
                                            <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">Data Encryption</Link>
                                            <span className="text-b-13-20-400 text-gray-700">End-to-end encryption, protecting info from unauthorized access</span>
                                            <Link to={location} className="text-b-12-12-500 text-primary border-b border-b-primary border-dotted w-max ">Setup Encryption</Link>
                                        </div>

                                        <div className="flex flex-col gap-2.5">
                                            <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">API Integration</Link>
                                            <span className="text-b-13-20-400 text-gray-700">Integrate your systems with our robust API capabilities.</span>
                                            <Link to={location} className="text-b-12-12-500 text-primary border-b border-b-primary border-dotted w-max ">Get API Key</Link>
                                        </div>


                                    </div>
                                </div>
                            </>
                        }
                    />
                    {/* Set a Goal */}
                    <Card
                        title="Set a Goal"
                        dotStatus={true}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col p-[30px] gap-4">
                                    <p className="text-b-13-20-400 text-gray-800">Define aspirations, outline the path. Set a goal to transform dreams into measurable achievements.</p>
                                    <div className="border rounded-xl flex flex-col gap-[30px]  p-4">
                                        <div className="flex flex-row justify-between flex-wrap">
                                            <div className="flex flex-row items-center gap-[14px]">
                                                <span className="text-h-26-26-600 text-gray-900">$0</span>
                                                <span className="text-b-13-20-400 text-gray-700">Pursuing opportunities, earning zero. Growth beyond monetary measures.</span>
                                            </div>
                                            <button className="border rounded-md px-3 py-2.5 flex items-center justify-center w-max">
                                                <span className="text-b-12-12-500 text-gray-700">Add a Goal</span>
                                            </button>
                                        </div>
                                        <input type="range" defaultValue={15} />
                                    </div>
                                </div>
                            </>
                        }
                    />
                    {/* Payment History */}
                    <Card
                        title="Payment History"
                        dotStatus={true}
                        buttonStatus={true}
                        buttonTitle="View all payments"
                        content={
                            <>
                                <table className=" table-fixed w-full">
                                    <thead className="bg-gray-200 dark:bg-coal-200">
                                        <tr>
                                            <th className="text-left px-[30px] py-[13px] text-b-13-14-400 text-gray-700">Date</th>
                                            <th className="text-right text-b-13-14-400 text-gray-700">Type</th>
                                            <th className="text-b-13-14-400 text-gray-700">Amount</th>
                                            <th></th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr className="border-b">
                                            <td className=" text-gray-800 text-left px-[30px] py-[13px] ">24 Aug,2024</td>
                                            <td className=" text-gray-800 text-right">Subscription Fee</td>
                                            <td className=" text-gray-800 text-center">$24.00</td>
                                            <td className="flex item-center justify-end px-[30px] py-[13px]">
                                                <div className="p-[7px] rounded-md hover:bg-gray-200 cursor-pointer w-max flex items-center justify-center">
                                                    <FaEllipsisVertical className="size-[18px] text-gray-600" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className=" text-gray-800 text-left px-[30px] py-[13px] ">15 Sep, 2024</td>
                                            <td className=" text-gray-800 text-right">Product Purchase</td>
                                            <td className=" text-gray-800 text-center">$50.99</td>
                                            <td className="flex item-center justify-end px-[30px] py-[13px]">
                                                <div className="p-[7px] rounded-md hover:bg-gray-200 cursor-pointer w-max flex items-center justify-center">
                                                    <FaEllipsisVertical className="size-[18px] text-gray-600" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className=" text-gray-800 text-left px-[30px] py-[13px] ">05 Dec, 2024</td>
                                            <td className=" text-gray-800 text-right">Transaction Fee</td>
                                            <td className=" text-gray-800 text-center">$2.50</td>
                                            <td className="flex item-center justify-end px-[30px] py-[13px]">
                                                <div className="p-[7px] rounded-md hover:bg-gray-200 cursor-pointer w-max flex items-center justify-center">
                                                    <FaEllipsisVertical className="size-[18px] text-gray-600" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className=" text-gray-800 text-left px-[30px] py-[13px] ">30 May, 2025</td>
                                            <td className=" text-gray-800 text-right">Annual Maintenance</td>
                                            <td className=" text-gray-800 text-center">$40.20</td>
                                            <td className="flex item-center justify-end px-[30px] py-[13px]">
                                                <div className="p-[7px] rounded-md hover:bg-gray-200 cursor-pointer w-max flex items-center justify-center">
                                                    <FaEllipsisVertical className="size-[18px] text-gray-600" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        }
                    />
                    <Card
                        title="Connections"
                        dotStatus={true}
                        content={
                            <>
                                <div className="flex flex-col ">
                                    <table>

                                        <thead className="bg-gray-200 dark:bg-coal-200">
                                            <tr>
                                                <th className="text-left text-b-13-14-400 text-gray-700 py-[13px] pl-[30px]">Name</th>
                                                <th className="text-right text-b-13-14-400 text-gray-700 py-[13px] pr-10">Join Links</th>
                                                <th className="text-left text-b-13-14-400 text-gray-700 py-[13px]">Status</th>
                                                <th></th>
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
                                                <td className="text-right pr-10 text-b-13-14-400 text-gray-700">6</td>
                                                <td ><FaCheckCircle className="text-primary size-7" /></td>
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
                                                <td className="text-right pr-10 text-b-13-14-400 text-gray-700">none</td>
                                                <td ><FaCheckCircle className="text-primary size-7" /></td>
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
                                                <td className="text-right pr-10 text-b-13-14-400 text-gray-700">19</td>
                                                <td ><FaCheckCircle className="text-primary size-7" /></td>
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
                                                <td className="text-right pr-10 text-b-13-14-400 text-gray-700">none</td>
                                                <td ><FaCheckCircle className="text-primary size-7" /></td>
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
                                                <td className="text-right pr-10 text-b-13-14-400 text-gray-700">2</td>
                                                <td ><FaCheckCircle className="text-primary size-7" /></td>
                                                <td className="">
                                                    <button className="p-2 hover:bg-gray-200 w-max rounded-md">
                                                        <HiOutlineDotsVertical className="text-gray-600" />
                                                    </button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </>
                        }
                        buttonStatus={true}
                        buttonTitle="View 64 more"
                    />

                </div>
            </div>
        </div >
    )
}
export default SettingEnterprise