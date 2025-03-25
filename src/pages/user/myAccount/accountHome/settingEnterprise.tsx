import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Information from '../../../../assets/icon/information-icon.svg'
import { BsApple } from "react-icons/bs"
import { CiBasketball } from "react-icons/ci"
import { FaCalendarDay, FaCopy, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { IoIosClose, IoIosLogOut, IoLogoTwitch } from "react-icons/io"
import { MdOutlineEditNote } from "react-icons/md"
import Card from "../../../../components/card/card"
import Switch from "../../../../components/switch"
import { useState } from "react"
import ExampleUser from '../../../../assets/icon/example-user.svg'
import Camera from '../../../../assets/icon/camera.svg'
import Message from '../../../../assets/icon/text-message.svg'
import Authenticator from '../../../../assets/icon/authenticator.svg'
import { FaInfoCircle, FaRegTrashAlt } from "react-icons/fa"
import GoogleCalendar from '../../../../assets/icon/google-calendar.svg'
import Monday from '../../../../assets/icon/monday.svg'
import Chrome from '../../../../assets/icon/chrome.svg'
import Spain from '../../../../assets/icon/spain.svg'
import France from '../../../../assets/icon/france.svg'
import Premium from '../../../../assets/icon/premium-plan.svg'

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

                    <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Public Profile
                    </a>
                    <Link to={location} className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                        My profile
                    </Link>
                </div>
            </div>

            <div className="p-5 rounded-xl flex flex-rowe items-center justify-between border flex-wrap md:flex-nowrap bg-mask bg-left">
                <div className="flex flex-row items-center gap-4">
                    <img src={Information} alt="information" />
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
                                        <div className=" absolute rounded-full border-2 bg-white top-1 right-1 flex justify-center items-center  "> <IoIosClose className="text-gray-500 size-[14px]" /></div>

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
                                                <img src={Message} alt="" />
                                                <div className="flex flex-col gap-1">
                                                    <Link to={location} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">Text Message (SMS)</Link>
                                                    <span className="text-gray-700 text-b-13-14-500">Instant codes for secure account verification.</span>
                                                </div>
                                            </div>
                                            <Switch setSwitch={() => setTextMessage(!textMessage)} status={textMessage} size="medium" />
                                        </div>
                                        <div className="flex flex-row items-center justify-between rounded-xl border p-4">
                                            <div className="flex flex-row items-center gap-[14px]">
                                                <img src={Authenticator} alt="" />
                                                <div className="flex flex-col gap-1">
                                                    <Link to={location} className="text-b-14-14-500 text-gray-900 hover:text-primary text-animation">Authenticator App (TOTP)</Link>
                                                    <span className="text-gray-700 text-b-13-14-500">Elevate protection with an authenticator app for
                                                        two-factor authentication.</span>
                                                </div>
                                            </div>
                                            <Switch setSwitch={() => setAuthenticator(!authenticator)} status={authenticator} size="medium" />
                                        </div>
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
                                <button className="flex items-center justify-center flex-row gap-1 p-2.5 rounded-md border">
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
                                        <FaRegTrashAlt />
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
                                        <FaRegTrashAlt />
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
                                                <span className="text-h-26-26-600">$0</span>
                                                <span className="text-b-13-20-400 text-gray-700">Pursuing opportunities, earning zero. Growth beyond monetary measures.</span>
                                            </div>
                                            <button className="border rounded-md px-3 py-2.5 flex items-center justify-center w-max">
                                                <span className="text-b-12-12-500 text-gray-700">Add a Goal</span>
                                            </button>
                                        </div>
                                        <input type="range" value={15}/>
                                    </div>
                                </div>
                            </>
                        }
                    />

                </div>
            </div>
        </div >
    )
}
export default SettingEnterprise