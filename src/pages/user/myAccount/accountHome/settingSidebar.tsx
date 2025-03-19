
import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from "../../../../components/card/card"
import ExampleUser from '../../../../assets/icon/example-user.svg'
import { useState } from "react"
import { IoIosClose } from "react-icons/io"
import Switch from "../../../../components/switch"

import Camera from '../../../../assets/icon/camera.svg'
import { FcGoogle } from "react-icons/fc"
import { FaApple, FaFacebook, FaLinkedin, FaTrashCan } from "react-icons/fa6"
import Microsoft from '../../../../assets/icon/microsoft-icon.svg'
const SettingSidebar = () => {

    const [selectedImage, setSelectedImage] = useState<string>(ExampleUser);
    const [avaibality, setAvaibality] = useState(true)

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(imageUrl);
        }
    };
    const location = window.location.pathname;
    const [active, setActive] = useState(true)
    const [primary, setPrimary] = useState(false)
    const [google, setGoogle] = useState(true)
    const [linkedin, setLinkedin] = useState(false)
    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
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
                <div className=" md:flex flex-col  hidden bg-green-500">Left Sidebar</div>

                {/* right area */}
                <div className=" flex flex-col w-full flex-1 gap-[30px]">
                    {/* Basic Setting */}
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
                                    <div className="bg-[#FCFCFC] rounded-md p-3 border w-full">
                                        <input type="text" className="outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Jason Tatum" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Company</span>
                                    <div className="bg-[#FCFCFC] rounded-md p-3 border w-full">
                                        <input type="text" className="outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="KeenThemes" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Phone Number</span>
                                    <div className="bg-[#FCFCFC] rounded-md p-3 border w-full">
                                        <input type="text" className="outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Phone number" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Visibility</span>
                                    <select name="" id="" className="bg-[#FCFCFC] rounded-md p-3 border w-full outline-none ">
                                        <option value="Public" selected>Public</option>
                                        <option value="Option-2">Option-2</option>
                                        <option value="Option-3">Option-3</option>

                                    </select>
                                </div>
                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Avaibality</span>
                                    <div className="flex flex-row items-center gap-2.5">
                                        <span>Available to hire</span>
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
                    {/* Email */}
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
                                            <div className="bg-[#FCFCFC] rounded-md p-3 border w-full">
                                                <input type="text" className="outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="KeenThemes" />
                                            </div>
                                            <div className="flex flex-row items-center gap-5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <span>Active</span>
                                                    <Switch
                                                        status={active}
                                                        setSwitch={() => setActive(!active)}
                                                        size="medium"
                                                    />
                                                </div>
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <span>Primary</span>
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

                    {/* Social sign in */}
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
                                                <FaApple className="size-[18px]" />
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

                    {/* Password */}
                    <Card
                        title="Password"
                        buttonStatus={false}
                        dotContentStatus={false}
                        dotStatus={false}
                        content={

                            <div className="flex flex-col px-[30px] pt-5">
                                
                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Current Password</span>
                                    <div className="bg-[#FCFCFC] rounded-md p-3 border w-full">
                                        <input type="text" className="outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Your current password" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">New Password</span>
                                    <div className="bg-[#FCFCFC] rounded-md p-3 border w-full">
                                        <input type="text" className="outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="New Password" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                    <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Confirm new password</span>
                                    <div className="bg-[#FCFCFC] rounded-md p-3 border w-full">
                                        <input type="text" className="outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Confirm new password" />
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
                </div>

            </div>
        </div >
    )
}
export default SettingSidebar