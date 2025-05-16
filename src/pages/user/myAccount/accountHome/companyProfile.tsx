
import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from "../../../../components/card/card"
import { useState } from "react"
import { IoLogoTwitch } from "react-icons/io"
import Switch from "../../../../components/switch"
import { MdOutlineEditNote } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs"
import { FaCopy, FaFacebook, FaLinkedin, FaRegCompass, FaUsers, FaXTwitter } from "react-icons/fa6"
import { CiBasketball } from "react-icons/ci"
import Hexlab from '../../../../assets/icon/hexlab.svg'
import HexlabIcon from '../../../../assets/icon/hexlabIcon.svg'
import { RiComputerFill } from "react-icons/ri"
import MembersTable from "../../../../components/myAccount/tables/membersTable"
import { FaInfoCircle } from "react-icons/fa"
import { GoGraph } from "react-icons/go"

const CompanyProfile = () => {

    const [info, setInfo] = useState(true)
    const [security, setSecurity] = useState(false)
    const [email, setEmail] = useState(true)
    const [vendor, setVendor] = useState(true)
    const [branding, setBranding] = useState(false)
    const location = window.location.pathname;
    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Company Profile</h1>
                    <span className='text-b-14-14-400 text-gray-700'>Showcase of Corporate Identity & Values</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-coal-300 text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Public Profile
                    </a>
                    <Link to={location} className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                        Billing
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">
                    {/* {General Info} */}
                    <Card
                        title="Personal Info"
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={<>
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Public Profile</span>
                                <Switch status={info} setSwitch={() => setInfo(!info)} size={"medium"} />
                            </div></>}
                        content={

                            <div className="flex flex-col">
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Company Name</span>
                                        <span className="text-b-13-14-400 text-gray-800">Hexlab</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Phone number</span>
                                        <span className="text-b-13-14-400 text-gray-800">+1 555-1234</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">VAT number</span>
                                        <div className="p-2 rounded-[4px] bg-danger-light border-danger border-opacity-10 border flex items-center justify-center">
                                            <span className="text-danger text-b-11-12-500">Missing Details</span>
                                        </div>
                                    </div>
                                    <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 mr-1">Add</Link>

                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Registration number</span>
                                        <span className="text-b-13-14-400 text-gray-800">IYS2023A56789</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>

                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Remote Company ID</span>
                                        <div className="flex flex-row items-center gap-1">
                                            <span className="text-b-13-14-400 text-gray-800">CID78901BXT2023</span>
                                            <button className="flex items-center justify-center p-2 rounded-md hover:bg-gray-200">
                                                <FaCopy className="text-gray-500 size-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                            </div>
                        }
                    />
                    {/* Account Settings */}
                    <Card
                        title="Account Settings"
                        buttonStatus={false}
                        dotStatus={false}
                        content={

                            <div className="flex flex-col">

                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Email</span>
                                        <Link to={location} className="text-b-13-14-400 text-gray-800 hover:text-primary text-animation">john.doe@hexlad.io</Link>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Password</span>
                                        <span className="text-b-13-14-400 text-gray-700">Password last changed 2 months ago</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Sign-in with</span>

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
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Team Account</span>
                                        <span className="text-b-13-14-400 text-gray-700">To be set</span>
                                    </div>
                                    <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 mr-1">Setup</Link>
                                </div>

                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Social Profiles</span>
                                        <div className="flex flex-row items-center gap-2.5">
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <FaLinkedin className="size-4 text-[#2489BE]" />
                                            </div>
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <IoLogoTwitch className="text-[#65459B]" />
                                            </div>
                                            <div className="flex items-center justify-center border p-[7px] rounded-full">
                                                <FaXTwitter className="dark:text-white" />
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
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[150px]">Referral Link</span>
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
                    {/* Branding */}
                    <Card
                        title="Branding"
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={<>
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Publish</span>
                                <Switch status={branding} setSwitch={() => setBranding(!branding)} size={"medium"} />
                            </div></>}
                        content={
                            <>
                                <div className="flex flex-col px-[30px]">
                                    <div className="flex flex-col md:flex-row gap-[30px] py-[30px] border-b">
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-500 text-gray-900">Company Logo</span>
                                            <span className="text-b-13-20-400 text-gray-700">Emblematic Corporate Identity Symbol</span>
                                        </div>
                                        <div className="flex flex-col md:flex-row items-start w-full gap-[30px] ">
                                            <img src={Hexlab} alt="hexlab" />
                                            <div className="border border-dotted rounded-xl flex items-center justify-center flex-col p-[30px] bg-mask bg-cover">
                                                <img src={HexlabIcon} alt="hexlabIcon" />
                                                <span className="text-b-12-12-500 text-gray-900">Click or Drag & Drop</span>
                                                <span className="text-b-11-12-400 text-gray-700">SVG,PNG, JPG (max. 800x400)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-[30px] py-[30px] border-b">
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-500 text-gray-900">Brand Color</span>
                                            <span className="text-b-13-20-400 text-gray-700">Signature Palette Branding Element</span>
                                        </div>
                                        <div className="flex flex-row items-start w-full gap-[30px] ">
                                            <div className="border bg-gray-100 rouynded-md p-[14px] flex flex-row items-center gap-[6px] w-full">
                                                <RiComputerFill className="text-success size-[18px]" />
                                                <input type="text" className=" outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="#BA35A0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-[30px] py-[30px] border-b">
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-500 text-gray-900">Branding</span>
                                            <span className="text-b-13-20-400 text-gray-700">Comprehensive Image Identity Design</span>
                                        </div>
                                        <div className="flex flex-col  w-full gap-5 ">
                                            <div className="flex flex-col gap-2.5">
                                                <div className="flex items-center flex-row gap-[6px]">
                                                    <input type="checkbox" name="security" id="security" className="size-[18px]" checked={security} onChange={() => setSecurity(!security)} />
                                                    <span className="text-b-13-14-500 text-gray-800">Security Questionaries</span>
                                                </div>
                                                <span className="text-b-12-12-500 text-gray-600">Detailed Risk Assessment & Compliance Verification</span>
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <div className="flex items-center flex-row gap-[6px]">
                                                    <input type="checkbox" name="security" id="security" className="size-[18px]" checked={email} onChange={() => setEmail(!email)} />
                                                    <span className="text-b-13-14-500 text-gray-800">Email</span>
                                                </div>
                                                <span className="text-b-12-12-500 text-gray-600">Electronic Message Communication</span>
                                            </div>
                                            <div className="flex flex-col gap-2.5">
                                                <div className="flex items-center flex-row gap-[6px]">
                                                    <input type="checkbox" name="security" id="security" className="size-[18px]" checked={vendor} onChange={() => setVendor(!vendor)} />
                                                    <span className="text-b-13-14-500 text-gray-800">Vendor Reports</span>
                                                </div>
                                                <span className="text-b-12-12-500 text-gray-600">Supplier Performance & Reliability Evaluationsn</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex ml-auto py-[30px]">
                                        <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </>
                        }
                    />
                    {/* Members Table */}
                    <MembersTable />
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

                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}
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
                                            <FaUsers className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">User Guidelines for a Safe and Respectful Workspace</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Understand the importance of safety and respect in our work environment through our user guidelines.</p>
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
                                            <FaRegCompass className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Comprehensive Guide to Navigating Our Digital Platform</Link>
                                        <p className="text-b-13-20-400 text-gray-800">A detailed walkthrough to help you understand and use our digital platform for maximum efficiency.</p>
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
                                            <GoGraph className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Stay Updated with Platform's Latest Features and Improvements</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Keep abreast of the newest enhancements and features on our platform to enhance your user experience.</p>
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
export default CompanyProfile