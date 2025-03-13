
import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from "../../../../components/publicProfile/card"
import ExampleUser from '../../../../assets/icon/example-user.svg'
import BadgeOne from '../../../../assets/icon/badge-1.svg'
import BadgeTwo from '../../../../assets/icon/badge-2.svg'
import BadgeThree from '../../../../assets/icon/badge-3.svg'
import BadgeFour from '../../../../assets/icon/badge-4.svg'
import Camera from '../../../../assets/icon/camera.svg'
import { useState } from "react"
import { IoIosClose, IoLogoTwitch } from "react-icons/io"
import Switch from "../../../../components/switch"
import { MdInfoOutline, MdOutlineEditNote } from "react-icons/md"
import { FcGoogle } from "react-icons/fc"
import { BsApple } from "react-icons/bs"
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { CiBasketball } from "react-icons/ci"
import { RiEqualizer2Line } from "react-icons/ri"

const UserProfile = () => {

    const [selectedImage, setSelectedImage] = useState<string>(ExampleUser);
    const [setting, setSetting] = useState(true)
    const [work, setWork] = useState(false)
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(imageUrl);
        }
    };
    const location = window.location.pathname;
    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>User Profile</h1>
                    <span className='text-b-14-14-400 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">

                    <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Public Profile
                    </a>
                    <Link to={location} className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                        Account Setting
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-[30px]">
                <div className="xl:col-span-2 flex flex-col gap-[30px]">
                    {/* {Personal Info} */}
                    <Card
                        title="Personal Info"
                        buttonStatus={false}
                        dotStatus={false}
                        content={

                            <div className="flex flex-col">
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Profile</span>
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
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Birthday</span>
                                        <span className="text-b-13-14-400 text-gray-800">28 May 1996</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>

                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Gender</span>
                                        <span className="text-b-13-14-400 text-gray-800">Male</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Address</span>
                                        <span className="text-b-13-14-400 text-gray-700">You have no an address yet</span>
                                    </div>
                                    <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 mr-1">Add</Link>
                                </div>
                            </div>
                        }
                    />
                    {/* Basic Setting */}
                    <Card
                        title="Basic Setting"
                        buttonStatus={false}
                        dotContentStatus={true}
                        dotContent={<>
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Public Profile</span>
                                <Switch status={setting} setSwitch={() => setSetting(!setting)} size={"small"} />
                            </div>
                        </>}
                        dotStatus={false}
                        content={

                            <div className="flex flex-col">

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
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">2FA</span>
                                        <span className="text-b-13-14-400 text-gray-700">To be set</span>
                                    </div>
                                    <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 mr-1">Setup</Link>
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
                                        <span className="text-b-13-14-400 text-gray-800">https://studio.co/W3gvQOI35dt</span>
                                    </div>
                                    <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 ">Re-create</Link>
                                </div>
                            </div>
                        }
                    />
                    {/* Work */}
                    <Card
                        title="Work"
                        buttonStatus={false}
                        dotContentStatus={true}
                        dotContent={<>
                            <div className="flex flex-row items-center gap-2.5">
                                <span className="text-b-13-14-500 text-gray-700">Aviable now</span>
                                <Switch status={work} setSwitch={() => setWork(!work)} size={"small"} />
                            </div>
                        </>}
                        dotStatus={false}
                        content={

                            <div className="flex flex-col">

                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Language</span>
                                        <span className="text-b-14-14-400 text-gray-800">English <span className="text-b-13-14-400 text-gray-600">- Fluent</span></span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>

                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Hourly Rate</span>
                                        <span className="text-b-13-14-400 text-gray-800">$28 / hour</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Avaibilaty</span>
                                        <span className="text-b-13-14-400 text-gray-700">32 hours a week</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Skills</span>
                                        <div className="flex flex-row items-center flex-wrap gap-[10px]">
                                            <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                                <span className='text-b-11-12-500 text-gray-700'>Web Design</span>
                                            </div>
                                            <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                                <span className='text-b-11-12-500 text-gray-700'>Code Review</span>
                                            </div>
                                            <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                                <span className='text-b-11-12-500 text-gray-700'>Figma</span>
                                            </div>

                                            <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                                <span className='text-b-11-12-500 text-gray-700'>Webflow</span>
                                            </div>
                                            <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                                <span className='text-b-11-12-500 text-gray-700'>AI</span>
                                            </div>
                                            <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                                <span className='text-b-11-12-500 text-gray-700'>noCode</span>
                                            </div>
                                            <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                                <span className='text-b-11-12-500 text-gray-700'>Management</span>
                                            </div>

                                        </div>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center max-w-[310px]">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">About</span>
                                        <p className="text-gray-800 text-b-13-20-400 ">We're open to partnerships, guest posts, and more. Join us to share your insights and grow your audience.</p>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>

                            </div>
                        }
                    />
                    {/* Badges */}
                    <Card
                        title="Badges"
                        buttonStatus={false}
                        dotContentStatus={true}
                        dotContent={<>
                            <MdInfoOutline className="size-[18px] text-gray-600 cursor-pointer hover:text-primary" />
                        </>}
                        dotStatus={false}
                        content={

                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="rounded-xl border px-[14px] py-2.5 group">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2.5 items-center">
                                            <img src={BadgeOne} alt="badge" />
                                            <span className="text-b-14-14-500 text-gray-900">Expert Contributor Badge</span>
                                        </div>
                                        <RiEqualizer2Line className="size-6 group-hover:text-primary text-animation text-gray-400" />

                                    </div>
                                </div>
                                <div className="rounded-xl border px-[14px] py-2.5 group">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2.5 items-center">
                                            <img src={BadgeTwo} alt="badge" />
                                            <span className="text-b-14-14-500 text-gray-900">Innovation Trailblazer</span>
                                        </div>
                                        <RiEqualizer2Line className="size-6 group-hover:text-primary text-animation text-gray-400" />

                                    </div>
                                </div>
                                <div className="rounded-xl border px-[14px] py-2.5 group">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2.5 items-center">
                                            <img src={BadgeThree} alt="badge" />
                                            <span className="text-b-14-14-500 text-gray-900">Impact Recognition</span>
                                        </div>
                                        <RiEqualizer2Line className="size-6 group-hover:text-primary text-animation text-gray-400" />

                                    </div>
                                </div>
                                <div className="rounded-xl border px-[14px] py-2.5 group">
                                    <div className="flex flex-row items-center justify-between">
                                        <div className="flex flex-row gap-2.5 items-center">
                                            <img src={BadgeFour} alt="badge" />
                                            <span className="text-b-14-14-500 text-gray-900">Performance Honor</span>
                                        </div>
                                        <RiEqualizer2Line className="size-6 group-hover:text-primary text-animation text-gray-400" />

                                    </div>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className="lg:col-span-2 flex flex-col gap-[30px]">
                    {/* right area */}
                </div>
            </div>
        </div >
    )
}
export default UserProfile